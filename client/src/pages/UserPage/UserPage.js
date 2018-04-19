import React from 'react';
import { SideActive } from '../../components/SideNav';
import API from '../../utils/API';

class UserPage extends React.Component {
	state = {
		user: this.props.username,
		data: [],
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

	render() {
		return (
      <div>
        <SideActive />
        <h2>Welcome {this.state.data.firstName}</h2>
      </div>
		);
	}
}

export default UserPage;
