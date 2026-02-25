---
title: Platform limits docs system
sidebar_position: 1
description: Docs-as-code limits system using shared YAML data and reusable components to keep limits consistent across pages.
tags:
  - docs-as-code
  - tooling
  - reference
---

# Platform limits docs system

<img src="/samples/platform-limits-top.png" alt="Platform limits documentation preview" class="sample-doc-preview" loading="lazy" />

## About this sample

This page covers the platform limits documentation system, built as part of a broader effort to make limits easier to maintain and keep consistent across the docs site. I designed a single-source YAML model and built reusable limit components so limit values can be updated once and reused wherever they appear.

I worked with software engineers for code review and optimization, and the model now supports limits content used across roughly 100 pages. This reduced the risk of one-off edits drifting out of sync, and made corrections straightforward when limits change. Other writers on the team now maintain the shared data file and use the components when adding or updating limits.

## Why this worked

- A single YAML source removed duplicate edits when limit values changed.
- Reusable limit components allowed the same data to fit different documentation contexts.
- Engineers reviewed the component implementation, and writers can maintain the limits data directly.
- Publishing limits in a consistent format improved visibility into platform constraints for users designing and implementing solutions.

## Live documentation

- Live doc: [Platform limits](https://docs.workato.com/en/limits.html)
