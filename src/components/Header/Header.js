import React from "react";
import { Search } from "../Search/Search";
import { Sort } from "../Sort/Sort";

export const Header = ({ users, setUsers, setInput }) => {
	return (
		<div className="header">
			<Search setInput={setInput} />
			<Sort users={users} setUsers={setUsers} />
		</div>
	);
};
