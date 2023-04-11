import { Card, CardContent, MenuItem, MenuList } from "@mui/material";
import React from "react";
import { logout } from "../../redux/actions/userActions"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalShipping from "@mui/icons-material/LocalShipping";
import LogoutIcon from '@mui/icons-material/Logout';
import './login.css';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';




const Account = () => {
     const user = useSelector((state) => state.user);
    const { userInfo } = user;
    const dispatch = useDispatch();

     const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <div className="account">
            <Card variant="outlined" style={{maxWidth:450, margin:"0 auto",padding:"20px 5px"}}>
                <CardContent>
                <h3>You are currently logged in</h3>
                </CardContent>
                <Link to={`/your-orders`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <MenuItem><LocalShipping/>My Orders</MenuItem>
                {userInfo.isAdmin === 'true' && (
                    <>
                    <Link to={`/admin`} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <MenuItem>
                   <BuildCircleIcon/> Admin Menu
                    </MenuItem>
                    </Link>
                    </>
                )}
                </Link>
                <Link to={`/login`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <MenuItem onClick={logoutHandler}><LogoutIcon/>Logout</MenuItem>
                </Link>
            </Card>
        </div>
          )

}

export default Account;
