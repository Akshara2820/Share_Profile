
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class ProfileCard extends Component {
    render (){
        return (
            <div className='Profile-card'>
              <Card style={{ width: '25rem'}}>
              <Card.Img variant="top" src={require('./mypic.jpg')} height={400} />
              <Card.Body>
                <Card.Title>Suhana Parmar | Lucknow UttarPradesh</Card.Title>
                <Card.Text>
                  EXPIRENCE : 2 years
                </Card.Text>
                <h6> Filter</h6>
                <Card.Text>
                Tecnosys Private Limited
                </Card.Text>

                <Card.Text>
                  EDUCATION : B.Tech|software engineering
                </Card.Text>
              </Card.Body>
            </Card>
            
        </div>
        )
    }
}

export default ProfileCard;
