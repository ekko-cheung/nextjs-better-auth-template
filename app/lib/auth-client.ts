import { createAuthClient } from "better-auth/react";
import { redirect } from "next/navigation";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
});

export const { signIn, signUp, useSession } = createAuthClient();

export const clientRedirectToLoginIfNotAuth = async () => {
  const session = await authClient.getSession();

  if (!session) redirect("/sign-in");
};
