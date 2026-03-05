import {Bookmark} from 'lucide-react'

const JobOpenings = (props) => {
  return (
    <div className='card'>
    
          <div>
            <div className="top">
            <img src={props.brandLogo}></img>
            <button className='save'> Save <Bookmark size={12} /> </button>
          </div>
    
          <div className="center">
            <p className='company'> {props.companyName} <span> {props.datePosted}</span></p>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          </div>
    
          <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button className='submit'>Apply Now</button>
          </div>
    
        </div>
  )
}

export default JobOpenings
