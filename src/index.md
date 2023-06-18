---
title: Hello world!
layout: "base.njk"
---

It's working

{% for post in collections.posts %}

- [{{ post.data.title}}]({{ post.url }})

{% endfor %}