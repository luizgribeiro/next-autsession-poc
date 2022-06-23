import { NextPage, NextPageContext } from "next";
import { ServerResponse } from "http";

const LoginPage: NextPage = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <p>Testando a pagina</p>
      </div>
    </>
  );
};

export default LoginPage;

export async function getServerSideProps({ res }: { res: ServerResponse }) {
  res.setHeader(
    "Set-Cookie",
    "Authorization=Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c; HttpOnly"
  );
  console.log("ssr-login");
  return { props: {} };
}
