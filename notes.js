const notes = [
{
    id: 1,
    subject: "StarWars - A New Hope",
    date: "5/5/1995",
    feeling: "The Beginning of a Saga",
    timeSpent: 3,
},
{
    id: 2,
    subject: "Marvel's Captian America",
    date: "6/11/2008",
    feeling: "The First Avenger",
    timeSpent: 2,
}
]

const noteAboutToday ={
    id: 3,
    subject: "StarWars -The Bad Batch",
    date: "5/28/2021",
    feeling: "New StarWars Animation",
    timeSpent: 4,
}
notes.push(noteAboutToday)

for (const note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    Today I learned about ${note.subject}.
    I spent ${note.timeSpent} hours watching it.
    I felt this was ${note.feeling}.
    -------------------
    `)
}

// console.log(note)