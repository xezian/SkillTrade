import React from 'react';
import { Row, Col, Input, Button } from 'react-materialize';
import { SideActive } from '../../components/SideNav';
import API from '../../utils/API';
import './UserPage.css';
import noImage from '../../img/no-image.png';

class UserPage extends React.Component {
	state = {
		user: this.props.username,
		data: [],
    selectedImage: null,
    type: null,
    category: null,
    description: null,
    title: null,
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleOptionChange = event => {
    this.setState({
      category: event.target.value
    })
    console.log(this.state)
  }

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    })
    console.log(this.state)
  }

  handleDescriptionChange = event => {
    console.log(event)
    this.setState({
     description: event.target.value
    })
  }

  handleTitleChange = event => {
    console.log(this)
    console.log(event)
    this.setState({
      title: event.target.value
    }) 
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this)
    const postData = {}
    postData.category = this.state.category
    postData.type = this.state.type
    postData.description = this.state.description
    postData.title = this.state.title
    console.log(postData)
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
                  src={noImage}
                  alt="no image available"
                  className="profile-img"
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
                  <Input name='group1' type='radio' value='Skill' label='Skill' onChange={this.handleTypeChange} />
                  <Input name='group1' type='radio' value='Need' label='Need' onChange={this.handleTypeChange} />
                </Row>
                <Row className="userpage-form">
                  <Input
                    s={12}
                    type="select"
                    label="Choose a category"
                    value={this.state.category}
                    onChange={this.handleOptionChange}
                  >
                      <option value="Landscaping">Landscaping</option>
                      <option value="Home Repair">Home Repair</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Computer and Technology">Computer and Technology</option>
                      <option value="Pet Care">Pet Care</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Legal">Legal</option>
                      <option value="Health and Wellness">Health </option>
                      <option value="Bicycle Repair">Bicycle </option>
                      <option value="Miscellaneous">Miscellaneous</option>
                  </Input>
                  <Input
                    s={12}
                    label="Title"
                    type="textarea"
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                  />
                  <Input
                    s={12}
                    label="Description of your skill or need"
                    type="textarea"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange.bind(this)}
                  />
                </Row>
                <Row>
                  <Button onClick={this.handleSubmit} className="userpage-btn">Submit</Button>
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
