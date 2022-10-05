import { NextComponentType } from "next";
import { trpc } from "../utils/trpc";
import styles from "../styles/TableInscription.module.scss";

const TableInscription: NextComponentType = () => {
  const { data: list, refetch } = trpc.useQuery(["inscription.findAll"]);
  if (!list) {
    return <div className={`${styles.loading}`}>Loading...</div>;
  }
  return (
    <table className={`${styles.contenedor}`}>
      <tr className={`${styles.fila} ${styles.tableHeader}`}>
        <th className={styles.columna}>Asignatura</th>
        <th className={styles.columna}>Creditos</th>
        <th className={styles.columna}>Tipologia</th>
        <th className={styles.columna}>Semestre</th>
      </tr>
      {list.map((inscription) => {
        return (
          <tr key={inscription.inscriptionId} className={styles.fila}>
            <td className={styles.columna}>{inscription.course.name}</td>
            <td className={styles.columna}>{inscription.course.credits}</td>
            <td className={styles.columna}>{inscription.typology.name}</td>
            <td className={styles.columna}>
              {`${inscription.semester.year} 
                ${inscription.semester.period}
                (${inscription.semester.number})`}
            </td>
          </tr>
        );
      })}
    </table>
  );
}
export default TableInscription;