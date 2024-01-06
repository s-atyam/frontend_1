import { FaChevronDown } from "react-icons/fa6"
import { FiLogIn, FiMenu } from "react-icons/fi"

const Navbar = () => {
  return (
    <section className="main_contain flex_center border">
      <div className="content_box flex-row flex_between my-5">
        <div className="font-extrabold text-xl">Mode UI</div>

        <div className="w-3/5 lg:w-2/5 text-gray-700 hidden md:flex justify-between items-center">
          <p className="flex_center menus"><span>Card access</span> <FaChevronDown className="text-sm ml-3"/></p>
          <p className="menus">Banking</p>
          <p className="menus">Processing</p>
          <p className="menus">About</p>
          <p className="menus">Career</p>
          <p className="menus">Contact</p>
        </div>

        <div className="flex_between">
          <button className="btn_icon bg-gray-200 text-gray-600 text-sm px-4 py-1"><span>Login</span> <FiLogIn  className="ml-2"/> </button>
          <FiMenu className="md:hidden flex ml-5 text-xl" />
        </div>
      </div>
    </section>
  )
}

export default Navbar