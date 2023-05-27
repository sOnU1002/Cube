import React from 'react'
import './Login.css'
import Logo from '../img/L2.png'
import { Avatar, Button } from '@mui/material'
import { auth,provider } from '../firebase';

import db from '../firebase'
import { useEffect, useState } from 'react'
import Dep from '../components/Dep'
import { useDispatch, useSelector } from 'react-redux';
import { selectDepId, selectDepName, selectStudentYear, setStudentInfo } from '../features/appSlice';


function Login() {

 const dispatch = useDispatch()
 const studyear = useSelector(selectStudentYear)

 const signIn = () => {

  const code = 10560;
  const commentcode = prompt("Enter code:")

  if(commentcode == code){
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }
  else{
    alert("Incorrect code 🤡");
  }

 };

 const details = () => {

   
   if(departmentName){
     alert("U have selected " + departmentName);
     const studentYear = prompt("Enter Year (FE/SE/TE/BE)");
     
     if(studentYear == "FE" || studentYear == "SE" || studentYear == "TE" || studentYear == "BE"){
       alert("U have selected " + departmentName + " and you are in " + studentYear);

       auth.signInWithPopup(provider).catch((error) => alert(error.message));
       dispatch(setStudentInfo({ studentYear : studentYear}));

      }
      else{
        alert("Enter the Year correctly");
      }
      
    }
    else {
      alert("Select Department by clicking on the displayed departments.")
    }


  };

  const [departments, setDepartments] = useState([])
  const departmentName = useSelector(selectDepName);

 useEffect(() => {

  db.collection("departments")
  .onSnapshot(snapshot => { 
      setDepartments(snapshot.docs.map(doc => ({
              id: doc.id,
              department: doc.data(),
            })))
          })

          

  },[]);


      return (
        // <div className="login">
        //     <div className="login-logo">
        //         <img src={ Logo } alt="logo" />
        //     </div>
        //       <p className="appname">
        //         Cube
        //       </p>
    
        //     <Button onClick={signIn}>Sign In</Button>
    
        // </div>
      
          <div className="details-logo">
                <img src={ Logo } alt="logo" />
                <p>CUBE</p>

                  <div className='select-dep'>
                      
                    {departments.map(({id,department}) => ( 
                      <Dep key={id} id={id} departmentName={department.departmentName} departmentLogo={department.departmentLogo}/>
                    ))}
    
                  </div>
    
          <div className='grid-container-login'>
            <div className="grid-student">
              <p>Student Login</p>
                {/* <p>{studyear}</p> */}
              <Button onClick={details}>Sign-In</Button>
            </div>
            <div className="grid-teacher">
              <p>Teacher Login</p>
              <Button onClick={signIn}>Sign-In</Button>
            </div>
          </div>
        </div>
      )

 }

export default Login;