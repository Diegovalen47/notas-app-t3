import { NextComponentType } from "next";

const Navbar: NextComponentType = () => {
  const itemsTextColor = "text-white";
  return (
    <nav className="sticky top-0 bg-zinc-900 p-5 shadow-blue-600 drop-shadow">
      <ul className="flex">
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Active
          </a>
        </li>
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className="cursor-not-allowed text-gray-400" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
