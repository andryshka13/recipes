import React from "react";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const FooterPage = () => {
  const handleScroll = () => {
    const mealDetails = document.querySelector(".header");

    if (mealDetails) {
      mealDetails.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="border-t ">
      <div className="flex justify-between h-auto bg-olive ">
        <Link
          onClick={handleScroll}
          to="/"
          className="md:flex md:p-10 p-2 text-xl font-light "
        >
          <GiMeal size={40} className="ml-2" />
          <span className=" ml-2 mt-1 font-light text-2xl ">Eat Tasty</span>
        </Link>
        <div className="flex flex-col justify-center">
          <div className="text-center">Follow us</div>
          <div className="flex items-center flex-col xs:flex-row justify-between">
            <Link className="p-2">
              <FaFacebookSquare size={25} />
            </Link>
            <Link className="p-2">
              <FaSquareInstagram size={25} />
            </Link>
            <Link
              className="p-2"
              to={"https://www.linkedin.com/in/andrii-kerekeza-779118205/"}
            >
              <FaLinkedin size={25} />
            </Link>
          </div>
        </div>
        <div className="grid p-1 md:flex md:p-10 items-center justify-center ">
          <Link className="mr-6">About</Link>
          <Link>Company</Link>
        </div>
      </div>
      <div>
        <h6 className="w-auto flex justify-center text-center bg-olive h-20 items-center ">
          Recipes you want to make. Cooking advice that works. Restaurant
          recommendations you trust.
        </h6>
      </div>
      <div className="flex justify-between items-center flex-wraps sm:px-16 px-6 py-10">
        <p className=" text-gray-500 ">Eat Tasty </p>
        <div className="flex justify-between">
          <Link href="/" className="m-4 text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="m-4 text-gray-500">
            Term of use
          </Link>
          <Link href="/" className="m-4 text-gray-500">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
