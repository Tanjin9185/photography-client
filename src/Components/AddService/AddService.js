import React, { useState } from "react";

const AddService = () => {

    const [services, setservices] = useState({});
    console.log(services);


    const handleBlur = (e) => {
        const newServices = { ...services };
        newServices[e.target.name] = e.target.value;
        setservices(newServices);
    };


    const handleSubmit = (e) => {

        const formData = new FormData();
        formData.append("title", services.title);
        formData.append("price", services.price);
        formData.append("subtitle", services.subtitle);
        formData.append("content", services.content);
        formData.append("desc", services.description);
        fetch("http://localhost:5000/addservice", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    alert("service added successfully");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        e.preventDefault();
    };


    return (
        <div className="flex flex-row ">
            <div className=" container flex flex-wrap block py-4 lg:pt-0 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center md:pt-36 sm:pt-36 pt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        Want to ADD a new Service!!!
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                        Why are you wasting your time? Add it now...
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label className="py-5">
                                                    Service Title
                                                </label>
                                                <input
                                                    className="border-0 px-3 py-3  placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    name="title"
                                                    required=""
                                                />
                                            </div>

                                            <div>
                                                <label className="py-5">
                                                    price
                                                </label>
                                                <input
                                                    className="border-0 px-3 py-3  placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    onBlur={handleBlur}
                                                    type="number"
                                                    name="price"
                                                    required=""
                                                />
                                            </div>

                                            <div>
                                                <label className="py-5">
                                                    Service sub-title
                                                </label>
                                                <input
                                                    className="border-0 px-3 py-3  placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    name="subtitle"
                                                    required=""
                                                />
                                            </div>

                                            <div className="">
                                                <label className="py-5">
                                                    content
                                                </label>
                                                <textarea
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    name="content"
                                                    required=""
                                                />
                                            </div>

                                            <button
                                                onClick={() => handleSubmit}
                                                class="border-2 mt-3 transition duration-500 border-gray-700 w-4/12 py-2 text-center text-xl text-gray-700 bg-transparent rounded-md focus:outline-none "
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default AddService;