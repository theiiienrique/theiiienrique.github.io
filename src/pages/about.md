---
title: About
description: Learn about Enrique Martinez III, a technical writer specializing in docs-as-code, API documentation, and user-centered product content.
hide_table_of_contents: true
---

import Timeline from '@site/src/components/Timeline';
import AboutSection from '@site/src/components/AboutSection';
import AboutScrollCue from '@site/src/components/AboutScrollCue';

<div className="page-grid-motif page-grid-motif--about">

<p className="section-label">Profile</p>

<AboutSection id="about-intro">

# About

I help teams turn complex technical concepts into clear, user-focused documentation. My background spans integration platforms, open-source projects, and large-scale content migrations.

I create and maintain product documentation in close collaboration with engineering and product teams to deliver accurate, actionable content for developers and business users.
</AboutSection>

<AboutSection id="about-core">
## Core competencies

- **Documentation types**: Product documentation, API documentation, process documentation, user guides, conceptual documentation, technical how-tos
- **Technical skills**: Docs-as-code workflows, Markdown, Git/GitHub, HTML/CSS, REST APIs, Docusaurus, Vale, Visual Studio Code
- **Tools & platforms**: Confluence, Jira, Postman, Snagit, Google Analytics, Google Tag Manager, Algolia, GitHub Actions
- **Style guides**: Google developer documentation style guide, Vale linting
</AboutSection>

<AboutSection id="about-experience">
## Experience

<Timeline items={[
{
company: 'Workato',
roles: [
{
title: 'Technical Writer',
dateRange: 'April 2025–present',
description: [
'Led the migration and restructuring of documentation for a major AI support product area, transforming legacy content into a clear, goal-based user journey aligned with updated functionality and branding.',
'Designed and implemented reusable documentation components to surface platform limits across the docs site, using AI assistance in early prototyping and refining the solution with engineering review.',
'Identified documentation gaps and developed reusable FAQ content, recommending new documentation to improve self-service.',
'Collaborate with product managers, engineers, and designers to plan and deliver user-centered documentation aligned with product releases and workflows.'
]
},
{
title: 'Intern, Technical Writing',
dateRange: 'Apr 2024–Apr 2025',
description: [
'Created product, API, and integration documentation including tutorials, FAQs, and feature guides for technical and non-technical users.',
'Partnered with product managers and engineers to translate PRDs and feature updates into clear documentation.',
'Tested features and APIs to validate procedures and ensure documentation reflected real user workflows.',
'Reviewed and edited documentation for clarity, accuracy, and consistency across the docs site.'
]
}
]
},
{
company: 'The Good Docs Project',
roles: [
{
title: 'Volunteer Technical Writer',
dateRange: 'July 2023–April 2024',
description: [
'Authored a <a href="/docs/user-stories/user-story-template">user story template</a> and <a href="/docs/user-stories/user-story-guide">implementation guide</a>',
'Provided reviews for community contributions, focusing on structure, clarity, style consistency, and adherence to documentation standards',
'Used Vale linting workflows to automate style enforcement and maintain documentation quality at scale'
]
}
]
}
]} />
</AboutSection>

<AboutSection id="about-education">
## Education

<Timeline items={[
{
company: 'University of Southern California',
roles: [
{
title: 'Master of Arts in Literary Editing and Publishing',
dateRange: '2023'
},
{
title: 'Bachelor of Arts in Narrative Studies',
dateRange: '2023'
}
]
}
]} />
</AboutSection>

<AboutSection id="about-connect">
## Let's connect

Interested in working together? [Get in touch](/contact) or connect with me on [LinkedIn](https://www.linkedin.com/in/theiiienrique/) and [GitHub](https://github.com/theiiienrique).
</AboutSection>

<AboutScrollCue sectionIds={['about-intro', 'about-core', 'about-experience', 'about-education', 'about-connect']} />

</div>
