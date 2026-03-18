import React from "react";
import Layout from "@theme/Layout";
import DocCard from "@site/src/components/DocCard";
import { useHistory } from "@docusaurus/router";
import styles from "./docs.module.css";

export default function Docs() {
  const history = useHistory();

  const additionalSamples = [
    {
      title: "WordPress uploading guide",
      description:
        "I wrote this guide for Palaver’s move from Squarespace to WordPress, covering core publishing and media workflows.",
      link: "/docs/wordpress",
      kind: "guide",
      thumbnail: "/img/wordpress.png",
      tags: ["migration", "how-to", "wordpress"],
    },
    {
      title: "Add Vale to your repository",
      description:
        "A practical setup guide for Vale, including installation, VS Code integration, and style-guide configuration.",
      link: "/docs/vale/add-vale-to-your-repository",
      kind: "tooling",
      thumbnailLight: "/samples/vale-light.png",
      thumbnailDark: "/samples/vale-dark.png",
      tags: ["how-to", "tooling", "vale"],
    },
    {
      title: "User story template",
      description:
        "A reusable user story template for writing clear, structured stories aligned with agile documentation practices.",
      link: "/docs/user-stories/user-story-template",
      kind: "template",
      thumbnailLight: "/samples/user-story-template-dark.png",
      thumbnailDark: "/samples/user-story-template-light.png",
      tags: ["template", "open source", "user stories"],
    },
    {
      title: "User story guide",
      description:
        "A practical companion guide that explains how to use the template, write acceptance criteria, and estimate scope.",
      link: "/docs/user-stories/user-story-guide",
      kind: "guide",
      thumbnailLight: "/samples/user-story-guide-light.png",
      thumbnailDark: "/samples/user-story-guide-dark.png",
      tags: ["guide", "open source", "user stories"],
    },
  ];

  const toTagSlug = (tag) =>
    tag
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleTagClick = (tag) => {
    history.push(`/docs/tags/${toTagSlug(tag)}`);
  };

  return (
    <Layout
      title="Documentation samples"
      description="Public documentation and open-source writing samples showcasing my process documentation and docs-as-code expertise"
    >
      <main className="container container--fluid margin-vert--lg page-grid-motif page-grid-motif--docs">
        <div className="row">
          <div className="col">
            <article className={`mdx-wrapper ${styles.docsPage}`}>
              <div className="container">
                <div className={styles.hero}>
                  <p className="section-label">Samples</p>
                  <h1 className={styles.title}>Documentation samples</h1>
                  <p className={styles.subtitle}>
                    Public documentation, tooling guides, and templates that
                    reflect how I structure and maintain technical content.
                  </p>
                </div>

                <div className={styles.content}>
                  <div className={styles.grid}>
                    {additionalSamples.map((sample, index) => (
                      <DocCard
                        key={index}
                        {...sample}
                        onTagClick={handleTagClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}
