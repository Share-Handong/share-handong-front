import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import { Divider } from 'semantic-ui-react';
import ReplyIcon from '@material-ui/icons/Reply';
import CreateIcon from '@material-ui/icons/Create';
import DescriptionIcon from '@material-ui/icons/Description';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Background from '../../src/component/Common/post_bg';
import AuthService from '../../src/component/Common/AuthService';
import CommentList from '../../src/component/SharePage/CommentList';
import CommentFormWrap from '../../src/component/SharePage/CommentFormWrap';

function Share() {
    const checkLogin = AuthService.isUserLoggedIn === true; // 사용자- 포스팅 주인 id 비교 추가 예정
    const router = useRouter();
    console.log(router);
    // const { id } = router.query;
    const [postId, setPostId] = useState(router.asPath.split('=')[1] * 1);
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        writer: '',
        imgUrl: '/images/share_item.png',
        catego: null,
        createdAt: '',
        userName: '',
    });
    // const [postData, setPostData] = useState([]);

    const [userData, setUserData] = useState({
        // name: '',
        profileImg: '/images/temp_profile.png',
    });
    const { title, content, imgUrl, catego, createDate, userName } = postData;
    // const { title, content, imgUrl, catego, createDate, userName } = result;

    const { profileImg } = userData;

    function loadPostData(currentId) {
        axios.get(`http://127.0.0.1:8020/api/v1/share/item/${currentId}`).then((res) => {
            const createdArray = res.data.createdAt.split('T');
            const date = createdArray[0].split('-');
            const time = createdArray[1].split(':');
            res.data.createDate = `${date[1]}월 ${date[2]}일 ${time[0]}:${time[1]}`;

            setPostData({ ...res.data });
            console.log(res.data);
        });
    }

    function deletePostData(event, currentId) {
        event.preventDefault();
        axios
            .delete(`http://127.0.0.1:8020/api/v1/share/item/${currentId}`)
            .then(function (response) {
                console.log(response);
                router.replace('/main');
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    // function loadUserData(currentId) {
    //     axios.get(`http://jsonplaceholder.typicode.com/users?id=${currentId}`).then((res) => {
    //         setUserData({
    //             profileImg: '/images/profile_image.png',
    //         });
    //         console.log(res.data[0]);
    //     });
    // }

    // function getDate() {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = today.getMonth() + 1;
    //     const date = today.getDate();
    //     const currentTime = `${year}.${month}.${date}`;
    //     console.log(currentTime);
    //     return currentTime;
    // }
    function loadPostId(id) {
        setPostId(id);
    }

    useEffect(() => {
        // const currentTime = getDate();
        // setPostData({ createDate: currentTime });
        // postId = router.query.id;
        console.log(typeof router.asPath.split('=')[1]);
        // loadPostId(router.query.id)
        setPostId(router.asPath.split('=')[1] * 1);
        console.log(postId);
        loadPostData(router.asPath.split('=')[1] * 1);
        // loadUserData(postId);
        console.log(AuthService.getLoggedInUserId);
    }, [router]);

    return (
        <Background>
            <div
                className="section-top"
                style={{
                    // display: 'inline-flex',
                    display: 'flex',
                    marginLeft: '20px',
                }}
            >
                <div
                    style={{
                        width: '200px',
                        padding: '60px 35px',
                        boxShadow: '1px 1px 2px grey',
                        border: '1px solid DCDCDC',
                    }}
                    className="wrapper"
                >
                    <img
                        className="img-form"
                        src="/images/share_item.png"
                        alt="logo"
                        style={{
                            backgroundColor: 'white',
                            height: '90px',
                            width: '130px',
                            // boxShadow: '1px 1px 2px grey',
                            // border: '1px solid DCDCDC',
                        }}
                    />
                </div>
                <div
                    style={{ width: '70%', paddingLeft: '40px', paddingTop: '15px' }}
                    className="wrapper"
                >
                    <div
                        className="category"
                        style={{
                            width: '80px',
                            height: '30px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#fff',
                            borderRadius: '0.5rem',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            backgroundColor: '#F85757',
                            marginBottom: '10px',
                        }}
                    >
                        {catego === 1 ? '나눔받기' : '나눔하기'}
                    </div>
                    <div className="title " style={{ fontSize: '2rem' }}>
                        <p>{title}</p>
                    </div>
                    <div
                        className="wrapper"
                        style={{
                            paddingTop: '15px',
                            display: 'inline-flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            className="profile-img"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                marginRight: '18px',
                            }}
                            src={profileImg}
                            alt="logo"
                        />
                        <div>
                            <div
                                className="profile-name"
                                style={{
                                    fontSize: '1rem',
                                    paddingRight: '20px',
                                }}
                            >
                                {userName}
                            </div>
                            <div
                                className="post-date"
                                style={{
                                    fontSize: '0.85rem',
                                    color: '#727272',
                                    marginTop: '2px',
                                }}
                            >
                                {createDate}
                            </div>
                        </div>
                    </div>
                    {!checkLogin ? (
                        <div className="wrapper" style={{ marginTop: '20px' }}>
                            <button
                                onClick={(e) => deletePostData(e, postId)}
                                className="delete-btn"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '15px',
                                    height: '40px',
                                    lineHeight: '40px',
                                    width: '200px',
                                    fontSize: '1.2rem',
                                    color: '#7E7979',
                                    borderColor: '#585858',
                                    borderWidth: '1px',
                                    boxShadow: '2px 2px 2px #585858',
                                    marginRight: '30px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <Link href="/main">
                                    <span style={{ color: 'black !important' }}>삭제하기</span>
                                </Link>
                            </button>
                            <Link
                                href={{
                                    pathname: '/share-form',
                                    query: { id: postId, type: 'modify' },
                                }}
                            >
                                <button
                                    className="submit-btn"
                                    type="submit"
                                    style={{
                                        backgroundColor: '#F85757',
                                        borderRadius: '15px',
                                        height: '40px',
                                        lineHeight: '40px',
                                        width: '200px',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        border: 'none',
                                        boxShadow: '2px 2px 2px #585858;',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    수정하기
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="wrapper" style={{ marginTop: '20px' }}>
                            <button
                                className="delete-btn"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '15px',
                                    height: '40px',
                                    lineHeight: '40px',
                                    width: '200px',
                                    fontSize: '1.2rem',
                                    color: '#7E7979',
                                    borderColor: '#585858',
                                    borderWidth: '1px',
                                    boxShadow: '2px 2px 2px #585858',
                                    marginRight: '30px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                찜하기
                            </button>
                            {/* <Link href="/share-form"> */}
                            <button
                                className="submit-btn"
                                type="submit"
                                style={{
                                    backgroundColor: '#F85757',
                                    borderRadius: '15px',
                                    height: '40px',
                                    lineHeight: '40px',
                                    width: '200px',
                                    fontSize: '1.2rem',
                                    color: 'white',
                                    border: 'none',
                                    boxShadow: '2px 2px 2px #585858;',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                연락하기
                            </button>
                            {/* </Link> */}
                        </div>
                    )}
                </div>
            </div>
            <Divider />
            <div className="section-main">
                <div className="wrapper" style={{ margin: '10px 20px' }}>
                    <DescriptionIcon
                        style={{ fontSize: '1.5rem', color: '#1A1818', paddingTop: '3px' }}
                    />
                    <span
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '400',
                            paddingLeft: '8px',
                            color: '#1A1818',
                        }}
                    >
                        정보
                    </span>
                </div>
                <div
                    className="desc"
                    style={{
                        margin: '0px 20px',
                        fontSize: '1.2rem',
                        color: 'black',
                        height: '100px',
                        borderRadius: '10px',
                        border: '1px solid #1A1818',
                        padding: '10px',
                        // paddingBottom: '100px',
                    }}
                >
                    {content}
                </div>
            </div>
            <Divider />
            <div
                className="section-bottom"
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                }}
            >
                <div
                    className="comment-num"
                    style={{
                        paddingLeft: '8px',
                        margin: '10px 20px',
                        fontSize: '1.5rem',
                        fontWeight: '400',
                    }}
                >
                    <span style={{ color: '#1A1818', paddingRight: '8px' }}>댓글</span>
                    {/* <span style={{ color: '#FF4B4B' }}>1</span> */}
                </div>
                <CommentFormWrap itemId={postId} />
                <CommentList itemId={postId} />
            </div>
        </Background>
    );
}
// Share.getInitialProps = (query) => {
//     // const router = useRouter();
//     // const { id, type } = router.query;
//     console.log('getInitialProps');

//     // const res = await axios.get(`http://127.0.0.1:8020/api/v1/share/item/${query.id}`);
//     console.log(query);
//     // const json = await res.data.json();

//     // await axios.get(`http://127.0.0.1:8020/api/v1/share/item/${query.id}`).then((res) => {
//     //     return res.data;
//     // }
//     return 1;
// };

export default Share;
