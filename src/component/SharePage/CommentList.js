import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentBox from './CommentBox';

export default function CommentList(props) {
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState('');

    function loadPostId(itemId) {
        setPostId(itemId);
    }

    function loadCommentData(currentId) {
        axios.get(`http://127.0.0.1:8020/api/v1/share/item/${currentId}`).then((res) => {
            setComments({ ...res.data });
            console.log(comments);
        });
    }

    useEffect(() => {
        loadPostId(props.itemId);
        loadCommentData(postId);
    }, []);

    return comments.map((comment) => <CommentBox data={comment} />);
}
