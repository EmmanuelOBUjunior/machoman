import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen gap-10 flex flex-col items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
      <p>IT&apos;S TIME TO BE A</p>
      <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Macho<span className="text-blue-400">Man</span></h1>
      </div>
      <p className="text-sm md:text-base font-light">I hereby acknowledgement that I may become <span className="text-blue-400 font-medium">unbelievably swolenormous</span> and accept all risks of becoming the local <span className="text-blue-400 font font-medium">mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
      <Button text="Accept & Begin"/>
    </div>
  )
}
