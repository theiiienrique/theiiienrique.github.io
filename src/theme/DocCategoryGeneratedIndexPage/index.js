import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import { useCurrentSidebarCategory } from "@docusaurus/plugin-content-docs/client";
import useBaseUrl from "@docusaurus/useBaseUrl";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import DocCardList from "@theme/DocCardList";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocVersionBanner from "@theme/DocVersionBanner";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }) {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }) {
  const category = useCurrentSidebarCategory();

  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header>
        <Heading as="h1" className="doc-category-generated-index-page-title">
          {categoryGeneratedIndex.title}
        </Heading>
        {categoryGeneratedIndex.description && <p>{categoryGeneratedIndex.description}</p>}
      </header>
      <article className="margin-top--lg">
        <DocCardList items={category.items} />
      </article>
      <footer className="margin-top--md">
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props) {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
