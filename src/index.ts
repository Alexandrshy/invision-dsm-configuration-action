import * as core from "@actions/core";
import fs from "fs";

try {
  fs.writeFileSync(
    `${process.env.GITHUB_WORKSPACE}/.dsmrc`,
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
  core.setFailed(`Action failed with "${error.message}"`);
}
