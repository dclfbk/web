---
layout: default
title: Technology is stronger when it is built as a commons.
---
{% assign home = site.content | where: "slug", "home" | first %}
{% assign what = site.content | where: "slug", "what-we-do" | first %}
<section class="hero">
  <p class="kicker">A research unit within FBK's Digital Society Center · Trento</p>
  <h1>{{ home.title }}</h1>
  {{ home.content | markdownify }}
</section>
<section class="section intro"><p class="kicker">01 / What we do</p><h2>{{ what.title }}</h2>{{ what.content | markdownify }}</section>
<section class="section"><p class="kicker">02 / Current projects</p><h2>Research that leaves the lab.</h2>{% include cards.html items=site.data.projects %}</section>
<section class="section"><p class="kicker">03 / Products, maps &amp; data</p><h2>See the question. Use the evidence.</h2>{% include cards.html items=site.data.dataviz_maps %}</section>
<section class="section"><p class="kicker">04 / Publications</p><h2>Ideas, methods and evidence.</h2><a href="{{ '/publications/' | relative_url }}">See the publication record ↗</a></section>
