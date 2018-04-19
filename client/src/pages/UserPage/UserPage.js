import React from 'react';
import { SideActive } from '../../components/SideNav';
import API from '../../utils/API';

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
      })
      .catch(err => {
        console.log(err);
      });
  }

	render() {
		return (
      <div>
        <SideActive 
          data={this.state.data}
        />
        <h2>Welcome {this.state.data.firstName}</h2>
        <div>
          <p>Upload your image</p>
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
      </div>
		);
	}
}

export default UserPage;
