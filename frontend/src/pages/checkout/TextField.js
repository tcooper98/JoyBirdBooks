import { Field, useField } from 'formik';
import { TextField, FormControl, FormHelperText } from '@mui/material';

const TextInput = ({ label, type, name, placeholder }) => {
  const [field, meta] = useField({ type, name, placeholder });
  const showError = meta.touched && !!meta.error;

  return (
    <FormControl error={showError} mb='6'>
      <Field as={TextField} {...field} type={type} name={name} label={label} placeholder={placeholder} margin="dense" fullWidth/>
      {showError && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default TextInput;