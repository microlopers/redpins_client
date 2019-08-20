import React, { Component } from 'react';
import SignIn from './SignIn';
import Grid from '@material-ui/core/Grid';
import FacebookLoginCp from './FacebookLoginCp';

class LoginContainer extends Component {

    render() {
        return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid container direction="column" justify="center" alignItems="center" xs="6">
                        <SignIn />
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" xs="6">
                        <FacebookLoginCp action={this.props.action}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginContainer;