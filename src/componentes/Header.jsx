import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-3xl font-bold">MEMORY</div>
      <div className="flex items-center justify-center flex-1">
        <ul className="flex gap-6">
          <li>
            <Link to="/home"><div className="text-white text-xl p-3 hover:text-gray-400">Home</div></Link>
          </li>
          <li>
            <Link to="/juego"><div className="text-white text-xl p-3 hover:text-gray-400">Pokemon Memory</div></Link>
          </li>
          <li>
            <Link to="/marvel"><div className="text-white text-xl p-3 hover:text-gray-400">Marvel Memory</div></Link>
          </li>
          <li>
            <Link to="/about"><div className="text-white text-xl p-3 hover:text-gray-400">A cerca de</div></Link>
          </li>
        </ul>
      </div>
      <Link to="/login"><div className="text-white text-xl p-3 hover:text-gray-400">Login</div></Link>
      <Link to="/registro"><div className="text-white text-xl p-3 hover:text-gray-400">Register</div></Link>

    </div>
  );
};
