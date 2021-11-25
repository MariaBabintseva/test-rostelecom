import React from "react";

export const Email = ({ user }) => {
	return (
		<div className="contacts_email">
			<div className="contacts-header">Email:</div>
			<div className="contacts-value">{user.email}</div>
		</div>
	);
};
