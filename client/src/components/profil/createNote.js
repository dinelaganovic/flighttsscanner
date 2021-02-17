import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import  './all.css'
 function CreateNote() {

    const [note, setNote] = useState({
        title: '',
        content: '',
        date: ''
    })
    const history = useHistory()

    const onChangeInput = e => {
        const {name, value} = e.target;
        setNote({...note, [name]:value})
    }


    const createNote = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if(token){
                const {title, content, date} = note;
                const newNote = {
                    title, content, date
                }

                await axios.post('/api/notes', newNote, {
                    headers: {Authorization: token}
                })
                
                return history.push('/')
            }
        } catch (err) {
            window.location.href = "/";
        }
    }

    return (
        <div className="create-note">
            <h2>Create Reminder</h2>
            <form onSubmit={createNote} autoComplete="off">
                <div className="row">
                    <label htmlFor="title">Your flight!</label>
                    <input type="text" value={note.title} id="title"
                    name="title" required onChange={onChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Something more about flight!</label>
                    <textarea type="text" value={note.content} id="content"
                    name="content" required rows="10" onChange={onChangeInput}  style={{color:"black"}} />
                </div>

                <label htmlFor="date">The date of your next flight: {note.date} </label>
                <div className="row">
                    <input type="date" id="date"
                    name="date" onChange={onChangeInput}   />
                </div>

                <button type="submit" style={{backgroundColor:"white"}} >Save</button>
            </form>
        </div>
    )
}export default CreateNote;
