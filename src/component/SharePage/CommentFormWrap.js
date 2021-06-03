import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios';

export default function CommentFormWrap(props) {
    const [commentData, setCommentData] = useState({
        content: '',
    });
    const [postId, setPostId] = useState('');
    const content = commentData;

    function loadPostId(itemId) {
        setPostId(itemId);
    }
    useEffect(() => {
        loadPostId(props.itemId);
    }, []);

    const createComment = async (event, itemId) => {
        console.log(itemId);
        event.preventDefault();
        axios
            .post(
                `http://127.0.0.1:8020/api/v1/comment/item/${itemId}`,
                {
                    content,
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
            });
    };

    return (
        <div
            className="comment-form-box"
            style={{
                height: '70px',
                width: '1129px',
                border: '1px  solid #7A7A7A',
                backgroundColor: 'white',
                borderWidth: '1px',
                marginBottom: '60px',
                paddingLeft: '8px',
            }}
        >
            <form
                action="/create_process"
                method="post"
                onSubmit={(event) => createComment(event, postId)}
            >
                <input
                    id="comment-form"
                    name="comment"
                    type="text"
                    placeholder="댓글을 입력하세요"
                    style={{
                        fontSize: '30px',
                        backgroundColor: 'transparent',
                        border: 'transparent',
                        width: '952px',
                        height: '70px',
                        borderRight: '0.8px solid #767676',
                    }}
                />

                <button
                    className="comment-btn"
                    type="submit"
                    style={{
                        backgroundColor: 'white',
                        height: '67px',
                        width: '166px',
                        fontSize: '25px',
                        color: '#1A1818',
                        border: 'transparent',
                        justifySelf: 'end',
                        paddingRight: '36px',
                        textAlign: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <span className="icon" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                        <CreateIcon />
                    </span>
                    등록
                </button>
            </form>
        </div>
    );
}
