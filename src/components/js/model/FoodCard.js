import React from "react";
const Card = (props) => {
  return (
    <>
      
        <div className="m-8 min-h-screen bg-gray-100 flex items-center sm: select-none lg:select-text">
          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform-gpu hover:scale-110 transition duration-500">
            <img
              className="rounded-xl "
              src={props.img}
              alt=""
            />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-2xl font-semibold">{props.title}</h1>
                <p className="mt-2">{props.price}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
