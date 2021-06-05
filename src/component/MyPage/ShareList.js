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
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Box from '@material-ui/core/Box';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    title: {
        paddingLeft: 40,
    },
    gridListTile: {
        maxWidth: 300,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        paddingLeft: 40,
        paddingRight: 40,
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

export default function ShareList({ userInfo }) {
    // const classes = useStyles();
    // const [mySharePosts, setMySharePosts] = useState([]);

    // function getShareList() {
    //     try {
    //         axios.get(`http://127.0.0.1:8020/api/v1/share/item/${userInfo.name}}`).then((res) => {
    //             setMySharePosts(res.data);
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getShareList();
    // }, []);

    return (
        // <div className={classes.root}>
        //     <Box height={50} />
        //     <Grid container justify="center" className={classes.title}>
        //         <LoyaltyIcon fontSize="large" />
        //         <Box width={10} />
        //         <Typography gutterBottom variant="h4" component="h2">
        //             찜 목록
        //         </Typography>
        //     </Grid>
        //     <Box height={50} />
        //     <GridList
        //         className={classes.gridList}
        //         justify="flex-start"
        //         spacing={20}
        //         cellHeight="auto"
        //     >
        //         {mySharePosts.map((tile) => (
        //             <GridListTile className={classes.gridListTile} key={tile}>
        //                 <Card>
        //                     <CardActionArea>
        //                         <CardContent>
        //                             <Typography gutterBottom variant="h5" component="h2">
        //                                 {tile.title}
        //                             </Typography>
        //                             <Typography gutterBottom variant="body1" component="h2">
        //                                 {dateConverter(tile.created_date)}
        //                             </Typography>
        //                             <Typography
        //                                 variant="body2"
        //                                 color="textSecondary"
        //                                 component="p"
        //                                 className={classes.cardCotent}
        //                             >
        //                                 {tile.content}
        //                             </Typography>
        //                         </CardContent>
        //                     </CardActionArea>
        //                     <CardActions>
        //                         <ThemeProvider theme={buttonTheme}>
        //                             <Button size="big" color="secondary">
        //                                 자세히 보기
        //                             </Button>
        //                         </ThemeProvider>
        //                     </CardActions>
        //                 </Card>
        //             </GridListTile>
        //         ))}
        //     </GridList>
        // </div>
        <></>
    );
}
