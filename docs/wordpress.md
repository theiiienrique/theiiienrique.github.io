---
sidebar_position: 3
description: Learn how to use WordPress to upload new content.
tags:
   - how-to
   - wordpress
---

# WordPress uploading guide

I wrote this guide for the editors at [Palaver Arts Magazine](https://dornsife.usc.edu/palaver/), an online arts publication at the University of Southern California.

When our host college initiated a website redesign project, requiring the migration of our magazine from Squarespace to WordPress, I took on the responsibility of not only migrating 270 posts from our previous website but also creating comprehensive documentation to ensure a seamless experience for the future editorial team.

To aid the transition, I created beginner-friendly WordPress templates for creating common post and page types. In writing this guide, I used the [Google developer documentation style guide](https://developers.google.com/style) to ensure clear and consistent instructions. Additionally, I used [Vale](https://vale.sh/) to maintain high-quality and consistent content that adheres to the style guide.

:::note
This guide assumes the user is signed in to the site and can access the dashboard.
:::

## Upload photos and media files

Complete the following steps to upload new photo and media files:

<Stepper>

<Step>

On the sidebar, click **Media > Add new**.

</Step>

<Step>

Drop files to upload or click **Select files**.

</Step>

<Step>

<Step>

Select the thumbnail of the file you uploaded to modify it.

</Step>

</Step>

<Step>

Edit the **Alternative text** field.

:::tip ALT TEXT
Refer to this [guide](https://developers.google.com/style/images#alt-text) to learn how to write helpful alt text for images.
:::

</Step>

<Step>

Use the following naming conventions when editing the **Title** field:

- For image, audio, and PDF files: `title-lastname`.

:::info NAMING CONVENTION
If the artwork includes a series of images, add a number to the end of the title (for example, `fractured-goodrum-1`, `fractured-goodrum-2`, `fractured-goodrum-n`).
:::

- For issue covers: `semester-year-cover`.

</Step>

<Step>

Click **Close**.

</Step>

</Stepper>

## Create a new category

In WordPress, you can add categories to any post. Our website categorizes posts by issue.

Complete the following steps to create a new category:

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

## Create a new post

Complete the following steps to create a new post:

<Stepper>

<Step>

On the sidebar, click **Posts**.

</Step>

<Step>

Determine the post type you need to create:

- For art and media, choose from the available templates: `Single image`, `Several images`, and `Audio/Video`.

- For prose and poetry, choose the `Text` template.

</Step>

<Step>

Hover over your selected template and click **New draft**.

</Step>

</Stepper>

## Edit the post

Complete the following steps to edit the post you created:

<Tabs>
<TabItem value="art-and-media" label="For art and media" default>
<Stepper>

<Step>

Edit the **Article hero** block by clicking **Edit** and enter the author's name in the **Author** field.

</Step>

<Step>

Optional: If adding an artist statement or content warning, paste it in the first **Rich text** block. Include the artist statement in quotations (`"`) and the content warning in _italic_ type. Otherwise, delete this block.

</Step>

<Step>

Configure the **Image gallery** or **Rich text** block, depending on your selected template.

- Use the **Image gallery** block if you have several horizontal or landscape images.

- Use the **Rich text** block if you have multiple vertical, portrait, or differently oriented images.

   <Stepper>

   <Step>

   Go to **Add media > Create gallery**.

   </Step>
   
   <Step>
   
   Select the images you plan to insert.
   
   </Step>
   
   <Step>
   
   Configure the following **Gallery settings**:

   - **Link to**: `Attachment Page`
   - **Columns**: `1`
   - **Size**: `Full Size`
   
   </Step>
   
   </Stepper>

- For other instances, use the **Rich text** block.

:::tip FULL-SIZE EMBEDS
When embedding a video from YouTube or Vimeo, you can create a full-size embed by going to **Add media > Insert from URL**.
:::

</Step>

<Step>

Insert the contributor's bio, making sure to write their name in bold, in the **Rich text** block.

</Step>

</Stepper>
</TabItem>
<TabItem value="prose-and-poetry" label="For prose and poetry" default>
<Stepper>

<Step>

Edit the **Article hero** block by clicking **Edit** and enter the author's name in the **Author** field.

</Step>

<Step>

Optional: If adding an artist statement or content warning, paste it in the first **Rich text** block. Include the artist statement in quotations (`"`) and the content warning in _italic_ type. Otherwise, delete this block.

</Step>

<Step>

Paste the prose or poem in the second **Rich text** block.

</Step>

<Step>

Insert the contributor's bio, making sure to write their name in bold, in the third **Rich text** block.

</Step>

</Stepper>
</TabItem>
</Tabs>





## Edit post metadata and publish

Complete the following steps to modify the post metadata and publish the post:

<Stepper>

<Step>

Select **Settings** (next to **Publish**) if it’s not already open.

</Step>

<Step>

Configure the following fields:

| Field | Description |
| ----- | ----------- |
| Publish | Set to launch date and time. |
| URL | Keep the permalink as a hyphenated title, unless the piece is untitled. In that case, name the permalink as `untitled-lastname`. |
| Pending review | Select the **Pending review** checkbox to allow you to review posts after you have uploaded the entire issue to WordPress. |
| Categories | Clear the **Template** checkbox and select the category you created from [Create a new category](#create-a-new-category). |
| Tags | Select the **Art**, **Media**, **Prose**, or **Poetry** tag. |

</Step>

<Step>

Click **Save as pending**.

</Step>

<Step>

Click **Preview** to view your post.

</Step>

<Step>

Click **Publish** to publish your post. (**Schedule** if you scheduled the post to publish later).

</Step>

<Step>

Confirm that you want to publish or schedule the post for publishing in the pre-publish checks.

</Step>

</Stepper>

## Create a new issue landing page

Complete the following steps to create a new issue landing page:

<Stepper>

<Step>

On the sidebar, click **Pages**.

</Step>

<Step>

Locate the **New issue** template.

</Step>

<Step>

Hover over **New issue** template and click **New draft**.

</Step>

</Stepper>

## Edit the issue landing page

Complete the following steps to edit the issue landing page you created:

<Stepper>

<Step>

Edit the page title using the `Issue #: Semester Year` naming convention.

</Step>

<Step>

Add a 750×1000 px cover image to the **Rich text** block.

</Step>

<Step>

Configure the following fields in the **Rich text** block:

| Field | Description |
| ----- | ----------- |
| Align | Select `Center`. |
| Size | Select `Full Size`. |
| Link to | Select `Attachment Page` |

</Step>

<Step>

Enter in the artist's name in the `Cover artwork by [Artist Name]` placeholder. This text is always italicized and center-aligned.

</Step>

</Stepper>

Go to the next section to edit the stacking cards for each respective genre.

## Link posts to the issue landing page

Complete the following steps to link posts to the issue landing page:

<Stepper>

<Step>

Navigate to the stacking card for the genre you plan to link.

</Step>

<Step>

Replace the placeholder content. For example, `Art Title 1, Artist Name`.

</Step>

<Step>

Click **Select link**.

</Step>

<Step>

In the dialog that appears, search for your post under **Or link to existing content**.

:::note
You must publish the post to find it in the search.
:::

</Step>

<Step>

Select your post and click **Add link**.

</Step>

<Step>

For art and media, click **Remove** on the placeholder image and replace it with a thumbnail for your post.

</Step>

</Stepper>

After linking all the posts, go to the next section.

## Edit page metadata and publish

Complete the following steps to modify the page metadata and publish the page:

<Stepper>

<Step>

Configure the following fields:

| Field | Description |
| ----- | ----------- |
| Publish | Select the launch date. |
| URL | Enter `issue-#-semester-year`. |
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

## Update the site menu

Complete the following steps to update the site menu:

<Stepper>

<Step>

On the sidebar, click **Appearance > Menus**.

</Step>

<Step>

Go to **Menu structure** and click the down arrow on **Current issue**.

</Step>

<Step>

Edit the **URL** box to match the new issue landing page slug. For example, `/issue-14-fall-2023`.

</Step>

<Step>

Click **Save menu**.

</Step>

</Stepper>

Your menu should now link to the latest issue landing page.

## Move the previous issue to the past issues page

Complete the following steps to move the previous issue to the past issues page:

<Stepper>

<Step>

On the sidebar, click **Pages** and locate the previous issue. For example, `Issue 13: Spring 2023`.

</Step>

<Step>

Hover over the previous issue and click **Quick edit**.

</Step>

<Step>

Configure the following fields:

| Field | Description |
| ----- | ----------- |
| Parent | Select `Past issues`. |
| Order | Select `1`. |

</Step>

<Step>

Click **Update**.

</Step>

<Step>

Hover over **Past issues** and click **Edit**.

</Step>

<Step>

Navigate to the stacking cards and click **Add row**.

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

## Edit images to fit size-specific blocks

With the site's custom WordPress blocks, you may need to modify your photo to fit within the block's dimensions. For example, on the **Meet the editors** page, the **Stacking cards** block contains editor bios and photos.

To ensure your image is displayed correctly, complete the following steps:

<Stepper>

<Step>

Determine the specific height and width required for the photo layout. The dimensions for an image in a stacking card block is `900×506 px`.

</Step>

<Step>

Use an image editor like Adobe Photoshop to create a canvas with the required dimensions and a transparent background.

</Step>

<Step>

Place your photo in the center of the canvas and save the file as a `.jpg` or `.png`.

</Step>

<Step>

Upload the properly sized image to the **Stacking cards** block.

</Step>

</Stepper>

By following these steps, your image will fit the exact dimensions of the block and avoid any awkward cropping.
