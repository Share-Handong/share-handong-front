import React from 'react';

function PostBg({ children }) {
    return (
        <article
            style={{
                // margin: '0px',
                // paddingTop: '50px',
                // paddingLeft: '60px',
                // paddingRight: '60px',
                width: '60%',
                margin: '50px auto',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    minHeight: '100%',
                    // margin: '0px',
                    // paddingTop: '85px',
                    // paddingLeft: '65px',
                    // paddingRight: '65px',
                    padding: '30px 20px',
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
