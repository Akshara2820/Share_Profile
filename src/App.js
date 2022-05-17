import './App.css';
import { Component } from 'react';
// import { useMediaQuery } from 'react-responsive'.
import Button from 'react-bootstrap/Button';
import { RiCompassDiscoverFill } from "react-icons/ri"
import { BsPeopleFill } from "react-icons/bs"
import { MdSupportAgent } from "react-icons/md"



class App extends Component {
  render (){
    return(
      <>
      <nav className='header-navbar'>
        {/*header component */}
        <div className='profile-navbar'>
          <h2> Meeत </h2>
        </div>

        <div className="menu-link">
                    <ul>
                        <li className='discovery'>
                          <h4 className='discover-icon'> <RiCompassDiscoverFill/></h4>
                            <a href="">Discovery</a>
                        </li>

                        <li>
                          <h4 className='invite-icon'> <BsPeopleFill/></h4>
                            <a href="">Invited</a>
                        </li>

                        <li>
                          <h4 className='support-icon'> <MdSupportAgent/> </h4>
                            <a href="">Support</a>
                            
                        </li>
                    </ul>
        
                </div>

                <Button className="post-job-button" variant='outline-secondary'>Post Job</Button>
                <Button className="signin-button" variant='success'>Sign In</Button>
      </nav>

        
      </>
    )
  }
}

export default App;















