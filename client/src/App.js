import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';


import './App.css';

class App extends Component {
  state = { studentname: '', parentname: '', university: '', certificateId: 0, physics: 0, chemistry: 0, mathematics: 0, computerscience: 0, }

  inputEditConvert = ({ target: { value, name } }) => this.setState({ [name]: value });

  markSheetgenerator = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'marksheet.pdf');
      })
  }

  render() {
    return (
      <div className="container">
        <label for="university"><b>University Name:</b></label>
        <input type="text" placeholder="University Name" name="university" onChange={this.inputEditConvert} />

        <label for="studentname"><b>Student Name</b></label>
        <input type="text" placeholder="Student Name" name="studentname" onChange={this.inputEditConvert} />

        <label for="parentname"><b>Parent's Name</b></label>
        <input type="text" placeholder="Parents Name" name="parentname" onChange={this.inputEditConvert} />

        <label for="certificateId"><b>Certificate Number:</b></label>
        <input type="number" placeholder="Certificate Number" name="certificateId" onChange={this.inputEditConvert} />

        <label for="physics"><b>Physics : </b></label>
        <input type="number" placeholder="physics" name="physics" onChange={this.inputEditConvert} />

        <label for="chemistry"><b>Chemistry : </b></label>
        <input type="number" placeholder="chemistry" name="chemistry" onChange={this.inputEditConvert} />

        <label for="mathematics"><b>Mathematics: </b></label>
        <input type="number" placeholder="Mathematics" name="mathematics" onChange={this.inputEditConvert} />

        <label for="computerscience"><b>Computer Science : </b></label>
        <input type="number" placeholder="Computer Science" name="computerscience" onChange={this.inputEditConvert} />

        <button className="convertbtn" onClick={this.markSheetgenerator}>Generate Marksheet</button>
      </div>


    );
  }
}

export default App;
