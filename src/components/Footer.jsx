import { MdCall } from "react-icons/md";
import { FaPaperPlane, FaWhatsapp, FaXTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 bg-[#1C1C1C] text-white p-5">
      <div className="pt-10 pr-5">
        <div className="col-span-1 flex flex-col justify-center align-middle border-1 border-r-2 pr-2">
          <img src="./src/assets/images/image.png" alt="" className="mb-4" />
          <p className="text-gray-400">
            Our sticky HR is developing a comprehensive HRMS product to manage end-to-end HR services for early-stage startup companies.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <button className="flex items-center space-x-2">
              <div className="bg-[#009688] text-white px-4 py-2 rounded-full font-semibold">
                <span>+91 90332 44538</span>
              </div>
              <div className="bg-[#009688] text-white p-3 ml-0 rounded-full">
                <MdCall className="text-xl" />
              </div>
            </button>
          </div>
          <div className="mt-6 pr-5" >
            <h2 className="text-lg font-bold text-white">Location</h2>
            <p className="mt-2 text-gray-400">Garuda Bhive Workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-bold text-white">Inquiry</h2>
            <p className="mt-2 text-gray-400">shakti@stickyhr.com</p>
          </div>
        </div>
      </div>
      
      
      <div className="col-span-3 grid grid-cols-4 grid-rows-2 gap-3 p-5">
        {/** Resources */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-white">Resources</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>HR Webinar</li>
          </ul>
        </div>
        
        {/** Products */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-white">Products</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Complete HR</li>
            <li>Payroll Management</li>
            <li>Attendance & Time</li>
            <li>Workflow Management</li>
            <li>Recruitment</li>
            <li>Travel & Expense</li>
            <li>Reimbursement</li>
          </ul>
        </div>
        
        {/** Services */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-white">Services</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Virtual HR</li>
            <li>Recruitment</li>
            <li>Management</li>
            <li>Reimbursement</li>
          </ul>
        </div>
        
        {/** Company */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-white">Company</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
        {/** Newsletter */}
        <div className="col-span-2 pt-10 pl-5">
          <h2 className="text-lg font-bold text-white">Our Newsletter</h2>
          <p className="mt-2 text-gray-400">Enter your email and we contact you!</p>
          <div className="mt-3 flex items-center border border-gray-600 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 bg-[#292929] text-white outline-none w-full"
            />
            <button className="px-4 py-2 bg-[#505050]">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
        
        {/** Social Media Icons */}
        <div className="col-span-2 p-4 flex space-x-4 text-gray-200 text-2xl pt-20 pl-10 ">
          <FaWhatsapp className="cursor-pointer text-4xl opacity-70 hover:opacity-100" />
          <FaXTwitter className="cursor-pointer text-4xl" />
          <FaYoutube className="cursor-pointer text-4xl" />
          <FaLinkedin className="cursor-pointer text-4xl" />
          <FaInstagram className="cursor-pointer text-4xl" />
        </div>
      </div>
      
      {/** Footer Bottom */}
      <div className="col-span-4 text-center text-gray-500 text-sm mt-3 border-t border-gray-700 pt-4">
        <p>© 2025 Stickyhr Solution Pvt. Ltd, All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-white">Terms Of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Security Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
