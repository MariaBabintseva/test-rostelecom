import React from "react";

export const Address = ({ user }) => {
	return (
		<table className="container-address">
			<thead>
				<tr>
					<th className="container-headers" colSpan="2">
						Адрес:
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="container-firstСolumn">Улица:</td>
					<td>{user.address.street}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Апартаменты:</td>
					<td>{user.address.suite}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Город:</td>
					<td>{user.address.city}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Индекс:</td>
					<td>{user.address.zipcode}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Координаты:</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Широта:</td>
					<td>{user.address.geo.lat}</td>
				</tr>
				<tr>
					<td className="container-firstСolumn">Долгота:</td>
					<td>{user.address.geo.lng}</td>
				</tr>
			</tbody>
		</table>
	);
};
