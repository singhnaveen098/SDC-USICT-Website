import React from 'react'
import software from '../images/software.png'
import { FaWindowClose } from "react-icons/fa";

const Contact = (props) => {
  return (
    <div className={`flex bg-[#d3d3d380] fixed top-0 bottom-0 right-0 left-0 items-center justify-center z-[10000] overflow-y-scroll ${props.show ? 'block':'hidden'}`}>
      <div className='flex flex-row min-h-[450px] w-3/4 h-1/2 md:w-5/6 lg:w-3/4 lg:h-4/6 max-w-screen-xl mt-4 bg-white rounded-xl justify-around items-center relative'>
        <FaWindowClose className='absolute right-4 top-4 cursor-pointer' size={32} onClick={props.cclick}/>
        <img className='w-full max-h-full max-w-md aspect-square hidden md:block' src={software} alt="software" />
        <div className='text-black w-3/4 md:w-2/4'>
          <h1 className='text-center font-bold text-3xl md:text-5xl'>Contact Us</h1>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeI2emslmQ2GNQuJRKop6Gglw6SAriGwfMqgQybn_CiqRJtZw/formResponse"
            className="widget-contact-form message-form py-4">

            <div className='w-5/6 md:w-3/4 mx-auto mb-3'>
              <input className="form-control" name="entry.2005620554" type="text" placeholder="Full Name" required />
            </div>

            <div className='w-5/6 md:w-3/4 mx-auto my-3'>
              <input className="form-control" name="entry.1045781291" type="email" placeholder="Email" required />
            </div>

            <div className='w-5/6 md:w-3/4 mx-auto my-3'>
              <textarea className="form-control" name="entry.839337160" cols="30" rows="4" placeholder="Message..." required></textarea>
            </div>

            <div className='text-center'>
              <button className="text-white px-8 font-bold py-2 my-2 rounded-xl bg-gray-500 hover:bg-gray-400" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact