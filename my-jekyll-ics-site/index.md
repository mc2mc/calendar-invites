---
layout: default
title: Home
---

## Calendar Events

{% if site.data.events %}
  {% for year_data in site.data.events %}
    {% assign year = year_data[0] %}
    {% assign events = year_data[1] %}
    
    <div class="year-section">
      <h3>{{ year }}</h3>
      <ul class="event-list">
        {% for event in events %}
          <li>
            <a href="{{ event.file | prepend: '/' | relative_url }}" download>{{ event.name }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
{% else %}
  <p>No calendar events found.</p>
{% endif %}