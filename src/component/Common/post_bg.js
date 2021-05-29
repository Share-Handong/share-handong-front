import React from 'react';

function PostBg({ children }) {
    return (
        <article
            style={{
                margin: '0px',
                paddingTop: '50px',
                paddingLeft: '60px',
                paddingRight: '60px',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    height: '1525px',
                    margin: '0px',
                    paddingTop: '85px',
                    paddingLeft: '65px',
                    paddingRight: '65px',
                    zIndex: 1,
                }}
            >
                {' '}
                {children}
            </div>
        </article>
    );
}
export default PostBg;
