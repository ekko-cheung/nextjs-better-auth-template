import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(async () => {
    return "Hello World!";
  }),
});

export type AppRouter = typeof appRouter;
