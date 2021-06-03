import { Input } from 'semantic-ui-react';
import css from 'styled-jsx/css';
import { IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutline';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import GoogleLogin from 'react-google-login';
import Typography from '@material-ui/core/Typography';
import AuthService from './AuthService';

const style = css`
    .top-wrap {
        background-color: white;
        height: 60px;
    }
`;

// 성공 콜백 시 출력되는 JSON값 profileObj 데이터를 사용하면 될 듯해요
// {
//   "El":"115542265492867015125",
//   "Zi":{
//      "token_type":"Bearer",
//      "access_token":"ya29.Gl1F...Xz4uE",
//      "scope":"email prof...profile openid",
//      "login_hint":"AJD...XKQQ",
//      "expires_in":3600,
//      "id_token":"eyJhbGc...JhY2Nv",
//      "session_state":{
//         "extraQueryParams":{
//            "authuser":"0"
//         }
//      },
//      "first_issued_at":1563090245757,
//      "expires_at":1563093845757,
//      "idpId":"google"
//   },
//   "w3":{
//      "Eea":"11...15125",
//      "ig":"TaeMin Moon",
//      "ofa":"TaeMin",
//      "wea":"Moon",
//      "Paa":"http...oto.jpg",
//      "U3":"tmmoond8@gmail.com"
//   },
//   "googleId":"115...15125",
//   "tokenObj":{
//      "token_type":"Bearer",
//      "access_token":"ya2...CHXz4uE",
//      "scope":"email ...e openid",
//      "login_hint":"AJDL...KQQ",
//      "expires_in":3600,
//      "id_token":"eyJhb...FUaw",
//      "session_state":{
//         "extraQueryParams":{
//            "authuser":"0"
//         }
//      },
//      "first_issued_at":1563090245757,
//      "expires_at":1563093845757,
//      "idpId":"google"
//   },
//   "tokenId":"eyJhbGciOi...4AaCByCFUaw",
//   "accessToken":"ya29....4uE",
//   "profileObj":{
//      "googleId":"115...5",
//      "imageUrl":"https...UBA/s96-c/photo.jpg",
//      "email":"tmmoond8@gmail.com",
//      "name":"TaeMin Moon",
//      "givenName":"TaeMin",
//      "familyName":"Moon"
//   }
// }

const useStyles = makeStyles({
    button: {
        width: 300,
        height: 50,
    },
});

const buttonTheme = createMuiTheme({
    palette: {
        secondary: {
            main: '#F85757',
        },
    },
});

export default function Top() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const handleClickOpen = () => {
        // 로그인이 되어있을 때(localstorage에 저장 되어있을 때)
        if (AuthService.executeJwtAuthLogin()) {
            if (AuthService.isUserLoggedIn()) {
                router.push('/mypage');
                setOpen(false);
            }
        } else {
            // 처음 로그인 (구글로그인 팝업 띄우기)
            console.log('hi');
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const responseGoogle = (response) => {
        console.log(response);
        AuthService.executeJwtAuthenticationService(
            response.profileObj.email,
            response.profileObj.googleId,
            response.profileObj.name,
        )
            .then((res) => {
                console.log(res);
                if (res.data.token) {
                    // 처음 로그인 한 경우 (sign up)
                    AuthService.registerSuccessfulLoginForJwt(
                        res.data.email,
                        res.data.token,
                        res.data.googleId,
                        res.data.name,
                    );
                } else {
                    // 재 로그인
                    AuthService.executeJwtAuthLogin(
                        res.data.email,
                        res.data.googleId,
                        res.data.name,
                    );
                }
                handleClose();
            })
            .catch(() => {
                // this.setState({ showSuccessMessage: false });
                // this.setState({ hasLoginFailed: true });
                console.log('login fail ㅠㅠ');
                handleClose();
            });
    };

    const goMain = () => {
        router.push('/main');
    };

    return (
        <>
            <div className="top-wrap">
                <div className="sub">
                    {/* 로고 */}
                    <div style={{ cursor: 'pointer' }} onClick={goMain}>
                        <img className="logo" src="/images/sh_logo.png" alt="logo" />
                    </div>
                    {/* 검색 */}
                    <Input
                        style={{
                            width: '40%',
                            height: '40px',
                            marginLeft: '30px',
                            marginTop: '10px',
                        }}
                        action="Search"
                        placeholder="Search..."
                    />
                    {/* 알림 */}
                    {/* <Icon
            style={{
              width: "5%",
              height: "40px",
              lineHeight: "40px",
              marginLeft: "30px",
              marginTop: "10px",
              fontSize: "25px",
            }}
            name="bell outline"
          /> */}
                    <IconButton aria-label="notifications" size="medium">
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="user-login" size="medium" onClick={handleClickOpen}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    <Dialog className={classes.dialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                            <Box height={40} />
                        </DialogContent>
                        <DialogTitle id="form-dialog-title">
                            <img src="/images/sh_logo.png" width="300"/>
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom variant="h4" component="h2" align="center">
                                로그인
                            </Typography>
                        </DialogContent>
                        <DialogContent>
                            <Box height={40} />
                        </DialogContent>
                        <DialogContent>
                            <GoogleLogin
                                clientId="276879982468-ros409es0l58ds23fq9v08thamqccbab.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <ThemeProvider theme={buttonTheme}>
                                        <Button
                                            className={classes.button}
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            variant="contained"
                                            size="large"
                                            color="secondary"
                                        >
                                            <Typography gutterBottom variant="h6" component="h2">
                                                Sign In with Google
                                            </Typography>
                                        </Button>
                                    </ThemeProvider>
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                            />
                        </DialogContent>
                        <DialogContent>
                            <Button
                                className={classes.button}
                                variant="contained"
                                onClick={handleClose}
                                size="large"
                            >
                                <Typography gutterBottom variant="h6" component="h2">
                                    둘러보기
                                </Typography>
                            </Button>
                        </DialogContent>
                        <DialogContent>
                            <Box height={40} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <style jsx>{`
                .sub {
                    height: 60px;
                    width: 70%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                }
                .logo {
                    width: 230px;
                    height: 60px;
                    margin: 13px;
                }
            `}</style>
            <style jsx>{style}</style>
        </>
    );
}
