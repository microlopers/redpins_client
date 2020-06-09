import React from 'react';
import Grid from '@material-ui/core/Grid';
import avatar from '../resources/graphics/redpinAvatar.png';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import MenuBar from '../components/Menu/MenuBar';
import Dashboard from '../components/Dashboard/Dashboard';



export default function DashboardView(props) {

    const loginState = useSelector(state => state.login);
    const userData = loginState!=null && loginState.user!=null ? loginState.user:'';
    const pictureData = loginState!=null && loginState.picture!=null ? loginState.user:avatar;

    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
            <MenuBar name={userData} picture={pictureData}/>
            </Grid>
            <div><Dashboard></Dashboard></div>

            <Grid container direction="row" justify="center" alignItems="center">
                <Footer />
            </Grid>
        </div>
    );

}