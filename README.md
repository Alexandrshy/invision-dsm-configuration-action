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

## Options

### ⭐️ `token`

Authentication token

Required: `true`

### ⭐️ `organization`

The name of the DSM

Required: `true`

### ⭐️ `dsmHost`

The URL to which the Storybook will be uploaded

Default value: `projects.invisionapp.com`

### ⭐️ `outputDir`

Builds the output folder path

Default value: `.dsm`

### ⭐️ `storyPath`

A glob pattern of where DSM should search for stories

Default value: `src/**/*.stories.js`

### ⭐️ `filePath`

The path to the location of the configuration file. At the moment, there is no need to specify a path other than the project root, since in the current implementation the configuration file for DMS is strictly linked to the project root

Default value: `""`

### ⭐️ `fileName`

The file name. At the moment, there is no need to specify a file name other than `.dsmrc`, since in the current implementation the configuration file for DMS is strictly attached to the file named `.dsmrc`

Default value: `.dsmrc`
