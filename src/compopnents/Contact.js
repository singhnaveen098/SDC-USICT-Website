import React from 'react'

const Contact = () => {
  return (
    <div className='bg-cyan-200 text-black rounded-xl shadow-2xl w-11/12 mx-auto mt-32 mb-16'>
      <h1 className='text-center py-4 font-bold text-3xl'>Contact Us</h1>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeI2emslmQ2GNQuJRKop6Gglw6SAriGwfMqgQybn_CiqRJtZw/formResponse"
        className="widget-contact-form message-form py-8">

        <div className='w-5/6 md:w-2/4 mx-auto my-3'>
          <input className="form-control" name="entry.2005620554" type="text" placeholder="Full Name" required />
        </div>

        <div className='w-5/6 md:w-2/4 mx-auto my-3'>
          <input className="form-control" name="entry.1045781291" type="email" placeholder="Email" required />
        </div>

        <div className='w-5/6 md:w-2/4 mx-auto my-3'>
          <textarea className="form-control" name="entry.839337160" cols="30" rows="4" placeholder="Message..." required></textarea>
        </div>

        <div className='text-center'>
          <button className="text-black px-8 font-bold py-2 my-2 rounded-xl bg-blue-500 hover:bg-blue-400" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact