let calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  console.log('calendars', calendars.primaryCalendar[0].startDate)

// convertimos el objeto en un array solo con los valores, con object.values
  let arrCalendar = Object.values(calendars) // saca los valores del objeto en un array
  console.log(arrCalendar)
  
  let arrFlatMap = arrCalendar.flatMap(calendar => {
    console.log('item', calendar);
    return calendar.map(date => date.startDate)
  } )
  console.log('rta', arrCalendar)

  let primCalendar= calendars.forEach(calendar, index => calendar[index].startDate);
  // console.log(primCalendar)