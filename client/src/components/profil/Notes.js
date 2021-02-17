import React from 'react'
import Header from './Nav'
import Home from './Home'
import CreateNote from './createNote'
import EditNote from './editNote'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import  './all.css'

 function Notes({setIsLogin}) {
    return (
        <Router>
        <div className="notes-page">
            <Header setIsLogin={setIsLogin} />
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={CreateNote} exact />
                <Route path="/edit/:id" component={EditNote} exact />
            </section>
            
        </div>
        </Router>
    )
}export default Notes;
