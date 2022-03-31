import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../public/default.jpg";

function Card({ project, cloudinary_image_v, cloudinary_image_name }) {
	return (
		<Link href={project.projectLink}>
			<a target="_blank">
				<div className="shadow-lg rounded-lg border-t-4 border-blue-300 p-6">
					<header>
						<h2 className=" text-blue-500 mb-4 text-sm md:text-base lg:text-3xl text-bolder font-montserrat font-bold">
							{project.projectName}
						</h2>
						<div className="my-5">
							<p>{project.projectDesc}</p>
						</div>
					</header>
					<Image
						src={
							`https://res.cloudinary.com/dexrp1zlw/image/upload/${cloudinary_image_v}/my-portofolio/works/${cloudinary_image_name}.png`
								? project.projectScreen.src
								: defaultImage
						}
						layout="responsive"
						width="1360"
						height="600"
						className="rounded-[8px]"
					/>
				</div>
			</a>
		</Link>
	);
}

export default Card;
