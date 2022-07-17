import React from 'react'
import './Nav.css'
import {BiHomeAlt,FaTv,AiOutlineLayout,BiCube,MdOutlineDriveFolderUpload,SiMaterialdesignicons,TbCloud,IoStatsChartSharp,AiOutlineRight} from 'react-icons/all'

const Nav = () => {
  return (
    <nav>
        <span className='general-span'>General</span>
        <ul className='general'>
            <li><a href="#hi"> <div><BiHomeAlt/><span>Dashboard</span><AiOutlineRight className='fa-right'/></div></a></li>
            <li><a href="#"> <div><FaTv/><span>Widgets</span><AiOutlineRight className='fa-right'/></div></a></li>
            <li><a href="#"> <div>< AiOutlineLayout/><span>Page layout</span><AiOutlineRight className='fa-right'/></div></a></li>
        </ul>
        <span className='general-span components-span'>Components</span>
        <ul className='general components'>
            <li><a href="#"> <div><BiCube/><span>Ui Kits</span><AiOutlineRight className='fa-right'/></div></a></li>
            <li><a href="#"> <div><MdOutlineDriveFolderUpload/><span>Bonus Ui</span><AiOutlineRight className='fa-right'/></div></a></li>
            <li><a href="#"> <div><SiMaterialdesignicons/><span>Icons</span><AiOutlineRight className='fa-right'/></div></a></li>
            <li><a href="#"> <div><TbCloud/><span>Buttons</span><AiOutlineRight className='fa-right'/></div></a></li>
            <li><a href="#"> <div><IoStatsChartSharp/><span>Charts</span><AiOutlineRight className='fa-right'/></div></a></li>
        </ul>
    </nav>
  )
}

export default Nav