import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { cache } from "react";

export const createTRPCContext = cache(
  async (opts: CreateNextContextOptions) => {
    return {};
  },
);

const t = initTRPC.create({});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
