---
layout: default
title: Contact
---
{% assign copy = site.content | where: "slug", "contact" | first %}
<section class="hero"><p class="kicker">07 / Contact</p><h1>{{ copy.title }}</h1>{{ copy.content | markdownify }}<p><a href="https://www.fbk.eu/">Visit FBK ↗</a> · <a href="https://github.com/dclfbk">GitHub ↗</a></p></section>
