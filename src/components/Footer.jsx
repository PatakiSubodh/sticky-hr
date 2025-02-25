import { FaWhatsapp, FaXTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="col-span-1">
          <p className="text-gray-300">
            Our sticky HR is developing a comprehensive HRMS product to manage end-to-end HR services for early-stage startup companies.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <button className="bg-teal-600 text-white px-4 py-2 flex items-center space-x-2">
              <div><span>+91 90332 44538</span></div>
              <div className="rounded-full"><MdCall className="text-xl"/></div>
            </button>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-bold">Location</h2>
            <p className="mt-2 text-gray-300">Garuda Bhive Workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-bold">Inquiry</h2>
            <p className="mt-2 text-gray-300">shakti@stickyhr.com</p>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="col-span-2 grid grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold">Resources</h2>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>HR Webinar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Products</h2>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Complete HR</li>
              <li>Payroll Management</li>
              <li>Attendance & Time</li>
              <li>Workflow Management</li>
              <li>Recruitment</li>
              <li>Travel & Expense</li>
              <li>Reimbursement</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Services</h2>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Virtual HR</li>
              <li>Recruitment</li>
              <li>Management</li>
              <li>Reimbursement</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Company</h2>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Pricing</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold">Our Newsletter</h2>
          <p className="mt-2 text-gray-300">Enter your email and we contact you!</p>
          <div className="mt-3 flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 bg-gray-800 text-white outline-none w-full"
            />
            <button className="px-4 py-2 bg-gray-700">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
          <div className="mt-6 flex space-x-4">
            <FaWhatsapp className="text-2xl cursor-pointer" />
            <FaXTwitter className="text-2xl cursor-pointer" />
            <FaYoutube className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 StickyHR Solution Pvt. Ltd, All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
          <p>Security Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
