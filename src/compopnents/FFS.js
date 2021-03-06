import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from "react-icons/fa";
import bgimg from '../images/ffsbg.jpg'

const FFS = () => {
  return (
    <div style={{backgroundImage: `url(${bgimg})`, backgroundSize: '100% 100%'}} className={`bg-cover bg-center bg-no-repeat text-white rounded-xl shadow-2xl w-11/12 mx-auto mt-32 mb-16`}>
      <h1 className='text-center py-10 font-bold text-3xl'>FFS 2021 Odd Semester</h1>
      <div className='py-12'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#8f97a1', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #8f97a1' }}
            date="21-26 Dec 2021"
            iconStyle={{ background: '#8f97a1', color: '#fff' }}
            icon={<FaStar />}
          >
            <p>
              CRs will add the subject teacher data and fill their feedback to check if everything is working.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#8f97a1', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #8f97a1' }}
            date="14-24 Jan 2022"
            iconStyle={{ background: '#8f97a1', color: '#fff' }}
            icon={<FaStar />}
          >
            <p>
              FFS Open for all students except for 1st year. They can start submitting their feedbacks.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#8f97a1', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #8f97a1' }}
            date="25 Jan 2022"
            iconStyle={{ background: '#8f97a1', color: '#fff' }}
            icon={<FaStar />}
          >
            <p>
              FFS open for teachers to view.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default FFS