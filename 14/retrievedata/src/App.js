import logo from './logo.svg';
import './App.css';
import { Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      students:[]
    }
  }

  componentDidMount(){
    this.refreshStudents();
  }

  async refreshStudents(){
    fetch("http://localhost:8080/retrieve")
    .then(response=>response.json())
    .then(data=> {
      this.setState({students:data});
    })
  }

  render() {
    const{students} = this.state;
    return (
      <div className="App">
        <h1>Students Data</h1>
        <table border='1' align='center'>
          <tr>
            <th>Id</th>
            <th>Names</th>
            <th>Internal Marks</th>
            <th>External Marks</th>
          </tr>
          <tr>
            <td>
        {students.map(st=><div>{st.id}</div>)}
        </td>
        <td>
        {students.map(st=><div>{st.name}</div>)}
        </td>
        <td>
        {students.map(st=><div>{st.imarks}</div>)}
        </td>
        <td>
        {students.map(st=><div>{st.emarks}</div>)}
        </td>
        </tr>
        </table>
      </div>
    );
  }

}

export default App;
