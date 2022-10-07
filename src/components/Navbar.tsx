import { NextComponentType } from "next";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  const itemsTextColor = "text-white";
  return (
    <nav className="sticky top-0 bg-zinc-900 p-5 shadow-blue-600 drop-shadow">
      <ul className="flex">
        <li className="mr-6">
          <Link href={"/"} className={`${itemsTextColor} hover:text-blue-900`}>
            Asignaturas
          </Link>
        </li>
        <li className="mr-6">
          <Link href={"/ResumenCarrera"} className={`${itemsTextColor} hover:text-blue-800`}>
            Resumen Carrera
          </Link>
        </li>
        <li className="mr-6">
          <Link href={"/PromedioMateria"} className={`${itemsTextColor} hover:text-blue-800`}>
            Promedio por Materia
          </Link>
        </li>
        <li className="mr-6">
          <Link href={"/PromedioSemestre"} className={`${itemsTextColor} hover:text-blue-800`}>
            Promedio por Semestre
          </Link>
        </li>
        <li className="mr-6">
          <Link href={"/PAPA"} className={`${itemsTextColor} hover:text-blue-800`}>
            PAPA
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
