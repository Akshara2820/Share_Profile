
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class ProfileCard extends Component {
    //Constructor
  constructor (props) {
    super (props);

    this.state ={
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to Exeute the code
  componentDidMount() {
    fetch(
      "https://api.meetworks.in/users/get_unique_jobseeker_profile")
      .then ((res) => res.json())
      .then((json) =>{
        this.setState({
          item: json,
          DataisLoaded: true
        });
      })
  }
    render (){

        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
          <h1> Please wait some time... </h1>
        </div>

        return (
            <div className='Profile-card'>
              <Card style={{ width: '25rem'}}>
              items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                    </ol>
                ))
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
