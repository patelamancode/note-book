import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebase = require('firebase')
// import {firebase} from '@firebase/app';
// import {firestore} from '@firebase/firestore';


class App extends React.Component {

  constructor() {
    super();
    this.state={
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render(){
    return(
      <div>Hello aman patel</div>
    );

    componentDidMount = () => {
      firebase
       .firestore()
       .collection('notes')
       .onSnapshot(serverUpdate => {
         const notes = serverUpdate.docs.map(_doc => {
           const data = _doc.data();
           data['id'] = _doc.id;
           return data;
         });
         console.log(notes);
         this.setState({ notes: notes});
       });
    }

    
  }
}

export default App;
