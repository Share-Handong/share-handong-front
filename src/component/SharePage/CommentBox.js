import React, { useEffect, useState } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';

export default function CommentBox(props) {
    const [commentData, setCommentData] = useState({
        writer: '',
        c_date: '',
        content: '',
    });

    const { writer, cDate, content } = commentData;

    function loadCommentData(data) {
        setCommentData(data);
    }
    useEffect(() => {
        loadCommentData(props.data);
    }, []);

    return (
        <div className="comment-box">
            <p style={{ fontSize: '30px' }}>{content}</p>
            <div
                className="wrapper"
                style={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '1129px',
                }}
            >
                <img
                    className="profile-img"
                    style={{ borderRadius: '50%', marginRight: '18px' }}
                    src="/images/profile_image.png"
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
                    {cDate}
                </span>
                <button
                    className="reply-btn"
                    type="submit"
                    style={{
                        backgroundColor: 'white',
                        border: 'none',
                        fontSize: '25px',
                        color: '#1A1818',
                        marginLeft: '56px',
                    }}
                >
                    <ReplyIcon /> <span>댓글달기</span>
                </button>
            </div>
        </div>
    );
}
