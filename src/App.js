import React from 'react';
import './App.css';


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

    // componentDidMount = () => {
    //   firebase
    //    .firestore()
    //    .collection('')
    // }

  }
}

export default App;
