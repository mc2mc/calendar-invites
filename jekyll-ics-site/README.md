# Jekyll ICS Site

This project is a Jekyll site designed to display ICS (iCalendar) files in a visually appealing manner. It provides a clean and organized way to present events extracted from ICS files, making it easy for users to view and interact with event data.

## Project Structure

The project is organized as follows:

```
jekyll-ics-site
├── _includes
│   ├── head.html        # Head section of the HTML
│   ├── header.html      # Header section with site title and navigation
│   └── footer.html      # Footer section with copyright and links
├── _layouts
│   ├── default.html     # Default layout for all pages
│   ├── page.html        # Layout for standard pages
│   └── calendar.html    # Layout for displaying the calendar view
├── _plugins
│   └── ics_parser.rb    # Ruby plugin for parsing ICS files
├── _sass
│   ├── _base.scss       # Base styles for typography and layout
│   ├── _calendar.scss    # Styles specific to the calendar layout
│   └── _variables.scss   # SASS variables for reusable styles
├── assets
│   ├── css
│   │   └── main.scss     # Main stylesheet importing SASS files
│   └── js
│       └── calendar.js    # JavaScript for calendar functionality
├── _data
│   └── events.ics        # ICS data file containing event information
├── _config.yml           # Jekyll configuration file
├── index.md              # Main landing page in Markdown
├── Gemfile               # Ruby gems required for the Jekyll site
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   Navigate to the project directory and install the required gems:
   ```
   bundle install
   ```

3. **Run the Jekyll Server**: 
   Start the Jekyll server to view the site locally:
   ```
   bundle exec jekyll serve
   ```

4. **Access the Site**: 
   Open your web browser and go to `http://localhost:4000` to view the site.

## Usage Guidelines

- Place your ICS files in the `_data` directory. The `ics_parser.rb` plugin will automatically parse these files and make the event data available for display.
- Customize the styles in the `_sass` directory to match your design preferences.
- Modify the `index.md` file to include any introductory content or links to the calendar.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.