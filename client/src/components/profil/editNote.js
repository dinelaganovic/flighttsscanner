import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import  './all.css'
 function EditNote({match}) {
    const [note, setNote] = useState({
        title: '',
        content: '',
        date: '',
        id: ''
    })
    const history = useHistory()

    useEffect(() =>{
        const getNote = async () =>{
            const token = localStorage.getItem('tokenStore')
            if(match.params.id){
                const res = await axios.get(`/api/notes/${match.params.id}`, {
                    headers: {Authorization: token}
                })
                setNote({
                    title: res.data.title,
                    content: res.data.content,
                    date: new Date(res.data.date).toLocaleDateString(),
                    id: res.data._id
                })
            }
        }
        getNote()
    },[match.params.id])

    const onChangeInput = e => {
        const {name, value} = e.target;
        setNote({...note, [name]:value})
    }


    const editNote = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if(token){
                const {title, content, date, id} = note;
                const newNote = {
                    title, content, date
                }

                await axios.put(`/api/notes/${id}`, newNote, {
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
            <h2>Edit Reminder</h2>
            <form onSubmit={editNote} autoComplete="off">
                <div className="row">
                    <label htmlFor="title">YOUR FLIGHT!</label>
                    <input type="text" value={note.title} id="title"
                    name="title" required onChange={onChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">SOMETHING MORE ABOUT FLIGHT!</label>
                    <textarea type="text" value={note.content} id="content"
                    name="content" required rows="10" onChange={onChangeInput} />
                </div>

                <label htmlFor="date">THE DATE OF YOUR NEXT FLIGHT: {note.date} </label>
                <div className="row">
                    <input type="date" id="date"
                    name="date" onChange={onChangeInput} />
                </div>

                <button type="submit"style={{backgroundColor:"white"}}>Save</button>
            </form>
        </div>
    )
}export default EditNote;
