---
layout: post
title: "Who owns the prototype after the magic fades?"
subtitle: "Vibe coding tore down the barrier to entry — but nobody is talking about the handoff that comes next."
lang: en
ref: handoff-vibe-coding
tags: [engineering, ai, leadership]
featured_image_thumbnail: assets/images/posts/2026-06-28/1_thumbnail.jpg
featured_image: assets/images/posts/2026-06-28/1.jpg
featured: true
---

<!--
THESIS: Vibe coding tore down the barrier to producing code, not the barrier to judging it.
The value to the company is not in adopting or banning it — it is in designing the maturity
curve a team climbs: from Builders who prototype, to Hybrid Squads where the handoff applies
repertoire and specs, to Agentic Squads where guardrails and harness encode engineering's
standards. Confusing the levels — prototype as product, speed as judgment — is where the debt
is born.
AUDIENCE: technical and product leadership (engineers, managers, coordinators, technology and
product directors).
-->

## Opening — the tension

<!--
Captured material:
- Early chaos: teams adopting agents with no guardrail/harness/control
- Engineers stringing loose prompts together for every step
- Pasting the chat's answer straight into the code
- Close: the barrier to PRODUCING code fell; the barrier to JUDGING code did not
-->

Since November 2022, when OpenAI opened ChatGPT's conversational mode to the general public, we have been taking ever larger strides in the evolution of Artificial Intelligence and its applicability. Not only in information technology or robotics, but as an integral part of our everyday lives — changing the way we carry out day-to-day tasks and how we search for information and knowledge.

In Software Engineering in particular, I see the barrier to producing code becoming increasingly BAU (Business As Usual). But our ability to judge what is being generated has not kept pace. And that is exactly where the tension lives: we, as engineers, need to evolve the way we work — adopt guardrails and harness — to ensure that the software we produce stays within quality standards and complies with regulations.

## 1. The barrier that fell was the prototype's, not the product's

<!--
Argument: vibe coding democratized getting the idea off the ground, not engineering.
Captured material:
- Makers analogy: breadboard + Arduino Uno work, but turning it into a product requires
  circuit board design, certification
- Anchor thesis (your words): whoever is outside the context "doesn't even have the repertoire
  to know what's missing"
- Software in production involves security, performance, regulation
- Healthy counterpoint: prototyping is legitimate (builder hackathons/weekends) —
  the problem is not prototyping
-->

The maker movement in Brazil began to gain momentum between 2012 and 2014, a few years after the arrival of Arduino — in Italy, in 2005 — and the Raspberry Pi, in the UK, in 2012. Two platforms that became major engines of transformation, allowing anyone to build robotics and home-automation projects.

I got a closer look around 2015, when I started working at CI&T, through the "Garages" — a space, at the time, for people who liked to build and bring projects to life using breadboards, electronic components, and programming their automations on top of one of those platforms.

I use this movement as a mirror because I see it as very similar to Vibe Coding — or rather, to the Builders movement. From my point of view, what it democratized was not access to programming and software engineering, but the possibility for people to take their software and app ideas off the ground far more easily. People who sometimes have no formal training in the field, or who had drifted away from the development context.

It is interesting to see content on Instagram like Anthropic's Claude Build Day, or the Cursor profile, with people developing ideas and putting them up for validation in a matter of hours or days. Or the joy of those who get to write code again day to day — after all, programming is the foundational profession for many people. That was the case for one of my former managers, genuinely happy to get back to crafting with less friction, without having to relearn or pick up a specific language for a niche. I keep imagining the cool things we'll see people create at our next hackathons.

My point is: prototyping is legitimate and should be encouraged. But just as a project assembled on a breadboard with an Arduino, once validated, has to migrate to a perfboard and then to a printed circuit board (PCB), the path of what we do as Builders should be the same.

The question is: what does that migration look like when the prototype isn't a circuit, but software?

<!--
My point is: prototyping is legitimate and should be encouraged. But just as a project
assembled on a breadboard with an Arduino, once validated, has to migrate to a perfboard and
then to a PCB, the path of what we do as Builders should be the same. That is: a handoff to
experienced engineers, who will ensure the solution is sustainable enough to run in production.
Who will prevent security problems and failures — like the data leaks already happening in some
cases, precisely for lack of the repertoire to know what is still missing before actually
launching the product to the public.
-->

## 2. Builder is not maturity: the curve that starts at the handoff

<!--
Argument: AI adoption is not binary (ban vs allow) — it is a curve you climb. Each level
answers "who hands the baton to whom, and what needs to exist for whoever receives it to be
able to judge".
- Builders: vibe coders. Prototype and discovery.
- Hybrid Squads: handoff where repertoire + specs come in.
- Agentic Squads: guardrails, harness, playbooks as skills.
-->

I think this is the first time I've seen an emerging technology being adopted massively at the corporate level. Especially in the banking and financial sector, where we used to take a fair amount of time to adopt a new technology — waiting for it to pass through the "Trough of Disillusionment" and reach the "Plateau of Productivity".

In fact, I believe we haven't even left the "Peak of Inflated Expectations". The technology keeps evolving and changing and, even with all the instability, we already have massive adoption across most large companies.

There are many open discussions. We are still figuring out the relationship between the cost of Artificial Intelligence and ROI. The impact of dependence and how strategic it is becoming from the standpoint of state sovereignty. The impact on the training of our future software engineers. And how we define maturity levels and AI application scenarios.

It is this last point I want to dwell on. In the previous section I shared my view on Builders. I understand that **Builder is not a maturity level** — companies with a stronger product bias, that test more freely with user groups, will benefit enormously from the speed of generating a fully functional prototype to validate an idea before investing time in a structured build. It is almost a pre-MVP. A mechanism to ease validation, especially in the hands of Founders, Product Managers, or Product Designers.

After validation happens, with field testing alongside user groups, the moment of the handoff arrives. An engineering team rebuilds — or extends an existing piece of software — taking into account an architecture and design structure aligned with the security, performance, scalability, resilience, and maintainability the product demands. With the support of Artificial Intelligence, but with all the repertoire needed to conceive a product that is sustainable in production.

And this is where the maturity curve begins. Unlike the Builder — which I consider a prototyping and conception stage — the **first maturity level is hybrid teams**. They carry out this build oriented by technical specifications and standards, guiding the Artificial Intelligence toward generation that is more in line with expectations, with well-defined validation steps.

The **second maturity level**, once teams already run the hybrid model well, is the move toward agentic teams. My view is that all the repertoire used to guide the AI starts to be converted into guardrails, harness, and playbooks that the Artificial Intelligence makes full use of. We come to have fewer manual validation points, because all of that scaffolding built to guide the AI becomes reliable and predictable.

![Maturity curve: from Builder to hybrid and agentic teams](/assets/images/posts/2026-06-28/curva-maturidade.svg)

## 3. Where the handoff really happens: repertoire

<!--
Argument: without repertoire, the human does not evaluate what the AI produced — "reviewing"
becomes rubber-stamping. Repertoire is a prerequisite, not an accessory.
First-hand case to develop:
- Test class with privileged access via reflection + @Autowired (Java/Kotlin) to obtain
  private attributes
- Project already had Mockito available to do it cleanly
- You stopped, reread the docs (admit you've been away from day-to-day development for a while)
- Cut 15+ unnecessary lines the engineer would have simplified had they had the repertoire to
  evaluate it
- Additional angle: engineers who moved from high-level platform to low-level
-->

Perhaps one thing I've noticed ever since we started using Artificial Intelligence tools is the rise in confidence — sometimes without any level of judgment or critique — about what the AI is answering or producing, depending on the context.

We need to keep in mind that Large Language Models (LLMs) are not always trained on the best possible sampling of data. A good part of that knowledge base is of low or medium quality — which often makes the generated solutions merely average. The AI does not return the best possible solution; it returns a plausible one.

A recent example was a test class generated by the Artificial Intelligence. Technically, the test setup and the tests themselves were functional — but the engineer didn't assess the complexity of the solution. For a Java developer working with Spring Boot, in a context where the project already has a library like Mockito, the natural path would be to use the `@InjectMocks` and `@Mock` annotations to handle the `@Autowired` behaviors. That is not what the coding agent did — and the engineer didn't have enough knowledge of the framework to notice there was a simpler, cleaner path.

This is exactly where the risk lives. For lack of technical repertoire, we end up increasing entropy, reducing the maintainability and testability of the software over time — and generating large technical debt that will only show up further down the road.

Although coding is becoming increasingly BAU, building and maintaining technical repertoire — programming language, frameworks, system design, algorithms, data structures — remains extremely relevant. It is this repertoire that lets us judge and critique the AI's output. If you don't have repertoire, you have no way of knowing what is missing, nor whether the solution path presented is the correct one.

## 4. Encoding judgment: guardrails, harness, and specs

I recall that, when we started having our first interactions with a more robust tool aimed at coding with Artificial Intelligence, I began to observe — and to be bothered by — the way the interactions between the engineer and the coding agent unfolded. At first, they ranged from simple approaches, like one-off prompts to clear up doubts and copy-paste the agent's answers, to the most advanced ones of the time, which already used the agent to modify code but iterated through several prompts to reach a goal. The fact is that many engineers, working this way, were left with the feeling that it was neither productive nor efficient — and many began to doubt whether Artificial Intelligence could actually help.

My discomfort led me to seek out more information and learning, through content and events. I ended up coming across models like BMAD, GitHub SpecKit, and Tessl. That led me to an insight: we had to talk less about tools and more about establishing a standardized workflow that gave good completeness to the activities engineers needed to perform during the coding process.

So, in a feature-delivery experiment in late 2025, we adopted a more customized Spec Driven Development (SDD), without the scaffolding that GitHub SpecKit and Tessl models bring. We ran a quick experiment with two standardized prompts: one to generate tasks from a specification written by the engineers, and another to execute those tasks — taking into account a context that included general guidance in an AGENT.md, the mapping of the applications involved (brownfield), and implementation guidelines aligned with the organization's needs.

The result was positive. We tested fast, and the engineers saw value in having a working method.

Now the challenge became how to scale the model. Although agents like Claude Code, Devin, Codex, and Copilot already have their built-in harness aimed at coding — which is already a specialization — they are still generic for our context.

The path we've found so far was to adopt skills and MCPs to create a harness layer on top of the built-in one. We turned our engineering playbooks, standards documentation, internal frameworks, and team conventions into skills. On top of that, we created our own Spec Driven Development skill, which covers 80% to 90% of the development process. It assists the engineer from setting up the project to start AI-assisted work, through standardized mapping of the codebase (brownfield), through refining a specification from high-level feature descriptions, all the way to generating tasks for the AI to execute — with a dependency graph, batch organization to optimize subagent usage, and very clear review and confirmation points for the engineer.

This standardization lets us pursue continuous improvement to optimize process and cost, and it ensures the quality and homogenization of the way our software is built.

<!--
Argument: you only delegate more to the AI when the repertoire stops living only in people's
heads and starts living in the process.
Captured material:
- Spec Driven Development (SDD)
- The bank's engineering playbooks turning into skills
- Harness beyond the built-in of Claude Code / Copilot / Devin to enforce standards
-->

## Conclusion

In my opinion, Vibe Coding led by Builders has extreme value for validating an idea and testing a business model with a restricted group. But not for scaling.

To scale, we need competent people with broad repertoire of the technologies and services that are part of the product's context — people capable of carrying an already-validated idea up to the level it needs to reach to become productive and accessible to the public. Ensuring that neither the business nor the users are exposed to risk, especially the kind that involves data privacy.

This is the answer to the question in the title. When the magic fades, the one who owns the prototype is engineering — and it only owns it well if it has the repertoire to judge, and a process that turns that judgment into guardrails, harness, and specs. The work of leadership is not to choose between banning or allowing AI. It is to know what maturity level the team is at, and to design how it climbs.

<!--
Closes with the opening. The prototype on the table is not the problem — confusing the level it
is at is. Leadership question: not "should I let them use vibe coding?", but "do I know what
level my team is at, and have I designed how it climbs?". Shift in perspective: stop debating
good/bad; design the curve.
-->
