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

	render() {
		return (
			<div>
				<div className="tc">
					<h1>RoboFriends</h1>
					<SearchBox />
					<CardList robots={robots} />
				</div>
			</div>
		);
	}
}

export default App;
