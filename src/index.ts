import * as core from "@actions/core";
import fs from "fs";

const token = core.getInput("token", {
  required: true
});

console.log("tokentoken", token);

try {
  fs.writeFileSync(
    `${process.env.GITHUB_WORKSPACE}/.dsmrc`,
    JSON.stringify(
      {
        authToken: token,
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
