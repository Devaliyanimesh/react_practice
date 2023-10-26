import React from 'react'



export default function () {
  return (
    <div className='main bg-danger '>
      <div className="m-2 p-2">
        <div className="nav justify-content-between ">
          <div className="one mt-1">
            <h3 className='text-white '><span className='text-black fs-2 fw-bold' >L</span>ogo</h3>
          </div>
          <div className="two mt-2">
            <ul className='list-unstyled d-flex gap-5 text-white fw-bold fs-5'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="third mt-2">
          <input type="sarch  " className='rounded-pill border-0 p-1 ' placeholder='Sarch here'/>
          </div>
        </div>
      </div>
    </div>
  )
}
