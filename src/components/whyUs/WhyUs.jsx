import React from 'react'
import "../whyUs/whyus.css"
import SomeReason from '../someReason/SomeReason'
import RecentWork from '../recentWork/RecentWork'
import Review from '../review/Review'

const WhyUs = () => {
  return (
    <div className="background-1 ">
     <SomeReason/>
     <RecentWork/>
     <Review/>
    </div>
  )
}

export default WhyUs
