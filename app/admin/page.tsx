import { getServerSession } from "next-auth";

export default async function admin() {
  const session = await getServerSession();

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return <h1>Admin</h1>;
}
