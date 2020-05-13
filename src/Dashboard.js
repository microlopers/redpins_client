import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

function Dashboard() {
    let carDetails = null
    function loadCardDetail(){
        Axios.get('https://localhost:8443/cardetails', { crossdomain: true }).then(
            res => {
                carDetails = res;
                console.log(carDetails);
            }
        )
    }

    return(
        <div className="Dashboard">
            <Box color="red" clone>
                <Button onClick={loadCardDetail}>Car log</Button>
                
            </Box>
        </div>
    )
}

export default Dashboard