---
sidebar_position: 1
description: Learn how to add Google Analytics to your Docusaurus website.
tags:
  - how-to
sidebar_label: Google Analytics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Stepper from '@site/src/components/Stepper';
import Step from '@site/src/components/Step';

# Add Google Analytics to your Docusaurus website

This guide walks you through the steps to add Google Analytics to your Docusaurus website.

## Prerequisites

Before you begin, ensure you have the following:

- A [Docusaurus](https://docusaurus.io/) website with [Node.js](https://nodejs.org/en/download/) installed. Refer to the [Fast Track](https://docusaurus.io/docs#fast-track) section of their documentation and the [5-minute tutorial](https://tutorial.docusaurus.io/) to learn how to create a new Docusaurus website.

## Installation

- [Set up Google Analytics](#set-up-google-analytics)
- [Edit your Docusaurus configuration file](#edit-your-docusaurus-configuration-file)
- [Test the installation](#test-the-installation)

### Set up Google Analytics

Complete the following steps to set up Google Analytics:

<Stepper>

<Step>

Create a [new Google Analytics account](https://analytics.google.com/analytics/web/#/provision/create).

</Step>

<Step>

Enter a name in the **Account name** field. This is required and must be between 2 and 100 characters long.

</Step>

<Step>

Configure the [account data sharing settings](https://support.google.com/analytics/answer/1011397#zippy=%2Cin-this-article) to control how your Analytics data is shared with other Google products and services.

</Step>

<Step>

Click **Next**.

</Step>

<Step>

Set up a Google Analytics 4 property by configuring the following fields:

| Field               | Description                                                                                                                                                                                              |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Property name       | Enter a property name. Each property you create holds all your measurement data for any selection of websites and apps you choose. This field is required and must be between 4 and 100 characters long. |
| Reporting time zone | Select the time zone you want your reports to use, regardless of where the data comes from. If you change the time zone, it only affects data collected after the time zone change.                      |
| Currency            | Select the currency.                                                                                                                                                                                     |

</Step>

<Step>

Click **Next**.

</Step>

<Step>

Select your **Industry category** and specify your **Business size**.

</Step>

<Step>

Choose your business objectives:

- **Leads**: Track actions that identify visitors as potential customers.
- **Sales**: Analyze and optimize sales on your website or app.
- **Traffic**: Measure who is visiting your website or app and where they are coming from.
- **User engagement & retention**: Learn how people explore your products or services.
- **Other**: Multiple types of reports. This option can't be combined with other options.

</Step>

<Step>

Click **Create**.

</Step>

<Step>

Select the checkbox and click **I accept** to accept the Google Analytics Terms of Service Agreement for your country or region.

</Step>

<Step>

Your account property is now created.

To set up data collection, choose **Web** as the platform where you will be collecting data.

</Step>

<Step>

In the **Set up data stream** dialog, enter your website URL in the **Website URL** field and a name for your web stream in the **Stream name** field.

</Step>

<Step>

Click **Create & continue**.

</Step>

<Step>

In the **Set up a Google tag** dialog, locate and copy your Google tag from the provided code. The tag will start with `G-` followed by letters and numbers:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-A123456789"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-A123456789');
</script>
```

In this example, the Google tag is `G-A123456789`. Copy this value for use when editing your Docusaurus configuration file.

</Step>

</Stepper>

### Edit your Docusaurus configuration file

### Test the installation

## Outcome

## Next steps

- Set up Google Tag Manager to...
- Set up a cookie consent widget to...
