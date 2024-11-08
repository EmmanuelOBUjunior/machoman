import { WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";


function Header({index, title, description}){
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center  justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  )
}
export default function Generator() {
  return (
    <SectionWrapper title={["It's", "Huge", "o'clock"]} header={"generate your workout"}>
        <Header index={"01"} title={"Pick your poison"} description={"Select the workout you wish to endure"}/>
        {Object.keys(WORKOUTS).map((type, typeIndex)=>{
          return(
            <button key={typeIndex}>
              <p>{type}</p>
            </button>
          )
        })}
    </SectionWrapper>
  )
}
