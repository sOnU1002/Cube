import React from 'react'
import './about.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

function about() {
  return (
    <div>
        <div className="about-header">
            <HomeIcon />
            <PeopleAltIcon />
            <InfoIcon />
            <SettingsIcon />
        </div>
        <div className="about-content">
          <h3>

          </h3>
          <p>
            
          </p>
        </div>
        <div className="header-footer">

        </div>
    </div>
  )
}

export default about