import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../public/default.jpg";
function Card({ project }) {
	console.log(project);
	return (
		<Link href={project.projectLink}>
			<a target="_blank">
				<div className="shadow-lg rounded-lg border-t-4 border-blue-300 p-6">
					<header>
						<h2 className=" text-blue-500 mb-4 text-sm md:text-base lg:text-3xl text-bolder font-montserrat font-bold">
							{project.projectName}
						</h2>
						<p>{project.projectDesc}</p>
					</header>
					<img
						src={
							project.projectScreen
								? project.projectScreen
								: defaultImage
						}
						alt="Screenshot of the app "
						className=""
					/>
				</div>
			</a>
		</Link>
	);
}

export default Card;
