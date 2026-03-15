import React from 'react'

const PageScroll = () => {

    const pageScroll = (speed) => {
        console.log("Page scrolling at speed - ", speed);
    }

  return (
    <div onWheel={(event) => {
        pageScroll(event.deltaY)
    }}>
      <div className="h-screen w-full bg-gray-300"></div>
      <div className="h-screen w-full bg-gray-400"></div>
      <div className="h-screen w-full bg-gray-500"></div>
    </div>
  )
}

export default PageScroll
