import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black p-9 mt-11">
      <div
        style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: "17px",
          fontWeight: 400,
          color: "rgb(34, 66, 41)",
        }}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">COMPANY</h3>
          <hr />
          <ul className="text-slate-500 space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Corporate Orders
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Refer a Friend
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Our Guarantee
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">SUPPORT</h3>
          <ul className="text-slate-500 space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Help + FAQs
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Track Your Order
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Shipping
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Contact Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">
            PLANT QUESTIONS?
          </h3>
          <ul className="text-slate-500 space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Plant Care Tips
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Plant Life Blog
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Vera Plant Care App
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Meet Plant Mom
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Contact the Grow-How™ Team
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">
            STAY IN THE LOOP
          </h3>
          <p className="mb-4 text-slate-500">
            Stay in the loop with special offers, plant-parenting tips, and
            more.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 rounded-none border border-black"
          />
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
