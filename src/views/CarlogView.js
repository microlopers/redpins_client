import React from 'react';
import Grid from '@material-ui/core/Grid';
import avatar from '../resources/graphics/redpinAvatar.png';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import MenuBar from '../components/Menu/MenuBar';
import Carlog from '../components/Carlog/Carlog';



export default function CarlogView(props) {
    window.localStorage.setItem('lastLocation','/carlog');

    const loginState = useSelector(state => state.login);
    const userData = loginState!=null && loginState.user!=null ? loginState.user:'';
    const pictureData = loginState!=null && loginState.picture!=null ? loginState.user:avatar;



    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
            <MenuBar name={userData} picture={pictureData}/>
            </Grid>
            <div><Carlog></Carlog></div>

            <Grid container direction="row" justify="center" alignItems="center">
                <Footer />
            </Grid>
        </div>
    );

}