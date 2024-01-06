import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6"  

const Footer = () => {
  return (
    <section className='main_contain flex_center mt-20 border'>
      <div className='content_box flex_center flex-col'>
        <div className='flex sm:items-center flex-col my-10 w-5/6 md:w-1/3'>
          <h1 className='font-bold my-2 '>Mode UI</h1>
          <p className='sm:text-center text-gray-500 text-sm'>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</p>
        </div>
        <div className='content_box flex justify-start border-t mt-10 flex-wrap'>
          <div className=' p-3 mr-32'>
            <h6 className='my-4 font-bold text-sm'>Company</h6>
            <h6 className='footLink '>About us</h6>
            <h6 className='footLink'>Pricing</h6>
            <h6 className='footLink'>Contact us</h6>
            <h6 className='footLink'>Features</h6>
          </div>
          <div className=' p-3 mr-32 '>
            <h6 className='my-4 font-bold text-sm'>Product</h6>
            <h6 className='footLink'>Figma design system</h6>
            <h6 className='footLink'>Ios kit</h6>
            <h6 className='footLink'>Andriod kit</h6>
            <h6 className='footLink'>Wireframe</h6>
          </div>
          <div className=' p-3 mr-32'>
            <h6 className='my-4 font-bold text-sm'>Resources</h6>
            <h6 className='footLink'>Templates</h6>
            <h6 className='footLink'>Landing pages</h6>
            <h6 className='footLink'>Documentaion</h6>
            <h6 className='footLink'>Comp library</h6>
          </div>
          <div className=' p-3 mr-32'>
            <h6 className='my-4 font-bold text-sm'>Legal</h6>
            <h6 className='footLink'>Privacy policy</h6>
            <h6 className='footLink'>Terms and Conditions</h6>
            <h6 className='footLink'>Disclaimer</h6>
            <h6 className='footLink'>Affiliate programme</h6>
          </div>
          <div className=' p-3 mr-32'>
            <h6 className='my-4 font-bold text-sm'>Support</h6>
            <h6 className='footLink'>Help centre</h6>
            <h6 className='footLink'>Raise ticket</h6>
            <h6 className='footLink'>Report</h6>
            <h6 className='footLink'>Refund</h6>
          </div>
        </div>
        <div className='content_box flex sm:items-center flex-col mt-8'>
          <div className="flex justify-between w-32 text-gray-500 my-3"><FaGithub className="text-lg " /> <FaLinkedin className="text-lg" /> <FaDiscord className="text-lg" /> </div>
          <p className="text-xs text-gray-500 mb-5">© 2023 Mode UI  Inc. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer