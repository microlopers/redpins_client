import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginCp extends React.Component {
    state = {
        isLogedIn: false,
        user: '',
        email: '',
        picture: ''

    }


    responseFacebook(response) {
        console.log(response);
        this.state.isLogedIn = true;
        this.state.user = response.userID;
        this.state.email = response.email;
        this.state.picture = response.picture.data.url;
    }

    render() {
        if (this.state.isLogedIn) {
            return (
                <div>Logged as {this.state.user}</div>
            )
        } else {
            return (

                <FacebookLogin
                    appId="471987786988264"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends,user_actions.books"
                    callback={this.responseFacebook}

                />
            )
        }
    }
}

export default FacebookLoginCp;