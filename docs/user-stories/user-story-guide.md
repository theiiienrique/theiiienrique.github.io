---
sidebar_position: 2
description: Learn how to complete the user story template.
---

# User story guide

## What's a user story?

A user story is a short description of a feature written from the user's perspective. It captures who the user is, what the feature would allow the user to do, and why they want it.

User stories follow a simple formula:

> As a user persona, I want to do some task so that I can achieve some goal.

User stories are powerful because they enable you to translate user feedback into concise stories that communicate what your users want and why.

## User stories and requirements

User stories are sometimes compared to requirements. Like requirements, user stories help teams deliver products that meet user expectations.

However, user stories focus on the user’s goals rather than the technical aspects of the product. Unlike requirements, which detail how a system should respond to specific events or conditions, a user story centers around the user’s goals with a feature.

User stories serve as placeholders for future conversations. They’re informal and brief to encourage dialogue between the customer and development teams. Through these conversations, the specific details of a user story and its acceptance criteria emerge.

|                         | User story                                                                                                               | Requirement                                                                                                                                                                                      |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content                 | A short description of how a feature helps a user achieve a goal.                                                        | A description of what a system should do, the services it provides, and the constraints on its operation.                                                                                        |
| Purpose                 | Places user expectations at the center of the development process to deliver a product that serves the user effectively. | Guides the development team in designing the system by specifying its functionalities. In Waterfall development, meeting all requirements is typically a prerequisite for system implementation. |
| Development methodology | Used in Agile development.                                                                                               | Used in Waterfall development.                                                                                                                                                                   |

## Why you should use user stories

User stories involve the user throughout the software development life cycle. They emphasize the value of conversation between the user and development teams. With user stories, users can communicate what they want and why, and decide whether a feature meets their expectations. User stories enable teams to align their product with user expectations.

While user stories benefit your users, they can also help your team

- **Prioritize urgent tasks**: User stories emerge from user feedback. If there’s a demand for a specific feature or a repeated issue in your ticketing system, user stories can help you decide which tasks are most urgent.
- **Break down large tasks**: User stories break down large tasks into the smallest possible units of work. With small and self-contained user stories, you can develop and release features incrementally and efficiently.
- **Clarify broad tasks**: User stories play a crucial role in refining epics and creating tasks that pave the way for successful outcomes. An epic, essentially a broad user story, consists of smaller user stories. Understanding these smaller stories is essential for effective work. User stories help assess task size and dependencies, which is vital in Agile environments for achieving sprint goals.

## User story best practices

Although user stories follow a straightforward formula, there are many ways they can fall short of effectiveness. Use the following best practices when writing user stories:

### Use INVEST

A good user story follows the INVEST acronym:

Independent
: Doesn’t depend on the completion of other features.

Negotiable
: Captures what the user wants and why, not how to build the feature.
: Generates conversation on how to meet the user's needs effectively.

Valuable
: Delivers value to users and the company.

Estimable
: Can estimate the time and effort required to complete the user story.

Small
: Able to be completed in a single sprint.

Testable
: Has specific criteria to determine when the user story is complete.

### Avoid user interface details

Avoid including details related to the product's user interface in your user stories. Although these details may seem helpful, they assume how the user story will be developed early on. This limits the possibility of exploring all options during a conversation between the user and development teams.

User stories should be negotiable and flexible, and should avoid making assumptions about how a solution will be built or implemented.

### Use plain language

Use plain language and avoid technical or business jargon when writing user stories. This ensures a continued focus on the user’s goals with the feature. Plain language also allows team members from an organization’s technical and business sides to write, submit, and discuss user stories more effectively.

### Keep user stories small

Keep user stories small and self-contained to help you develop and release features incrementally and efficiently.

However, some situations may make breaking user stories into smaller units challenging. For example, with user authentication, several functionalities may be dependent on each other and require simultaneous development.

Still, keep user stories small whenever possible to move features out of the work-in-progress stage and the product backlog. This enables you to complete sprint goals without carrying over work to the next sprint.

## Content of the user story template

### About the “Title” section

Write a short, descriptive title for the user story you’re working on.

For example, imagine you’re creating a feature for a learning management system that lets students view assignments ordered by due date. In this scenario, you might select the following title for your user story:

Example: View assignments by due date

### About the “User story” section

Use the formula to write your user story:

> As a user persona, I want to do some task so that I can achieve some goal.

Example: As a student, I want to see my class assignments based on when they’re due so that I can prioritize what I need to get done.

#### What is a user persona?

A user persona is a model that represents a sub-group of product users. User personas reflect the key attributes and needs of actual users, including ways of thinking, behavior motivations, goals, challenges, or roles. The more clearly you understand your user personas, the more accurately you can address their goals and challenges.

### About the “Acceptance criteria” section

Acceptance criteria are pass/fail tests used to determine when a user story is complete. They consist of specific, testable statements that describe what a user should encounter or observe when using a feature.

Like user stories, acceptance criteria capture the user's perspective. By outlining what users should see and experience, acceptance criteria help clarify the user story’s intent. This makes it easier for your team to release features that meet user needs and anticipate and reduce friction and potential pain points when a feature doesn’t behave according to your users’ expectations.

Acceptance criteria often take the form of bullet points that list observable outcomes from the user's interaction with the feature.

Consider the following example when writing acceptance criteria for your user stories:

User story
: As a student, I want to see my class assignments based on when they’re due so that I can prioritize what I need to get done.

Acceptance criteria
: - The student can view their assignments in ascending order, with the assignments with the earliest due date at the top.
: - The student can view the assignment due date in a clear and consistent format.
: - The student can remove or hide an assignment from the upcoming assignments view.
: - The student can see when an assignment is overdue.
: - Past-due assignments are visually marked with a specific indicator, such as a different color or an 'overdue' label, to alert students about overdue work and prevent missed deadlines.

### About the “Story points” section

Story points estimate how much time and effort a user story requires to complete relative to other user stories.

Assigning story points to a user story is optional but recommended. Story points can help your team plan sprints and ensure that an appropriate amount of work is assigned with each sprint.

With story points, teams typically use numbers from the Fibonacci sequence or shirt sizes to estimate a user story's time, effort, and complexity. The important things to know about story points include the following:

- Teams estimate user stories, not individuals. This way, all members can deliberate on the story points before deciding on them. This also prevents one person from being responsible for them and possibly under- or over-estimating a user story.
- Story points aren’t absolute estimates, so avoid using estimates that measure user stories in days or weeks.
- At the end of a sprint, you may find that a story point was inaccurate. The best thing to do is to adjust and modify your story points relative to the other user stories in the product backlog.

### About the “Priority” section

Assigning a priority level to a user story is optional but recommended. You can designate priority levels using tags such as Critical, High, Medium, and Low.

You may assign priority based on quantitative data collected from user research. For example, if a customer satisfaction score is low with a particular feature or an issue repeatedly appears in your ticketing system, this may be a common issue that users are experiencing and, therefore, should take a higher priority level.
