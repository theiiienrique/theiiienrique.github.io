import React from "react";
import Layout from "@theme/Layout";
import DocCard from "@site/src/components/DocCard";
import { useHistory } from "@docusaurus/router";
import styles from "./docs.module.css";

export default function Docs() {
  const history = useHistory();

  const featuredSamples = [
    {
      title: "Platform limits docs system",
      description:
        "I built reusable limits components backed by a single YAML source so limit values stay consistent across docs.",
      link: "/docs/samples/platform-limits-system",
      kind: "tooling",
      thumbnail: "/samples/platform-limits-preview.png",
      tags: ["docs-as-code", "tooling", "reference"],
    },
    {
      title: "AgentX Support migration",
      description:
        "I led this migration, restructuring legacy content into a clearer AgentX Support user journey.",
      link: "/docs/samples/agentx-support-migration",
      kind: "guide",
      thumbnail: "/samples/agentx-support-preview.png",
      tags: ["feature docs", "migration"],
    },
    {
      title: "Embedded API environment management",
      description:
        "I authored this API reference and aligned it with the activity reference for a more consistent Embedded API doc set.",
      link: "/docs/samples/embedded-api-environment-management",
      kind: "reference",
      thumbnail: "/samples/embedded-api-environment-management-preview.png",
      tags: ["api docs", "reference"],
    },
    {
      title: "Performance Copilot docs",
      description:
        "I documented this feature independently, turning product behavior into practical guidance for recipe optimization.",
      link: "/docs/samples/performance-copilot-feature-docs",
      kind: "guide",
      thumbnail: "/samples/performance-copilot-preview.png",
      tags: ["feature docs"],
    },
    {
      title: "Calculated column function references",
      description:
        "I created reusable function-reference patterns to improve scannability and consistency across Insights docs.",
      link: "/docs/samples/calculated-column-function-reference",
      kind: "reference",
      thumbnail: "/samples/calculated-column-functions-preview.png",
      tags: ["reference"],
    },
  ];

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
      description="Portfolio of technical documentation samples showcasing my writing, process documentation, and docs-as-code expertise"
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
                    A curated set of writing samples across product docs, API
                    references, and docs-as-code workflows.
                  </p>
                </div>

                <div className={styles.content}>
                  <div className={styles.sectionHeader}>
                    <h2 id="featured-professional-work">
                      Featured professional work
                      <a
                        className="hash-link"
                        aria-label="Direct link to Featured professional work"
                        title="Direct link to Featured professional work"
                        href="#featured-professional-work"
                      >
                        &#8203;
                      </a>
                    </h2>
                    <p>
                      Public product documentation samples from my professional
                      work, each with its own context page.
                    </p>
                  </div>
                  <div className={styles.grid}>
                    {featuredSamples.map((sample, index) => (
                      <DocCard
                        key={index}
                        {...sample}
                        onTagClick={handleTagClick}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.content}>
                  <div className={styles.sectionHeader}>
                    <h2 id="additional-samples">
                      Additional samples
                      <a
                        className="hash-link"
                        aria-label="Direct link to Additional samples"
                        title="Direct link to Additional samples"
                        href="#additional-samples"
                      >
                        &#8203;
                      </a>
                    </h2>
                    <p>
                      Earlier and open-source samples that show process
                      documentation, style tooling, and template design.
                    </p>
                  </div>
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
