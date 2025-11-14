---
layout: default
title: Home
---

## Available Calendar Events

<div id="events-list">
    {% assign ics_files = site.static_files | where_exp: "file", "file.extname == '.ics'" %}
    {% if ics_files.size > 0 %}
        <div class="events-grid">
        {% for file in ics_files %}
            <div class="event-card">
                <h3>{{ file.name | remove: '.ics' | replace: '-', ' ' | capitalize }}</h3>
                <div class="event-actions">
                    <a href="{{ file.path | relative_url }}" class="btn btn-primary" download>
                        Download ICS
                    </a>
                    <button class="btn btn-secondary" onclick="viewEvent('{{ file.path | relative_url }}')">
                        View Details
                    </button>
                </div>
            </div>
        {% endfor %}
        </div>
    {% else %}
        <p class="no-events">No calendar events found. Add .ics files to your repository.</p>
    {% endif %}
</div>

<div id="event-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="event-details"></div>
    </div>
</div>