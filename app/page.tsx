import { trpc } from "@/trpc/server";

export default async function Home() {
  const data = await trpc.hello();

  return <div>{data}</div>;
}
