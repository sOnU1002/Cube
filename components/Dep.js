import React from 'react'
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setDepInfo } from '../features/appSlice'

function Dep({id,departmentName,departmentLogo}) {

    const dispatch = useDispatch()
  
    return (
      <div
          onClick={() => dispatch(setDepInfo({
         departmentId: id,
         departmentName: departmentName,
         departmentLogo: departmentLogo,
       }))}  > 
          {/* <li><Avatar src='https://i.pinimg.com/736x/9b/e3/a0/9be3a0ff7a12c49ab3e9ceff9183c7c0.jpg'/></li>
          <li><Avatar src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_05/1890591/170203-salt-bae-mn-1530.jpg'/></li>
          <li><Avatar src='https://pfps.gg/assets/pfps/1603-mona-lisa-dabbing.png'/></li>
          <li><Avatar src='https://media.tenor.com/sTFc7j1xRJ0AAAAM/doge-dancing-doge.gif'/></li>
          <li><Avatar src='https://i.pinimg.com/originals/4c/58/27/4c58276469623b3db6c3cadd270863c1.gif'/></li> */}
          <li><Avatar src={departmentLogo} title={departmentName}/></li>
      </div>
    );
  }

export default Dep