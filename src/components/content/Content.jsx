import React from 'react'
import './Content.css'
import {FaRegTrashAlt,FaRegCheckCircle} from "react-icons/fa"


const Content = () => {
  return (
    <div className="content">
      <div className="first-content-side">
        <h2>Todo</h2>
        <ul>
          <li><a href="">Home /</a></li>
          <li><a href="">Apps /</a></li>
          <li><a href="">Todo</a></li>
        </ul>
      </div>
      <div className="second-content-side">
        <div className="todo-header">
          <h3>To-Do</h3>
          <div>
            <a href="">Mark all as finished </a>
            <FaRegCheckCircle className='done-red'/>
          </div>
          
        </div>
        <div className="todo-body">
          <ul>
            <li>
              <div>
                <h3>Weekly Bigbazar Shopping</h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Go Outside Picnic on Sunday</h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3 ><del className='deleted'>Write a blog post</del></h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div done-deleted">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Do the chicken dance</h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Pay the electricity bills</h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3 ><del className='deleted'>Make dinner reservation</del></h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div done-deleted">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Meeting with photographer</h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div">
                  <FaRegCheckCircle className='done'/>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3 ><del className='deleted'>Birthday wish to best friend</del></h3>
                <div className="bin-div">
                  <FaRegTrashAlt  className='bin'/>
                </div>
                <div className="done-div done-deleted">
                  <FaRegCheckCircle className='done ' />
                </div>
              </div>
            </li>
          </ul>
          <button className='todo-add-button' type='button'>Add new task</button>
        </div>

      </div>
      
    </div>

  )
}

export default Content