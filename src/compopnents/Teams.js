import React from 'react'
import rahulsir from '../images/rahulsir.jpg'
import priyankamam from '../images/priyanka.jpg'
import deanSir from '../images/deanSir.jpg'
import himesh from '../images/himesh.jpg'
import shubham from '../images/shubham.jpg'
import jatin from '../images/jatin.png'
import harshit from '../images/harshit.jpeg'
import anurag from '../images/anurag.jpeg'
import toyeesh from '../images/toyeesh.jpeg'
import manik from '../images/manik.jpg'

const Teams = () => {
  return (
    <div className='text-black rounded-xl w-11/12 mx-auto mt-32 mb-16 overflow-hidden'>
      {/* Faculty */}
      <div>
        <h1 data-aos="zoom-out-up" className='text-center py-10 font-bold text-3xl'>FACULTY MEMBERS</h1>
        <div className="flex flex-row flex-wrap items-center justify-center py-4 mx-auto">
          <img data-aos="fade-up-right" src={rahulsir} className="w-6/12 md:w-3/12 rounded-full mx-2" alt="rahul-sir" />
          <p data-aos="fade-up-left" className='w-8/12 mx-2 text-center'> <span className="font-bold text-lg">Dr. Rahul Johari</span> is teaching at University School OfInformation and Communication Technology, Guru Gobind Singh Indraprastha University, Dwarka, Delhi, India. He is the Head of the Software Development Cell and Head and Founder of SWINGER [Security, Wireless, IoT Network Group of Engineering and Research] Lab and ACM@USICT Chapter. He is Microsoft Certified Professional and was awarded with Best Teacher/Researcher Award at GGSIP University for the academic year 2013-2014 and 2014-2015.He is the recipient of the FRGS(Faculty Research Grant Scheme, GGSIP University) for the Academic Years : 2016- 17,2017-18, &nbsp;&nbsp;&nbsp;2018-19 and 2019-20.
          </p>
        </div>
        <div className="flex flex-row flex-wrap-reverse items-center justify-center py-4 mx-auto">
          <p data-aos="fade-up-right" className='w-8/12 mx-2 text-center'> <span className="font-bold text-lg">Dr. Priyanka Bhutani</span> is working as Asst.Professor in University School of Information Technology. She joined her current position in GGS Indraprastha University in 2008.Prior to that, she has also worked with Sapient Co.,USA at their Gurgaon based setup.She has obtained M.Tech in Information Technology from GGS Indraprastha University with Honours. Previously,she has also been awarded B.Tech(I.T) with Honours from Kurukshetra University. Her technical and research interests include Database Management Systems,Data Mining, Software Engineering, Object Oriented Programming and Semantic Web.
          </p>
          <img data-aos="fade-up-left" src={priyankamam} className="w-6/12 md:w-3/12 rounded-full mx-2" alt="priyanka-mam" />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center py-4 mx-auto">
          <img data-aos="fade-up-right" src={deanSir} className="w-6/12 md:w-3/12 rounded-full mx-2" alt="dean-sir" />
          <p data-aos="fade-up-left" className='w-8/12 mx-2 text-center'> <span className="font-bold text-lg">Dr. Pravin Chandra</span> is working as Professor in the University School of Information & Communication Technology . Previously he was working as Assistant Professor (IT & Production & Operations Management) at Lal Bahadur Shastri Institute of Management, New Delhi . He has also worked in University of Delhi as Associate Professor during 2010-2011. He did his M.Sc. in Physics from University of Delhi and M.Tech. (Computer Applications) from The Indian School of Mines, Dhanbad.
          </p>
        </div>
      </div>
      {/* Teams */}
      <div className='text-center py-10'>
        <h1 data-aos="zoom-out-up" className='py-10 font-bold text-3xl'>TEAMS AND PROJECTS</h1>
        <div data-aos="flip-left" className="flex flex-col items-center justify-center py-4 mx-auto">
          <img src={himesh} className="w-6/12 md:w-3/12 h-3/12 rounded-full mx-2" alt="himesh" />
          <p className="text-amber-400 font-bold text-2xl my-2">Himesh Nayak - SDC Lead</p>
          <p>Full Stack Web / App Developer</p>
          <div className='my-2'>
            <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/himeshnayak015/" target="_blank"><i
              className=" icon fa-2x fab fa-linkedin"></i></a>
            <a className='mx-2 hover:text-gray-400' href="https://github.com/HimeshNayak" target="_blank"><i
              className=" icon fa-2x fab fa-github"></i></a>
          </div>
        </div>
        {/* web development team */}
        <div data-aos="zoom-out-up" className='text-center'>
          <h1 className='py-10 font-bold text-3xl'>WEB DEVELOPMENT TEAM</h1>
          <p className='w-8/12 mx-auto'>Web Development Team works on the official websites under the Software Development Cell, University School Of Information, Communication And Technology.
          </p>
          <div className='flex flex-row flex-wrap justify-center'>
            <div className="flex flex-col items-center justify-start py-4 w-7/12 md:w-4/12">
              <img src={shubham} className="w-6/12 h-6/12 rounded-full mx-2" alt="shubham" />
              <p className="text-amber-400 font-bold text-2xl my-2">Shubham Goyal</p>
              <p>Full Stack Web Developer, C/C++</p>
              <div className='my-2'>
                <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/shubham-goyal-7987461b8/" target="_blank"><i
                  className=" icon fa-2x fab fa-linkedin"></i></a>
                <a className='mx-2 hover:text-gray-400' href="https://github.com/ShubhamGoyal7125/" target="_blank"><i
                  className=" icon fa-2x fab fa-github"></i></a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start py-4 w-7/12 md:w-4/12">
              <img src={jatin} className="w-6/12 h-6/12 rounded-full mx-2" alt="jatin" />
              <p className="text-amber-400 font-bold text-2xl my-2">Jatin Singh</p>
              <p>Web Developer, C/C++, Python, Problem Solving</p>
              <div className='my-2'>
                <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/jatin-singh-916159206/" target="_blank"><i
                  className=" icon fa-2x fab fa-linkedin"></i></a>
                <a className='mx-2 hover:text-gray-400' href="https://github.com/Jasngh004" target="_blank"><i
                  className=" icon fa-2x fab fa-github"></i></a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start py-4 w-7/12 md:w-4/12">
              <img src={harshit} className="w-6/12 h-6/12 rounded-full mx-2" alt="harshit" />
              <p className="text-amber-400 font-bold text-2xl my-2">Harshit Panwar</p>
              <p>Front End Developer, C, Java, Python</p>
              <div className='my-2'>
                <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/harshitpanwar7/" target="_blank"><i
                  className=" icon fa-2x fab fa-linkedin"></i></a>
                <a className='mx-2 hover:text-gray-400' href="https://github.com/Harshitp7" target="_blank"><i
                  className=" icon fa-2x fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* FEEDBACK FACULTY SYSTEM TEAM */}
        <div data-aos="zoom-out-up" className='text-center'>
          <h1 className='py-10 font-bold text-3xl'>FEEDBACK FACULTY SYSTEM TEAM</h1>
          <p className='w-8/12 mx-auto'>Faculty Feedback System(FFS) portals are solely for the purpose of receiving feedback from students of all programs for their respective faculties allotted during a particular semester. This procedure takes place towards the end of each semester in all USS's of GGSIPU.
          </p>
          <div className='flex flex-row flex-wrap justify-center'>
            <div className="flex flex-col items-center justify-start py-4 w-7/12 md:w-4/12">
              <img src={anurag} className="w-6/12 h-6/12 rounded-full mx-2" alt="anurag" />
              <p className="text-amber-400 font-bold text-2xl my-2">Anurag Parashar</p>
              <p>Full Stack Web Developer</p>
              <div className='my-2'>
                <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/anurag-parashar/" target="_blank"><i
                  className=" icon fa-2x fab fa-linkedin"></i></a>
                <a className='mx-2 hover:text-gray-400' href="https://github.com/AnuragParashar2000" target="_blank"><i
                  className=" icon fa-2x fab fa-github"></i></a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start py-4 w-7/12 md:w-4/12">
              <img src={toyeesh} className="w-6/12 h-6/12 rounded-full mx-2" alt="toyeesh" />
              <p className="text-amber-400 font-bold text-2xl my-2">Toyeesh Sinha</p>
              <p>Full Stack Web Developer</p>
              <div className='my-2'>
                <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/toyeesh-sinha/" target="_blank"><i
                  className=" icon fa-2x fab fa-linkedin"></i></a>
                <a className='mx-2 hover:text-gray-400' href="https://github.com/bubsy3d" target="_blank"><i
                  className=" icon fa-2x fab fa-github"></i></a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start py-4 w-7/12 md:w-4/12">
              <img src={manik} className="w-6/12 h-6/12 rounded-full mx-2" alt="manik" />
              <p className="text-amber-400 font-bold text-2xl my-2">Manik Agarwaal</p>
              <p>Full Stack Web Developer</p>
              <div className='my-2'>
                <a className='mx-2 hover:text-gray-400' href="https://www.linkedin.com/in/manik-aggarwal-640110188/" target="_blank"><i
                  className=" icon fa-2x fab fa-linkedin"></i></a>
                <a className='mx-2 hover:text-gray-400' href="https://github.com/Manik-Aggarwal" target="_blank"><i
                  className=" icon fa-2x fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams