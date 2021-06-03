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

export default function Share() {
    const checkLogin = AuthService.isUserLoggedIn === true; // 사용자- 포스팅 주인 id 비교 추가 예정
    const router = useRouter();
    const { id } = router.query;
    const postId = id;
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        writer: '',
        imgUrl: '/images/product_image.png',
        catego: null,
        createdAt: '',
    });
    // const [postData, setPostData] = useState([]);

    const [userData, setUserData] = useState({
        // name: '',
        profileImg: '/images/temp_profile.png',
    });
    const { title, content, writer, imgUrl, catego, createDate } = postData;

    const { profileImg } = userData;

    function loadPostData(currentId) {
        axios.get(`http://127.0.0.1:8020/api/v1/share/item/${currentId}`).then((res) => {
            setPostData({ ...res.data });
            console.log(postData);
        });
    }

    function deletePostData(event, currentId) {
        event.preventDefault();
        axios
            .delete(`http://127.0.0.1:8020/api/v1/share/item/${currentId}`)
            .then(function (response) {
                console.log(response);
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

    useEffect(() => {
        // const currentTime = getDate();
        // setPostData({ createDate: currentTime });
        loadPostData(postId);
        // loadUserData(postId);
        console.log(AuthService.getLoggedInUserId);
    }, []);

    return (
        <Background>
            <div
                className="section-top"
                style={{
                    display: 'inline-flex',
                }}
            >
                <div className="wrapper">
                    <img
                        className="img-form"
                        src={imgUrl}
                        alt="logo"
                        style={{
                            backgroundColor: 'white',
                            height: '416px',
                            width: '404px',
                            boxShadow: '1px 1px 2px grey',
                            border: '1px solid DCDCDC',
                        }}
                    />
                </div>
                <div className="wrapper" style={{ paddingLeft: '80px' }}>
                    <div
                        className="category"
                        style={{
                            fontSize: '23px',
                            fontWeight: 'bold',
                            color: '#F85757',
                            marginBottom: '20px',
                        }}
                    >
                        {catego === 1 ? '나눔받기' : '나눔하기'}
                    </div>
                    <div className="title " style={{ fontSize: '45px' }}>
                        <p>{title}</p>
                    </div>
                    <div
                        className="wrapper"
                        style={{
                            paddingTop: '40px',
                            display: 'inline-flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            className="profile-img"
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                marginRight: '18px',
                            }}
                            src={profileImg}
                            alt="logo"
                        />
                        <span
                            className="profile-name"
                            style={{
                                fontSize: '25px',
                                paddingRight: '36px',
                            }}
                        >
                            {writer}
                        </span>
                        <span
                            className="post-date"
                            style={{
                                fontSize: '25px',
                                color: '#727272',
                            }}
                        >
                            {createDate}
                        </span>
                    </div>
                    {!checkLogin ? (
                        <div className="wrapper" style={{ marginTop: '54px' }}>
                            <button
                                onClick={(e) => deletePostData(e, postId)}
                                className="delete-btn"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '25px',
                                    height: '63px',
                                    width: '273px',
                                    fontSize: '26px',
                                    color: '#7E7979',
                                    borderColor: '#585858',
                                    borderWidth: '1px',
                                    boxShadow: '2px 2px 2px #585858',
                                    marginRight: '36px',
                                    textAlign: 'center',
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
                                        borderRadius: '25px',
                                        height: '63px',
                                        width: '273px',
                                        fontSize: '26px',
                                        color: 'white',
                                        border: 'none',
                                        boxShadow: '2px 2px 2px #585858;',
                                        textAlign: 'center',
                                    }}
                                >
                                    수정하기
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="wrapper" style={{ marginTop: '54px' }}>
                            <button
                                className="delete-btn"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '25px',
                                    height: '63px',
                                    width: '273px',
                                    fontSize: '26px',
                                    color: '#7E7979',
                                    borderColor: '#585858',
                                    borderWidth: '1px',
                                    boxShadow: '2px 2px 2px #585858',
                                    marginRight: '36px',
                                    textAlign: 'center',
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
                                    borderRadius: '25px',
                                    height: '63px',
                                    width: '273px',
                                    fontSize: '26px',
                                    color: 'white',
                                    border: 'none',
                                    boxShadow: '2px 2px 2px #585858;',
                                    textAlign: 'center',
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
                <div className="wrapper" style={{ marginTop: '60px', paddingBottom: '34px' }}>
                    <DescriptionIcon style={{ fontSize: 35 }} />
                    <span
                        style={{
                            fontSize: '35px',
                            fontWeight: 'bold',
                            paddingLeft: '8px',
                            color: '#1A1818',
                        }}
                    >
                        정보
                    </span>
                </div>
                <div
                    className="desc"
                    style={{ fontSize: '30px', color: '#1A1818', paddingBottom: '100px' }}
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
                    style={{ marginTop: '60px', marginBottom: '24px', fontSize: '30px' }}
                >
                    <span style={{ color: '#1A1818', paddingRight: '8px' }}>댓글</span>
                    <span style={{ color: '#FF4B4B' }}>1</span>
                </div>
                <CommentFormWrap itemId={postId} />
                <CommentList itemId={postId} />
                <Divider />
            </div>
        </Background>
    );
}
