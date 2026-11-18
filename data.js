const DEFAULT_EVENTS = [

    {
        id: "e1",
        title: "Web Development Workshop",
        category: "Workshop",
        date: "2026-11-25",
        venue: "Computer Lab",
        description: "Learn HTML, CSS and JavaScript."
    },

    {
        id: "e2",
        title: "AI Innovation Challenge",
        category: "Competition",
        date: "2026-11-28",
        venue: "Seminar Hall",
        description: "Explore artificial intelligence."
    },

    {
        id: "e3",
        title: "GDG Hackathon",
        category: "Hackathon",
        date: "2026-12-05",
        venue: "Innovation Centre",
        description: "Build innovative projects."
    }

];


function getEvents() {

    let data = localStorage.getItem("gdg_events");

    if (!data) {

        localStorage.setItem(
            "gdg_events",
            JSON.stringify(DEFAULT_EVENTS)
        );

        return DEFAULT_EVENTS;

    }

    return JSON.parse(data);

}


function saveEvents(events) {

    localStorage.setItem(
        "gdg_events",
        JSON.stringify(events)
    );

}


function getRegistrations() {

    return JSON.parse(
        localStorage.getItem("gdg_registrations") || "[]"
    );

}


function saveRegistrations(data) {

    localStorage.setItem(
        "gdg_registrations",
        JSON.stringify(data)
    );

}


function getCurrentUser() {

    return JSON.parse(
        sessionStorage.getItem("gdg_user") || "null"
    );

}


function niceDate(date) {

    return new Date(date + "T00:00:00")
        .toLocaleDateString("en-IN");

}


function statusClass(status) {

    if (status === "Selected") return "selected";

    if (status === "Not Selected") return "not-selected";

    return "pending";

}