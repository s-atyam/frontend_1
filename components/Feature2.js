import { FiArrowRight } from "react-icons/fi"
import Image from 'next/image'

const Feature2 = () => {
  return (
    <section className="main_contain flex_center py-5">
        <div className=" w-5/6 flex_center flex-col my-7">
            <h1 className="heading2 w-11/12 sm:w-2/3 lg:w-2/5">Elevating Card Programs with Cutting-Edge Technology</h1>
            
            <p className="para1 w-11/12 sm:w-3/5 md:w-2/5">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <button className="btn_icon text-purple-900 p-2 my-2"><span>Compare all Pro features</span> <FiArrowRight className="ml-3" /> </button>
            
            <div className="content_box md:flex-row flex-col flex_between my-16">
              <Image className='w-full md:w-1/2 m-4' src='/assets/images/mobile.svg' alt='nuxt Logo' width={50} height={50} />
              <Image className='w-full md:w-1/2 m-4' src='/assets/images/spending.svg' alt='nuxt Logo' width={50} height={50} />
            </div>
        </div>
    </section>
  )
}

export default Feature2