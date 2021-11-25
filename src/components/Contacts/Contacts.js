import React from "react";
import { Email } from "../Email/Email";
import { Phone } from "../Phone/Phone";
import { Website } from "../Website/Website";

export const Contacts = ({ user }) => {
	return (
		<div className="cards-user_contacts">
			<Email user={user} />
			<Phone user={user} />
			<Website user={user} />
		</div>
	);
};
