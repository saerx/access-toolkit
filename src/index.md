---
title: Hello world!
layout: "base.njk"
---

It's working

{% for page in collections.pages %}

- [{{ page.data.title}}]({{ page.url }})

{% endfor %}