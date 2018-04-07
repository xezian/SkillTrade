import React from 'react';
import { Row, Col, Input, Button, Collection, CollectionItem } from 'react-materialize';
import API from '../../utils/API';

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
  }

  handleOptionChange(event) {
    this.setState({
      option: event.target.value,
    });
  }

  handleInputChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(`option: ${this.state.option}, category: ${this.state.category}`);
    event.preventDefault();

    API.getResults(this.state.option, this.state.category)
      .then(res => {
      this.setState({
        option: '1',
        category: '',
        searchResults: [],
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
		  <div>
		    <h1 className="center-align">Skill Share</h1>
		    <Row>
			    <Col s={2} />
			    <Input 
			    	s={3} 
			    	type="select" 
			    	label="Options" 
			    	defaultValue="1"
			    	value={this.state.option}
            onChange={this.handleOptionChange}
           >
			      <option value="1">I can ...</option>
			      <option value="2">I need ...</option>
			    </Input>
			    <Input 
            placeholder="Search..." 
            s={4} 
            label="What's up?"
            value={this.state.category}
            onChange={this.handleInputChange} 
          />
			    <Button 
			    	waves="light"
			    	onClick={this.handleSubmit}
			    >Search</Button>
			  </Row>
			  <Row>
          <Col s={2} />
          <Col s={8}>
            <h4 className="center-align">Search Results</h4>
            {this.state.searchResults ? (
              <Collection>
                {this.state.searchResults.map(result => (
                  <CollectionItem key={result._id}>
                    <h4>{result.name}</h4>
                    <p>{result.description}</p>
                  </CollectionItem>
                ))}
              </Collection>
            ) : (
              <p>No results listed...</p>
            )}
          </Col>
          <Col s={2}/>
        </Row>
		  </div>
		);
	}
}

export default HomePage;
