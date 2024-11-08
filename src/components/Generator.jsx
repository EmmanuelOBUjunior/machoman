import SectionWrapper from "./SectionWrapper";


function Header({index, title, description}){
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p>{index}</p>
        <h4>{title}</h4>
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
