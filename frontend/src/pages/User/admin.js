import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import './admin.css';
import UsersTab from "./UsersTab";


const Admin = () => {
    const user = useSelector((state) => state.user);
    const { userInfo } = user;
    const location = useLocation();

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
    const Users = "Tab 1";
  };
   

    return userInfo && userInfo.isAdmin === 'true' ? (
        <Card variant="outlined" style={{maxWidth:1000, margin:"0 auto",padding:"20px 5px"}}>
            <CardContent>
            <h3>Admin Menu</h3>
            </CardContent>

            <TabContext>
            
            <React.Fragment>
             <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab label="Users"/>
                <Tab label="Products"/>
                <Tab label="Reviews"/>
                <Tab label="Orders"/>
             </Tabs>


              {/* Users Info */}
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3 }}>
            
          <UsersTab/>
        
        </Box>
      )}
 
      {/* Products info */}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant='h5'>Products</Typography>
          
        </Box>
      )}
 
      {/* Reviews Info */}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant='h5'>Reviews</Typography>
          
        </Box>
      )}
 
      {/* Orders Info */}
      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>
          <Typography variant='h5'>Orders</Typography>
          
        </Box>
      )}
    </React.Fragment>
            </TabContext>

        </Card>
    ): (
    <Navigate to='/login' replace={true} state={{from: location}}/>)
    }

export default Admin;