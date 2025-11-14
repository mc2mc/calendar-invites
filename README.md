# Calendar Invites

A Jekyll site for GitHub Pages that displays ICS calendar invites organized by year with download links.

## Features

- 📅 Calendar invites organized by year
- ⬇️ Direct download links for ICS files
- 🎨 Clean, modern design with responsive layout
- 🚀 Hosted on GitHub Pages

## Structure

```
calendar-invites/
├── _config.yml          # Jekyll configuration
├── _ics/                # ICS calendar files organized by year
│   ├── 2024/
│   │   ├── event1.ics
│   │   └── event2.ics
│   └── 2025/
│       ├── event1.ics
│       └── event2.ics
├── assets/
│   └── css/
│       └── style.scss   # Custom styling
├── index.html           # Home page with calendar invites
└── Gemfile              # Ruby dependencies
```

## Setup

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` in your browser.

## Adding Calendar Invites

1. Create a new `.ics` file in the appropriate year folder under `_ics/`
   - Example: `_ics/2025/team-meeting.ics`

2. Use standard ICS format:
   ```ics
   BEGIN:VCALENDAR
   VERSION:2.0
   PRODID:-//Calendar Invites//EN
   CALSCALE:GREGORIAN
   METHOD:PUBLISH
   BEGIN:VEVENT
   DTSTART:20250115T140000Z
   DTEND:20250115T150000Z
   SUMMARY:Event Name
   DESCRIPTION:Event description
   LOCATION:Event location
   END:VEVENT
   END:VCALENDAR
   ```

3. Commit and push to GitHub - the site will automatically update!

## Deployment to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial Jekyll site"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: Deploy from branch
   - Choose branch: `main` and folder: `/ (root)`
   - Click Save

3. **Access your site:**
   - Your site will be available at: `https://mc2mc.github.io/calendar-invites/`

## Customization

- **Site title/description:** Edit `_config.yml`
- **Styling:** Modify `assets/css/style.scss`
- **Layout:** Edit `index.html`

## License

MIT License
