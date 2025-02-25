import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold">Resources</h2>
          <ul className="mt-2 space-y-2">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>HR Webinar</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Products</h2>
          <ul className="mt-2 space-y-2">
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
          <h2 className="text-xl font-bold">Services</h2>
          <ul className="mt-2 space-y-2">
            <li>Virtual HR</li>
            <li>Recruitment</li>
            <li>Management</li>
            <li>Reimbursement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Company</h2>
          <ul className="mt-2 space-y-2">
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold">Location</h2>
          <p className="mt-2">Garuda Bhive Workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Inquiry</h2>
          <p className="mt-2">shakti@stickyhr.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Our Newsletter</h2>
          <p className="mt-2">Enter your email and we will contact you!</p>
          <div className="mt-3 flex items-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white outline-none"
            />
            <button className="px-4 py-2 bg-gray-700 rounded-r-md">➤</button>
          </div>
        </div>

        <div className="flex space-x-4 mt-6 md:mt-0">
        <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="text-2xl cursor-pointer"/>
          <FontAwesomeIcon icon="fa-brands fa-twitter" className="text-2xl cursor-pointer"/>
          <FontAwesomeIcon icon="fa-brands fa-youtube" className="text-2xl cursor-pointer"/>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-2xl cursor-pointer"/>
          <FontAwesomeIcon icon="fa-brands fa-instagram" className="text-2xl cursor-pointer"/>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
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
