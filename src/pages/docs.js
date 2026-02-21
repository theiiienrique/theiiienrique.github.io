import React from "react";
import Layout from "@theme/Layout";
import DocCard from "@site/src/components/DocCard";
import styles from "./docs.module.css";

export default function Docs() {
  const docSamples = [
    {
      title: "WordPress uploading guide",
      description:
        "I created this for Palaver Arts Magazine's move from Squarespace to WordPress. It walks editors through the essentials—publishing workflows, optimizing images, and managing post details—so the migration feels less overwhelming.",
      image: "/img/wordpress.png",
      link: "/docs/wordpress",
      tags: ["how-to", "wordpress"],
    },
    {
      title: "Vale setup guide",
      description:
        "A practical guide to setting up Vale, a tool that catches common writing issues automatically. I cover installation, integrating it with VS Code, and configuring it for your style guide.",
      image: "/img/vale/vale-response.png",
      link: "/docs/vale/add-vale-to-your-repository",
      tags: ["how-to", "vale"],
    },
    {
      title: "User story template & guide",
      description:
        "An open-source template and guide I created for The Good Docs Project. It helps teams write user stories that actually get used, grounded in agile documentation best practices.",
      link: "/docs/user-stories/user-story-template",
    },
  ];

  return (
    <Layout
      title="Documentation samples"
      description="Portfolio of technical documentation samples showcasing my writing, process documentation, and docs-as-code expertise"
    >
      <main className="container container--fluid margin-vert--lg">
        <div className="row">
          <div className="col">
            <article className="mdx-wrapper">
              <div className="container">
            <div className={styles.hero}>
              <h1 className={styles.title}>Documentation samples</h1>
              <p className={styles.subtitle}>
                These samples show how I tackle different documentation
                challenges, from helping teams publish on new platforms to
                building tools that improve writing quality.
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
          </div>
        </div>
      </main>
    </Layout>
  );
}
