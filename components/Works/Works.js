import WrapperSection from "../WrapperSection";
import Card from "./Card";
import ParadisoScreen from "../../public/paradiso.png";
import NetflixCloneScreen from "../../public/netflix-clone.png";
import RealStateScreen from "../../public/real-estate.png";
import BudgetPlusScreen from "../../public/budgetplus.png";
import SimpleCalculatorScreen from "../../public/simple-calculator.png";
import QuizAppScreen from "../../public/QuizApp.png";
import SearchFilterScreen from "../public/search-filter.png";
import WorksHeader from "./WorksHeader";
import Item from "../Item";

console.log(ParadisoScreen);

const worksDetails = [
  {
    projectName: "Paradiso",
    projectLink: "https://paradiso-movies-react.vercel.app/",
    cloudinary_image_v: "v1648737039",
    cloudinary_image_name: "paradiso-hero",
    projectDesc: "app for movies exploring.",
    projectScreen: ParadisoScreen,
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
  {
    projectName: "Budget+",
    projectLink: "https://budget-traker.vercel.app/",
    cloudinary_image_v: "v1649784303",
    cloudinary_image_name: "budgetplus",
    projectDesc: "Your budget and expenses tracking.",
    projectScreen: BudgetPlusScreen,
  },
  {
    projectName: "Calculator",
    projectLink:
      "https://simple-calculator-j7vtrzcel-mo7medsalah7.vercel.app/  ",
    cloudinary_image_v: "v1649961056",
    cloudinary_image_name: "simple-calculator",
    projectDesc: "A simple calculator.",
    projectScreen: SimpleCalculatorScreen,
  },
  {
    projectName: "Quiz App",
    projectLink: "https://quiz-appp.vercel.app/",
    cloudinary_image_v: "v1653238497",
    cloudinary_image_name: "QuizApp",
    projectDesc: "A simple quiz app.",
    projectScreen: QuizAppScreen,
  },
  {
    projectName: "Search Filter App",
    projectLink: "https://search-filter.vercel.app",
    cloudinary_image_v: "v1653316745",
    cloudinary_image_name: "search-filter",
    projectDesc: "Simple Filteration App.",
    projectScreen: SearchFilterScreen,
  },
  {
    projectName: "Netflix Clone",
    projectLink: "https://netflix-clone-phi-ruby.vercel.app/",
    projectDesc: "A clone for the netflix main header.",
    cloudinary_image_v: "v1648737590",
    cloudinary_image_name: "netflix-hero_rvrdfr",
    projectScreen: NetflixCloneScreen,
  },
];

const JsWorksDetails = [
  {
    itemName: "Colour Flipper",
    isLink: true,
    itemLink:
      "https://javascript-projects-salah.netlify.app/color-flipper/index.html",
  },
  {
    itemName: "Counter",
    isLink: true,
    itemLink:
      "https://javascript-projects-salah.netlify.app/counter/index.html",
  },
  {
    itemName: "Menu",
    isLink: true,
    itemLink: "https://javascript-projects-salah.netlify.app/menu/index.html",
  },
  {
    itemName: "Modal",
    isLink: true,
    itemLink: "https://javascript-projects-salah.netlify.app/modal/index.html",
  },
  {
    itemName: "Music Player",
    isLink: true,
    itemLink:
      "https://javascript-projects-salah.netlify.app/music-player/index.html",
  },
  {
    itemName: "Questions",
    isLink: true,
    itemLink:
      "https://javascript-projects-salah.netlify.app/questions/index.html",
  },
  {
    itemName: "Reviews",
    isLink: true,
    itemLink:
      "https://javascript-projects-salah.netlify.app/reviews/index.html",
  },
  {
    itemName: "Scroll",
    isLink: true,
    itemLink: "https://javascript-projects-salah.netlify.app/scroll/index.html",
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
                    cloudinary_image_v={project.cloudinary_image_v}
                    cloudinary_image_name={project.cloudinary_image_name}
                  />
                </>
              );
            })}
          </div>
        </div>
        <WorksHeader title={"Pure Javascript"} logo="js" />
        <div className="container mx-auto shadow-grey-400">
          <Item items={JsWorksDetails} isLink />
        </div>
      </div>
    </WrapperSection>
  );
}

export default Works;
