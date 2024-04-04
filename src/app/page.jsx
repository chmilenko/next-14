import "./styles/main.scss";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/main/Main.jsx"));

export default async function Page() {
  return <Main />;
}
