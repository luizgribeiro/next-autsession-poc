import "../styles/globals.css";
import { Session } from "../components/session";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Session>
      <Component {...pageProps} />;
    </Session>
  );
}

export default MyApp;
