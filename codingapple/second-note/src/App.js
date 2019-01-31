import React, { Component } from 'react';
import styled from 'styled-components';
import NoteList from './components/note-list/note-list';
import ModalPage from './components/modal/modal';
import NoteRaw from './components/note-raw/note-raw';

// sytled component 를 이용한 style div - div 정가운데로 고정시킴
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppDiv = styled.div`
  width: 50vw;
  height: 80vh;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #28bbf7;
`;

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
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
  // 모든 state를 App에 생성.
  state = {
    search: '',
    notes: [
      { title: '제목1', text: 'text1', date: new Date(), edited: false },
      { title: '제목2', text: 'text2', date: new Date(), edited: false }
    ],
    createToggle: false
  };

  changeCreateToggle = () => {
    this.setState({
      createToggle: !this.state.createToggle
    });
  };

  addNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes, { title, text, date: new Date(), edited: false }]
    });
  }

  changeNote = (title, text, number) => {
    this.setState({
      notes: this.state.notes.map((note, idx) => {
        if (number === idx) {
          return { ...note, date: new Date(), edited: true, title, text };
        }
        return note;
      })
    });
  };

  onChanceSearchText = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <Container>
        {this.state.createToggle &&
          <ModalPage>
            <NoteRaw subject={'노트 생성'} action={this.addNote} close={this.changeCreateToggle}></NoteRaw>
          </ModalPage>}
        <AppDiv id="app">
          <SearchBarDiv>
            <div>
              <span>노트 만들기</span>
            </div>
            <div>
              <button onClick={this.changeCreateToggle}>노트 작성</button>
              <div id="search-bar" />
            </div>
          </SearchBarDiv>
          <NoteList notes={this.state.notes} changeNote={this.changeNote} />
        </AppDiv>
      </Container>
    );
  }
}

export default App;
