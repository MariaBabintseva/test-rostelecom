import React from "react";

export const Name = ({ user }) => {
	return (
		<div>
			<div className="cards-user_name">Имя: {user.name}</div>
			<div>Имя пользователя: {user.username}</div>
		</div>
	);
};
