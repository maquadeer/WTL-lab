import logo from './logo.svg';
import './App.css';
import { Component, component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      students:[],
      imarks:[],
      emarks:[]
    }
  }

  componentDidMount(){
    this.refreshStudents();
  }

  async refreshStudents(){
    fetch("http://localhost:8080/students")
    .then(response=>response.json())
    .then(data=> {
      this.setState({students:data});
    })
  }

  async disImarks() {
    fetch("http://localhost:8080/imarks")
    .then(response=>response.json())
    .then(data=> {
      this.setState({imarks:data});
    })
  }

  async disEmarks() {
    fetch("http://localhost:8080/emarks")
    .then(response=>response.json())
    .then(data=> {
      this.setState({emarks:data});
    })
  }

  render() {
    const{students} = this.state;
    const{imarks} = this.state;
    const{emarks} = this.state;
    return (
      <div className="App">
        <h1>Students Data</h1>
        <button onClick={()=>this.disImarks()}>Display Internal Marks</button>
        <button onClick={()=>this.disEmarks()}>Display External Marks</button>
        <table border='1' align='center'>
          <tr>
            <th>Names</th>
            <th>Internal Marks</th>
            <th>External Marks</th>
          </tr>
          <tr>
            <td>
        {students.map(st=><div>{st.name}</div>)}
        </td>
        <td>
        {imarks.map(im=><div>{im.marks}</div>)}
        </td>
        <td>
        {emarks.map(em=><div>{em.marks}</div>)}
        </td>
        </tr>
        </table>
      </div>
    );
  }

}

export default App;
