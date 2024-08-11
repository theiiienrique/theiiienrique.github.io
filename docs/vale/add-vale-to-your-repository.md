---
sidebar_position: 2
description: Learn how to add Vale to your repository.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Vale to your repository

In this how-to guide, you will learn how to install [Vale](https://vale.sh/) and the [Vale VS Code extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode) to use in your repository.

## Prerequisites

Before proceeding, ensure you have the following:

- A Git repository where you plan to install Vale.
- [Visual Studio Code](https://code.visualstudio.com/download) installed on your machine.
- A basic understanding of terminal commands.

## Install Vale

Open a new terminal window.

Navigate to the repository in which you plan to install Vale:

```shell
cd your-project
```

Install Vale:

<Tabs>
  <TabItem value="windows" label="Windows" default>
    ```shell title="your-project"
    choco install vale
    ```
    See [Chocolatey](https://community.chocolatey.org/packages/vale) for more information.
  </TabItem>
  <TabItem value="macos" label="macOS">
     ```shell title="your-project"
    brew install vale
    ```
    See [Homebrew](https://formulae.brew.sh/formula/vale) for more information.
  </TabItem>
  <TabItem value="linux" label="Linux">
     ```shell title="your-project"
    sudo snap install vale
    ```
    See [Snapcraft](https://github.com/errata-ai/vale-snap) for more information.
  </TabItem>
</Tabs>

Create the `.vale.ini` file:

```shell title="your-project"
touch .vale.ini
```

Open the `.vale.ini` file:

```shell title="your-project"
nano .vale.ini
```

Navigate to the [Vale Config Generator](https://vale.sh/generator) to generate your Vale configuration file.

![Vale Config Generator](/img/vale/config-generator.png)

Configure the following fields:

| Field | Description | Available options |
| --- | --- | --- |
| Base style | Some description | Skip for now, Microsoft Writing Style Guide, Google Developer Documentation Style Guide, Red Hat Documentation Style Guide |
| Supplementary styles | Some description | proselint, write-good, alex, Readability, Joblint |
| Static Site Generator | Some description | None, Hugo |

Copy the output from the Vale Config Generator. In this example, I've selected the following options:

- Google Developer Documentation Style Guide
- proselint
- write-good
- None

```text title=".vale.ini"
StylesPath = styles

MinAlertLevel = suggestion

Packages = Google, proselint, write-good

[*]
BasedOnStyles = Vale, Google, proselint, write-good

```

Paste it in your `.vale.ini` file.

Save your file and close the nano editor by entering `Ctrl+O` and `Return`.

Initialize the file by running the following command:

```shell title="your-project"
vale sync
```

The system should create the `styles` directory, with different subdirectories containing the YAML rules associated with the styles you selected when configuring the `.vale.ini` file.

```text title="your-project"
...
styles/
├── Google/
│   ├── ...
├── proselint/
│   ├── ...
├── write-good/
│   ├── ...
...
```

## Install the Vale VS Code extension

Open Visual Studio Code and navigate to the **Extensions** tab (`Shift+Command+X`).

Search for and select `Vale VSCode` in the Marketplace.

Click **Install**.

Restart VS Code.

## Outcome

You should now see Vale in your code error.

- Red underlines show errors.
- Yellow underlines show warnings.
- Blue underlines show suggestions.

## Next steps

- Create custom rules for the Vale linter.
- Use GitHub Actions to create a check for Vale.
- Use [Reviewdog](https://github.com/reviewdog/reviewdog) to automatically comment on pull requests and make suggestions based on Vale errors, warnings, and suggestions.
