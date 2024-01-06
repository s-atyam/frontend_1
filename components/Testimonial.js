import { FaStar } from "react-icons/fa"
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='main_contain flex_center my-10'>
        <div className='content_box flex_center my-10 flex-col'>
            <Image className='w-16 sm:w-24 mx-1' src='/assets/logo/wise.svg' alt='wise Logo' width={50} height={50} />
            <h1 className='heading3 w-11/12 md:w-2/5'>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</h1>
            <div className='w-11/12 md:w-1/6 flex_center flex-col'>
                <Image className='w-16' src='/assets/images/avatar.svg' alt='Avatar' width={50} height={50} />
                <h6 className="text-sm mt-2">Nick Babich</h6>
                <p className="text-gray-500 text-xs my-1">Lead Designer</p>
                <span className="flex_between text-yellow-600 "><FaStar className="mx-1" /><FaStar className="mx-1" /><FaStar className="mx-1" /><FaStar className="mx-1" /></span>
            </div>
        </div>
    </div>
  )
}

export default Testimonial