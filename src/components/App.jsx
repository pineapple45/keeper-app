import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import firebase from "../firebase";
import Dropdown from "./dropdown";
const App = () => {

    const [notes, setNotes] = useState([]);

    
    // console.log(date.);
    useEffect(() => {
      firebase.firestore()
              .collection('notes')
              .onSnapshot((snap) => {
                const dataObjects = snap.docs.map((doc) => ({
                  id:doc.id,
                  ...doc.data()
                }))
                setNotes(dataObjects);
              })
    },[]);

    // firebase.firestore()
    // .collection('notes')
    // .onSnapshot((snap) => {
    //   const dataObjects = snap.docs.map((doc) => ({
    //     id:doc.id,
    //     ...doc.data()
    //   }))
    //   setNotes(dataObjects);
    // })

    function Sort(creteria){
      var sortedNotes = [];
      if(creteria === "newest"){
         sortedNotes = [...notes].sort(function (a,b){
           return (new Date(b.date) - new Date(a.date));
        })
      }
      else if(creteria === "oldest"){
         sortedNotes = [...notes].sort(function (a,b){
          return (new Date(a.date) - new Date(b.date));
      })
      }
      setNotes(sortedNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea />
      <Dropdown sortBy = {Sort}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            time = {noteItem.time}
            date = {noteItem.date}
            // onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
