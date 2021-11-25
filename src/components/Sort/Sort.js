import React from "react";

export const Sort = ({ users, setUsers, setInput }) => {
	const SortHandle = (e) => {
		if (e.target.value === "name") {
			setUsers(
				[...users].sort(function (a, b) {
					return a.name.localeCompare(b.name);
				})
			);
		} else if (e.target.value === "company") {
			setUsers(
				[...users].sort(function (a, b) {
					return a.company.name.localeCompare(b.company.name);
				})
			);
		}
	};

	return (
		<div className="header-sort">
			<div className="header-sort_text">Сортировать</div>
			<div className="header-sort_options">
				<label>
					<input name="sort" type="radio" value="name" onChange={SortHandle} />
					-по имени
				</label>
				<label>
					<input
						name="sort"
						type="radio"
						value="company"
						onChange={SortHandle}
					/>
					-по названию компании
				</label>
			</div>
		</div>
	);
};
