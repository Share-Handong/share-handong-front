import 'semantic-ui-css/semantic.min.css';
import { Divider } from 'semantic-ui-react';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import DescriptionIcon from '@material-ui/icons/Description';
import axios from 'axios';
import { useRouter } from 'next/router';
import Background from '../../src/component/Common/post_bg';
import AuthService from '../../src/component/Common/AuthService';

export default function ShareForm() {
    const router = useRouter();
    const { id, type } = router.query;
    const [infoData, setInfoData] = useState({
        postId: id,
    });
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        writer: '',
        imgUrl: '/images/product_image.png',
        catego: 1,
        createDate: '',
    });

    const [userData, setUserData] = useState({
        // name: '',
        profileImg: '/images/temp_profile.png',
    });

    const { title, content, writer, imgUrl, catego, createDate, userName } = postData;
    const { postId } = infoData;
    const { profileImg } = userData;

    function loadPostData(currentId) {
        // axios.get(`http://127.0.0.1:8020/api/v1/share/item/${currentId}`).then((res) => {
        axios
            .get(`https://sharehandong-api-server.herokuapp.com/api/v1/share/item/${currentId}`)
            .then((res) => {
                setPostData({ ...res.data });
            });
    }

    // function loadUserData(currentId) {
    //     axios.get(`http://jsonplaceholder.typicode.com/users?id=${currentId}`).then((res) => {
    //         setUserData({
    //             name: res.data[0].username,
    //             profileImg: '/images/profile_image.png',
    //         });
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
        if (type === 'modify') {
            loadPostData(postId);
            // loadUserData(postId);
        }
    }, []);

    function handleChange(event) {
        const targetName = event.target.name; // 우선 e.target 에서 name 과 value 를 추출
        const targetValue = event.target.value;
        console.log(targetName);
        console.log(targetValue);
        const nextInputs = {
            ...postData, // 기존의 input 객체를 복사한 뒤
            [targetName]: targetValue, // name 키를 가진 값을 value 로 설정
        };
        setPostData(nextInputs);
    }

    const modifyPost = async (event) => {
        event.preventDefault();
        AuthService.setupAxiosInterceptors();
        axios
            // .post(
            .put(
                // `http://127.0.0.1:8020/api/v1/share/item/${postId}`,
                `https://sharehandong-api-server.herokuapp.com/api/v1/share/item/${postId}`,
                {
                    title,
                    content,
                    catego: Number(catego),
                    writer,
                    state: 1,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
                router.replace(`/share?id=${postId}`);
            });
        // .catch((error) => {
        //     console.log('Error!');
        // });
    };

    const createPost = async (event) => {
        event.preventDefault();
        AuthService.setupAxiosInterceptors();
        const userInfo = AuthService.getLoggedInUserInfo();
        axios
            .post(
                // `http://127.0.0.1:8020/api/v1/share/item?userName=${userInfo.name}`,
                `https://sharehandong-api-server.herokuapp.com/api/v1/share/item?userName=${userInfo.name}`,
                {
                    title,
                    content,
                    catego: Number(catego),
                    writer,
                    state: 1,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
                router.replace(`/main`);
            });
        // .catch((error) => {
        //     console.log('Error!');
        // });
    };

    return (
        <Background>
            <form
                action="/create_process"
                method="post"
                onSubmit={type === 'modify' ? modifyPost : createPost}
            >
                <div
                    className="section-top"
                    style={{
                        display: 'flex',
                        marginLeft: '20px',
                    }}
                >
                    <div
                        style={{
                            width: '200px',
                            padding: '50px',
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
                                height: '100px',
                                width: '100px',
                                // boxShadow: '1px 1px 2px grey',
                                // border: '1px solid DCDCDC',
                            }}
                        />
                    </div>
                    <div
                        className="wrapper"
                        style={{ width: '70%', paddingLeft: '40px', paddingTop: '10px' }}
                    >
                        <div
                            className="category-form"
                            style={{
                                background:
                                    "url('/images/selection_arrow.png') no-repeat 97% 50%/25px auto",
                                border: '1px solid #606060',
                                borderRadius: '10px',
                                width: '120px',
                                height: '35px',
                                marginBottom: '10px',
                            }}
                        >
                            <select
                                id="catego"
                                name="catego"
                                onChange={handleChange}
                                value={catego}
                                style={{
                                    width: '120px',
                                    height: '35px',
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '1.2rem',
                                    color: '#F85757',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    appearance: 'none',
                                    boxSizing: 'border-box',
                                    paddingLeft: '15px',
                                }}
                            >
                                <option selected value="1">
                                    나눔받기
                                </option>
                                <option value="2">나눔하기</option>
                            </select>
                        </div>
                        <p>
                            <input
                                id="title-form"
                                name="title"
                                type="text"
                                onChange={handleChange}
                                value={title}
                                placeholder="제목을 입력하세요~"
                                style={{
                                    backgroundColor: 'white',
                                    height: '40px',
                                    width: '90%',
                                    fontSize: '1.5rem',
                                    zIndex: 1,
                                }}
                            />
                        </p>
                        <div
                            className="wrapper"
                            style={{
                                paddingTop: '15px',
                                display: 'inline-flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            {type === 'modify' ? (
                                <img
                                    className="profile-img"
                                    style={{
                                        width: '25px',
                                        height: '25px',
                                        borderRadius: '50%',
                                        marginRight: '18px',
                                    }}
                                    src={profileImg}
                                    alt="logo"
                                />
                            ) : (
                                ''
                            )}

                            <span
                                className="profile-name"
                                style={{
                                    fontSize: '1.2rem',
                                    paddingRight: '36px',
                                }}
                            >
                                {userName}
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
                    <textarea
                        id="desc-form"
                        name="content"
                        type="text"
                        value={content}
                        onChange={handleChange}
                        style={{
                            margin: '0px 20px',
                            fontSize: '1.2rem',
                            color: 'black',
                            height: '200px',
                            width: '90%',
                            borderRadius: '10px',
                            border: '1px solid #1A1818',
                            padding: '10px',
                        }}
                        placeholder="내용을 입력하세요~"
                    />
                </div>
                <div
                    className="section-bottom"
                    style={{
                        // width: '1128px',
                        display: 'inline-flex',
                        flexFlow: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginTop: '10px',
                        marginLeft: '60%',
                    }}
                >
                    <Link
                        href={
                            type === 'modify'
                                ? {
                                      pathname: '/share',
                                      query: { id: postId },
                                  }
                                : {
                                      pathname: '/main',
                                  }
                        }
                        className="cancel-btn"
                    >
                        <div
                            style={{
                                backgroundColor: 'white',
                                border: 'none',
                                fontSize: '1.2rem',
                                color: '#7E7979',
                                textDecoration: 'underline',
                                paddingRight: '20px',
                                cursor: 'pointer',
                            }}
                        >
                            취소하기
                        </div>
                    </Link>
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
                        글 등록하기
                    </button>
                </div>
            </form>
        </Background>
    );
}
