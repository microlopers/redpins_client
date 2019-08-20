import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginCp extends React.Component {
    render() {
        return (

            <FacebookLogin
                appId="471987786988264"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                callback={this.props.action}

            />
        )
    }
}

export default FacebookLoginCp;