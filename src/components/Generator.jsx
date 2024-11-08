import SectionWrapper from "./SectionWrapper";


function Header({index, title, description}){
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-lg">{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}
export default function Generator() {
  return (
    <SectionWrapper title={["It's", "Huge", "o'clock"]} header={"generate your workout"}>
        <Header index={"01"} title={"Pick your poison"} description={"Select the workout you wish to endure"}/>
    </SectionWrapper>
  )
}
