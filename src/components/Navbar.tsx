import { NextComponentType } from "next";

const Navbar: NextComponentType = () => {
  const itemsTextColor = "text-white";
  return (
    <nav className="sticky top-0 bg-zinc-900 p-5 shadow-blue-600 drop-shadow">
      <ul className="flex">
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Asignaturas
          </a>
        </li>
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Resumen Carrera
          </a>
        </li>
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Promedio por materia
          </a>
        </li>
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            Promedio por semestre
          </a>
        </li>
        <li className="mr-6">
          <a className={`${itemsTextColor} hover:text-blue-800`} href="#">
            P.A.P.A
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
