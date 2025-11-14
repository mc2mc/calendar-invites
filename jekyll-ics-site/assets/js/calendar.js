// This file handles the dynamic functionality for the calendar, including event filtering and interactivity.

document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events');
    const filterInput = document.getElementById('event-filter');

    // Fetch events from the server or local data
    fetch('/data/events.json')
        .then(response => response.json())
        .then(events => {
            displayEvents(events);
            setupFilter(events);
        });

    function displayEvents(events) {
        eventsContainer.innerHTML = '';
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <h3>${event.summary}</h3>
                <p>${event.description}</p>
                <p><strong>Date:</strong> ${new Date(event.start).toLocaleDateString()}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            `;
            eventsContainer.appendChild(eventElement);
        });
    }

    function setupFilter(events) {
        filterInput.addEventListener('input', function() {
            const filterValue = filterInput.value.toLowerCase();
            const filteredEvents = events.filter(event => 
                event.summary.toLowerCase().includes(filterValue) || 
                event.description.toLowerCase().includes(filterValue)
            );
            displayEvents(filteredEvents);
        });
    }
});