import WrapperSection from "../WrapperSection";
import Card from "./Card";
import ParadisoScreen from "../../public/paradiso.png";
import NetflixCloneScreen from "../../public/netflix-clone.png";
import RealStateScreen from "../../public/real-estate.png";
import WorksHeader from "./WorksHeader";

console.log(ParadisoScreen);

const worksDetails = [
	{
		projectName: "Paradiso",
		projectLink: "https://paradiso-gate.herokuapp.com/",
		cloudinary_image_v: "v1648737039",
		cloudinary_image_name: "paradiso-hero",
		projectDesc: "app for movies exploring.",
		projectScreen: ParadisoScreen,
	},
	{
		projectName: "Netflix Clone",
		projectLink: "https://netflix-clone-phi-ruby.vercel.app/",
		projectDesc: "A clone for the netflix main header.",
		cloudinary_image_v: "v1648737590",
		cloudinary_image_name: "netflix-hero_rvrdfr",
		projectScreen: NetflixCloneScreen,
	},
	{
		projectName: "Real Estate Explore",
		projectLink:
			"https://real-estate-explorer-fiye0ru7t-mo7medsalah7.vercel.app/",
		projectDesc: "Explore a room !",
		cloudinary_image_v: "v1648738635",
		cloudinary_image_name: "real-estate_gcjogr",
		projectScreen: RealStateScreen,
	},
];

const JsWorksDetails = [
	{
		projectName: "Colour Flipper",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
	{
		projectName: "Counter",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
	{
		projectName: "Menu",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
	{
		projectName: "Modal",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
	{
		projectName: "Music Player",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
	{
		projectName: "Colour Flipper",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
	{
		projectName: "Colour Flipper",
		projectLink: "https://paradiso-gate.herokuapp.com/",
	},
];

function Works() {
	return (
		<WrapperSection>
			<div className="m-auto">
				<div className=" sectionTitle border-blue-500 border-r-8  m-auto">
					<h2 className="text-base sm:text-lg md:text-3xl lg:text-5xl">
						Works
					</h2>
				</div>
			</div>

			<div className="text-left ">
				<WorksHeader title={"Nextjs & React"} logo="nextjs" />
				<div className="container mx-auto shadow-grey-400">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{worksDetails.map((project) => {
							return (
								<>
									<Card
										project={project}
										cardType="reactjs"
										cloudinary_image_v={
											project.cloudinary_image_v
										}
										cloudinary_image_name={
											project.cloudinary_image_name
										}
									/>
								</>
							);
						})}
					</div>
				</div>
				<WorksHeader title={"Pure Javascript"} logo="js" />
				<div className="container mx-auto shadow-grey-400">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{JsWorksDetails.map((project) => {
							return (
								<>
									<Card
										project={project}
										cloudinary_image_v={
											project.cloudinary_image_v
										}
										cloudinary_image_name={
											project.cloudinary_image_name
										}
										cardType="purejs"
									/>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</WrapperSection>
	);
}

export default Works;
