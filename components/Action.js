import { FaHeadphonesSimple, FaRegCreditCard } from "react-icons/fa6";

const Action = () => {
  return (
    <section className='main_contain flex_center my-20'>
      <div className='w-5/6 md:w-2/5 flex_center flex-col '>
        <h1 className='heading2'>Unlock Limitless Possibilities with Our New Card Solutions</h1>
        <div className="w-full flex_center mt-5 flex-wrap">
          <button className='btn_icon text-xs m-1 px-4 py-2 w-5/6 sm:w-fit text-white bg-purple-900'><span className="mr-3">Unlock your card</span> <FaRegCreditCard /></button>
          <button className='btn_icon text-xs m-1 px-4 py-2 w-5/6 sm:w-fit text-gray-600 bg-gray-200'><span className="mr-3">Customer support</span> <FaHeadphonesSimple /></button>
        </div>
      </div>
    </section>
  )
}

export default Action