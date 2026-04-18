---
layout: about
title: About
---

{% assign build_year  = site.time | date: "%Y" | plus: 0 %}
{% assign build_month = site.time | date: "%-m" | plus: 0 %}
{% assign career_years = build_year | minus: 2003 %}
{% if build_month < 3 %}{% assign career_years = career_years | minus: 1 %}{% endif %}

Software engineer, technology enthusiast and non-stop reader based in Brazil. I've been building systems for over {{ career_years }} years — from monoliths to microservices, from bare metal to cloud-native.

I write about the things I find interesting: distributed systems, platform engineering, data architecture, and the intersection of software and scale. Not a tutorial blog — more like a notebook where I work through ideas in public.

When I'm not writing code or writing about code, I'm probably reading, playing sports, or chasing the next interesting problem.
