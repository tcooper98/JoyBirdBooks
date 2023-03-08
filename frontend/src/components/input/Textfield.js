import { FormControl} from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const Inputfield = ({ label, type, name, placeholder}) => {
    const [field, meta] = useField({ type, name, placeholder})
  return (
    <FormControl > 
        <TextField label={label} {...field} type={type} name={name} placeholder={placeholder} required fullWidth variant="standard"/>
    </FormControl>
  )
}

export default Inputfield;
