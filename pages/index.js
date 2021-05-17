import { Button } from "@material-ui/core";
import Link from "next/link";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <h1>Share-handong-front</h1>
      <Link href="/share">
        <Button />
      </Link>
    </div>
  );
}
