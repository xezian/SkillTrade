import React from 'react';
import { Row, Col, Input, Button, Card, CardTitle } from 'react-materialize';
import { Side } from '../../components/SideNav';
import API from '../../utils/API';
import './HomePage.css';
import logo from '../../img/logo.png';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: '1',
      category: '',
      searchResults: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      option: event.target.value,
    });
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value,
    })
  }

  handleInputChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    API.getResults(this.state.option, this.state.category)
      .then((res) => {
        this.setState({
          option: '1',
          category: '',
          searchResults: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Side />
        <div className="logo-div">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Row>
          <Col s={1} m={2} l={2} />
          <Col s={10} m={8} l={2} className="main-input" >
            <Input
              s={12}
              type="select"
              value={this.state.option}
              onChange={this.handleOptionChange}
              className="option"
            >
              <option value="1">I can ...</option>
              <option value="2">I need ...</option>
            </Input>
          </Col>
          <Col s={1} m={2} />
          <Col s={1} m={2} className="clear" />
          <Col s={8} m={7} l={5} className="main-input" >
            <Input
              s={12}
              type="select"
              value={this.state.category}
              onChange={this.handleCategoryChange}
              className="option"
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
          </Col>
          <Col s={2} m={1} l={1}>
            <Button
              floating
              large
              className="btn-search"
              waves="light"
              icon="search"
              onClick={this.handleSubmit}
              disabled={!this.state.category}
            />
          </Col>
          <Col s={1} m={2} l={2} />
        </Row>
        <Row>
          <Col s={1} />
          <Col s={10}>
            {this.state.searchResults.length > 0 ? (
              <div>
                <h4 className="center-align">Search Results</h4>
                {this.state.searchResults.map(result => (
                  <div className="card-layout" key={result._id}>
                    <Card
                      header={<CardTitle reveal image={result.img} waves="light" />}
                      title={result.category}
                      reveal={
                        <div>
                        <p>{result.description}</p>
                        <Button waves='light' node='a' href={result.user.email}>Send Message</Button>
                        </div>
                      }
                    >
                      <Button waves='light' node='a' href={result.user.email}>Send Message</Button>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <p className="center-align">
                No posting is available at this moment...
              </p>
            )}
          </Col>
          <Col s={1} />
        </Row>
      </div>
    );
  }
}

export default HomePage;
