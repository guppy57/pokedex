import React from "react";

const normalizeName = (name: string): string => {
	const nameArray = name.split("-");
	const nameArrayNormalized = nameArray.map((name) => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	});

	return nameArrayNormalized.join(" ");
}

export default normalizeName;