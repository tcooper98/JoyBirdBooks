import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export const News = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3tkphbl', 'template_zqgs1d8', form.current, 'HVBBIEzoHi45gdPgi')
      .then((result) => {
          console.log(result.text);
          handleClickOpen();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="newsletter">
      <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="email" name="user_email" />
        <input className='sendNews' type="submit" value="Send" style={{backgroundColor:'#F2C202', fontFamily:'Saira'}}/>
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thank You"}</DialogTitle>
        <DialogContent>
          <p id="alert-dialog-description">Check your email!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default News;

