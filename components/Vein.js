import React from 'react';
import './Vein.css';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/appSlice';

function Vein({id,channelName}) {

  const dispatch = useDispatch()

  return (
    <div className='vein' 
       onClick={() => dispatch(setChannelInfo({
       channelId: id,
       channelName: channelName,
     }))}  >
        <h4>
            <span className="hash"><SwipeRightAltIcon/></span>
            {channelName}
        </h4>
    </div>
  );
}

export default Vein;