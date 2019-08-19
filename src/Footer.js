import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Footer extends Component {
    render() {
        return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Box mt={8}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © Codelopers Inc. '}
                            <Link color="inherit" href="#">
                                www.redpins.com
        </Link>{''}
                            &nbsp; {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Grid>
            </div>
        )
    }
}

export default Footer;