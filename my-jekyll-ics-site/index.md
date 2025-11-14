---
layout: default
title: Home
---

## Calendar Events

{% if site.data.ics_events and site.data.ics_events.size > 0 %}
  {% for year_data in site.data.ics_events %}
    {% assign year = year_data[0] %}
    {% assign events = year_data[1] %}
    
    <div class="year-section">
      <h2 class="year-header">
        <span class="year-badge">{{ year }}</span>
        <span class="event-count">{{ events.size }} event{% if events.size != 1 %}s{% endif %}</span>
      </h2>
      
      <div class="events-grid">
        {% for event in events %}
          <div class="event-card">
            <div class="event-header">
              <h3 class="event-title">{{ event.summary }}</h3>
              {% if event.start_date %}
                <div class="event-date">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {{ event.start_date | date: "%B %d, %Y" }}
                  {% if event.start_date_raw contains 'T' %}
                    at {{ event.start_date_raw | slice: 9, 2 }}:{{ event.start_date_raw | slice: 11, 2 }}
                  {% endif %}
                </div>
              {% endif %}
            </div>
            
            {% if event.location %}
              <div class="event-location">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {{ event.location }}
              </div>
            {% endif %}
            
            {% if event.description %}
              <p class="event-description">{{ event.description | truncatewords: 25 }}</p>
            {% endif %}
            
            <div class="event-actions">
              <a href="{{ event.download_url | relative_url }}" class="btn btn-primary" download>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </a>
              {% if event.url %}
                <a href="{{ event.url }}" class="btn btn-secondary" target="_blank" rel="noopener">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  More Info
                </a>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
{% else %}
  <div class="no-events">
    <svg class="icon-large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
    <h3>No Events Found</h3>
    <p>Add .ics files to the _data folder organized by year (e.g., _data/2025/event.ics)</p>
  </div>
{% endif %}