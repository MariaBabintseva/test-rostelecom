import React from "react";

export const Company = ({ user }) => {
	return (
		<table className="container-company">
			<thead>
				<tr>
					<th className="container-headers" colSpan="2">
						Компания:
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="container-firstСolumn">Название:</td>
					<td>{user.company.name}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Слоган:</td>
					<td>{user.company.catchPhrase}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Сфера деятельности:</td>
					<td>{user.company.bs}</td>
				</tr>
			</tbody>
		</table>
	);
};
