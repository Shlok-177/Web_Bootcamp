import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'

const SubmitForm = () => {

    const [formData , SetformData] = useState({
        fname  : '',
        lname: '',
        age : '',
        password : '',
        cfpassword : '',
    });

    const [open, setOpen] = useState(false);

  const changehandler = (event) =>{
       let {name , value} = event.target;
        SetformData((prev)=>{
            return {
                ...prev,
                [name] : value,
            }
        });
    }


    const saveData = (event) =>{
        event.preventDefault();
        if (formData.password !== formData.cfpassword) {
            alert("Both password are not same");
        }
        else{
            console.log(formData);
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
      };

  return (
    <>
    <h1 className='text-2xl'>Hello</h1>
    <form onSubmit={saveData} className="">
        <label htmlFor="fname">Fname:- </label>
        <input type="text" name="fname" value={formData.fname} onChange = {changehandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <br /><br />

        <label htmlFor="lname">lname:- </label>
        <input type="text" name="lname" value={formData.lname} onChange = {changehandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <br /><br />

        <label htmlFor="age">Age :- </label>
        <input type="number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="age" value={formData.age} onChange = {changehandler} />
        <br /><br />
        <label htmlFor="password">Password:- </label>
        <input type="password" name="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={formData.password} onChange = {changehandler} />
        <br /><br />
        <label htmlFor="password">Confirm Password:- </label>
        <input type="password" name="cfpassword" value={formData.cfpassword} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange = {changehandler} />
        <br /><br />

        <input type="submit" value="Submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' />
    </form>

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Your FOrm is Submmited
        </Alert>
      </Snackbar>
    </>

  )
}

export default SubmitForm;