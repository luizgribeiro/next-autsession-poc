import { NextPage } from "next";
import { useSession, Guard } from "../components/session";

const Dashboard: NextPage = () => {
  const session = useSession();
  console.log(session);
  return (
    <Guard>
      <main>
        <h1> Nova página</h1>
      </main>
    </Guard>
  );
};

export default Dashboard;
