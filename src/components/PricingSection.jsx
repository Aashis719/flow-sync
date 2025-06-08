import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="  py-12 md:py-20  bg-gradient-to-t from-blue-200 via-blue-100 to-white " id="pricing">
      <div className="container mx-auto  md:px-6 text-center">
        <div className="px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300 p-1">
          Simple & Transparent Pricing
        </h2>
        <p className="text-lg md:mb-16 max-w-xl mx-auto font-semibold">
          Choose the plan that's right for you. No hidden fees, no surprises . Get started with FlowSync today !
        </p>
        </div>

        <div className="p-10 px-4 overflow-x-auto">
  <div className="flex space-x-6 md:grid md:grid-cols-3 md:gap-12 ">
    {/* Free Plan */}
    <div className="bg-white p-8 rounded-2xl w-72 min-w-72 h-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:border-2 border-purple-500">
      <h3 className="text-3xl font-semibold mb-4 text-gray-800">Free Plan</h3>
      <p className="text-4xl font-bold text-gray-800 mb-4">$0/mo</p>
      <ul className="mb-8 space-y-2 text-left text-gray-600">
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Basic Features
        </li>
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Perfect for Individuals
        </li>
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Limited Support
        </li>
      </ul>
      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        Get Started
      </button>
    </div>

    {/* Pro Plan */}
    <div className="bg-white p-8 rounded-2xl w-72 min-w-72 h-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out relative hover:border-2 border-purple-500">
      <div className="absolute top-0 right-0 bg-yellow-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
        Most Popular
      </div>
      <h3 className="text-3xl font-semibold mb-4 text-gray-800">Pro Plan</h3>
      <p className="text-4xl font-bold text-gray-800 mb-4">$19/mo</p>
      <ul className="mb-8 space-y-2 text-left text-gray-600">
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> All Features
        </li>
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> AI Automation
        </li>
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Priority Support
        </li>
      </ul>
      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        Get Started
      </button>
    </div>

    {/* Enterprise Plan */}
    <div className="bg-white p-8 rounded-2xl w-72 min-w-72  h-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:border-2 border-purple-500 ">
      <h3 className="text-3xl font-semibold mb-4 text-gray-800">Enterprise Plan</h3>
      <p className="text-4xl font-bold text-gray-800 mb-4">$49/mo</p>
      <ul className="mb-8 space-y-2 text-left text-gray-600">
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Custom Integrations
        </li>
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Team Access
        </li>
        <li className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-400" /> Unlimited Automation
        </li>
      </ul>
      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        Get Started
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Pricing;
