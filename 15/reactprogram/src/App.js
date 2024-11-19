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

  async Insert(){
    var idinsertvalue = document.getElementById('idinsertvalue').value;
    var nameinsertvalue = document.getElementById('nameinsertvalue').value;
    var iminsertvalue = document.getElementById('iminsertvalue').value;
    var eminsertvalue = document.getElementById('eminsertvalue').value;
    var data = new FormData();
    data.append('id',idinsertvalue);
    data.append('sname',nameinsertvalue);
    data.append('imarks',iminsertvalue);
    data.append('emarks',eminsertvalue);

    fetch("http://localhost:8080/insert", {
      method:'POST',
      body:data
    })
    .then(response=>response.json())
    .then(result=> {
      alert(result);
      this.refreshStudents();
    })
  }

  async Update(){
    var idupdatevalue = document.getElementById('idupdatevalue').value;
    var imupdatevalue = document.getElementById('imupdatevalue').value;
    var data = new FormData();
    data.append('id',idupdatevalue);
    data.append('imarks',imupdatevalue);

    fetch("http://localhost:8080/update", {
      method:'PUT',
      body:data
    })
    .then(response=>response.json())
    .then(result=> {
      alert(result);
      this.refreshStudents();
    })
  }

  async Delete(){
    var iddeletevalue = document.getElementById('iddeletevalue').value;
    fetch("http://localhost:8080/delete?id="+iddeletevalue, {
      method:'DELETE'
    })
    .then(response=>response.json())
    .then(result=> {
      alert(result);
      this.refreshStudents();
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
        <br/>
        <br/>
        <p><b>Insert Form</b></p>
        <div>
          <table align='center'>
            <tr>
              <td>Id: </td>
              <td><input id='idinsertvalue' /></td>
            </tr>
            <tr>
              <td>Name: </td>
              <td><input id='nameinsertvalue' /></td>
            </tr>
            <tr>
              <td>IMarks:</td>
              <td><input id='iminsertvalue' /></td>
            </tr>
            <tr>
              <td>EMarks: </td>
              <td><input id='eminsertvalue' /></td>
            </tr>
            <tr>
              <td> </td>
              <td><button onClick={()=>this.Insert()}>Insert</button></td>
            </tr>
          </table>
        </div>
        <br/>
        <br/>
        <p><b>Update Form</b></p>
        <div>
        <table align='center'>
            <tr>
              <td>Id: </td>
              <td><input id='idupdatevalue' /></td>
            </tr>
            <tr>
              <td>IMarks: </td>
              <td><input id='imupdatevalue' /></td>
            </tr>
            <tr>
              <td> </td>
              <td><button onClick={()=>this.Update()}>Update</button></td>
            </tr>
          </table>
        </div>
        <br/>
        <br/>
        <p><b>Delete Form</b></p>
        <div>
        <table align='center'>
            <tr>
              <td>Id: </td>
              <td><input id='iddeletevalue' /></td>
            </tr>
            <tr>
              <td> </td>
              <td><button onClick={()=>this.Delete()}>Delete</button></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

}

export default App;
