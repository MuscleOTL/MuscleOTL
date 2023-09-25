import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static" sx={ {backgroundColor: "#FFFFFF", margin: "10px" } }>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#110B11" }}>
            MuscleOTL
            </Typography>
            {/* <Button color="inherit" sx={{ color: "#110B11" }}>Bookmarks</Button> */}
            <Button color="inherit" sx={{ color: "#110B11" }}>Login</Button>
        </Toolbar>

        </AppBar>

    );
};

export default NavBar;