import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentBox from './CommentBox';

export default function CommentList(props) {
    const [comments, setComments] = useState([]);
    // const [postId, setPostId] = useState('');

    // function loadPostId(itemId) {
    //     setPostId(itemId);
    // }

    function loadCommentData(currentId) {
        console.log(currentId);
        axios.get(`http://127.0.0.1:8020/api/v1/comment/item/${currentId}`).then((res) => {
            // map이 실행 안돼서 변경!
            // setComments({res.data});
            setComments(res.data);
            // comments = res.data;
            console.log(res.data);
        });
    }

    useEffect(() => {
        loadCommentData(props.itemId);
    }, []);

    return comments.map((comment) => <CommentBox data={comment} />);
}
