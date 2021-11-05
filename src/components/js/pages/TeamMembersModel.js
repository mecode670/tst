import React from 'react'
import '../../css/body-gray.css'

const About = (props) => {
    return (
        <>

        <div className="shadow-xl hover:shadow-2xl transition duration-300 transform-gpu hover:scale-110 transition duration-500 w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src={props.image} alt="employee-pfp"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{props.name}</p>
                <p className="text-base text-gray-400 font-normal">{props.work}</p>
            </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src={props.image} alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{props.name}</p>
                <p className="text-base text-gray-400 font-normal">{props.work}</p>
            </div>
        </div>
        </div> */}
        </>
    )
}

export default About
