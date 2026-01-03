---
sidebar_position: 3
description: Learn how to add Vale to your repository.
tags:
  - vale
  - how-to
---

# Add Vale to your repository

This guide explains how to install [Vale](https://vale.sh/) and the [Vale VS Code extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode) in your repository.

## Prerequisites

Before you begin, ensure you have the following:

- A Git repository where you plan to install Vale.
- [Visual Studio Code](https://code.visualstudio.com/download) installed on your machine.
- A basic understanding of terminal commands.

## Install Vale

To install Vale, follow these steps:

<Stepper>

<Step>

In a terminal, navigate to your project directory:

```shell
cd your-project
```

</Step>

<Step>

Install Vale for your operating system:

<Tabs>
<TabItem value="windows" label="Windows" default>
```shell
choco install vale
```
See [Chocolatey](https://community.chocolatey.org/packages/vale) for more information.
</TabItem>
<TabItem value="macos" label="macOS">
```shell
brew install vale
```
See [Homebrew](https://formulae.brew.sh/formula/vale) for more information.
</TabItem>
<TabItem value="linux" label="Linux">
```shell
sudo snap install vale
```
See [Snapcraft](https://github.com/errata-ai/vale-snap) for more information.
</TabItem>
</Tabs>

</Step>

<Step>

Create the Vale configuration file:

```shell
touch .vale.ini
```

</Step>

<Step>

Open the `.vale.ini` file:

```shell
nano .vale.ini
```

</Step>

<Step>

Go to the [Vale Config Generator](https://vale.sh/generator) page to generate the configuration file.

![Vale Config Generator page](/img/vale/config-generator.png)_Vale Config Generator page_

</Step>

<Step>

Select a base style from the **Base style** list. Options include:

- Skip for now
- Microsoft Writing Style Guide
- Google Developer Documentation Style Guide
- Red Hat Documentation Style Guide

</Step>

<Step>

Select a supplementary style from the **Supplementary style** list. Options include:

- proselint
- write-good
- alex
- Readability
- Joblint

</Step>

<Step>

Select a static site generator from the **Static site generator** list. Options include:

- None
- Hugo

</Step>

<Step>

Copy the generated output. This example selects the following options:

- Google Developer Documentation Style Guide
- proselint
- write-good
- None

</Step>

<Step>

Paste the configuration output into the `.vale.ini` file:

```text title=".vale.ini"
StylesPath = styles

MinAlertLevel = suggestion

Packages = Google, proselint, write-good

[*]
BasedOnStyles = Vale, Google, proselint, write-good
```

</Step>

<Step>

Optional: To configure Vale to lint only Markdown files, modify the target pattern in your `.vale.ini` file as follows:

```text title=".vale.ini"
StylesPath = styles

MinAlertLevel = suggestion

Packages = Google, proselint, write-good

<!-- highlight-start -->
[*.md]
<!-- highlight-end -->
BasedOnStyles = Vale, Google, proselint, write-good
```

</Step>

<Step>

Press <kbd>Ctrl+O</kbd> and <kbd>Return</kbd> to save and close the file.

</Step>

<Step>

Initialize the Vale configuration:

```shell
vale sync
```

This command creates a `styles` directory with subdirectories for each selected style:

```text
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

</Step>

</Stepper>

## Test your configuration

To test your Vale configuration, follow these steps:

<Stepper>

<Step>

To run the linter against all the Markdown files in your repository, run the following command:

```shell
vale .
```

</Step>

<Step>

To lint files in a specific directory or file, specify its path in the command. The following command lints all the Markdown files in the `docs` directory:

```shell
vale docs/
```

You should see the different Vale responses in your terminal:

![Vale in terminal](/img/vale/vale-response.png)_Vale in terminal_

</Step>

</Stepper>

## Install the Vale VS Code extension

To install the Vale VS Code extension, follow these steps:

<Stepper>

<Step>

Open Visual Studio Code and go to the **Extensions** tab.

</Step>

<Step>

Search for `Vale VSCode` in the Marketplace.

</Step>

<Step>

Click **Install**.

</Step>

<Step>

Restart Visual Studio Code.

</Step>

</Stepper>

## Outcome

Vale should now be running in your text editor:

- <span style={{ textDecoration: 'underline', textDecorationColor: 'red', textDecorationStyle: 'wavy' }}>Red underlines</span> indicate errors.
- <span style={{ textDecoration: 'underline', textDecorationColor: '#bf8f22', textDecorationStyle: 'wavy' }}>Yellow underlines</span> indicate warnings.
- <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(158,203,255,255)', textDecorationStyle: 'wavy' }}>Blue underlines</span> indicate suggestions.

## Next steps

- Create custom rules for Vale.
- Use GitHub Actions to automate Vale checks.
- Integrate [Reviewdog](https://github.com/reviewdog/reviewdog) to comment on pull requests based on Vale results.
