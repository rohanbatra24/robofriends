import React from 'react';

import Card from './Card';

export const CardList = ({ robots }) => {
	return (
		<div>
			<Card robots={robots[0].id} name={robots[0].name} email={robots[0].email} />
			<Card robots={robots[1].id} name={robots[1].name} email={robots[1].email} />
			<Card robots={robots[2].id} name={robots[2].name} email={robots[2].email} />
		</div>
	);
};

export default CardList;
