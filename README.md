# Configuration action for DSM

This **GitHub Action** generates a .dsmrc configuration file for publishing your project to Invision DSM, while you can store information about your company or token in secrets

## Usage example

In this example, we create a configuration file, then run the script to publish the package to DSM

```
- uses: "Alexandrshy/invision-dsm-configuration-action@master"
  with:
    token: ${{ secrets.DSM_TOKEN }}
    dsmHost: "projects.invisionapp.com"
    organization: "my-company"
    storyPath: "src/**/*stories.{ts,tsx}"

- name: DSM publish
  run: yarn dsm-storybook:publish
```
