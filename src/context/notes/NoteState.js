import React, { useState } from "react";
import NoteContext from "./NoteContext";


export default function NoteState(props) {
    const host = "https://inotebook-80ri.onrender.com";
    const notesI = []
    const [notes, setNotes] = useState(notesI);
    const [spinner, setspinner] = useState({
        loading: false,
        loader: ''
    })
    const [textLoading, setTextLoading] = useState({
        state: false,
        message: '',
        color: '#36d7b7'
    })
    // Alert code
    const [showAlert, setshowAlert] = useState(false);
    const [AlertMessage, setAlertMessage] = useState({ message: 'No Alerts to display!', color: true })
    //*color true = red else green
    if (showAlert === true) {
        document.getElementById("alert").scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        setTimeout(() => {
            setshowAlert(false);
        }, 3000);
    }

    //Get all notes
    const getNotes = async () => {
        setspinner({
            loading: true,
        })
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem('token'),
            },
        })
        const json = await response.json()
        setspinner({
            loading: false,
        })
        setNotes(json)
    };

    //Add a note
    const addNote = async (title, desc, tags) => {
        setspinner({
            loading: true,
            loader: 'BeatLoader'
        })
        //API Call

        const response = await fetch(`${host}/api/notes/addnote/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, desc, tags }),
        });
        const note = await response.json()
        setspinner({
            loading: false,
            loader: 'BeatLoader'
        })
        setNotes(notes.concat(note));
        setAlertMessage({ message: 'Note Added Successfully!', color: false })
        setshowAlert(true)
    };
    //delete a note
    const deleteNote = async (id) => {
        setTextLoading({
            state: true,
            message: 'Deleting Note!',
            color: '#ad4040'
        })
        //API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem('token'),
            },
        });
        // eslint-disable-next-line
        const json = response.json()
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setAlertMessage({ message: 'Note Deleted Successfully!', color: true })
        setTextLoading({
            state: false,
            message: '',
            color: '#ad4040'
        })
        setshowAlert(true)
        setNotes(newNotes);

    };
    //edit a note
    const editNote = async (id, title, desc, tags) => {
        //API Call
        setTextLoading({
            state: true,
            message: 'Updating Note!',
            color: '#36d7b7'
        })
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, desc, tags }),
        });


        // eslint-disable-next-line
        const json = await response.json()
        setTextLoading({
            state: false,
            message: '',
            color: '#36d7b7'
        })
        let newNotes = JSON.parse(JSON.stringify(notes))
        //client side
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].desc = desc;
                newNotes[index].tags = tags;
                break;
            }
        }
        setAlertMessage({ message: 'Note Updated Successfully!', color: false })
        setshowAlert(true)
        setNotes(newNotes)
    };

    return (
        <NoteContext.Provider
            value={{
                notes,
                showAlert,
                setNotes,
                addNote,
                deleteNote,
                editNote,
                getNotes,
                setshowAlert,
                setAlertMessage,
                AlertMessage,
                spinner,
                setspinner,
                textLoading
            }}
        >
            {props.children}
        </NoteContext.Provider>
    );
}


//TODO: Add alerts to edit and delete notes, use react-tostify {NA}!