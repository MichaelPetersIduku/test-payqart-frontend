import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    stepIcon: {
        color: "secondary"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function HorizontalStepper(props) {
    const { totalCartValue } = props;
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [paymentData, setPaymentData] = React.useState({});
    var [inputValues, setInputValues] = React.useState({
        existingLoans: "no",
        employmentType: "paid",
        pay: "",
        salaryDate: "",
        tenure: "1",
        downPayment: ""
    })
    const steps = getSteps();

    function getSteps() {
        return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad', 'Summary'];
    }

    function handleInputChanges(changes) {
        setInputValues(changes);
        console.log(changes);
        console.log("total cart value", totalCartValue);
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Step1 onInputChange={handleInputChanges} tenure={inputValues.tenure} downPayment={inputValues.downPayment} />;
            case 1:
                return <Step2 onInputChange={handleInputChanges} inputValues={inputValues} updateBreakDown={handleNext} paymentData={paymentData} />;
            case 2:
                return 'This is the bit I really care about!';
            case 3:
                return 'Summary!';
            default:
                return 'Unknown stepIndex';
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleNext = async () => {
        setOpen(!open);
        //make api call
        console.log(inputValues.downPayment);
        let url = `http://18.216.211.114:4010/api/v1/payments/breakdown?employmentType=${inputValues.employmentType}&totalCartValue=${totalCartValue}&userDownPayment=${inputValues.downPayment}&tenure=${inputValues.tenure}`;
        const response = await fetch(url, { method: "GET" });
        const responseData = await response.json();
        console.log(responseData);
        const { status, message, data } = responseData;
        if (!status) {
            handleClose();
            Swal.fire("Failed", message, "error");
            return
        }
        setPaymentData(data);
        handleClose()
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep + 1 <= 1) return prevActiveStep + 1;
            return prevActiveStep;
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                style={{ color: "#f50057" }}
                startIcon={<KeyboardBackspaceIcon />}
            >
                Back
              </Button>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div style={{ textAlign: "center" }}>
                                <Button variant="outlined" color="secondary" style={{ borderRadius: "20px", border: "2px solid", width: "50%", display: "inline-block" }} onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
