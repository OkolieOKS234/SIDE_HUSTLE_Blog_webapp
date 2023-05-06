import { Link } from "react-router-dom";

const Button = ({ text, link, primary, onClick }) => {
  return (
    <div>
      <button
        className={
          primary
            ? "py-[8px] px-5 cursor-pointer bg-white border border-solid border-purple-700 text-purple-700 hover:border-white hover:bg-purple-200 hover:text-black rounded-3xl transition duration-300 ease-linear"
            : "py-[8px] px-5 cursor-pointer bg-purple-700 border border-solid border-purple-700 text-white hover:border-purple-700 hover:bg-white hover:text-purple-700 rounded-3xl transition duration-300 ease-linear"
        }
        onClick={onClick}
      >
        <Link to={link}>{text}</Link>
      </button>
    </div>
  );
};

export default Button;