import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import AuthService from '../Common/AuthService';

export default function CommentFormWrap(props) {
    const router = useRouter();
    // const [commentData, setCommentData] = useState('');
    const [postId, setPostId] = useState('');
    // const comment = commentData;
    let comment = null;

    function loadPostId(itemId) {
        setPostId(itemId);
    }
    useEffect(() => {
        loadPostId(props.itemId);
    }, []);

    const createComment = async (event, itemId) => {
        event.preventDefault();
        const userInfo = AuthService.getLoggedInUserInfo();

        axios
            .post(
                // `http://127.0.0.1:8020/api/v1/comment/item/${itemId}?userName=${userInfo.name}`,
                `https://sharehandong-api-server.herokuapp.com/api/v1/comment/item/${itemId}?userName=${userInfo.name}`,
                {
                    comment: event.target.comment.value,
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
                // <Link
                //     href={{
                //         pathname: '/share',
                //         query: { id: itemId },
                //     }}
                // />;
                // router.reload(window.location.pathname);
                router.reload(`/share?id=${itemId}`);
                comment = null;
            });
    };

    return (
        <div
            className="comment-form-box"
            style={{
                height: '30px',
                marginLeft: '20px',
                width: '80%',
                // border: '1px  solid #7A7A7A',
                backgroundColor: 'white',
                borderWidth: '1px',
                marginBottom: '20px',
                paddingLeft: '8px',
            }}
        >
            <form
                action="/create_process"
                method="post"
                onSubmit={(event) => createComment(event, postId)}
            >
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <input
                        id="comment-form"
                        name="comment"
                        type="text"
                        value={comment}
                        placeholder="댓글을 입력하세요"
                        style={{
                            fontSize: '1.2rem',
                            backgroundColor: 'transparent',
                            // border: 'transparent',
                            border: '1px solid #808080',
                            borderRadius: '5px',
                            width: '80%',
                            height: '30px',
                            // borderRight: '0.8px solid #767676',
                        }}
                    />

                    <button
                        className="comment-btn"
                        type="submit"
                        style={{
                            backgroundColor: '#ddd',
                            height: '30px',
                            width: '80px',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#1A1818',
                            border: 'transparent',
                            justifySelf: 'end',
                            // paddingRight: '36px',
                            textAlign: 'center',
                            overflow: 'hidden',
                            marginLeft: '15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {/* 높이가 가운데로 안와서 등록 아이콘 뺐어요ㅠ  */}
                        {/* <span className="icon" style={{ marginRight: '8px' }}>
                            <CreateIcon style={{ marginTop: '4px' }} />
                        </span> */}
                        등록
                    </button>
                </div>
            </form>
        </div>
    );
}
