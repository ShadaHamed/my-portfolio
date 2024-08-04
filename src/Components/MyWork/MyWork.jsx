import React from 'react'
import "./MyWork.css";
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow.png'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
    <div className="mywork-title">
        <h1>My Latest Work</h1>
        <div className="line"></div>
    </div>
    <div className="mywork-container">
        {mywork_data.map((work, index)=>{
            return <a href={work.w_url}><img key={index} src={work.w_img} alt="work_image" /></a>
        })}
    </div>
    <div className="mywork-showmore">
      <p>Show More</p>
      <img src={arrow} alt="show more" />
    </div>

    </div>
  )
}

export default MyWork