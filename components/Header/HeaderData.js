import Image from "next/image";
import BackgroundImage from "./mosalah.png";
function HeaderData() {
	return (
		<div className=" bg-[#f7c71f]  flex  m-auto">
			<div className=" flex w-full min-h-screen ">
				<div className=" m-auto">
					<div className="flex flex-col">
						<div className="mb-6">
							<h1 className="text-4xl md:text-8xl lg:text-9xl font-bold brandName">
								Mo Salah
							</h1>
							<p className="text-base md:text-2xl">
								Let's collaborate on your next project.
							</p>
						</div>
						<div className="buttons flex gap-[12px]">
							<div className="basicBtn">
								<button type="submit">Let's Work</button>
							</div>
							<div className="secondBtn">
								<button className="" type="submit">
									See My Works
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* Portofolio Image */}
				<div className="m-auto hidden md:hidden lg:flex">
					<Image src={BackgroundImage} alt="Picture of Mo Salah" />
				</div>
			</div>
		</div>
	);
}

export default HeaderData;
