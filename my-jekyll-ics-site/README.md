# My Jekyll ICS Site

This project is a Jekyll site designed to display ICS (iCalendar) files in a visually appealing manner. It utilizes custom layouts and plugins to parse and present calendar events effectively.

## Features

- Displays events from ICS files.
- Custom layouts for a clean and organized presentation.
- Responsive design with CSS for a better user experience.

## Project Structure

```
my-jekyll-ics-site
├── _layouts
│   ├── default.html       # Main layout for the site
│   └── calendar.html      # Layout for displaying calendar events
├── _includes
│   ├── head.html          # Head section with meta tags and styles
│   ├── header.html        # Header section with site title and navigation
│   └── footer.html        # Footer section with copyright and links
├── _plugins
│   └── ics_parser.rb      # Custom plugin to parse ICS files
├── _data
│   └── events.ics         # Calendar events in ICS format
├── assets
│   ├── css
│   │   └── main.css       # Main styles for the site
│   └── js
│       └── calendar.js     # JavaScript for enhancing calendar display
├── _config.yml            # Jekyll configuration file
├── index.md               # Homepage of the site
├── Gemfile                # Ruby gems required for the project
└── README.md              # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-jekyll-ics-site
   ```

2. **Install dependencies:**
   ```
   bundle install
   ```

3. **Run the Jekyll server:**
   ```
   bundle exec jekyll serve
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4000
   ```

## Usage

- Place your ICS files in the `_data` directory.
- Customize the `index.md` file to include any introductory content or links to the calendar.
- Modify the CSS in `assets/css/main.css` to change the visual appearance as needed.

## Contributing

Feel free to submit issues or pull requests to enhance the functionality and design of the site.