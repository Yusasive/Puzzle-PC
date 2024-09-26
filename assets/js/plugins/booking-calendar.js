
    var disabledDates = ['2024-04-30', '2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15'];

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar3');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          selectable: true,
          contentHeight: 'auto', // Adjust the height automatically
        aspectRatio: 1,     
          dateClick: function(info) {
            var booking_date = document.getElementById('booking_date');
            var selectedDate = (!disabledDates.includes(info.dateStr)) ? info.dateStr : "";
            booking_date.value = selectedDate;
          },
          dayCellDidMount: function(arg) {
            var cellDate = arg.date.toISOString().split('T')[0];
            if (disabledDates.includes(cellDate)) {
              arg.el.classList.add('fc-disabled');
            }
          }
        });
        calendar.render();
      });
