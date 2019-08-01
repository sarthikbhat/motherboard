import React , {Fragment} from 'react';
import './forgot.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField  , Tooltip , Checkbox} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  



export default function Forgot() {

    function display(){
        document.getElementById('verify').style.display="none";
        document.getElementById('change').style.display="block";
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [pwd, setpwd] = React.useState("");
    const [cnfpwd, setcnfpwd] = React.useState("");
    const [error, seterror] = React.useState("");
    const [sap, setsap] = React.useState("");
    const [otp, setotp] = React.useState("");
    const [types, settypes] = React.useState("password");
    const [click1, setclick1] = React.useState(false);
    const [click2, setclick2] = React.useState(false);
    const steps = getSteps();

    function handlechange1(e)
    {
       setpwd(e.target.value);
       console.log(pwd);   
    }

    function handlechange2(e)
    {
       setcnfpwd(e.target.value);
       console.log(pwd);   
    }

    function handlechange3(e)
    {
       setsap(e.target.value);
       console.log(sap);   
    }
    
    function handlechange4(e)
    {
       setotp(e.target.value);
       console.log(otp);   
    }

    function getSteps() {
        return ['Enter Your Sap-id', 'Select OTP Medium', 'Enter OTP'];
        }
        
        function getStepContent(step) {
        switch (step) {
            case 0:
            return (
                    <TextField
                        id="outlined"
                        label="Sap-id"
                        margin="normal"
                        variant="outlined"
                        className="text"
                        autoComplete="off"
                        onChange={handlechange3}
                        required
                    />
            );
            case 1:
            return (

               
                <Fragment>
                <FormControl component="fieldset" >
                <RadioGroup
                aria-label="gender"
                name="gender2"
                >
                <FormControlLabel
                    value="Email"
                    control={<Radio color="primary" id="check1"/>}
                    label="Email"
                    labelPlacement="end"
                    onClick={clicks1}
                    
                />
                <FormControlLabel
                    value="Phone Number"
                    control={<Radio color="primary" id="check2" />}
                    label="Phone Number"
                    labelPlacement="end"
                    onClick={clicks2}
                    
                />
                </RadioGroup> 
                </FormControl> 
                </Fragment>  
            );
            case 2:
            return (
                        <TextField
                            id="outlined"
                            label="OTP"
                            margin="normal"
                            variant="outlined"
                            className="text"
                            autoComplete="off"
                            required
                            onChange={handlechange4}
                        />
            );
            default:
            return 'Unknown step';
        }
        }

        function clicks1(){
            setclick1(true)
        }
        function clicks2(){
            setclick2(true)
        }
    

    const validate=()=>{
        let numerr = "";
        let lenerr = "";
        let upperr = "";
        let paserr = "";
        let materr = "";
        const pwds=pwd
seterror("");
        if(pwds && cnfpwd && pwds===cnfpwd){
        var upperCaseLetters = /[A-Z]/g;
        if(!pwds.match(upperCaseLetters)){
            console.log("valid")
            upperr = "cannot";
        }
        var numbers = /[0-9]/g;
        if(!pwds.match(numbers) ) {  
         console.log("number");
         numerr = "cannot";
        }
        if(pwds.length <= 8) {
       console.log('length');
       lenerr = "cannot";
          } 
        }
        else{
            if(!pwds || !cnfpwd){
                console.log('khali');
            
            paserr="Password cannot be empty";
            }
            else if(pwds!==cnfpwd)
            {
                console.log('same');
            
            materr="Password Don't Match";
            }
        } 
          
        if (upperr || numerr || lenerr || paserr || materr) {
            console.log(pwd);
            if(paserr){
                console.log("set")
                seterror("Password cannot be empty");
                document.getElementById('name').style.display = "block";
              }
              else if(lenerr && upperr){
                seterror("Password must contain one uppercase letter and should be of minimum length 8");
                document.getElementById('name').style.display = "block";
              }
              else if(lenerr && numerr){
                seterror("Password must contain one numeric character and should be of minimum length 8");
                document.getElementById('name').style.display = "block";
              }
              else if(lenerr && upperr && numerr){
                seterror("Password must contain one uppercase letter , one mumeric character and should be of minimum length 8");
                document.getElementById('name').style.display = "block";
              }
              else if(lenerr){
                seterror("Password must be of minimum length 8");
                document.getElementById('name').style.display = "block";
              }
              else if(upperr){
                seterror("Password must contain an uppercase letter");
                document.getElementById('name').style.display = "block";
              }
              else if(numerr){
                seterror("Password must contain a numeric character");
                document.getElementById('name').style.display = "block";
              }
              else if(materr){
                seterror("Passwords do not match");
                document.getElementById('name').style.display = "block";
              }
              console.log(error);
              document.getElementById("forms").reset();
              setpwd("");
              
            return false;
        }
        return true;
    }
    function handlesubmit(e){
        e.preventDefault();
        const valid = validate();
        if (valid) {
            console.log("success");
            document.getElementById("forms").reset();
            document.getElementById('name').style.display = "none";
            setpwd("");
            seterror("");
        }
    };

    function val(){
        console.log("mai wahi hoon");
        let emperr="";
        let saplenerr ="";
        var numbers = /[0-9]/g;
        let saperr="";
        if(activeStep===0){
            if(!sap){
                emperr="khali";
            }
            if(sap.length!==11){
                saplenerr="chota";
            }
            if(!sap.match(numbers) ) {  
             console.log("number");
             saperr = "cannot";
            }
            if(emperr || saplenerr || saperr){
                if(emperr){
                    console.log("Khali ku hai yar");
                }
                else if(saplenerr){
                    console.log("Chota ya bada nahi 11 ka chaie");
                }
                else if(saperr){
                    saperr="Sap-ID should be numeric";
                }
                return false;
            }
        }
            return true;
    }

    function rval(){
        if(activeStep===1){
            if(click1 || click2){
               return false;
            }
            return true
        }
    }
    
    function oval(){
        if(activeStep===2){
            if(otp.length!==4){
                return false;
            }
        }
        return true;
    }

    function nextsubmit(e){
        console.log("hello");
        const valids = val();
        const rvalid = rval();
        const ovalid = oval();
        if(valids && rvalid && ovalid){
            console.log("successful");
        }
    }

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function visible(){
        var checks = document.getElementById("check").checked
        if(checks===true){
           settypes("text");
        }
        else{
            settypes("password"); 
        }
    }

    return(
        <div className="login">
            <div className="top"><span className="one" style={{ color: "white" }}>mother</span><span style={{ color: "#414195" }}>Board</span></div>
            <div className="papers"id="verify" >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            disabled={!val() || rval() || !oval() }
                                            variant="contained"
                                            color="primary"
                                            onClick={function()
                                                    {
                                                    handleNext();
                                                    nextsubmit();
                                                    }}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} style={{padding:"10px" , fontSize:"20px" , display:"flex" , flexDirection:"column", textAlign:"center"}}>
                        All steps completed - Click the button below to be redirected to password reset page
                        <Button 
                        variant="contained"
                        color="primary"
                        style=
                            {
                                {
                                width:"30%",
                                margin:"2px auto"
                                }
                            }
                        onClick={display}>
                        Reset
                        </Button>
                    </Paper>
                )}
            </div>
            <div className="reset" id="change">
                <div className="headz">
                    Change Password
                </div>
                <form  id="forms" onSubmit={handlesubmit}>
                        <Tooltip title="Password should be of minimum 8 characters and must contain One Uppercase letter and a number" placement="bottom-start">
                            <TextField
                                id="outlined"
                                label="Enter Password"
                                margin="normal"
                                variant="outlined"
                                type={types}
                                className="text"
                                autoComplete="off"
                                onChange={handlechange1}
                            />
                        </Tooltip>           
                    <TextField
                        id="outlined"  
                        label="Confirm Password"
                        margin="normal"
                        variant="outlined"
                        className="text"
                        type={types}
                        autoComplete="off"
                        onChange={handlechange2}
                    />
                    <FormControlLabel
        control={
          <Checkbox value="" id="check" color="primary" onClick={visible} />
        }
        label="Show Password"/>
                    <div className="errors" id="name">
                    {error}
                    </div>
                    <button 
                    className="button" 
                    onClick= {function()
                        {
                        display();
                        handlesubmit.bind(this);
                        }}>
                        Change Password
                    </button>  
                </form>  
            </div>
        </div>
    );
}