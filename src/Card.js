import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import axios from "axios";
import { useState, useEffect } from "react";


class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
              user: {} ,
              user_experiences:[],
              user_qualifications:[],
              };
  }

  async componentDidMount() {
    var url = "https://api.meetworks.in/users/get_unique_jobseeker_profile";

    let options = {
      method: "POST",
      url: url,
      header: {},
      data: {
        jobseeker_id: "614b410c2c4b197356a37f18",
      },
    };
    let response = await axios(options);
    this.setState({
      user: response.data[0],
      user_experiences:response.data[0].user_experiences,
      user_qualifications:response.data[0].user_qualifications,
    });
  }

  render() {
    return (

      <div className="Profile-card">
        <Card style={{ width: "60rem" }}>
          <div style={{ width: "35rem", display: "flex" }}>
            <Card.Img variant="top" src={require("./pic.jpg")} height={400} />


            <Card.Body>
              <Card.Title className="name">
                {this.state.user.jobseeker_name} ||{this.state.user.area} {this.state.user.city}
              </Card.Title><br></br>
              <Card.Text className="expirence-class">
                <br></br>
              <BsFillBagCheckFill/> EXPIRENCE {this.state.user.total_months_exp} Month
              </Card.Text>
              <h6> Filter</h6>
              <Card.Text>
              {this.state.user_experiences[0]?.company_name} <br></br>
              {this.state.user_experiences[0]?.company_starting_date}<br></br>
              <br></br>{this.state.user_experiences[0]?.role_discription}
              </Card.Text>
              <Card.Text className="expirence-class">
                EDUCATION <br></br>
              </Card.Text>
              {this.state.user.user_degree}
              {this.state.user_qualifications[0]?.user_degree} || {this.state.user_qualifications[0]?.course_type}<br></br>
              {this.state.user_qualifications[0]?.user_college} || {this.state.user_qualifications[0]?.user_passing_year}
            </Card.Body>
          </div>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;