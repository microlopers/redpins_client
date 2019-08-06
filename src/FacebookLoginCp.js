import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginCp extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
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

export default FacebookLoginCp;