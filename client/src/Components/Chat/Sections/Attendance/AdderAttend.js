import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { theme } from '../../../theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import { instance } from '../../../../App';

const semMapping={
  "SE-A":3,
  "SE-B":3,
  "TE-A":5,
  "TE-B":5,
  "BE-A":7,
  "BE-B":7
}

const styles = Theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  radio: {
    margin: '0'
  },
  padding: {
    padding: '5px 0 5px 18px'
  },
  paddingHead: {
    padding: '20px'
  },
  border: {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    padding: '5px',
    margin: '0',
    borderRadius: '4px'
  },
  legend: {
    fontSize: '0.8rem',
    textAlign: 'left',
    fontFamily: ['Helvetica', ' sans-serif'],
    color: 'rgb(117, 117, 117)'
  },
  textStyle: {
    [Theme.breakpoints.up('sm')]: {
      padding: '15px'
    }
  },
  addPadding: {
    padding: '25px'
  },
  desc: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 800,
    fontSize: '2rem'
  },
  colorHatao: {
    background: 'transparent',
    boxShadow: 'none'
  },
  expanded: { padding: '0', textAlign: 'center' }
});

class AdderAttend extends Component {
  state = {
    rows:[]
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log(this.props.subjectV);
  };

  createData = (sapid, fname, lname) => {
    return { sapid, fname, lname };
  };

  componentDidMount=async()=>{
    const res=await instance.post('/generate-list',{
      semester:semMapping[this.props.group],
      division:this.props.group.substring(3)
    })
    this.setState({
      rows:res.data.students
    })
    console.log(res)
  }

  render() {
    const { classes } = this.props;

    const rows = [
      this.createData('60004170100', 'Sarthik', 'Bhat'),
      this.createData('60004170101', 'Sanjay', 'Nayak'),
      this.createData('60004170102', 'Samip', 'Kalyani'),
      this.createData('60004170103', 'Vimal', 'Shah'),
      this.createData('60004170104', 'Romil', 'Shah')
    ];
    return (
      <React.Fragment>
        <div className="headers">
          <div style={{ margin: '10px' }}>
            <span className="one" style={{ color: 'white' }}>
              Add
            </span>
            <span style={{ color: '#414195' }}>Attendance</span>
          </div>
        </div>
        <div id="chatterOuterBox" style={{ height: window.innerHeight - 220 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.paddingHead}>Sap Id</TableCell>
                <TableCell className={classes.paddingHead}>First Name</TableCell>
                <TableCell className={classes.paddingHead}>Last Name</TableCell>
                <TableCell className={classes.padding}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell
                    className={classes.padding}
                    component="th"
                    scope="row"
                  >
                    {row.sap_id}
                  </TableCell>
                  <TableCell className={classes.padding}>
                    {row.fname}
                  </TableCell>
                  <TableCell className={classes.padding}>
                    {row.lname}
                  </TableCell>
                  <TableCell className={classes.padding}>
                    <Checkbox
                      //checked={this.state.checkedA}
                      onChange={this.handleChange(row.sapid)}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AdderAttend);
