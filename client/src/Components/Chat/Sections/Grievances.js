import React, { Component } from 'react';
import './grievances.scss'  ;
import { TextField, Typography } from '@material-ui/core';
import { MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import {theme} from '../../theme'

const initstate = {
  sap: '',
  problem: '',
  description: '',
  saperr: false,
  problemerr: false,
  descriptionerr: false,
  img: '',
  imagePreviewUrl: ''
};

class Grievances extends Component {
  state = initstate;

  change =field=> e => {
    this.setState({
      [field]: e.target.value
    });
    console.log(this.state);
  };

  validate = () => {
    const {sap, problem, description } = this.state;
    this.setState({
      problemerr: false,
      descriptionerr: false,
      saperr: false,
    });
    if (sap.trim() === '') {
      this.setState({ saperr: true });
    }
    if (problem.trim() === '') {
      this.setState({ problemerr: true });
    }
    if (description.trim() === '') {
      this.setState({ descriptionerr: true });
    }
    if (sap.trim() === '' || problem.trim() === '' || description.trim() === '' ) {
      return false;
    }
    return true;
  };

  handlesubmit = async e => {
    e.preventDefault();
    const valid = this.validate();
    if (valid) {
      console.log('success');
      // var form = document.getElementById("myform");
      // form.reset();
      // this.setState({
      //     initstate
      // });
    }
  };

  imgChange = e1 => {
    this.setState({
      img: e1.target.value,
      imagePreviewUrl: e1.target.files[0]
    });
  };

  disp = e2 => {
    console.log(this.state.imagePreviewUrl);
    var reader = new FileReader();
    var imgfield = document.getElementById('image-field');

    reader.onload = function() {
      if (reader.readyState == 2) {
        imgfield.src = reader.result;
      }
    };
    reader.readAsDataURL(this.state.imagePreviewUrl);
    document.getElementById('input').style.display = 'none';
    document.getElementById('output').style.display = 'flex';
  };

  image = () => {
    const realFileBtn = document.getElementById('real-file');
    const customTxt = document.getElementById('custom-text');
    realFileBtn.addEventListener('change', function() {
      if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
      } else {
        customTxt.innerHTML = 'No image chosen';
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="logins">
        <div className="top">
          <span className="one" style={{ color: 'white' }}>
            griev
          </span>
          <span style={{ color: '#414195' }}>ances</span>
        </div>
        <div className="paper">
          <div className="form">
            <form action="" onSubmit={this.handlesubmit} id="myform">
              <TextField
                id="outlined-name"
                label="Sap-id"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change('sap')}
                required
                error={this.state.saperr}
              />
              {this.state.saperr ? (
                <Typography className="error-message" variant="body2">
                  Please enter your SapId
                </Typography>
              ) : (
                ''
              )}
              <TextField
                id="outlined-name"
                label="Problem"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change('problem')}
                required
                error={this.state.problemerr}
              />
              {this.state.problemerr ? (
                <Typography className="error-message" variant="body2">
                  Please enter your problem
                </Typography>
              ) : (
                ''
              )}
              <TextField
                id="outlined-password-input"
                label="Description"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change('description')}
                multiline
                rows="4"
                required
                error={this.state.descriptionerr }
              />
              {this.state.descriptionerr ? (
                <Typography className="error-message" variant="body2">
                  Please describe your problem
                </Typography>
              ) : (
                ''
              )}
              <div className="inputs">
                <input
                  type="file"
                  id="real-file"
                  name="img"
                  className="inputfile"
                  onChange={this.imgChange}
                  onSubmit={this.disp}
                />
                <label for="real-file" onClick={this.image} id="custom-button">
                  CHOOSE AN IMAGE
                </label>
                <span id="custom-text"> No image chosen (Optional)</span>
              </div>

              <button className="button" onClick={this.handlesubmit}>
                Submit
              </button>
              <span></span>
            </form>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withTheme(Grievances);
