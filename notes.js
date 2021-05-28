const notes = [
{
    id: 1,
    subject: "StarWars - A New Hope",
    date: "5/5/1995",
    feeling: "The Beginning of a Saga",
    timeSpent: 3
},
{
    id: 2,
    subject: "Marvel's Captian America",
    date: "6/11/2008",
    feeling: "The First Avenger",
    timeSpent: 2
}
]

const noteAboutToday ={
    id: 3,
    subject: "StarWars -The Bad Batch",
    date: "5/28/2021",
    feeling: "New StarWars Animation",
    timeSpent: 4
}
notes.push(noteAboutToday)

// Chapter 5 - 

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const lastNoteId = notes[lastIndex].id
    const newId = lastNoteId + 1
    note.id = newId

    // const nowDate = Date.now()
    // const newDate = nowDate.toDateString()
    // note.dateCreated = newDate
    notes.push(note)
    }
    
const moreNewerNote = {
    subject: "StarWars - The Mandalorian",
    date: "11/12/2019",
    feeling: "New StarWars Live Action",
    timeSpent: 1
}
        
createNote(moreNewerNote)
console.log(notes)


// Chapter 4 - 

// const searchTerm = "The First Avenger"

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         note.timeSpent = note.timeSpent + 1
//     }
// }
// console.log(notes)



// Chapter 3 - 
// for (const note of notes) {
    //     console.log(`Note ${note.id}
    //     ${note.date}
    //     Today I learned about ${note.subject}.
    //     I spent ${note.timeSpent} hours watching it.
    //     I felt this was ${note.feeling}.
    //     -------------------
    //     `)
    // }
    
    // Chapter 1&2 - console.log(note)