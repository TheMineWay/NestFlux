import { metadata } from "@constants/metadata.constant.ts";
import "./app.pcss";

export default function App() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col gap-2">
      <h1 className="text-6xl font-bold">{metadata.projectName}</h1>
      <p>Client scaffold</p>
    </div>
  );
}
