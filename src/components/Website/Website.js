import React from "react";

export const Website = ({ user }) => {
	return (
		<div className="contacts_website">
			<div className="contacts-header">Website:</div>
			<div className="contacts-value">{user.website}</div>
		</div>
	);
};
