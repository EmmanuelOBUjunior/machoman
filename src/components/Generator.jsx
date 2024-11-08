import SectionWrapper from "./SectionWrapper";


function Header({index, title, description}){
  return(
    <div>
      <div>
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
        <Header/>
    </SectionWrapper>
  )
}
