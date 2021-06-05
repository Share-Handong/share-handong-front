import React, { useEffect, useState } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import { Divider } from 'semantic-ui-react';

export default function CommentBox(props) {
    const [commentData, setCommentData] = useState({
        userName: '',
        cDate: '',
        content: '',
    });

    const { userName, cDate, content } = commentData;

    function loadCommentData(data) {
        const createdArray = data.c_date.split('T');
        const date = createdArray[0].split('-');
        const time = createdArray[1].split(':');
        const cDateText = `${date[1]}월 ${date[2]}일 ${time[0]}:${time[1]}`;
        const tempComment = { cDate: cDateText, ...data };
        setCommentData(tempComment);
        // console.log();
    }
    useEffect(() => {
        loadCommentData(props.data);
        console.log(props.data);
    }, []);

    return (
        <div className="comment-box" style={{ marginLeft: '30px', marginRight: '30px' }}>
            <div
                className="wrapper"
                style={{
                    // display: 'inline-flex',
                    // flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                    // width: '1129px',
                }}
            >
                <div>
                    <img
                        className="profile-img"
                        style={{
                            borderRadius: '50%',
                            marginRight: '10px',
                            width: '15px',
                            height: '15px',
                            marginTop: '5px',
                        }}
                        src="/images/temp_profile.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <span
                        className="profile-name"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            paddingRight: '20px',
                        }}
                    >
                        {userName}
                    </span>

                    {/* <button
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
                </button> */}
                </div>
            </div>
            <span
                className="post-date"
                style={{
                    fontSize: '0.85rem',
                    color: '#727272',
                    marginLeft: '25px',
                }}
            >
                {cDate}
            </span>
            <p
                style={{
                    fontSize: '1rem',
                    marginBottom: '10px',
                    marginTop: '5px',
                    marginLeft: '25px',
                }}
            >
                {content}
            </p>
            <Divider />
        </div>
    );
}
