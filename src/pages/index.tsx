import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: list, refetch } = trpc.useQuery(["inscription.findAll"]);
  if (!list) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {list.map((inscription) => {
        return (
          <div className="columns" key={inscription.inscriptionId}>
            <div className="column">{inscription.course.name}</div>
            <div className="column">{inscription.course.credits}</div>
            <div className="column">{inscription.typology.name}</div>
            <div className="column">
              {`${inscription.semester.year} 
                ${inscription.semester.period}
                ${inscription.semester.number}`}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
