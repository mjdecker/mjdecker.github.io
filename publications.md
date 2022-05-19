---
layout: default
---

{% include_relative header.md %}

## Refereed Journals

<div markdown="1" class="references">

<ol reversed>

{% for paper in site.data.publications %}

{% if paper.type == "journal" %}

<li class="reference">{{paper.authors}}, {{paper.title}}, {{paper.pages}}</li>

{% endif %}

{% endfor %}

</ol>


## Refereed Conference Papers

<ol reversed>

{% for paper in site.data.conferences.published %}

<li>{{paper.title}}</li>

{% endfor %}

</ol>

</div>
