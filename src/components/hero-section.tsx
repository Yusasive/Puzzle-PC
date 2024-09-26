import HeroImage from '@/assets/img/hero-section-image.png'
import Bell from "../icons/bell"
import BlurField from './blur-field'
import Navbar from './Navbar'
import SaveTimeSection from './SaveTimeSection'
import PerfectFitSection from './PerfectFitSection'


const HeroSection = () => {
  return (
    <section className="w-full min-h-[130vh] font-Satoshi flex flex-col items-center gap-y-20 " >
      <Navbar/>
      <div className="w-fit h-fit flex flex-col justify-center items-center gap-8">
        <h1 className="text-7xl font-extrabold text-purple-950">
          The everything app for work
        </h1>
        <p className="text-center text-2xl font-semibold" ><span className="font-extrabold">Lorem ipsum dolor sit amet</span> consectetur adipisicing elit <br /> neque et sint reiciendis eius, impedit </p>
        <button className="w-fit-h-fit font-bold text-2xl text-white border border-purple-300 rounded-xl px-12 py-3 bg-gradient-to-r from-sky-200 to-purple-400 ">Get Started. It's FREE</button>
      </div>
      <section className="w-full flex flex-col items-center gap-y-4 relative" >
        <div className="w-fit h-fit font-semibold text-purple-900 flex justify-between gap-x-8">
          {['Forms', 'Authentication', 'Chat', 'Calendar', 'Tasks', 'File Storage', 'Analytics'].map((item, index) => (
            <div key={index} className="w-fit h-fit flex flex-col items-center gap-1 hover:-translate-y-3 transition-transform duration-200">
              <button className="w-14 h-14 bg-gray-200/10 backdrop-blur-2xl rounded-[14px] border-2 border-purple-100 flex justify-center items-center">
                <Bell />
              </button>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <BlurField />
        <div className="w-3/4 min-h-fit flex flex-col items-center border-2 border-purple-100 rounded-2xl p-2 bg-white/30 backdrop-blur-2xl ">
          <div className="w-full min-h-fit rounded-xl bg-white ">
            <img src={HeroImage} alt="Hero Image" className='w-full h-auto rounded-[inherit]' />
          </div>
        </div>
      </section>
      
      <SaveTimeSection/>
      <PerfectFitSection/>


    </section>

  )
}

export default HeroSection