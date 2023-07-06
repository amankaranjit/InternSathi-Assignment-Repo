import React from 'react'
import error from '../assets/images/error.png';
const ErrorPage = () => {
  return (
    <div>
        <div className='container w-100 h-100'>
            <img src={ error} className='w-100 h-100 mt-5'/>
        </div>
    </div>
  )
}

export default ErrorPage