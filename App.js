import React from "react";
// TODO: import useFormik from formik library
import{useFormik} from 'formik'
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = usrFormik({
    initialValues:{
      email: '',
      password: ''
    }, 
    onSubmit: (values) =>{
      alert("Login Successful")
    },
    validate: values => {
      let errors ={};
      if(!values.email) errors.email = 'Field required';
      if(!values.password) errors.password = 'Field required';
      return errors;      
    }
  });
  return (
    <div>
      <form onsubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> :null}
        <div>Password</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}> {formik.errors.password}</div>: null}
        <button type="submitBtn"> Submit </button>
      </form>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
    </div>
  );
}

export default App;
