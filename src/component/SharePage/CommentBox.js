import React, { useEffect, useState } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';

export default function CommentBox() {
    return (
        <div className="comment-box">
            <p style={{ fontSize: '30px' }}>제꺼도 같이 해주실 분 ^^..</p>
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
                    {/* {writer} */}
                </span>
                <span
                    className="post-date"
                    style={{
                        fontSize: '25px',
                        color: '#727272',
                    }}
                >
                    2021.4.21
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
