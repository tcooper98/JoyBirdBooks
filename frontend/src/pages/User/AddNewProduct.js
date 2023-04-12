import React, { useState } from 'react'
import { uploadProduct } from '../../redux/actions/adminActions'
import { Button, Input, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip } from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useDispatch } from 'react-redux';

const AddNewProduct = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [age, setAge] = useState('')
    const [genre, setGenre] = useState('')
    const [category, setCategory] = useState('')
    const [condition, setCondition] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')
    const [status, setStatus] = useState('')

    const createNewProduct =  () => {
        dispatch(uploadProduct({
             name,
             price, 
             image, 
             author, 
             age, 
             genre, 
             category, 
             condition, 
             description, 
             stock, 
             status}))
    }

   

  return (
    <div>
     <TableContainer>
                     <Table>
              <TableHead style={{
              padding: "18px 36px",
              backgroundColor: "#82c0cc",
           }}>
                <TableRow>
              <TableCell 
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Image file name
            </TableCell>
                  

                  <TableCell
                 style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
                  Name & <br/>
                  Author
                  </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Age Range & <br/>
            Genre
            </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Category & <br/>
            Conditon
            </TableCell>
    
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Description
            </TableCell>
            
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Price & <br/>
             Stock & <br/>
             Status
            </TableCell>
        
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Save
            </TableCell>

       
                </TableRow>
              </TableHead>

              <TableBody>
                 <TableRow>

                    <TableCell>
                      <Tooltip title="Set name that matches image name in files">
                      <Input size='sm' value={image} onChange={(e) => setImage(e.target.value)} placeholder='e.g. thecall.jpg'/>
                      </Tooltip>
                    </TableCell>

                    <TableCell>
                      
                      <Input size='sm' value={name} onChange={(e) => setName(e.target.value)} placeholder='The Call'/> <br/>
                      <Input size='sm' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Robert V Sobczak'/>
                      
                    </TableCell>

                    <TableCell>
                      
                      <Input size='sm' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Young Adult'/> <br/>
                      <Input size='sm' value={genre} onChange={(e) => setGenre(e.target.value)} placeholder='Fiction'/>
                      
                    </TableCell>

                     <TableCell>
                   
                      <Input size='sm' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Books'/> <br/>
                      <Input size='sm' value={condition} onChange={(e) => setCondition(e.target.value)} placeholder='New'/>
                      
                    </TableCell>

                    <TableCell>
                   
                      <TextField size='sm' value={description} 
                      multiline
                      maxRows={4}
                      variant="standard"
                      onChange={(e) => setDescription(e.target.value)} 
                      placeholder='Tell us about it'/> 
                     
                      
                    </TableCell>

                    <TableCell>
                   
                      <Input size='sm' 
                      value={price} 
                      type="number"
                       startAdornment={
                      <InputAdornment position="start">
                        $
                     </InputAdornment>
                       }
                       onChange={(e) => setPrice(e.target.value)} placeholder='10.99'/> <br/>
                      <Input size='sm' type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='8'/>
                      <Input size='sm' value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Fresh'/> <br/>
                    
                    </TableCell>

                    <TableCell>
                      
                     <Button color="success" onClick={() => createNewProduct()}><SaveAltIcon/></Button>
                      
                      

                    </TableCell>

                 </TableRow>
              </TableBody>

            </Table>
            </TableContainer>

        </div>
  )
}

export default AddNewProduct