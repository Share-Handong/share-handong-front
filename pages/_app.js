import "../styles/common.css";
import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import Top from "../src/component/Common/Top";
import Footer from "../src/component/Common/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="share-h-back">
      <Top />
      <div className="share-h-main">
        <Component {...pageProps} />
      </div>
      <Divider />
      <Footer />
    </div>
  );
}

export default MyApp;
