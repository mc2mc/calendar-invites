document.addEventListener('DOMContentLoaded', function() {
    fetch('/data/events.ics')
        .then(response => response.text())
        .then(data => {
            const events = parseICS(data);
            displayEvents(events);
        })
        .catch(error => console.error('Error fetching ICS file:', error));
});

function parseICS(data) {
    const events = [];
    const lines = data.split('\n');
    let event = {};
    let inEvent = false;

    lines.forEach(line => {
        if (line.startsWith('BEGIN:VEVENT')) {
            inEvent = true;
            event = {};
        } else if (line.startsWith('END:VEVENT')) {
            inEvent = false;
            events.push(event);
        } else if (inEvent) {
            const [key, value] = line.split(':');
            event[key.trim()] = value.trim();
        }
    });

    return events;
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('events');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.innerHTML = `
            <h3>${event.SUMMARY}</h3>
            <p><strong>Date:</strong> ${event.DTSTART} - ${event.DTEND}</p>
            <p>${event.DESCRIPTION || ''}</p>
        `;
        eventsContainer.appendChild(eventElement);
    });
}