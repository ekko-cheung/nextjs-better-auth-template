import type { Metadata } from "next";

import SignIn from "./_sign-in";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
}
