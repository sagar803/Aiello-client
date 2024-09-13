import React from 'react';

const Card = ({ bgColor, title, description, buttonText, buttonAction, isDisabled }) => {
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center w-4/5 md:w-3/5 h-52 sm:h-32 my-6 border border-black rounded-xl p-5 shadow-md  ${bgColor}`}>
      <p className="text-lg font-semibold h-10 sm:flex-1">{title}</p>
      <hr className="hidden sm:block w-12 transform rotate-90 border-t-2 border-white mx-4" />
      <p className="text-sm flex-1 text-center md:text-start ">{description}</p>
      <button
        className={`w-full md:w-fit rounded-lg h-12 px-6 transition-shadow duration-400 bg-white ${isDisabled ? ' cursor-not-allowed bg-opacity-30' : 'hover:shadow-md'}`}
        onClick={buttonAction}
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
