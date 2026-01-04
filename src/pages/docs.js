import React from "react";
import Layout from "@theme/Layout";
import DocCard from "@site/src/components/DocCard";
import styles from "./docs.module.css";

export default function Docs() {
  const docSamples = [
    {
      title: "WordPress uploading guide",
      description:
        "A comprehensive guide created for Palaver Arts Magazine editors during their migration from Squarespace to WordPress. Covers content publishing workflows, image optimization, and post metadata management.",
      link: "/docs/wordpress",
      tags: ["how-to", "wordpress", "content management"],
    },
    {
      title: "Vale setup guide",
      description:
        "Step-by-step instructions for installing and configuring Vale, a command-line linter for prose. Includes integration with VS Code and configuration for multiple style guides.",
      link: "/docs/vale/add-vale-to-your-repository",
      tags: ["how-to", "vale", "docs-as-code"],
    },
    {
      title: "User story template & guide",
      description:
        "An open-source template and implementation guide for writing effective user stories. Created for The Good Docs Project following agile documentation standards.",
      link: "/docs/user-stories/user-story-template",
      tags: ["template", "agile", "best practices"],
    },
  ];

  return (
    <Layout
      title="Documentation samples"
      description="Portfolio of technical documentation samples showcasing my writing, process documentation, and docs-as-code expertise"
    >
      <main>
        <article>
          <div
            className="container"
            style={{
              maxWidth: "1000px",
              padding: "0 2em",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div className={styles.hero}>
              <h1 className={styles.title}>Documentation samples</h1>
              <p className={styles.subtitle}>
                A collection of technical writing samples demonstrating
                docs-as-code workflows, user-focused content, and collaborative
                documentation practices.
              </p>
            </div>

            <div className={styles.content}>
              <div className={styles.grid}>
                {docSamples.map((sample, index) => (
                  <DocCard key={index} {...sample} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}
