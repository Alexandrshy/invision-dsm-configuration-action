import * as core from "@actions/core";

try {
  const token = core.getInput("token", {
    required: true
  });
  console.log("token", token);
} catch (error) {
  core.setFailed(`Action failed with "${error.message}"`);
}
