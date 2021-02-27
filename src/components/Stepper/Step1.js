import React from "react";
// nodejs library that concatenates classes
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CardBody from "../../components/Card/CardBody.js";
import Card from "../../components/Card/Card.js";
// @material-ui/icons

import paid from "../../assets/img/paid.png";
import employed from "../../assets/img/employed.png";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPage.js";
import corporate from "../../assets/img/corporate.png";

const useStyles = makeStyles(styles);

export default function Step1(props) {
    const classes = useStyles();
    const { onInputChange, ...rest } = props;

    // The first commit of Material-UI
    const [existingLoans, setExistingLoans] = React.useState('no');
    const [employmentType, setEmploymentType] = React.useState('paid');
    let [paidFontWeight, setPaidFontWeight] = React.useState("bold");
    let [selfFontWeight, setSelfFontWeight] = React.useState("normal");
    let [corporateFontWeight, setCorporateFontWeight] = React.useState("normal");
    const [pay, setPay] = React.useState(0);
    const [salaryDate, setSalaryDate] = React.useState(new Date());
    let inputValues = {
        existingLoans,
        employmentType,
        pay,
        salaryDate,
        ...rest
    };
    const handleExistingLoans = (event) => {
        inputValues.existingLoans = event.target.value;
        onInputChange(inputValues);
        setExistingLoans(event.target.value);
    }

    const handlePay = (event) => {
        inputValues.pay = event.target.value;
        onInputChange(inputValues);
        setPay(event.target.value);
    }

    const handleSalaryDate = (event) => {
        console.log(event);
        // inputValues.salaryDate = new Date(event._d).toISOString();
        onInputChange(inputValues);
        setSalaryDate(new Date());
    }

    const handleEmploymentType = (type) => {
        if (type === "paid") {
            setPaidFontWeight("bold");
            setSelfFontWeight("normal");
            setCorporateFontWeight("normal");
        } else if (type === "self") {
            setPaidFontWeight("normal");
            setSelfFontWeight("bold");
            setCorporateFontWeight("normal");
        } else if (type === "corporate") {
            setPaidFontWeight("normal");
            setSelfFontWeight("normal");
            setCorporateFontWeight("bold");
        }
        inputValues.employmentType = type;
        onInputChange(inputValues);
        setEmploymentType(type)
    }

    return (
        <div>
            <div style={{ textAlign: "center", color: "purple", fontWeight: "bold", fontFamily: "cursive", fontSize: "21px", position: "relative", top: "-25px" }}>What Do You Do?</div>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block", margin: "0 auto", width: "fit-content" }}>
                    <div style={{ float: "left", width: "100px", marginRight: "35px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "fit-content", cursor: "pointer" }}>
                            <CardBody style={{ padding: "10px", width: "fit-content" }}>
                                <img alt="img" onClick={() => handleEmploymentType("paid")} src={paid} style={{ width: "70px", height: "70px" }} />
                            </CardBody>
                        </Card>
                        <p style={{ color: "purple", fontWeight: paidFontWeight }}>Paid Employment</p>
                    </div>
                    <div style={{ float: "left", width: "100px", marginRight: "35px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "fit-content", cursor: "pointer" }}>
                            <CardBody style={{ padding: "10px", width: "fit-content" }}>
                                <img alt="img" onClick={() => handleEmploymentType("self")} src={employed} style={{ width: "70px", height: "70px" }} />
                            </CardBody>
                        </Card>
                        <p style={{ color: "purple", fontWeight: selfFontWeight }}>Self Employment / Freelance</p>
                    </div>
                    <div style={{ float: "left", width: "100px", marginRight: "35px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "fit-content", cursor: "pointer" }}>
                            <CardBody style={{ padding: "10px", width: "fit-content" }}>
                                <img alt="img" onClick={() => handleEmploymentType("corporate")} src={corporate} style={{ width: "70px", height: "70px" }} />
                            </CardBody>
                        </Card>
                        <p style={{ color: "purple", fontWeight: corporateFontWeight }}>Corporate organization</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block", margin: "0 auto", width: "60%" }}>
                    <p style={{ textAlign: "left" }}>How much do you get paid monthly?</p>
                    <TextField
                        onChange={handlePay}
                        style={{ width: "100%" }}
                        id="filled-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">₦</InputAdornment>,
                        }}
                        variant="filled"
                    />
                    <br /><br />
                    <p style={{ textAlign: "left" }}>When is your next salary date?</p>
                    <TextField
                        id="date"
                        type="date"
                        style={{ width: "100%" }}
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        onChange={handleSalaryDate}
                        inputProps={{ placeholder: "" }}
                        disableClock={true}
                    />
                    <br /><br />
                    <p style={{ textAlign: "left" }}>Do you have any existing loans?</p>
                    <RadioGroup aria-label="existingLoans" row name="existingLoans" value={existingLoans} onChange={handleExistingLoans}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
}
