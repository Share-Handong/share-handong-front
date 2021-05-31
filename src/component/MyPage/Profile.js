export default function Profile({ userInfo }) {
    const { email, name } = userInfo;
    return (
        <div
            style={{
                height: '300px',
                padding: '30px',
                display: 'flex',
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    width: '40%',
                    height: '100%',
                }}
            >
                <img
                    style={{
                        width: '65%',
                        height: '100%',
                    }}
                    src="/images/temp_profile.png"
                    alt="profile"
                />
            </div>
            <div
                style={{
                    width: '60%',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        height: '60px',
                        textAlign: 'left',
                        lineHeight: '60px',
                        fontSize: '1.2rem',
                        color: '#F85757',
                        paddingLeft: '5px',
                    }}
                >
                    Profile
                </div>
                <div
                    style={{
                        height: '60px',
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            fontSize: '2rem',
                            paddingRight: '15px',
                        }}
                    >
                        {name}
                    </div>
                    <div
                        style={{
                            fontSize: '1.2rem',
                            color: '#bbb',
                            lineHeight: '25px',
                        }}
                    >
                        {email}
                    </div>
                </div>
                <div
                    style={{
                        height: '60px',
                    }}
                >
                    채택률 (추후 개발)
                </div>
                <div
                    style={{
                        height: '80px',
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '15px',
                            height: '40px',
                            lineHeight: '40px',
                            width: '200px',
                            fontSize: '1.2rem',
                            color: '#7E7979',
                            borderColor: '#585858',
                            borderWidth: '1px',
                            boxShadow: '2px 2px 2px #585858',
                            marginRight: '30px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        프로필 편집
                    </div>
                    <div
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
                        글 등록
                    </div>
                </div>
            </div>
        </div>
    );
}
