import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createTRPCContext } from "@/trpc/init";
import { appRouter } from "@/trpc/routers/_app";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
