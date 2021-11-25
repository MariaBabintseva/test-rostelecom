import React from "react";

export const Phone = ({ user }) => {
	return (
		<div className="contacts_phone">
			<div className="contacts-header">Phone:</div>
			<div className="contacts-value">{user.phone}</div>
		</div>
	);
};
