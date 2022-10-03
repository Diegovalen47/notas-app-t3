import { createRouter } from "./context";
import { z } from "zod";

export const inscriptionRouter = createRouter()
.query("findAll", {
  resolve: async ({ ctx }) => {
    return await ctx.prisma.inscription.findMany({
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
  },
});
