require 'date'

module Jekyll
  class IcsDataGenerator < Generator
    safe true
    priority :high

    def generate(site)
      ics_data = {}
      
      data_dir = File.join(site.source, '_data')
      
      Dir.glob(File.join(data_dir, '**', '*.ics')).each do |ics_file|
        relative_path = ics_file.sub(data_dir + '/', '')
        year = relative_path.split('/').first
        
        # Parse ICS file
        events = parse_ics(ics_file)
        
        events.each do |event|
          ics_data[year] ||= []
          event['file_path'] = relative_path
          event['download_url'] = "/_data/#{relative_path}"
          ics_data[year] << event
        end
      end
      
      # Sort years in descending order
      sorted_data = ics_data.sort_by { |year, _| -year.to_i }.to_h
      
      # Sort events within each year by date
      sorted_data.each do |year, events|
        sorted_data[year] = events.sort_by { |e| e['start_date'] || '' }
      end
      
      site.data['ics_events'] = sorted_data
    end

    private

    def parse_ics(file_path)
      content = File.read(file_path)
      events = []
      current_event = nil
      
      content.each_line do |line|
        line = line.strip
        
        if line == 'BEGIN:VEVENT'
          current_event = {}
        elsif line == 'END:VEVENT'
          events << current_event if current_event
          current_event = nil
        elsif current_event
          if line.start_with?('SUMMARY:')
            current_event['summary'] = line.sub('SUMMARY:', '')
          elsif line.start_with?('DTSTART')
            date_str = line.split(':').last
            current_event['start_date'] = parse_date(date_str)
            current_event['start_date_raw'] = date_str
          elsif line.start_with?('DTEND')
            date_str = line.split(':').last
            current_event['end_date'] = parse_date(date_str)
            current_event['end_date_raw'] = date_str
          elsif line.start_with?('LOCATION:')
            current_event['location'] = line.sub('LOCATION:', '').gsub('\\,', ',')
          elsif line.start_with?('DESCRIPTION:')
            current_event['description'] = line.sub('DESCRIPTION:', '').gsub('\\n', ' ')
          elsif line.start_with?('URL:')
            current_event['url'] = line.sub('URL:', '')
          end
        end
      end
      
      events
    end

    def parse_date(date_str)
      return nil if date_str.nil? || date_str.empty?
      
      # Remove timezone info for parsing
      date_str = date_str.split('Z').first.split('T').first if date_str.include?('Z') || date_str.include?('T')
      
      if date_str.length >= 8
        year = date_str[0..3]
        month = date_str[4..5]
        day = date_str[6..7]
        "#{year}-#{month}-#{day}"
      else
        nil
      end
    end
  end
end
