require 'icalendar'

module Jekyll
  class IcsParser < Generator
    safe true

    def generate(site)
      ics_file_path = File.join(site.source, '_data', 'events.ics')
      events = parse_ics_file(ics_file_path)
      site.data['events'] = events
    end

    private

    def parse_ics_file(file_path)
      events = []
      if File.exist?(file_path)
        icalendar = Icalendar::Calendar.parse(File.read(file_path)).first
        icalendar.events.each do |event|
          events << {
            summary: event.summary,
            description: event.description,
            start_time: event.dtstart,
            end_time: event.dtend,
            location: event.location
          }
        end
      end
      events
    end
  end
end