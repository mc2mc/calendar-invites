require 'icalendar'

module Jekyll
  class IcsParser < Generator
    safe true

    def generate(site)
      ics_file_path = File.join(site.source, '_data', 'events.ics')
      return unless File.exist?(ics_file_path)

      calendar = Icalendar::Calendar.parse(File.read(ics_file_path)).first
      events = []

      calendar.events.each do |event|
        events << {
          summary: event.summary,
          description: event.description,
          start_time: event.dtstart,
          end_time: event.dtend,
          location: event.location
        }
      end

      site.data['events'] = events
    end
  end
end