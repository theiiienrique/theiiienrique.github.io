---
sidebar_position: 1
description: Learn how to use WordPress to upload new content.
tags:
  - how-to
  - wordpress
---

# WordPress uploading guide

## About this sample

This guide was written for the editors of [Palaver Arts Magazine](https://dornsife.usc.edu/palaver/), an online arts publication at the University of Southern California.

It was created during Palaver’s migration from Squarespace to WordPress, where I migrated approximately **270 posts** and documented publishing workflows to support long-term adoption by future editorial teams. The guide is still used by the organization several years after the migration.

To support consistency and ease of use, I also created reusable WordPress templates for common post and page types. This documentation follows the [Google developer documentation style guide](https://developers.google.com/style) and was linted using [Vale](https://vale.sh/) to ensure clarity and consistency.

## Guide

The following sections describe the standard publishing workflow for Palaver Arts Magazine.

### Upload image and media files

To upload new image and media files, complete the following steps:

<Stepper>

<Step>

On the sidebar, click **Media > Add new**.

</Step>

<Step>

Drop files to upload or click **Select files**.

</Step>

<Step>

Select the thumbnail of the uploaded file to edit its details.

</Step>

<Step>

Edit the **Alternative text** field.

:::tip ALT TEXT
Write concise, descriptive alt text that communicates the purpose of the image. For guidance, refer to the [Google developer documentation style guide](https://developers.google.com/style/images#alt-text).
:::

</Step>

<Step>

Edit the **Title** field using the following naming conventions:

- For image, audio, and PDF files, use the `title-lastname` format.

:::info NAMING CONVENTIONS
If the artwork includes a series of images, append a number to the title (for example, `fractured-goodrum-1`, `fractured-goodrum-2`). Consistent naming improves searchability and asset management.
:::

- For issue covers, use the `semester-year-cover` format.

</Step>

<Step>

Click **Close**.

</Step>

</Stepper>

### Create a new category

Posts on the Palaver website are organized by issue using categories.

To create a new category:

<Stepper>

<Step>

On the sidebar, click **Posts > Categories**.

</Step>

<Step>

Configure the following fields:

- **Name**: `Issue #: Semester Year`
- **Slug**: `semester-year`
- **Parent category**: `None`

</Step>

<Step>

Click **Add new category**.

</Step>

</Stepper>

### Create a new post

To create a new post:

<Stepper>

<Step>

On the sidebar, click **Posts**.

</Step>

<Step>

Select the appropriate post template:

- For art and media: `Single image`, `Several images`, or `Audio/Video`
- For prose and poetry: `Text`

</Step>

<Step>

Hover over the template and click **New draft**.

</Step>

</Stepper>

### Edit the post

<Tabs>

<TabItem value="art-and-media" label="For art and media" default>

<Stepper>

<Step>

Click **Edit**, then enter the author's name in the **Author** field.

</Step>

<Step>

Optional: Add an artist statement or content warning in the first **Rich text** block. Style artist statements using quotation marks and content warnings using _italic_ text. Delete this block if not needed.

</Step>

<Step>

Configure the **Image gallery** or **Rich text** block based on the artwork layout:

- Use **Image gallery** for multiple horizontal or landscape images.
- Use **Rich text** for vertical, portrait, or mixed-orientation images.

<Stepper>

<Step>

Go to **Add media > Create gallery**.

</Step>

<Step>

Select the images to insert.

</Step>

<Step>

Configure **Gallery settings**:

- **Link to**: `Attachment Page`
- **Columns**: `1`
- **Size**: `Full Size`

</Step>

</Stepper>

:::tip FULL-SIZE EMBEDS
To embed a full-width video from YouTube or Vimeo, go to **Add media > Insert from URL**.
:::

</Step>

<Step>

Insert the contributor bio in a **Rich text** block. Style the contributor's name using **bold** text.

</Step>

</Stepper>

</TabItem>

<TabItem value="prose-and-poetry" label="For prose and poetry">

<Stepper>

<Step>

Click **Edit**, then enter the author's name in the **Author** field.

</Step>

<Step>

Optional: Add an artist statement or content warning in the first **Rich text** block. Use quotation marks for artist statements and _italic_ text for content warnings. Delete this block if unused.

</Step>

<Step>

Paste the prose or poem into the second **Rich text** block.

</Step>

<Step>

Insert the contributor bio in the third **Rich text** block and bold the contributor's name.

</Step>

</Stepper>

</TabItem>

</Tabs>

### Edit post metadata and publish

To edit metadata and publish a post:

<Stepper>

<Step>

Open **Settings**.

</Step>

<Step>

Configure the following fields:

| Field          | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| Publish        | Set the launch date and time.                                                                               |
| URL            | Keep the default hyphenated title unless the piece is untitled. Use `untitled-lastname` for untitled works. |
| Pending review | Select to allow review after uploading the full issue.                                                      |
| Categories     | Clear **Template** and select the issue category you created.                                               |
| Tags           | Select **Art**, **Media**, **Prose**, or **Poetry**.                                                        |

</Step>

<Step>

Click **Save as pending**.

</Step>

<Step>

Click **Preview** to review the post.

</Step>

<Step>

Click **Publish** or **Schedule**, then confirm your selection.

</Step>

</Stepper>

### Create a new issue landing page

To create a new issue landing page:

<Stepper>

<Step>

On the sidebar, click **Pages**.

</Step>

<Step>

Locate the **New issue** template.

</Step>

<Step>

Hover over the **New issue** template and click **New draft**.

</Step>

</Stepper>

### Edit the issue landing page

To edit the issue landing page:

<Stepper>

<Step>

Edit the page title using the `Issue #: Semester Year` naming convention.

</Step>

<Step>

Add a 750×1000 px cover image to the **Rich text** block.

</Step>

<Step>

Configure the following fields in the **Rich text** block:

| Field   | Description               |
| :------ | :------------------------ |
| Align   | Select `Center`.          |
| Size    | Select `Full Size`.       |
| Link to | Select `Attachment Page`. |

</Step>

<Step>

Enter the artist's name in the `Cover artwork by [Artist Name]` placeholder. This text is always italicized and center-aligned.

</Step>

</Stepper>

### Link posts to the issue landing page

To link posts to the issue landing page:

<Stepper>

<Step>

Go to the stacking card for the genre you plan to link.

</Step>

<Step>

Replace the placeholder content (for example, `Art Title 1, Artist Name`).

</Step>

<Step>

Click **Select link**.

</Step>

<Step>

In the dialog that appears, search for your post under **Or link to existing content**.

</Step>

<Step>

Select your post and click **Add link**.

</Step>

<Step>

For art and media, click **Remove** on the placeholder image and replace it with a thumbnail for your post.

</Step>

</Stepper>

### Edit page metadata and publish

To modify page metadata and publish the page:

<Stepper>

<Step>

Configure the following fields:

| Field           | Description                                                                    |
| :-------------- | :----------------------------------------------------------------------------- |
| Publish         | Select the launch date.                                                        |
| URL             | Enter `issue-#-semester-year`.                                                 |
| Page attributes | Select `Remove` for the **Parent page** field and `0` for the **Order** field. |

</Step>

<Step>

Click **Save draft**.

</Step>

<Step>

Click **Preview** to view your landing page.

</Step>

<Step>

Click **Publish** or **Schedule** and confirm your selection to publish the page.

</Step>

</Stepper>

### Update the site menu

To update the site menu:

<Stepper>

<Step>

On the sidebar, click **Appearance > Menus**.

</Step>

<Step>

Go to **Menu structure** and expand the **Current issue** section.

</Step>

<Step>

Edit the **URL** box to match the new issue landing page slug (for example, `/issue-14-fall-2023`).

</Step>

<Step>

Click **Save menu**.

</Step>

</Stepper>

Your menu should now link to the latest issue landing page.

### Relocate the previous issue

To move the previous issue to the past issues page:

<Stepper>

<Step>

On the sidebar, click **Pages** and locate the previous issue (for example, `Issue 13: Spring 2023`).

</Step>

<Step>

Hover over the previous issue and click **Quick edit**.

</Step>

<Step>

Configure the following fields:

| Field  | Description           |
| :----- | :-------------------- |
| Parent | Select `Past issues`. |
| Order  | Select `1`.           |

</Step>

<Step>

Click **Update**.

</Step>

<Step>

Hover over **Past issues** and click **Edit**.

</Step>

<Step>

Go to the stacking cards and click **Add row**.

</Step>

<Step>

Edit the **Title** (`Issue #`) and **Description** (`Semester Year`).

</Step>

<Step>

Click **Select link** to link the previous landing page.

</Step>

<Step>

Click **Add image** to add the previous issue cover.

</Step>

<Step>

Click **Update** to save your changes.

</Step>

</Stepper>

### Resize images

Some custom WordPress blocks require images to match specific dimensions.

For example, the **Stacking cards** block on the _Meet the editors_ page requires images sized at **900×506 px**.

To resize an image:

<Stepper>

<Step>

Confirm the required image dimensions.

</Step>

<Step>

Create a canvas with the required dimensions and a transparent background using an image editor such as Adobe Photoshop.

</Step>

<Step>

Center the photo on the canvas and save it as a JPEG or PNG file.

</Step>

<Step>

Upload the resized image to the appropriate block.

</Step>

</Stepper>
