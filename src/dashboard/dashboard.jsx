import React from 'react'
import AddResume from './components/AddResume'

function DashboardPage() {
  return (
    <div className='p-10 md:px-20 lg:px-30' >
      <h2 className='text-3xl font-bold'>My Resume</h2>
      <p>Start & Explore Ai Resume builder, Create your own resume with AI</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
        <AddResume/>
      </div>
    </div>
  )
}

export default DashboardPage
