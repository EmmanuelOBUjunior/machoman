/* eslint-disable react/prop-types */
import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { title, description, index } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center  justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
export default function Generator() {
  const [toggleModal, setToggleModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscles.length > 3) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setToggleModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
  }

  return (
    <SectionWrapper
      title={["It's", "Huge", "o'clock"]}
      header={"generate your workout"}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => setPoison(type)}
              key={typeIndex}
              className={
                "bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 " +
                (type === poison
                  ? " border-[3px] border-blue-600"
                  : " border-blue-400")
              }
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={() => setToggleModal((toggleModal) => !toggleModal)}
          className="flex items-center p-3 relative justify-center"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {toggleModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  className={
                    "hover:text-blue-600 duration-200 " +
                    (muscles.includes(muscleGroup)
                      ? " text-blue-400"
                      : " ")
                  }
                  key={muscleGroupIndex}
                >
                  <p className="uppercase">{muscleGroup.replace("_", " ")}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => setGoal(scheme)}
              key={schemeIndex}
              className={
                "bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 " +
                (scheme === goal
                  ? " border-[3px] border-blue-600"
                  : " border-blue-400")
              }
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
