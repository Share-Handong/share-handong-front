import { Divider } from 'semantic-ui-react';
import AuthService from '../Common/AuthService';
import CommentList from './CommentList';
import FavoriteList from './FavoriteList';
import Profile from './Profile';
import ShareList from './ShareList';

export default function MyPageWrap() {
    const isLogin = AuthService.isUserLoggedIn();
    const userInfo = AuthService.getLoggedInUserInfo();
    return isLogin ? (
        <div
            style={{
                textAlign: 'center',
                width: '60%',
                backgroundColor: 'white',
                margin: '50px auto',
            }}
        >
            <Profile userInfo={userInfo} />
            <Divider
                style={{
                    marginLeft: '40px',
                    marginRight: '40px',
                }}
            />
            <ShareList userInfo={userInfo} />
            <FavoriteList userInfo={userInfo} />
            <CommentList />
        </div>
    ) : (
        <></>
    );
}
