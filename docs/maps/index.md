---
layout: default
title: Products, Maps & Data
---
{% assign copy = site.content | where: "slug", "maps" | first %}
<section class="hero"><p class="kicker">Digital Commons Lab</p><h1>{{ copy.title }}</h1>{{ copy.content | markdownify }}</section>
<section class="section">{% include cards.html items=site.data.dataviz_maps %}</section>
