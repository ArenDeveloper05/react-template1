import React from 'react'
import './Main.css'
import Nav from '../nav/Nav'
import Content from '../content/Content'
import { FaBeer,MdComputer,VscSettingsGear,MdOutlineFormatColorFill} from 'react-icons/all'
import Card from '../card/Card'


const Main = () => {
  return (
    <main>
        <aside>
            <Card/>
            <Nav />
        </aside>
        <section className='fixed-panel'>
          <a href="">
            <div className="panel computer-div">
              <MdComputer />
            </div>
          </a>
          <a href="">
            <div className="panel">
              <VscSettingsGear />
            </div>
          </a>
          <a href="">
            <div className="panel">
              <MdOutlineFormatColorFill />
            </div>
          </a>
        </section>
        <Content />
    </main>
  )
}

export default Main