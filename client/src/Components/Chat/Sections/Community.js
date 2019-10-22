import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { style } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import './Community.scss';
import { instance } from '../../../App';

class Community extends Component {

  constructor(props){
    super(props);
    this.state={
      results:[]
    }
  }

  componentDidMount=async()=>{
    const res=await instance.post('/solved-grievances',{
      userType:"student",
      sap_id:"100"
    })
    console.log(res)
    this.setState({
      results:res.data.grievances
    },()=>{
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="outer">
        <Grid container spacing={32}>
          <Grid item xs={12} className="headers">
            <Grid container spacing={32} style={{margin:'10px 0 0 0'}}>
              <Grid item xs={4} sm={4} md={4} style={{ height: '100%' }}></Grid>
              <Grid item xs={4} sm={4} md={4} className="heading">
                <span className="one" style={{ color: 'white' }}>
                  Res
                </span>
                <span style={{ color: '#414195' }}>ponses</span>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ height: '100%' }}></Grid>
            </Grid>
          </Grid>
          {
            this.state.results.map(elm=>{
              elm=elm[0];
              return(
                <Grid container spacing={32}>
                  <Grid item xs={12}>
                    <Grid container spacing={32}>
                      <Grid item xs={12} sm={12} md={12}>
                        <div className="details">
                          <div className="headDet">Grievance: {elm.grievance}</div>
                          <div className="det">Grievance ID: {elm.id}</div>
                          <div className="det">Grievance Details: {elm.description}</div>
                          <div className="det">Submission Date: recently</div>
                          <div className="hover">Nothing to show</div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    );
  }
}

export default withRouter(Community);
