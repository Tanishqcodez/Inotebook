import React, { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props) {
    const notesI = [
        {
            "_id": "64267f56f562919c6783b517",
            "user": "64267df6f562919c6783b507",
            "title": "My own NEWS app!",
            "desc": "So, the other day, i was having a very boring day and I thought to create something big but useful! Then after surfing the web for hours I finally came to conclusion and I got the idea of News monkey app!! And without wasting a single minute I hopped on my vscode and started coding. after about 7 hour of hardwork I finally created my own news app. and I want to persent it all of you!",
            "tags": [
                "coding",
                "life"
            ],
            "date": "2023-03-31T06:36:06.683Z",
            "__v": 0
        },
        {
            "_id": "64267f56f562919c6783b517s",
            "user": "64267df6f562919c6783b507",
            "title": "My own NEWS app!",
            "desc": "So, the other day, i was having a very boring day and I thought to create something big but useful! Then after surfing the web for hours I finally came to conclusion and I got the idea of News monkey app!! And without wasting a single minute I hopped on my vscode and started coding. after about 7 hour of hardwork I finally created my own news app. and I want to persent it all of you!",
            "tags": [
                "coding",
                "life"
            ],
            "date": "2023-03-31T06:36:06.683Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesI)

    const addNote = (title, desc, tag) => {
        const note = {
            "_id": "64267f56f562919aac6783b517s",
            "user": "64267df6f562919c6783b507",
            "title": "My own NaaEWS aapp!",
            "desc": "So, the other daay, iawas having a vaery boring day and I thought to create something big but useful! Then after surfing the web for hours I finally came to conclusion and I got the idea of News monkey app!! And without wasting a single minute I hopped on my vscode and started coding. after about 7 hour of hardwork I finally created my own news app. and I want to persent it all of you!",
            "tags": [
                "codingaa",
                "lifaae"
            ],
            "date": "2023-03-aa31T06:36:06.683Z",
            "__v": 0
        }
        setNotes(note.push(note))

    }

    //*Delete a Note
    const deleteNote = () => {

    }
    //*Edit a Note
    const editNote = () => {

    }

    // Alert code
    const [showAlert, setshowAlert] = useState(false)
    if (showAlert === true) {
        setTimeout(() => {
            setshowAlert(false)
        }, 3000);
    }


    return (
        <NoteContext.Provider value={{ notes, showAlert, setshowAlert, }}>
            {props.children}
        </NoteContext.Provider>
    )
}
