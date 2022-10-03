// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { inscriptionRouter } from "./inscription";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("inscription.", inscriptionRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
