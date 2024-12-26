---
sidebar_position: 4
sidebar_label: Create a contact form
description: Learn how to add a contact form to your Docusaurus site.
tags:
  - how-to
---

# Create a contact form with React and Formspree

Learn how to create a simple contact form for your Docusaurus website using [React](https://react.dev/) and [Formspree](https://formspree.io/).

:::tip
To see the finished outcome, visit the [Contact](/contact) page on this website.
:::

## Prerequisites

Before you begin, ensure you have the following:

- A [Docusaurus](https://docusaurus.io/) website.

## Create a Formspree account

Follow these steps to create a Formspree account:

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

<Stepper>

<Step>

Click **+** to create a new form.

</Step>

<Step>

Enter a name in the **Form name** field, such as `Contact form`.

</Step>

<Step>

Select the project you configured from the **Project** drop-down menu.

</Step>

<Step>

Select an email address from the **Send emails to** drop-down menu.

To select a different email address, go to **Account** and locate the **Linked emails** section. You can add up to two linked email addresses on the free plan.

</Step>

<Step>

Click **Create form**.

</Step>

</Stepper>

## Create the `ContactForm` React component

<Stepper>

<Step>

In the **Integration** tab, go to the **Code examples** section and select **React**.

</Step>

<Step>

Copy the code from Formspree. It should resemble the following code snippet, with your actual form ID in the `<YOUR_FORM_ID>` part:

```js
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm(<YOUR_FORM_ID>);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
```

</Step>

</Stepper>

## Style the `ContactForm` React component

## Create the contact form page
