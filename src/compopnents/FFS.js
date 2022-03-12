import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from "react-icons/fa";

const FFS = () => {
  return (
    <div className='bg-cyan-200 text-black rounded-xl shadow-2xl w-11/12 mx-auto mt-32 mb-16'>
      <h1 className='text-center py-10 font-bold text-3xl'>FFS 2021 Odd Semester</h1>
      <div className='py-12'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="21-26 Dec 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            icon={<FaStar />}
          >
            <p>
              CRs will add the subject teacher data and fill their feedback to check if everything is working.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="14-24 Jan 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            icon={<FaStar />}
          >
            <p>
              FFS Open for all students except for 1st year. They can start submitting their feedbacks.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="25 Jan 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            icon={<FaStar />}
          >
            <p>
              FFS open for teachers to view.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#000' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default FFS