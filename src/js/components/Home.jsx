import React from "react";
import { Card } from "./Card";
import {Jumbotron} from "./Jumbotron";
import {Navbar} from "./Navbar";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
  	)};
export default Home;