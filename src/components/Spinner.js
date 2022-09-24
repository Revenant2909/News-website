import React from 'react'
import loading from './loading.gif';


const Spinner = () => {

  return (
    <div className='text-center'><img src={loading} alt="Error" width="75rem" />
    </div>
  )

}

export default Spinner