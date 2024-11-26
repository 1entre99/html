document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.getElementById('calendar-container');
    
    // Definir los meses y los eventos especiales
    const months = [
        { name: "Noviembre", year: 2024, days: 30, events: { 26: 'Lanzamiento del proyecto Uno Entre 99', 30: 'Recolección de tapas para niños con cáncer' } },
        { name: "Diciembre", year: 2024, days: 31, events: { 
            16: 'Consiste en ir a refugios, hogares, etc. Llevar el mensaje de la Navidad, llevaremos juguetes, realizar una merienda y llevar cosas necesarias para el día a día.',
            17: 'Consiste en ir a refugios, hogares, etc. Llevar el mensaje de la Navidad, llevaremos juguetes, realizar una merienda y llevar cosas necesarias para el día a día.',
            18: 'Consiste en ir a hogares de ancianos, llevar el mensaje de la salvación. Llevaremos regalos.',
            19: 'Consiste en ir a hogares de ancianos, llevar el mensaje de la salvación. Llevaremos regalos.'
        } },
        { name: "Enero", year: 2025, days: 31, events: {} },
        { name: "Febrero", year: 2025, days: 28, events: {} },
        { name: "Marzo", year: 2025, days: 31, events: {} },
        { name: "Abril", year: 2025, days: 30, events: {} },
        { name: "Mayo", year: 2025, days: 31, events: {} },
        { name: "Junio", year: 2025, days: 30, events: {} },
        { name: "Julio", year: 2025, days: 31, events: {} },
        { name: "Agosto", year: 2025, days: 31, events: {} },
        { name: "Septiembre", year: 2025, days: 30, events: {} },
        { name: "Octubre", year: 2025, days: 31, events: {} },
        { name: "Diciembre", year: 2025, days: 31, events: {} }
    ];

    // Crear los calendarios para cada mes
    months.forEach(month => {
        const monthElement = document.createElement('div');
        monthElement.classList.add('calendar-month');

        const monthTitle = document.createElement('h3');
        monthTitle.textContent = `${month.name} ${month.year}`;
        monthElement.appendChild(monthTitle);

        // Crear la tabla de días del mes
        const table = document.createElement('table');

        const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        let headerRow = document.createElement('tr');
        daysOfWeek.forEach(day => {
            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Agregar los días del mes
        let row = document.createElement('tr');
        for (let day = 1; day <= month.days; day++) {
            const td = document.createElement('td');
            td.textContent = day;

            // Marcar eventos
            if (month.events[day]) {
                const eventIndicator = document.createElement('div');
                eventIndicator.classList.add('event');
                eventIndicator.title = month.events[day];
                td.appendChild(eventIndicator);

                // Agregar un evento de clic a la celda con actividad
                td.addEventListener('click', function() {
                    showActivityInfo(month.events[day]);
                });
            }

            row.appendChild(td);

            // Cuando llegue al domingo, crear una nueva fila
            if (row.children.length === 7) {
                table.appendChild(row);
                row = document.createElement('tr');
            }
        }
        table.appendChild(row);
        monthElement.appendChild(table);
        calendarContainer.appendChild(monthElement);
    });

    // Función para mostrar el mensaje emergente (modal) con la actividad
    function showActivityInfo(activity) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';
        modalContent.appendChild(closeBtn);

        const activityText = document.createElement('p');
        activityText.textContent = activity;
        modalContent.appendChild(activityText);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Mostrar el modal
        modal.style.display = 'block';

        // Cerrar el modal
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            modal.remove();
        });

        // Cerrar el modal si el usuario hace clic fuera de él
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                modal.remove();
            }
        });
    }
});
