import { FiArrowRight, FiGlobe, FiKey, FiLock } from "react-icons/fi"

const Card = ({icon,heading,desc}) =>{
    return(
        <div className="w-64 mx-5 my-5 h-fit flex_center flex-col">
            <span className="w-12 h-12 my-3 flex_center text-xl rounded-full bg-purple-100 text-purple-900">{icon}</span>
            <h2 className="text-xs sm:text-sm">{heading}</h2>
            <p className="para2">{desc}</p>
        </div>
    )
}

const Feature1 = () => {
  return (
    <section className="main_contain flex_center py-5">
        <div className=" w-5/6 flex_center flex-col my-7">
            <h1 className="heading2 w-11/12 sm:w-3/5 lg:w-2/5">Elevating Card Programs with Cutting-Edge Technology</h1>
            <p className="para1 w-11/12 sm:w-3/5 md:w-2/5">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="btn_icon text-purple-900 p-2 my-2"><span>Compare all Pro features</span> <FiArrowRight className="ml-3" /> </button>
            <div className="content_box md:flex-row flex-col flex_between mt-5">
                <Card icon={<FiGlobe/>} heading="Globally Accepted" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
                <Card icon={<FiKey/>} heading="Biometric Integrated" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
                <Card icon={<FiLock/>} heading="Fully Secured" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
            </div>
        </div>
    </section>
  )
}

export default Feature1