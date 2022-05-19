---
layout: default
---

{% include_relative header.md %}

## Refereed Journals

<div markdown="1" class="references">

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type == "journal" %}

<li class="reference">{{paper.authors}}, "{{paper.title}}". {{paper.journal}}, {{paper.date}}, {{paper.pages}}. 
{% if user %}
 [link]{{paper.link}}
{% endif %}
</li>

{% endif %}

{% endfor %}

</ol>


## Refereed Conference Papers
