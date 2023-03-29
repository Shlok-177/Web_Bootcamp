import React, { useState } from 'react'

const Form = () => {

    const [formData , SetformData] = useState({
        fname  : '',
        lname: '',
        age : '',
        password : '',
        cfpassword : '',
    });

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
        }
    }

  return (

    <form onSubmit={saveData} className="">
        <label htmlFor="fname">Fname:- </label>
        <input type="text" name="fname" value={formData.fname} onChange = {changehandler} />
        <br /><br />

        <label htmlFor="lname">lname:- </label>
        <input type="text" name="lname" value={formData.lname} onChange = {changehandler} />
        <br /><br />

        <label htmlFor="age">Age :- </label>
        <input type="number" name="age" value={formData.age} onChange = {changehandler} />
        <br /><br />
        <label htmlFor="password">Password:- </label>
        <input type="password" name="password" value={formData.password} onChange = {changehandler} />
        <br /><br />
        <label htmlFor="password">Confirm Password:- </label>
        <input type="password" name="cfpassword" value={formData.cfpassword} onChange = {changehandler} />
        <br /><br />

        <input type="submit" value="Submit" />
    </form>

  )
}

export default Form;