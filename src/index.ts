import * as core from "@actions/core";
import fs from "fs";

try {
  const token = core.getInput("token", {
    required: true
  });

  console.log("1. token", token);
  const encodedToken = Buffer.from(token, "base64");
  console.log("2. encodedToken", encodedToken);
  fs.writeFileSync(
    `${process.env.GITHUB_WORKSPACE}/.dsmrc`,
    JSON.stringify(
      {
        authToken: encodedToken,
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
