import React from "react";

export const Search = ({ setInput }) => {
	const InputHandle = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className="header-search">
			<div className="header-search_text">Поиск</div>
			<input
				className="header-search_input"
				type="text"
				placeholder="Введите имя"
				onChange={InputHandle}
			/>
		</div>
	);
};
