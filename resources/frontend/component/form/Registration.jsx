import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, Link } from 'react-router-dom'
import profile from "../../../image/profile/logo3.png";

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        bio: "",
        docs1: "",
        docs2: "",
    });

    const handleChange = (e) => {
        setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
        });
    };

    return (
    <>
    <div className="flex flex-col px-10 my-16 md:my-20 lg:my-28 w-full gap-16 lg:gap-20
        max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
        
        {/* PART 1 */}
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col w-full justify-center">
                <p className="text-[22px] md:text-[22px] lg:text-[26px] xl:text-[30px] form-1">Personal Info</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] form-2">Update your photo and personal details here</p>
            </div>

            <div className="flex flex-col bg-white px-10 py-12 gap-12 rounded-[20px] shadow-md 
                form-3 text-[16px] sm:text-[18px] justify-center items-center">

                <div className="flex w-full flex-col md:flex-row gap-12 justify-center items-center">
                    <img src={profile} alt="Logo" className="md:my-2 w-full max-w-[150px] sm:max-w-[150px] md:max-w-[150px]" />
                    <div className="flex w-full flex-col gap-4 md:gap-8 justify-center items-center">
                        <div className="flex w-full flex-col md:flex-row gap-4 md:gap-8">
                            <div className="w-full">
                                <label htmlFor="firstName" className="block mb-1">
                                First Name
                                </label>
                                <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 placeholder:text-xl placeholder:font-light border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Juan"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="lastName" className="block mb-1">
                                Last Name
                                </label>
                                <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder:text-xl placeholder:font-light border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Dela Cruz"
                                />
                            </div>
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4 md:gap-8"> 
                            <div className="w-full">
                                <label htmlFor="firstName" className="block mb-1">
                                Email Address
                                </label>
                                <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder:text-xl placeholder:font-light  border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="ex. juandelacruz@gmail.com"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="lastName" className="block mb-1">
                                Contact Number
                                </label>
                                <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder:text-xl placeholder:font-light  border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+63 9XXXXXXXX"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="w-full p-4 rounded-[10px] border shadow-sm bg-white justify-center items-center text-center">Click here</div>
                
            </div>
        </div>

        {/* PART 2 */}
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col w-full justify-center">
                <p className="text-[22px] md:text-[22px] lg:text-[26px] xl:text-[30px] form-1">Profile</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] form-2">Update your profile and upload necessary documents here</p>
            </div>

            <div className="flex flex-col bg-white px-10 py-12 gap-8 rounded-[20px] shadow-md form-3 text-[18px] justify-center items-center">
                <div className="w-full">
                    <label htmlFor="firstName" className="block mb-1">
                    Bio
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full h-[100px] px-4 py-2 placeholder:text-xl placeholder:font-light border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Say something about yourself..."
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="firstName" className="block mb-1">
                    Document 1
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.docs1}
                    onChange={handleChange}
                    className="w-full h-[100px] px-4 py-2 placeholder:text-xl placeholder:font-light border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Click or drag here to add"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="firstName" className="block mb-1">
                    Document 2
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.docs2}
                    onChange={handleChange}
                    className="w-full h-[100px] px-4 py-2 placeholder:text-xl placeholder:font-light border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Click or drag here to add"
                    />
                </div>
            </div>  
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-8 justify-left items-center">
            <button className="w-full md:w-auto py-4 px-12 border border-gray-400 rounded-[10px] bg-white text-[20px] form-btn-1">Cancel</button>
            <button className="w-full md:w-auto py-4 px-12 rounded-[10px] bg-[#EA906C] text-[20px] form-btn-2 hover:bg-[#f0a686] transition-colors duration-300">Sign Up</button>
        </div>
    </div>
    
    </>
    )
};

export default Registration;