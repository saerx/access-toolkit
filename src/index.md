---
title: Hello world!
layout: "base.njk"
---

It's working

{% for article in collections.articles %}

- [{{ article.data.title}}]({{ article.url }})

{% endfor %}