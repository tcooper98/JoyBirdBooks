import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import './admin.css';
import UsersTab from "./UsersTab";
import OrdersTab from "./OrdersTab";
import ProductsTab from "./productsTab";
import ReviewsTab from "./ReviewsTab";


const Admin = () => {
    const user = useSelector((state) => state.user);
    const { userInfo } = user;
    const location = useLocation();

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
   

    return userInfo && userInfo.isAdmin === 'true' ? (
        <Card variant="outlined">
            <CardContent>
            <h3>Admin Menu</h3>
            </CardContent>

            {/* <TabContext> */}
            
            <React.Fragment>
             <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab className="users" label="Users"/>
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
          <ProductsTab/>
          
        </Box>
      )}
 
      {/* Reviews Info */}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
          <ReviewsTab/>
          
        </Box>
      )}
 
      {/* Orders Info */}
      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>
          <OrdersTab/>
          
        </Box>
      )}
    </React.Fragment>
            {/* </TabContext> */}

        </Card>
    ): (
    <Navigate to='/login' replace={true} state={{from: location}}/>)
    }

export default Admin;