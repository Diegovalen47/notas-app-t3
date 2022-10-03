// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const inscriptions = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.inscription.findMany({
    select: {
      inscriptionId: true,
      course: {
        select: {
          name: true,
          credits: true,
        }
      },
      typology: {
        select: {
          name: true,
        }
      },
      semester: {
        select: {
          number:true,
          year: true,
          period: true,
        }
      }
    }
  });
  res.status(200).json(examples);
};

export default inscriptions;
