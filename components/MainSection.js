import { FiArrowRight } from "react-icons/fi";

const MainSection = () => {
  return (
    <section className="main_contain flex_center py-10 flex-col">
      <div className="w-4/5 sm:w-3/5 lg:w-2/5 h-fit grid_background flex_between flex-col">
        
        <h6 className="small_head">Seamless experience</h6>
        
        <h1 className="heading1">Unleashing the Next Generation of Card Solutions</h1>
        
        <p className="para1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        
        <button className="btn_icon bg-purple-900 text-white text-sm py-2 px-3 mt-7"><span>Unlock your Card</span> <FiArrowRight className="ml-3" /></button>
        
        <p className="text-gray-600 text-xs mt-5">*No credit card required</p>
      </div>
    </section>
  )
}

export default MainSection