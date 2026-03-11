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

![Platform limits documentation preview](/samples/platform-limits-top.png)
_Platform limits documentation preview_

## About this sample

This sample covers a platform limits documentation system built to make limits easier to maintain and keep consistent across the docs site. It uses a single-source YAML model and reusable limit components so values can be updated once and reused wherever they appear.

After early prototyping, the implementation and content model were refined with engineering review and optimization. The model now supports limits content used across roughly 100 pages, reduces the risk of one-off edits drifting out of sync, and makes corrections straightforward when limits change.

## Why this worked

- A single YAML source removed duplicate edits when limit values changed.
- Reusable limit components allowed the same data to fit different documentation contexts.
- Engineers reviewed the component implementation, and writers can maintain the limits data directly.
- Publishing limits in a consistent format improved visibility into platform constraints for users designing and implementing solutions.

## Live documentation

- Live doc: [Platform limits](https://docs.workato.com/en/limits.html)
