import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle


//create your first component


	const cards = [
		{
		image: "https://placehold.jp/500x325.png",
		title: "Card Title",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quasi ducimus, itaque error aperiam saepe obcaecati culpa eius temporibus exercitationem? Perferendis iste nobis, itaque nostrum quas aspernatur deserunt iusto numquam!",
		},
		{
		image: "https://placehold.jp/500x325.png",
		title: "Card Title",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quasi ducimus, itaque error aperiam saepe obcaecati culpa eius temporibus exercitationem? Perferendis iste nobis, itaque nostrum quas aspernatur deserunt iusto numquam!",
		},
		{
		image: "https://placehold.jp/500x325.png",
		title: "Card Title",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quasi ducimus, itaque error aperiam saepe obcaecati culpa eius temporibus exercitationem? Perferendis iste nobis, itaque nostrum quas aspernatur deserunt iusto numquam!",
		},
		{
		image: "https://placehold.jp/500x325.png",
		title: "Card Title",
		description: "SLorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quasi ducimus, itaque error aperiam saepe obcaecati culpa eius temporibus exercitationem? Perferendis iste nobis, itaque nostrum quas aspernatur deserunt iusto numquam!",
		}

	]

	const Home = () => {

	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className = "container my-4">
			<div className= "row">
				{cards.map((item, index) => (
					<Card cards={item} />
					))}
			</div>
			</div>
			<Footer />
			
		</div>
	);
};

export default Home

