import React from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';
import { SideActive } from '../../components/SideNav';
import UserPageSearch from './UserPageSearch';
import API from '../../utils/API';
import './UserPage.css';
import noImage from '../../img/no-image.png';
import Messages from '../Messages/Messages.js';

class UserPage extends React.Component {
	state = {
		user: this.props.username,
		data: [],
    selectedImage: null,
    type: null,
    category: null,
    description: null,
    title: null,
    id: null
	}

	componentDidMount = () => {
    API.getUserData(this.state.user)
      .then(res => {
        this.setState({
          data: res.data,
          id: res.data._id
        });
        console.log(res.data)
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
    const form = new FormData();

    form.append("userFile", this.state.selectedImage);

    API.uploadImage(form)
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

  clearForm(event){
    event.preventDefault()
    this.setState({
          description: '',
          title: '',

    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const postData = {}
    console.log(this.state.id)
    postData.title = this.state.title
    postData.category = this.state.category
    postData.description = this.state.description
    postData.img = null
    postData.user = this.state.id
    postData.type = this.state.type

    API.create(postData)
    
    this.clearForm(event)
    console.log(this.state)
  }

	render() {
		return (
      <div className="userpage">
        <SideActive 
          data={this.state.data}
        />
        <Row>
          <Col m={12} l={7}>
            <Row>
              <Col s={4} style={{ height: 260, padding: 10}}>
                <img
                  src={noImage}
                  alt="not available"
                  className="profile-img"
                />
              </Col>

              <Col s={8} style={{ height: 260, padding: 20 }}><UserPageSearch /></Col>

            </Row>
            <Row>
              <Col s={4} className="profile-info" style={{ height: 260, padding: 10 }}>
                <p><strong>{this.state.data.firstName} {this.state.data.lastName}</strong></p>
                <p><em>{this.state.data.email}</em></p>

                <p></p>

                <form action="#">
                  <div class="file-field input-field">
                    <div class="btn">
                      <span><Icon>image</Icon></span>
                      <input type="file" onChange={this.fileSelectedHandler} />
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text" />
                    </div>
                  </div>
                </form>
                <Button className="upload-btn" onClick={this.fileUploadHandler}>Upload</Button> 
              </Col>

              <Col s={8} style={{ height: 260, padding: 20 }}></Col>

            </Row>
          </Col>
          <Col m={12} l={5}>
            <div className="userpage-form">
            <Row>
              <Col s={12}>
                <h5 className="form-title">Submit your skills or needs</h5>
                <Row>
                  <Input name='group1' type='radio' value='Skill' label='Skill' onChange={this.handleTypeChange} />
                  <Input name='group1' type='radio' value='Need' label='Need' onChange={this.handleTypeChange} />
                </Row>
                <Row>
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
                    type="text"
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
            </div>
          </Col>
        </Row>
      </div>
		);
	}
}

export default UserPage;
