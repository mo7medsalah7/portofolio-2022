import WrapperSection from '../WrapperSection'

    const skillsItems = ['HTML5', 'CSS3', 'Javascript', 'Reactjs', 'NextJS', 'TailwindCss']

function Skills() {
    return (
        <WrapperSection>
           <div>
               <div className="sectionTitle">
                    <h2 >Skills</h2>
               </div>
               <div className="skill-item flex justify-evenly m-auto">
                    {skillsItems.map(skill => {
                        return <div className=" transition-transform delay-100 duration-100 shadow-lg p-5 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]"><h3 className="text-lg">{skill}</h3></div>
                    })}
               </div>
           </div>
        </WrapperSection>
    )
}

export default Skills
