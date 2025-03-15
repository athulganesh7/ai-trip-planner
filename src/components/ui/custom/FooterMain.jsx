import React from 'react'

function FooterMain() {
    return (
        <div>
            <footer className="bg-white text-gray-600 text-md mt-10">
                <div className="max-w-6xl mx-auto px-6 py-8">
                  
                    <div className="flex  border-t flex-wrap justify-between items-start gap-20">

                        {/* Left Section - Logo & Description */}
                        <div className="max-w-xs mt-5">
                            <div className="flex items-center gap-2">
                                <img src="/logo-removebg.png" alt="Logo" className="h-6 w-6" />
                                <h2 className="text-lg font-semibold text-black">Trip Planner AI</h2>
                            </div>
                            <p className="mt-2 text-gray-500">
                                Turn your next trip into a hassle-free experience with Trip Planner AI.
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="flex mt-5  gap-20">

                            {/* Legal */}
                            <div>
                                <h3 className="text-black font-semibold">Legal</h3>
                                <ul className="mt-2 space-y-1">
                                    <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="text-black font-semibold">Support</h3>
                                <ul className="mt-2 space-y-1">
                                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                                </ul>
                            </div>

                            {/* Itineraries */}
                            <div>
                                <h3 className="text-black font-semibold">Itineraries</h3>
                                <ul className="mt-2 space-y-1">
                                    <li><a href="#" className="hover:underline">Community Trips</a></li>
                                    <li><a href="#" className="hover:underline">Find Destinations</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="border-t mt-6 pt-4 text-center">
                        <p>© 2023 Trip Planner AI. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>


      
    )
}

export default FooterMain