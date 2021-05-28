import Head from "next/head";
import MyPageWrap from "../../src/component/MyPage/MyPageWrap";

export default function Main() {
  return (
    <div>
      <Head>
        <title>MyPage | shareHandong</title>
      </Head>
      <MyPageWrap />
    </div>
  );
}