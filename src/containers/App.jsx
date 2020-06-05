import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots      : [],
			searchField : ''
		};
		console.log('constuctor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

		if (robots.length === 0) {
			return <h1>Loading</h1>;
		}
		else
			return (
				<div>
					<div className="tc">
						<h1 className="f1">RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
					</div>
				</div>
			);
	}
}

export default App;
