import React, { useEffect, useState } from 'react'
import './ChatHeader.css'
import Year from './Year.js';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { selectChannelId, selectChannelName, selectDepId, selectDepName, selectYearId, selectYearName, setYearInfo } from '../features/appSlice';
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

  // const handleFE = () => {
  //   db.collection("departments").doc(departmentId).collection('years').doc("FE")
  //   .set({
  //     yearName: "First Year"
  //   })
    
  //   // dispatch(setYearInfo({
  //   //   yearId: yearId,
  //   //   yearName: yearName,
  //   // }))
  //   console.log(yearId);
  // }

  // const handleSE = () => {
  //   db.collection("departments").doc(departmentId).collection('years').doc("SE")
  //   .set({
  //     yearName: "Second Year"
  //   })
  //   console.log(yearId);
  // }

  // const handleTE = () => {
  //   db.collection("departments").doc(departmentId).collection('years').doc("TE")
  //   .set({
  //     yearName: "Third Year"
  //   })

  //   // db.collection("departments").doc(departmentId).collection('years').doc("TE")
  //   //         .onSnapshot(snapshot => { 
  //   //           setYears(snapshot.docs.map(doc => ({
  //   //             id: doc.id,
  //   //             years: doc.data(),
  //   //           })))
  //   //         })

  //   const hell = db.collection("departments").doc(departmentId).collection("years").get().docs.where("yearName", "==", "Third Year")
  //   console.log(hell)

  //   // console.log(years)
  //   // console.log(departmentName)
  // }
  // const handleBE = () => {
  //   db.collection("departments").doc(departmentId).collection('years').doc("BE")
  //   .set({
  //     yearName: "Fourth Year"
  //   })
  //   console.log(yearId);
  // }
  useEffect(() => {
      if(departmentId != null){

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
    },[departmentId]);

  if(departmentName){
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
  // else{
  //   return (
  //     <div className="chatheader" >
  //       <HomeIcon titleAccess='Home Page'/>
  //       <PeopleAltIcon titleAccess='Members' />
  //       {/* <InfoIcon titleAccess='About us' /> */}
  //       <SettingsIcon titleAccess='My Profile' />
  //     </div>
  //   )
  // }
}

export default ChatHeader