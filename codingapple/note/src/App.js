import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import NoteList from './components/note-list/note-list';
import NoteRaw from './components/note-raw/note-raw';
import Modal from './components/modal/modal';
import SearchBar from './components/search-bar/search-bar';

const ContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppDiv = styled.div`
  width: 50vw;
  height: 50vh;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #e5e5e5;
`;

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.1rem;
    float: left;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.4rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;

class App extends Component {
  state = {
    search: '',
    notes: [
      { date: new Date(), text: 'Contents', title: 'Title', edited: false}, 
      { date: new Date(), text: '내용', title: '제목', edited: false}, 
    ],
    modalToggle: false
  };

  toggleModal = () => {
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  };

  onChangeSearchText = e => {
    this.setState({
      search: e.target.value
    })
  }

  createNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes, { title, text, date: new Date(), edited: false} ]
    });
  };
  
  changeNote = (title, text, number) => {
    this.setState({
      notes: this.state.notes.map((note, idx) => (idx === number ? { ...note, title, text, edited: true } : note ))
    });
  };

  deleteNote = number => {
    this.setState({
      notes: this.state.notes.filter((note, idx) => (idx === number ? false : true))
    })
  }

  render() {
    return (
      <ContainerDiv>
        {this.state.modalToggle && (
          <Modal>
            <NoteRaw action={this.createNote} close={this.toggleModal} />
          </Modal>
        )}
        <AppDiv id="app">
          <SearchBarDiv>
            <div>
              <span>Memo Board</span>
            </div>
            <div>
              <button onClick={this.toggleModal}>New</button>
              <SearchBar search={this.state.search} onChangeSearchText={this.onChangeSearchText} />
            </div>
          </SearchBarDiv>
          <NoteList 
            notes={this.state.notes} 
            changeNote={this.changeNote}
            deleteNote={this.deleteNote}
            search={this.state.search}
          />
        </AppDiv>
      </ContainerDiv>
    );
  }
}

export default App;
