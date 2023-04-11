import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, deleteUser, resetErrorAndRemoval } from '../../redux/actions/adminActions';
import { Alert, Box, Button, CircularProgress, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmRemovalAlert from './ConfirmRemovalAlert';
import { useDisclosure, useToast } from '@chakra-ui/react';


const UsersTab = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [userToDelete, setUserToDelete] = useState('');
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const user = useSelector((state) => state.user);
  const {error, loading, userRemoval, userList} = admin;
  const {userInfo} = user;
  const toast = useToast();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(resetErrorAndRemoval());
    if (userRemoval) {
      toast({ description: 'User has been removed.', status: 'success', isClosable: true });
    }
  }, [userRemoval, dispatch, toast]);

  const openDeleteConfirmBox = (user) => {
    setUserToDelete(user);
    onOpen();
  };
  
  return (<div>
    {error && (
      <Alert severity="error">{error}</Alert>
      
    )}
    {loading ? (
     <CircularProgress/>
    ): (<Box>
      <TableContainer>
            <Table>
              <TableHead style={{
              padding: "18px 36px",
              backgroundColor: "#F2c202",
           }}>
                <TableRow>
              <TableCell 
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            ID Number
            </TableCell>
                  <TableCell 
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Name
            </TableCell>

                  <TableCell
                 style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
                  Email
                  </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Registered
            </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Admin
            </TableCell>
             <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Action
            </TableCell>
            
                </TableRow>
              </TableHead>
              <TableBody>
                {userList && userList.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name} </TableCell>
                    <TableCell>
                      {user.email}
                    </TableCell>
                    <TableCell>
                     {new Date(user.createdAt).toDateString()}
                    </TableCell>
                    <TableCell>
                      {user.isAdmin === "true" ? <CheckCircleIcon style={{fill: "green"}}/> : <HighlightOffIcon style={{fill: "red"}}/>}
                    </TableCell>
                    <TableCell>
                     <Button disabled={user._id === userInfo.id} onClick={() => openDeleteConfirmBox(user)}><DeleteIcon style={{fill: "black"}}/></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        <ConfirmRemovalAlert isOpen={isOpen} onOpen={onOpen} onClose={onClose} cancelRef={cancelRef} itemToDelete={userToDelete} deleteAction={deleteUser}/>
    </Box>)}

    </div>
  )
}

export default UsersTab