---
layout: default
title: Publications
---
{% assign copy = site.content | where: "slug", "publications" | first %}
<section class="hero"><p class="kicker">04 / Publications</p><h1>{{ copy.title }}</h1>{{ copy.content | markdownify }}</section>
<section class="section"><div class="publication-list">{% for item in site.data.publications %}<article class="item"><p class="eyebrow">{{ item.year }} · {{ item.category }}</p><h3><a href="{{ item.url }}">{{ item.title }}</a></h3></article>{% endfor %}</div></section>
