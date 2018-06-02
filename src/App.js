import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from './firebase.js';
import './App.css';

class App extends Component {
  state = {
    company: '',
    jobTitle: '',
    jobs: []
  }
  static propTypes = {
    company: PropTypes.string,
    jobTitle: PropTypes.string
  }
  componentDidMount() {
    const jobsRef = firebase.database().ref('jobs');
    jobsRef.on('value', (snapshot) => {
      let jobs = snapshot.val();
      let newState = [];
      for (let i in jobs) {
        newState.push({
          id: i,
          jobTitle: jobs[i].jobTitle,
          company: jobs[i].company
        });
      }
      this.setState({
        jobs: newState
      })
    })
  }
  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  handleSubmit = (ev) => {
    ev.preventDefault()
    const jobsRef = firebase.database().ref('jobs');
    const job = {
      company: this.state.company,
      jobTitle: this.state.jobTitle
    }
    jobsRef.push(job);
    this.setState({
      company: '',
      jobTitle: ''
    });
  }
  removeJob(id) {
    const jobRef = firebase.database().ref(`/jobs/${id}`);
    jobRef.remove();
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="wraper">
            <h1>Help Me Find Work</h1>

          </div>
        </header>
        <div className="container">
          <section className="add-job">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="company" placeholder="Company Name" onChange={this.handleChange} value={this.state.company} />
              <input type="text" name="jobTitle" placeholder="Job Title" onChange={this.handleChange} value={this.state.jobTitle} />
              <button>Add Job</button>
            </form>
          </section>
          <section className="display-job">
            <div className="wrapper">
              <ul>
                {this.state.jobs.map((job) => {
                  return (
                    <li key={job.id}>
                      <h3>{job.jobTitle}</h3>
                      <p>Company: {job.company}</p>
                      <button onClick={() => this.removeJob(job.id)}>Remove Job</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
     </div>
    );
  }
}

export default App;
