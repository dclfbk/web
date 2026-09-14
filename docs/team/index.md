---
layout: default
title: Team
---
{% assign copy = site.content | where: "slug", "team" | first %}
<section class="hero"><p class="kicker">05 / Team</p><h1>{{ copy.title }}</h1>{{ copy.content | markdownify }}</section>
<section class="section">{% include cards.html items=site.data.employees %}</section>
<section class="section"><p class="kicker">Students, interns and thesis students</p>{% include cards.html items=site.data.students %}</section>
<section class="section"><p class="kicker">06 / Alumni</p>{% include cards.html items=site.data.alumni %}</section>
