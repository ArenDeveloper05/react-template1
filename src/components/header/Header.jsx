import React from 'react'
import './Header.css'
import { FaBeer,FaBars,FaSearch,FaSignOutAlt,FaRegBell,FaRegCommentAlt,FaRegMoon,FaRegStar,FaLanguage,FaBorderStyle,GrLanguage} from 'react-icons/all';


const Header = () => {
  return (
    <header>
        <div className="first-header-side">
            <div className="logo">
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAdCAYAAADW4FAcAAAFGElEQVR42uyZW2gcVRjHf7uaWoOiKVZBpEoYjMKg0TQvVvtQEwqKSsF9kI5YqDSMYGqlaXqj3lCTWuvlodMErRZGqUSLVCpI8yLekJhiZahSp2mFqsRLQ6toYpOsD/1PPJ7uzm7apg/dfLDszpmzZ875zf+7nJkMkzDH92YAFwN/xkE45vhedRyEfzFJy+fznI+WmQTI+cAWYBz4EqgGqoA/gFlxEC6ahlkaYga4F3gDqEnpujcOwoZKhpkto08z8L5A/gMc13di4/q+1fG9firYsiVUeRMQ6vBn4BXAAT4xuoXA39NAU2A6vncX8DEwG/gNeBdoB3zgTinyZeAZ4I5poEVgOr53O/A2cDkwCOwG1gNtwFPAiGLoTmBeHIT9wG2VDjRbAOT9ct3LgCH9fgS4D+hUt1eB7VLtCsf38nEQfl3pQLMFyp/XgGsFZYdc+3G1A3RJkbVy8Zv134oHmrGSzR7gSuAosBV4Dlii2DgKBECPYD8J1AH7EqAAcRBmHN+rBz5XgX9K2WSXRq7rNunaibVEUdRtT9Z13Q7dXIDeKIqaXdfNW5VHL2CPZ5eApc4DLFO/BglnAOjX+BNzi6LoP2U6vpdxfG8B0CeQx4D3FBvXAi+p75tS6g1Sap3aFyshcboKjaKoV5NNLFcAZI0WmFjPFAmsRqC7NI9atdfquEvnawq5eR3wATADGFNN2aaJr9UuZwvwFnAdsBqYa4yxQ3esGNBhA2hryiJMJTa5rltrnc8ZCxgopNyzZHukyMSGpMahFGVPwBw0YucFwNVxEB4DbjH6tWr7uAa4HvhBSQjABb5IAXq3Mc7sEjDNCbcXcLtC4M+mLZNbJ7YamKXwMUvHiTVYcyIL5IGZZtxxfG9nHIRLgW1G+0dAPXAIaIqDcLkB9MZiQBU2RtVUneLqQ5br5uTaSUxtOAMX32N9Oor0y1k3rNM632ndyJwNcyZwwvrToiJAARbEQXhQyWY5cCANKPAVcKF+X1Vi0Z1W7MoVWmQURQOThNlkfRpS+pW6YT1F+pPV7mZExx+WAfRQ8jjO8b2Vkv94CaCJjaatWJB6TVdX7DwXiees1JnVwEVJTIuDMFMKqNx3seLaFYK31QDaB3wGLLSu96ueQlFmIqq1XLJfmf90SkDz01ykX39aRVGg/X9zycZBeFwZG6DR8b22FKCvG+3bBPIbYKWSU2JjwDzgF4GdKEPjIMyXUGdPSpnUPcXi6raSkZ0E29O8JJsU2kbbRsf3VhYB+rARI08AnwIb1LbPiJEdekzXAjQqyW0uEH/LWdREiTKF5ZB5XVOdHcBBJa2jtpfY88yaOxej/YUiQPtUjwJ8q1LhO+AdYA6wH3hepdM9wFL1XQWsi4PwxBnA7DxHoa/Zct9aJZoay72bU/fmZQCdC1wDHJZr7wd2AfOBI7pzPwIPAisUPjqAzXEQDpe7GpVJ3SlZdCptSKBadM0k5AzouEXnh4ruza0HHmZca4uDcJPaxhUjlwDfK8nUS6XrpciHdMEssCYOwk32+BX12iJFoUekyEEgFsgDwLOcfBLfKteuAjYWAlkRT40modBLlaHrlGy2AXuBB4BHpd7tSlYFrZLfTpor36DE0gj8DjymWLJQpVEV8EQchE+njVnR780toImNC+RhY1v1IrAqDsLxaZiTB2raCiCIg3Ck1FgVD1NAd3PyqXoe+Elxc5iTL9fWlVLkNMxTgc4RyGrgEn0fjoNwtNwxzleY/w4AlFYLaWq+GGIAAAAASUVORK5CYII=" alt="" /> 
            </div>
            <div className='fa-bars-div'>
              <FaBars  className='fa-bars'/>
            </div>
        </div>
  
        <div className="second-header-side">
            <div className="search">
              <FaSearch  className='fa-search'/>
              <input type="text" className='search-input' placeholder='Search here'/>
            </div>
            <div className="header-icons">
              <div className="fa-border-div header-icon-div">
                <FaBorderStyle />
              </div>
              <div className="fa-language-div header-icon-div">
                <GrLanguage className='fa-language'/>  
                <span><b>EN</b></span>
              </div>
              <div className="fa-star-div header-icon-div">
                <FaRegStar />
              </div>
              <div className="fa-bell-div header-icon-div">
                <FaRegBell />
                <div className="red-dot"></div>
              </div>
              <div className="fa-moon-div header-icon-div">
                <FaRegMoon/>
              </div>
              <div className="fa-comment-div header-icon-div">
                <FaRegCommentAlt />
              </div>
            </div>
            <button className='logout'><FaSignOutAlt className='fa-logout'/>Log out</button>
        </div>
    </header>
  )
}

export default Header