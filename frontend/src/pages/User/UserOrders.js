import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../../redux/actions/userActions'
import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { CircularProgress, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


const UserOrders = () => {
     const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { loading, error, orders, userInfo } = user;
  const location = useLocation();

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserOrders());
    }
  }, []);
  return userInfo ? <>{loading ? (<CircularProgress/>) 
        : error ? (<p>error</p>) 
        : (
             orders && (
          <TableContainer>
            <Table>
              <TableHead style={{
              padding: "18px 36px",
              backgroundColor: "#16697a",
           }}>
                <TableRow>
                  <TableCell 
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Order Number
            </TableCell>

                  <TableCell
                 style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
                  Order Date
                  </TableCell>

                  <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Order Total
            </TableCell>

                  <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Products
            </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order._id}</TableCell>
                    <TableCell>{new Date(order.createdAt).toDateString()}</TableCell>
                    <TableCell>
                      ${order.totalPrice}
                    </TableCell>
                    <TableCell>
                      <List>
                        {order.orderItems.map((item) => (
                          <ListItem key={item._id}>
                            <ListItemText
                              primary={
                                <Typography variant='body1'>
                                  {item.qty} x {item.name} (${item.price})
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
        )} </> : <Navigate to='/login' replace={true} state={{ from: location }} />;
}

export default UserOrders