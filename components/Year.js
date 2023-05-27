import React from 'react'
import { useDispatch } from 'react-redux';
import { setYearInfo } from '../features/appSlice'

function Year({id,yearName}) {
    const dispatch = useDispatch()
  return (
    <div 
        onClick={() => dispatch(setYearInfo({
        yearId: id,
        yearName: yearName,
      }))}
    >
        <button className='header-year'>{id}</button>
    </div>
  )
}

export default Year