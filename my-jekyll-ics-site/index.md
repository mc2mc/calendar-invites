---
layout: default
title: Home
---

## Available Calendar Events

<div id="events-list">
    <div class="events-grid">
        <div class="event-card">
            <h3>Events</h3>
            <div class="event-actions">
                <a href="{{ '/_data/events.ics' | relative_url }}" class="btn btn-primary" download>
                    Download ICS
                </a>
                <button class="btn btn-secondary" onclick="viewEvent('{{ '/_data/events.ics' | relative_url }}')">
                    View Details
                </button>
            </div>
        </div>
    </div>
</div>

<div id="event-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="event-details"></div>
    </div>
</div>