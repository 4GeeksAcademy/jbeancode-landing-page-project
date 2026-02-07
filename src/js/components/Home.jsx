import React from "react";
import { CardRow } from "./CardRow";
import {Jumbotron} from "./Jumbotron";
import {Navbar} from "./Navbar";
import { Footer } from "./Footer";

//README - I still need to make my CARDS on this scalable/dyanmic for smaller screen formats. They should stack 1 at a time.

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export const Home = () => {
	return (
		<div className="Home me-4 ms-4">
			<Navbar />
			<Jumbotron />
			<CardRow />
			<Footer />
		</div>
  	)};
export default Home;