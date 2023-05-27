import React, { useEffect, useState } from 'react'
import './Depbar.css'
import Logo from '../img/L2.png'
import Dep from './Dep.js'

import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';


function Depbar() {

    const user = useSelector(selectUser);
    const [departments, setDepartments] = useState([])

    useEffect(() => {
            db.collection("departments")
            .onSnapshot(snapshot => { 
                setDepartments(snapshot.docs.map(doc => ({
                        id: doc.id,
                        department: doc.data(),
                      })))
                    })
        
    },[]);

  const handleAddDep = () => {
          const departmentName = prompt("Enter name of the new Department:");
          const departmentLogo = prompt("Enter the URL for Department logo:");

          if(departmentName) {
            db.collection("departments").add({
              departmentName: departmentName,
              departmentLogo: departmentLogo,
            })
          }
        }

  return (
    <div className="depbar">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="department">
            <div className="dep-item">
                
                <div>
              {departments.map(({id,department}) => ( 
                  <Dep key={id} id={id} departmentName={department.departmentName} departmentLogo={department.departmentLogo}/>
              ))}
                </div> 
                <div><AddBoxIcon onClick={handleAddDep} fontSize='large' titleAccess='Add new Department'/></div>

            </div>
        </div>
    </div>
  )
}

export default Depbar