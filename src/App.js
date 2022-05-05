import './App.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render (){
    return(
      <>
      <nav className='header-navbar'>
        {/*header component */}
        <div className='profile-navbar'>
          <h2> Meent</h2>
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


        <div className='Profile-card'>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="file:///home/akshara/Documents/meent-project/src/profile-pic.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
      </>
    )
  }
}

export default App;

