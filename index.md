---
title: Michael J. Decker, Ph.D.
layout: root
---

{% include_relative header.md %}

<div markdown="1" class="schedule">

{{ site.data.classes.semesters}}

{% for semester in site.data.classes %}


### {{semester.semester}}

---

<ul>
{% for class in semester.classes %}
<li><span  class={{class.class_number}}>
{%if class.url %}<a href={{class.url}}>{% endif %}
{{class.number}}
{%if class.url %}</a>{% endif %}
</span> <span class={{class.title}}>{{class.title}}</span> <span class={{class.days}}>{{class.days}}</span> <span class={{class.time}}>{{class.time}}</span> {{class.building}} {{class.room}}</li>
}
{% endfor %}
</ul>


{% endfor %}

</div>


{%include activities.md %}
