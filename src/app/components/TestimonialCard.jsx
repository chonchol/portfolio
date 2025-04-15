import Rating from "./Rating";

const TestimonialCard = ({ name, designation, feedback }) => {
  return (
    <>
      <div className="bg-white rounded-xl text-gray-400 p-8">
        <div className="flex items-center gap-2">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
        <p className="text-gray-500 transition-all duration-500 my-6 group-hover:text-gray-800">
          {feedback}
        </p>
        <div className="flex gap-3 items-center">
          <img src="/images/man2.png" alt="client avatar" className="w-10" />
          <h4 className="text-black font-medium">{name}</h4>
          <p className="text-xs font-medium text-indigo-600">{designation}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
