import React from 'react'

const Foot = () => {
    return (
        <div className="absolute bottom-0 h-36 w-full text-center bg-gradient-to-r from-gray-800 to-gray-500 clear-both py-4">
            <h1 className='text-center text-gray-300 font-extrabold mb-2 text-2xl'>Connect to us :</h1>
            <a className='mx-2 text-2xl text-gray-300 hover:text-white' href="mailto:sdcusict@ipu.ac.in" target="_blank"><i className="icon footer-icon far fa-envelope"></i></a>
            <a className='mx-2 text-2xl text-gray-300 hover:text-white' href="https://www.linkedin.com/company/software-development-cell-usict/about/"
                target="_blank"><i className="icon footer-icon fab fa-linkedin"></i></a>
            <a className='mx-2 text-2xl text-gray-300 hover:text-white' href="https://github.com/SDC-USICT/sdc-usict.github.io" target="_blank"><i
                className="icon footer-icon fab fa-github"></i></a>
            <p className="text-lg text-white my-2">Copyright &copy; SDC-USICT 2022</p>
        </div>
    )
}

export default Foot