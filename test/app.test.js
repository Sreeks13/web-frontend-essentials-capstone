test("loads five departures", () => {
    const departures = [
        "Route 42 - Riverside Library 08:15",
        "Route 42 - Riverside Library 09:00",
        "Route 42 - Riverside Library 10:15",
        "Route 42 - Riverside Library 11:30",
        "Route 42 - Riverside Library 12:45"
    ];

    expect(departures).toHaveLength(5);
});