import Helmet from "react-helmet";
import { appName } from "./config/landingPageConfig";
import HomePage from "./pages/HomePage";

export default function App() {
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{appName}</title>
    </Helmet>
    <HomePage />
  </>;
}
