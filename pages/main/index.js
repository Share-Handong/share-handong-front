import React, { useState } from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Link from "next/link";
import ShareCard from "./ShareCard";

const sharePosts = [
  {
    idx: 0,
    writer: "김민지학부생",
    profileImage: "/images/profile_image.png",
    thumbnail: "/images/product_image.png",
    catego: "나눔하기",
    title: "오토바이 1000cc 무료 나눔해요 :)",
    modifiedDate: "5분 전",
  },
  {
    idx: 1,
    writer: "김민지학부생",
    profileImage: "/images/profile_image.png",
    thumbnail: "/images/product_image.png",
    catego: "나눔하기",
    title: "오토바이 1000cc 무료 나눔해요 :)",
    modifiedDate: "5분 전",
  },
  {
    idx: 2,
    writer: "김민지학부생",
    profileImage: "/images/profile_image.png",
    thumbnail: "/images/product_image.png",
    catego: "나눔하기",
    title: "오토바이 1000cc 무료 나눔해요 :)",
    modifiedDate: "5분 전",
  },
];

const fabTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#F85757",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Main() {
  const classes = useStyles();
  // const [sharePosts, setSharePosts] = useState([]);

  // const getShareList = () => {
  //     try {
  //         axios.get('http://127.0.0.1:8020/api/v1/share');
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  // getShareList.then((res) => {
  //     setSharePosts(res.data);
  // });

  return (
    <div>
      <Head>
        <title>Home | shareHandong</title>
      </Head>
      <h1>메인</h1>
      <Grid container justify="center" spacing={3}>
        {sharePosts.map((e) => (
          <Grid key={e.idx} item>
            <ShareCard cardInfo={e} />
          </Grid>
        ))}
      </Grid>

      <ThemeProvider theme={fabTheme}>
        <Link href="/share/share_form">
          <Fab color="secondary" aria-label="add" className={classes.fab}>
            <EditIcon />
          </Fab>
        </Link>
      </ThemeProvider>
    </div>
  );
}
