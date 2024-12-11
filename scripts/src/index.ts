import { select } from "@inquirer/prompts";
import { updateMetadata } from "./update-metadata/index.js";

const options: Array<{ run: () => Promise<void>; label: string }> = [
  {
    run: updateMetadata,
    label: "Update project metadata",
  },
];

(async () => {
  console.log("NestFlux tools");

  const option: string = await select({
    message: "🛠️ Select tool to run",
    choices: options.map((op) => op.label),
  });

  await options.find((op) => op.label === option)?.run();
})();
