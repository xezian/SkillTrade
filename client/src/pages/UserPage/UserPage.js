import React from 'react';
import { Row, Col, Input, Button } from 'react-materialize';
import { SideActive } from '../../components/SideNav';
import API from '../../utils/API';
import './UserPage.css';

class UserPage extends React.Component {
	state = {
		user: this.props.username,
		data: [],
    selectedImage: null,
	}

	componentDidMount = () => {
    API.getUserData(this.state.user)
      .then(res => {
        this.setState({
          data: res.data,
        });
        console.log(this.state.data)
      })
      .catch(err => {
        console.log(err);
      });
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedImage: event.target.files[0],
    });
  }

  fileUploadHandler = () => {
    API.uploadImage(this.state.selectedImage)
      .then(res => {
        this.setState({
          selectedImage: null,
        });
        console.log(this.state.selectedImage);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

	render() {
		return (
      <div className="container">
        <SideActive 
          data={this.state.data}
        />
        <Row>
          <Col s={7}>
            <Row>
              <Col s={4} style={{ height: 250, padding: 5 }}>
                <img
                  src="https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg"
                  className="profile-img" alt="profile"/>
                />
              </Col>
              <Col s={8} style={{backgroundColor: 'orange', height: 250}}>Posted Needs</Col>
            </Row>
            <Row>
              <Col s={4} style={{ height: 250, padding: 5}}>
                <p><strong>{this.state.data.firstName} {this.state.data.lastName}</strong></p>
                <p>{this.state.data.email}</p>
                <p>Some dummy text blah blah blah blah blah</p>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button> 
              </Col>
              <Col s={8} style={{backgroundColor: 'green', height: 250}}>Posted Skills</Col>
            </Row>
          </Col>
          <Col s={5}>
            <Row>
              <Col s={12} style={{ height: 500, paddingLeft: 30 }}>
                <h5 style={{ padding: 5, borderBottom: '1px solid #000' }}>Submit your skills or needs</h5>
                <Row className="userpage-form">
                  <Input name='group1' type='radio' value='skill' label='Skill' />
                  <Input name='group1' type='radio' value='need' label='Need' />
                </Row>
                <Row className="userpage-form">
                  <Input
                    s={12}
                    type="select"
                    label="Choose a category"
                    value={this.state.category}
                    onChange={this.handleOptionChange}
                  >
                    <option value="2">Landscaping</option>
                    <option value="3">Computer</option>
                  </Input>
                  <Input
                    s={12}
                    label="Description of your skill or need"
                    type="textarea"
                  />
                </Row>
                <Row>
                  <Button className="userpage-btn">Submit</Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
		);
	}
}

export default UserPage;
