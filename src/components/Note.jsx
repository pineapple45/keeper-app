import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from '../firebase';

function Note(props) {
  function handleClick() {
    // props.onDelete(props.id);
      firebase.firestore()
              .collection('notes')
              .doc(props.id)
              .delete()
              .then(() =>{
                console.log('doc deleted successfully')
              });
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <h5 style = {{color : "#cc0e74"}}>{props.time}</h5>
      <h5 style = {{color : "#cc0e74"}}>{props.date}</h5>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
