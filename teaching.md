---
title: Michael J. Decker, Ph.D.
layout: root
---

{% include_relative header.md %}

{% for semester in site.data.classes.semesters %}

<div markdown="1" class="schedule">

### {{semester.semester}}

---

{% for class in semester.classes %}

<span class="class_number"> {%if class.url %}<a href={{class.url}}>{% endif %} {{class.number}} {%if class.url %}</a>{% endif %}</span> <span class="title">{{class.title}}</span> {%case class.online %} {% when true %} <span class="online">Online</span> <span class="session">{{class.session}} 7-weeks</span>
{% else %}
<span class="days">{{class.days}}</span> <span class="time">{{class.time}}</span> <span class="location"> {{class.building}} {{class.room}}</span>
{% endcase %}

{% endfor %}

</div>

{% endfor %}
