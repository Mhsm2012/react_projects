import React from 'react'

function Banking() {
  return (
    <div className='field'>
        <input type="number" className='input' placeholder='amount' />
        <button className='button  mr-2 is-success'>Deposit</button>
        <button className='button  mr-2 is-danger'>Withdraw</button>
        <button className='button  mr-2 is-link'>Collect Interset</button>
        <button className='button  mr-2 is-info'>Delete Account</button>
        <button className='button  mr-2 is-warning'>Change Account Type</button>
        

    </div>
  )
}

export default Banking