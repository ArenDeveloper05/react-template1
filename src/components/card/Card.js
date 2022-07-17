import React from 'react'
import './Card.css'
import {FiSettings} from 'react-icons/all'

const Card = () => {
  return (
    <div className="card">
                <div className='card-visual-side'>
                    <div className="settings-div">
                        <FiSettings className='fa-settings'/>
                    </div>
                    <div className="new">
                        New
                    </div>
                    <a href="#" className='card-logo'>
                        <img src="data:image/png;base64,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" className='card-logo-img' alt="" />
                    </a>
                    <h4 className='work'>Emay Walter</h4>
                    <p className='card-desc'>Human Resources Department</p>
                </div>
                <ul className='card-list'>
                    <li>
                        <h5>19.8k</h5>
                        <span>Follow |</span>
                    </li>
                    <li>
                        <h5>2 year</h5>
                        <span>Experience |</span>
                    </li>
                    <li>
                        <h5>95.2k</h5>
                        <span>Follower</span>
                    </li>
                </ul>
            </div>
  )
}

export default Card