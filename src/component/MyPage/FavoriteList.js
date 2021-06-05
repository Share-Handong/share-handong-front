import React, { useEffect, useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Link from 'next/link';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
    },
    title: {
        paddingLeft: 40,
    },
    gridListTile: {
        maxWidth: 300,
        // border: '1px solid #eee',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        paddingLeft: 40,
        paddingRight: 40,
        width: '90%',
    },
    media: {
        height: 140,
    },
});

// const tileData = [
//     {
//         title: '제목 1',
//         category: '나눔하기',
//         content:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         writer: '김민지',
//         created_date: '2021-02-30T12:34:56',
//     },
//     {
//         title: '제목 2',
//         category: '나눔하기',
//         content:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         writer: '김민지',
//         created_date: '2021-02-30T12:34:56',
//     },
//     {
//         title: '제목 3',
//         category: '나눔하기',
//         content:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         writer: '김민지',
//         created_date: '2021-02-30T12:34:56',
//     },
//     {
//         title: '제목 4',
//         category: '나눔하기',
//         content:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         writer: '김민지',
//         created_date: '2021-02-30T12:34:56',
//     },
// ];

function dateConverter(dates) {
    const createdDates = dates.split('T');
    const date = createdDates[0].split('-');
    const time = createdDates[1].split(':');

    return `${date[0]}/${date[1]}/${date[2]} ${time[0]}:${time[1]}`;
}

const buttonTheme = createMuiTheme({
    palette: {
        secondary: {
            main: '#F85757',
        },
    },
});

export default function FavoriteList({ userInfo }) {
    const classes = useStyles();
    const [favoritePosts, setFavoritePosts] = useState([]);

    function getFavoriteList() {
        console.log(userInfo.name);

        try {
            axios
                // .get(`http://127.0.0.1:8020/api/v1/share/myitem?userName=${userInfo.name}`)
                .get(
                    `https://sharehandong-api-server.herokuapp.com/api/v1/share/myitem?userName=${userInfo.name}`,
                )
                .then((res) => {
                    setFavoritePosts(res.data);
                });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getFavoriteList();
    }, []);

    return (
        <div className={classes.root}>
            <Box height={30} />
            <Grid container justify="left" className={classes.title}>
                <ThumbUpIcon style={{ marginTop: '5px', fontSize: '1.3rem' }} />
                <Box width={5} />
                <Typography gutterBottom variant="h6" component="h2">
                    My Share
                </Typography>
            </Grid>
            <Box height={30} />
            <GridList
                className={classes.gridList}
                justify="flex-start"
                spacing={40}
                cellHeight="200"
                style={{ marginLeft: '30px' }}
            >
                {favoritePosts.map((tile) => (
                    <GridListTile className={classes.gridListTile} key={tile}>
                        <Card>
                            <CardActionArea style={{ height: '150px' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {tile.title}
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="h2">
                                        {dateConverter(tile.createdAt)}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        className={classes.cardCotent}
                                    >
                                        {tile.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <ThemeProvider theme={buttonTheme}>
                                    <Button size="big" color="secondary">
                                        <Link
                                            href={{
                                                pathname: '/share',
                                                query: { id: tile.idx },
                                            }}
                                        >
                                            <span>자세히 보기</span>
                                        </Link>
                                    </Button>
                                </ThemeProvider>
                            </CardActions>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
