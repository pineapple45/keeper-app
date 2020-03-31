import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import firebase from '../firebase';

function CreateArea(props) {

  function retreiveDate(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "-" + month + "-" + day;
    return newdate;
  }

  function retreiveTime(){
    var dateObj = new Date();
    var hours = dateObj.getHours();
    var mins = dateObj.getMinutes();
    var secs = dateObj.getSeconds();
    var time = hours+":"+mins+":"+secs;
    return time;
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
    time: retreiveTime(),
    date: retreiveDate()
  });

  const [zoomBool,setZoomBool] = useState('false');

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleFocus(event){
    setZoomBool(prevValue => {
      prevValue = true;
    });
  }

  function submitNote(event) {
    event.preventDefault();

    firebase.firestore()
            .collection('notes')
            .add(note).then(() => {
                  setNote({
                    title: "",
                    content: "",
                    time: retreiveTime(),
                    date: retreiveDate()
                  });
            })
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete = "off"
          type = {zoomBool ?"hidden":"none"}
        />
        <textarea
          name="content"
          onFocus = {handleFocus}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoomBool ?1:3}
        />
        <Zoom in={zoomBool ?false:true}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
