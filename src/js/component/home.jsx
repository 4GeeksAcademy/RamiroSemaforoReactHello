import React, { useState } from "react";


const Home = () => {
	const [ligth, setLigth] = useState(" ")

	function select() {
		setLigth(" ")
	}
	return (
		<div className="container">
			<div className="bg-black text-center col-1">
			</div>
			<div className="bg-black col-3 p-1">
				<div className={"rounded-circle bg-danger p-2 m-2 " + ligth} onClick={select} ></div>
				<div className={"rounded-circle bg-warning p-2 m-2 " + ligth} onClick={select}></div>
				<div className={"rounded-circle bg-success p-2 m-2 " + ligth} onClick={select}></div>
			</div>
		</div>
	);
};

export default Home;
