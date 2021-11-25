import React, { useState, useEffect } from "react";
import "./Users.css";
import { Address } from "../Address/Address";
import { Company } from "../Company/Company";
import { Contacts } from "../Contacts/Contacts";
import { Name } from "../Name/Name";
import { Header } from "../Header/Header";

export const Users = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [users, setUsers] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setUsers(result);
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	const filteredUsers = users.filter(function (user) {
		return user.name.toLowerCase().indexOf(input.toLowerCase()) === 0;
	});

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<Header users={filteredUsers} setUsers={setUsers} setInput={setInput} />
				<div className="cards">
					{filteredUsers.map((user) => (
						<div key={user.id} className="cards-user">
							<Name user={user} />
							<div className="cards-user_container">
								<Address user={user} />
								<Company user={user} />
							</div>
							<Contacts user={user} />
						</div>
					))}
				</div>
			</div>
		);
	}
};
