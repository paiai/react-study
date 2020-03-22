import React from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'; 
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// material ui 
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progres: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
})

class App extends React.Component {
  // state = {
  //   customers: "",
  //   completed: 0
  // };
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0,
      searchKeyword:''
    }
  }
  stateRefresh = () => { // state 초기화(고객 목록 초기화 하고 리로드)
    this.setState({
      customers: '',
      completed: 0,
      searchKeyword: ''
    }); 
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 20); // progress() 함수 호출 100이 될때까지 
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  };

  callApi = async() => {
    const response  = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>
      });
    }
    const { classes } = this.props;
    return (
      // <div className="App">
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
                <TableCell>삭제</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                //customers.map(c => {
                // this.state.customers ? this.state.customers.map(c => {
                //   return (
                //     <Customer stateRefresh={this.stateRefresh}
                //       key={c.id}
                //       id={c.id}
                //       image={c.image}
                //       name={c.name}
                //       birthday={c.birthday}
                //       gender={c.gender}
                //       job={c.job}
                //   ></Customer>
                //   )
                // //}) : ""
                // }) : 
                
                this.state.customers ? filteredComponents(this.state.customers) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progres} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>

        <CustomerAdd stateRefresh={this.stateRefresh}></CustomerAdd>

        <input type="text" name="searchKeyword" onChange={this.handleValueChange} value={this.state.searchKeyword}></input>
      </div>
    );
  }
}

/*
function App(props) {
  const { classes } = props;

  return (
  )
  }
*/
//export default App;
export default withStyles(styles)(App);

// const customers = [
//     // {
//     //   'id':1,
//     //   'image':'https://placeimg.com/64/64/1',
//     //   'name':'name1',
//     //   'birthday':'birthday1',
//     //   'gender':'gender1',
//     //   'job':'job1'
//     // },
//     // {
//     //   'id':2,
//     //   'image':'https://placeimg.com/64/64/2',
//     //   'name':'name2',
//     //   'birthday':'birthday2',
//     //   'gender':'gender2',
//     //   'job':'job2'
//     // },
//     // {
//     //   'id':3,
//     //   'image':'https://placeimg.com/64/64/3',
//     //   'name':'name3',
//     //   'birthday':'birthday3',
//     //   'gender':'gender3',
//     //   'job':'job3'
//     // }
// ]
