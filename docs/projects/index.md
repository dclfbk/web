---
layout: default
title: Projects
---
{% assign copy = site.content | where: "slug", "projects" | first %}
<section class="hero"><p class="kicker">Digital Commons Lab</p><h1>{{ copy.title }}</h1>{{ copy.content | markdownify }}</section>
<section class="section"><p class="kicker">Current projects</p>{% include cards.html items=site.data.projects %}</section>
<section class="section archive"><p class="kicker">Project archive</p><h2>Earlier work, still accessible.</h2>{% include cards.html items=site.data.projects_old %}</section>
