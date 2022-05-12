import './App.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';


class App extends Component {
  render (){
    return(
      <>
      <nav className='header-navbar'>
        {/*header component */}
        <div className='profile-navbar'>
          <h2> Meeth</h2>
        </div>

        <div className="menu-link">
                    <ul>
                        <li>
                            <a href="">Discovery</a>
                        </li>

                        <li>
                            <a href="">Invited</a>
                        </li>

                        <li>
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















