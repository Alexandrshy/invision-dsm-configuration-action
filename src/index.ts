import * as core from "@actions/core";
import fs from "fs";
import path from "path";

try {
  const fileName = core.getInput("fileName");
  const filePath = core.getInput("filePath");
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(process.env.GITHUB_WORKSPACE || "", filePath);

  if (!fs.existsSync(absoluteFilePath))
    throw new Error(`File path: ${absoluteFilePath} does not exist `);

  fs.writeFileSync(
    `${absoluteFilePath}${fileName}`,
    JSON.stringify(
      {
        authToken: core.getInput("token", {
          required: true
        }),
        dsmHost: core.getInput("dsmHost"),
        organization: core.getInput("organization", {
          required: true
        }),
        outputDir: core.getInput("outputDir"),
        storyPath: core.getInput("storyPath")
      },
      null,
      2
    )
  );
} catch (error) {
  core.setFailed(`Action failed: "${error.message}"`);
}
