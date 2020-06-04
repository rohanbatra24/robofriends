import React, { Component } from 'react';

import CardList from './CardList';

import { robots } from './robots';
import { SearchBox } from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots      : robots,
			searchField : ''
		};
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) =>
			robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		);
		return (
			<div>
				<div className="tc">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robots={filteredRobots} />
				</div>
			</div>
		);
	}
}

export default App;
