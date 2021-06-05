import { Button } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.push('/main');
    });

    return <div />;
}
