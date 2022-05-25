---
layout: root
---

{% include_relative header.md %}

## Refereed Journals

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type == "journal" %}

<li markdown="1">{{paper.authors}}, "{{paper.title}}". {{paper.journal}}, {{paper.date}}, {{paper.pages}} pages. 
{% if paper.link %} [link]({{paper.link}}) {% endif %} 
</li>

{% endif %}

{% endfor %}

</ol>


## Refereed Conference Papers

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type == "conference" %}

<li markdown="1">{{paper.authors}}, "{{paper.title}}". Proceedings of the {{paper.conference}}, {{paper.location}}, {{paper.date}}, {{paper.pages}} pages.{% if paper.award %} <strong>{{paper.award}}</strong>{% endif %}{% if paper.link %} [link]({{paper.link}}){% endif %}
</li>

{% endif %}

{% endfor %}

</ol>

## Other Papers

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type != "journal" and paper.type != "conference" %}

<li  markdown="1">{{paper.authors}}, "{{paper.title}}". {{paper.conference}}, {{paper.location}}, {{paper.date}}, {{paper.pages}} pages.
{% if paper.link %}[link]({{paper.link}}) {% endif %}
</li>

{% endif %}

{% endfor %}

</ol>


