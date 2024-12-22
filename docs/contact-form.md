---
sidebar_position: 4
sidebar_label: Create a contact form
description: Learn how to add a contact form to your Docusaurus site.
tags:
  - how-to
---

# Create a contact form with React and Formspree

This guide explains how to create a simple contact form for your Docusaurus website using [React](https://react.dev/) and [Formspree](https://formspree.io/).

:::tip
To see the finished outcome, visit the [Contact](/contact) page on this website.
:::

## Prerequisites

Before you begin, ensure you have the following:

- A [Docusaurus](https://docusaurus.io/) website.

## Create a Formspree account

To get started, let's first create a Formspree account:

<Stepper>

<Step>

Go to the Formspree website and [register for a new account](https://formspree.io/register).

</Step>

<Step>

Fill in the required fields and click the checkbox to accept the terms of use and privacy policy.

</Step>

<Step>

Click **Register**. Formspree will send an email asking you to verify your email address.

</Step>

<Step>

Sign in to your email and open the email from Formspree.

</Step>

<Step>

Click **Verify email**.

</Step>

</Stepper>

## Configure your Formspree project settings

After verifying your email address and signing in to Formspree, you will see an empty project in the workspace.

<Stepper>

<Step>

Select **My first project** on the sidebar.

![Select your project](/img/contact-form/select-project.png)_Select your project_

</Step>

<Step>

Click the **Settings** tab.

</Step>

<Step>

Configure the following fields:

- **Project name**: Give your project a name.
- **Timezone**: Set the timezone. This selection is used to display forms in this project (for example, the time at which a form was submitted).
- **Restrict to domain**: Enter your domain in this field to restrict form submissions to your specific domain and subdomains. If a form submission is sent from outside of this specified domain, Formspree marks it as spam.

</Step>

<Step>

Click **Save** after configuring each field.

</Step>

</Stepper>

## Create a new form
