---
layout: root
---

{% include_relative header.md %}

## Refereed Journals

<div markdown="1" class="references">

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type == "journal" %}

<li class="reference">{{paper.authors}}, "{{paper.title}}". {{paper.journal}}, {{paper.date}}, {{paper.pages}} pages. 

{% if paper.link %}

 [link]({{paper.link}})

{% endif %}

</li>

{% endif %}

{% endfor %}

</ol>


## Refereed Conference Papers

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type == "conference" %}

<li class="reference">{{paper.authors}}, "{{paper.title}}". Proceedings of the {{paper.conference}}, {{paper.location}}, {{paper.date}}, {{paper.pages}} pages. 

{% if paper.link %}

 [link]({{paper.link}})

{% endif %}

</li>

{% endif %}

{% endfor %}

</ol>

## Refereed Conference Papers

<ol reversed>

{% for paper in site.data.publications.papers %}

{% if paper.type != "journal" and paper.type != "conference" %}

<li class="reference">{{paper.authors}}, "{{paper.title}}". {{paper.conference}}, {{paper.location}}, {{paper.date}}, {{paper.pages}} pages. 

{% if paper.link %}

 [link]({{paper.link}})

{% endif %}

</li>

{% endif %}

{% endfor %}

</ol>

</div>


