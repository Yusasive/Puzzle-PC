// Define global variables
var currentDate, firstDayOfWeek, lastDayOfWeek, currentMonth, currentYear, prevMonth, prevYear;
function updateCalendarEvents(firstDayOfWeek, lastDayOfWeek) {
    // Clear existing events
    console.log(calendar);
    calendar.removeAllEvents();

    // Get the start and end dates of the week
    var startDate = firstDayOfWeek.toISOString().split('T')[0];
    var endDate = lastDayOfWeek.toISOString().split('T')[0];

    // Example event data - replace this with your actual data retrieval logic
    var eventData = [
        {
            title: 'Example Event 1',
            start: startDate,
            end: endDate,
            className: 'bg-gradient-primary'
        },
        {
            title: 'Example Event 2',
            start: '2024-04-25',
            end: '2024-04-25',
            className: 'bg-gradient-secondary'
        }
        // Add more events as needed
    ];

    // Add the events to calendar
    calendar.addEventSource(eventData);
}
  
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar2');

    var calendar2 = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        eventSources: [], // Empty event sources to remove existing events
        contentHeight: 'auto', // Adjust the height automatically
        aspectRatio: 1, // Set the aspect ratio to make each box square
        datesSet: function(info) {
            // Update the current date being viewed
            // This is the function when the page loads
            // if()
            if(!currentDate) currentDate = calendar2.getDate();
            if(!currentMonth) currentMonth = currentDate.getMonth();
            if(!currentYear) currentYear = currentDate.getFullYear();
            // Update the first and last day of the week only if the month or year changes
            if (prevMonth == undefined || prevYear == undefined || currentMonth == prevMonth || currentYear == prevYear ) {
                firstDayOfWeek = new Date(currentDate);
                firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Sunday
                lastDayOfWeek = new Date(firstDayOfWeek);
                lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6); // Saturday

                // Circle the dates of the current week
                circleDates(firstDayOfWeek, lastDayOfWeek);

                updateCalendarEvents(firstDayOfWeek, lastDayOfWeek);

            }
        },
        dateClick: function(info) {
            // Handle date click event here (e.g., display details, trigger actions)
            // This is the function where the client is clicked
            currentDate = calendar2.getDate();
            currentMonth = currentDate.getMonth();
            currentYear = currentDate.getFullYear();

            var selectedDate = new Date(info.dateStr);
            firstDayOfWeek = new Date(selectedDate);
            firstDayOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Sunday
            lastDayOfWeek = new Date(selectedDate);
            lastDayOfWeek.setDate(selectedDate.getDate() + (6 - selectedDate.getDay())); // Saturday

            // Circle the dates of the selected week
            circleDates(firstDayOfWeek, lastDayOfWeek);
            updateCalendarEvents(firstDayOfWeek, lastDayOfWeek);
            
            // Update previous month and year
            prevMonth = currentMonth;
            prevYear = currentYear;
        }
    });

    calendar2.render();


    function formatDate(date) {
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed, so add 1
        var day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function circleDates(startDate, endDate) {
        var currentDate = new Date(startDate);

        // Remove existing circle classes
        var existingCircles = document.querySelectorAll('.circle-date');
        existingCircles.forEach(function(circle) {
            circle.classList.remove('circle-date');
        });

        while (currentDate <= endDate) {
            var dateString = formatDate(currentDate);
            console.log(dateString);
            var dateCell = document.querySelector(`.fc-day[data-date="${dateString}"]`);
            if (dateCell) {
                dateCell.classList.add('circle-date');
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
});
