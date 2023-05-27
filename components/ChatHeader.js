import React, { useEffect, useState } from 'react'
import './ChatHeader.css'
import Year from './Year.js';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { selectChannelId, selectChannelName, selectDepId, selectDepName, selectStudentYear, selectYearId, selectYearName, setYearInfo } from '../features/appSlice';
import { selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';

function ChatHeader( {/*{ channelName } */}) {
    
  const user = useSelector(selectUser);
  const departmentName = useSelector(selectDepName);
  const departmentId = useSelector(selectDepId);
  const yearId = useSelector(selectYearId);
  const yearName = useSelector(selectYearName);
  // const channelId = useSelector(selectChannelId);
  // const channelName = useSelector(selectChannelName);
  const [years, setYears] = useState([])
  const dispatch = useDispatch()


  const studyear = useSelector(selectStudentYear)

  useEffect(() => {
      if(departmentId != null && studyear == null){

      db.collection("departments").doc(departmentId).collection('years').doc("FE")
      .set({
        yearName: "First Year"
      })
      db.collection("departments").doc(departmentId).collection('years').doc("SE")
      .set({
        yearName: "Second Year"
      })
      db.collection("departments").doc(departmentId).collection('years').doc("TE")
      .set({
        yearName: "Third Year"
      })
      db.collection("departments").doc(departmentId).collection('years').doc("BE")
      .set({
        yearName: "Fourth Year"
      })
      
      db.collection("departments").doc(departmentId).collection('years')
            .onSnapshot(snapshot => { 
                setYears(snapshot.docs.map(doc => ({
                        id: doc.id,
                        year: doc.data(),
                      })))
                    })

                  }
      // else {
      //   db.collection("departments").doc(departmentId).collection('years')
      //       .onSnapshot(snapshot => { 
      //           setYears(snapshot.docs.map(doc => ({
      //                   id: doc.studyear,
      //                   year: doc.data(),
      //                 })))
      //               })
      // }
    },[departmentId]);

  if(departmentId != null && studyear == null ){
    return (
      <div className="chatheader">
        <h3>
          <span className="hash-header">
            {/* <SwipeRightAltIcon/> */}
          { yearId }
          </span>
        </h3>
              
          {/* <button className='header-year' onClick={handleFE}>FE</button>
          <button className='header-year' onClick={handleSE}>SE</button>
          <button className='header-year' onClick={handleTE}>TE</button>
          <button className='header-year' onClick={handleBE}>BE</button> */}
                
          {/* <button className='header-year'>FE</button>
          <button className='header-year'>SE</button>
          <button className='header-year'>TE</button>
          <button className='header-year'>BE</button> */}
        {years.map(({id,year}) => (

          <Year key={id} id={id} yearName={year.yearName}/>
        ))}
            
        {/* <HomeIcon titleAccess='Home Page'/>
        <PeopleAltIcon titleAccess='Members' /> */}
        {/* <InfoIcon titleAccess='About us' /> */}
        {/* <SettingsIcon titleAccess='My Profile' /> */}
      </div>
    )
  }
  else if(departmentName != null && studyear != null){
    return (
      <div className="chatheader-stud" >
        <h3>
          <span className="hash-header-stud">
            <SwipeRightAltIcon/>
          { studyear }
          </span>
        </h3>
        {/* <HomeIcon titleAccess='Home Page'/>
        <PeopleAltIcon titleAccess='Members' /> */}
        {/* <InfoIcon titleAccess='About us' /> */}
        {/* <SettingsIcon titleAccess='My Profile' /> */}
      </div>
    )
  }
}

export default ChatHeader