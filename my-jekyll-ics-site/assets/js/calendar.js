async function viewEvent(icsPath) {
    try {
        const response = await fetch(icsPath);
        const icsContent = await response.text();
        const eventDetails = parseICS(icsContent);
        displayEventModal(eventDetails);
    } catch (error) {
        console.error('Error loading ICS file:', error);
        alert('Failed to load event details');
    }
}

function parseICS(icsContent) {
    const lines = icsContent.split('\n');
    const event = {};
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('SUMMARY:')) {
            event.summary = line.substring(8);
        } else if (line.startsWith('DTSTART')) {
            const dateStr = line.split(':')[1];
            event.start = formatDate(dateStr);
        } else if (line.startsWith('DTEND')) {
            const dateStr = line.split(':')[1];
            event.end = formatDate(dateStr);
        } else if (line.startsWith('LOCATION:')) {
            event.location = line.substring(9);
        } else if (line.startsWith('DESCRIPTION:')) {
            event.description = line.substring(12);
        } else if (line.startsWith('ORGANIZER')) {
            event.organizer = line.split(':')[2] || 'N/A';
        }
    });
    
    return event;
}

function formatDate(dateStr) {
    if (!dateStr) return 'N/A';
    
    // Handle YYYYMMDDTHHMMSS format
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    const hour = dateStr.substring(9, 11);
    const minute = dateStr.substring(11, 13);
    
    const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
    return date.toLocaleString();
}

function displayEventModal(event) {
    const modal = document.getElementById('event-modal');
    const detailsDiv = document.getElementById('event-details');
    
    detailsDiv.innerHTML = `
        <h2>${event.summary || 'Untitled Event'}</h2>
        <p><strong>Start:</strong> ${event.start || 'N/A'}</p>
        <p><strong>End:</strong> ${event.end || 'N/A'}</p>
        ${event.location ? `<p><strong>Location:</strong> ${event.location}</p>` : ''}
        ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
        ${event.organizer ? `<p><strong>Organizer:</strong> ${event.organizer}</p>` : ''}
    `;
    
    modal.style.display = 'block';
}

// Close modal when clicking X or outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('event-modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});