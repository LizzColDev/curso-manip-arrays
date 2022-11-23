const ordersWDate = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2022, 1, 14, 15, 45)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2021, 11, 18, 18)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2021, 11, 24, 20, 30)
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2022, 0, 18, 14, 15)
    },
];

// ordenar por fecha más reciente a la más antigua
ordersWDate.sort((a, b) => b.date - a.date)
console.log(ordersWDate)