import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
// @material-ui/icons


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
export default function Step2(props) {
    const classes = useStyles();
    const { onInputChange, inputValues, paymentData, updateBreakDown, ...rest } = props;
    let downPayment = 0;
    // The first commit of Material-UI
    const [months, setMonths] = React.useState(1);
    let [month1Color, setMonth1Color] = React.useState({ color: "white", background: "purple" });
    let [month2Color, setMonth2Color] = React.useState({ color: "purple", background: "white" });
    let [month3Color, setMonth3Color] = React.useState({ color: "purple", background: "white" });
    let [month4Color, setMonth4Color] = React.useState({ color: "purple", background: "white" });
    let [month5Color, setMonth5Color] = React.useState({ color: "purple", background: "white" });
    let [month6Color, setMonth6Color] = React.useState({ color: "purple", background: "white" });

    let inputVal = inputValues;

    const update = (event) => {
        console.log(inputVal);
        updateBreakDown()
        console.log("Make API call");
    }

    const handleDownPayment = (event) => {
        downPayment = event.target.value;
        console.log(downPayment);
        inputVal.downPayment = downPayment;
        onInputChange(inputVal);
    }

    const handleMonths = (month) => {
        console.log(month);
        if (month == 1) {
            setMonth1Color({ color: "white", background: "purple" });
            setMonth2Color({ color: "purple", background: "white" });
            setMonth3Color({ color: "purple", background: "white" });
            setMonth4Color({ color: "purple", background: "white" });
            setMonth5Color({ color: "purple", background: "white" });
            setMonth6Color({ color: "purple", background: "white" });
        } else if (month == 2) {
            setMonth1Color({ color: "purple", background: "white" });
            setMonth2Color({ color: "white", background: "purple" });
            setMonth3Color({ color: "purple", background: "white" });
            setMonth4Color({ color: "purple", background: "white" });
            setMonth5Color({ color: "purple", background: "white" });
            setMonth6Color({ color: "purple", background: "white" });
        } else if (month == 3) {
            setMonth1Color({ color: "purple", background: "white" });
            setMonth2Color({ color: "purple", background: "white" });
            setMonth3Color({ color: "white", background: "purple" });
            setMonth4Color({ color: "purple", background: "white" });
            setMonth5Color({ color: "purple", background: "white" });
            setMonth6Color({ color: "purple", background: "white" });
        } else if (month == 4) {
            setMonth1Color({ color: "purple", background: "white" });
            setMonth2Color({ color: "purple", background: "white" });
            setMonth3Color({ color: "purple", background: "white" });
            setMonth4Color({ color: "white", background: "purple" });
            setMonth5Color({ color: "purple", background: "white" });
            setMonth6Color({ color: "purple", background: "white" });
        } else if (month == 5) {
            setMonth1Color({ color: "purple", background: "white" });
            setMonth2Color({ color: "purple", background: "white" });
            setMonth3Color({ color: "purple", background: "white" });
            setMonth4Color({ color: "purple", background: "white" });
            setMonth5Color({ color: "white", background: "purple" });
            setMonth6Color({ color: "purple", background: "white" });
        } else if (month == 6) {
            setMonth1Color({ color: "purple", background: "white" });
            setMonth2Color({ color: "purple", background: "white" });
            setMonth3Color({ color: "purple", background: "white" });
            setMonth4Color({ color: "purple", background: "white" });
            setMonth5Color({ color: "purple", background: "white" });
            setMonth6Color({ color: "white", background: "purple" });
        }

        inputVal.tenure = month;
        onInputChange(inputVal);
        setMonths(month)
    }

    return (
        <div>
            <div style={{ textAlign: "center", color: "purple", fontWeight: "bold", fontFamily: "cursive", fontSize: "21px", position: "relative", top: "-25px" }}>Choose Your plan</div>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block", margin: "0 auto", width: "fit-content" }}>
                    <div style={{ float: "left", width: "100px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "90px", cursor: "pointer", borderTop: "10px solid red" }}>
                            <CardBody style={{ width: "100%", padding: "0px" }}>
                                <div onClick={() => handleMonths(1)} style={{ color: month1Color.color, background: month1Color.background, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", }}>
                                    <span>Aggresive</span><br />
                                    <h2 style={{ lineHeight: "0.0em", fontWeight: "bold" }}>1</h2><br />
                                    <span>month</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{ float: "left", width: "100px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "90px", cursor: "pointer", borderTop: "10px solid pink" }}>
                            <CardBody style={{ width: "100%", padding: "0px" }}>
                                <div onClick={() => handleMonths(2)} style={{ color: month2Color.color, background: month2Color.background, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", }}>
                                    <span>Stretching</span><br />
                                    <h2 style={{ lineHeight: "0.0em", fontWeight: "bold" }}>2</h2><br />
                                    <span>month</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{ float: "left", width: "100px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "90px", cursor: "pointer", borderTop: "10px solid blue" }}>
                            <CardBody style={{ width: "100%", padding: "0px" }}>
                                <div onClick={() => handleMonths(3)} style={{ color: month3Color.color, background: month3Color.background, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", }}>
                                    <span>Focused</span><br />
                                    <h2 style={{ lineHeight: "0.0em", fontWeight: "bold" }}>3</h2><br />
                                    <span>month</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{ float: "left", width: "100px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "90px", cursor: "pointer", borderTop: "10px solid cyan" }}>
                            <CardBody style={{ width: "100%", padding: "0px" }}>
                                <div onClick={() => handleMonths(4)} style={{ color: month4Color.color, background: month4Color.background, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", }}>
                                    <span>Casual</span><br />
                                    <h2 style={{ lineHeight: "0.0em", fontWeight: "bold" }}>4</h2><br />
                                    <span>month</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{ float: "left", width: "100px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "90px", cursor: "pointer", borderTop: "10px solid orange" }}>
                            <CardBody style={{ width: "100%", padding: "0px" }}>
                                <div onClick={() => handleMonths(5)} style={{ color: month5Color.color, background: month5Color.background, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", }}>
                                    <span>Mid</span><br />
                                    <h2 style={{ lineHeight: "0.0em", fontWeight: "bold" }}>5</h2><br />
                                    <span>month</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{ float: "left", width: "100px" }}>
                        <Card style={{ margin: "0px", marginRight: "20px", width: "90px", cursor: "pointer", borderTop: "10px solid greenyellow" }}>
                            <CardBody style={{ width: "100%", padding: "0px" }}>
                                <div onClick={() => handleMonths(6)} style={{ color: month6Color.color, background: month6Color.background, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", }}>
                                    <span>Gentle</span><br />
                                    <h2 style={{ lineHeight: "0.0em", fontWeight: "bold" }}>6</h2><br />
                                    <span>month</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center", color: "purple", fontWeight: "bold", fontFamily: "cursive", fontSize: "21px", position: "relative", top: "-25px" }}>Payment Breakdown</div>
            <Card style={{ height: "190px" }}>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12} lg={4} style={{ borderRight: "1px solid gray" }}>
                            <div style={{ float: "left", color: "purple" }}>
                                <p>Shopping Credit</p>
                                <p>Down Payment</p>
                                <p>Monthly Installment</p>
                                <p>Tenure</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} lg={3}>
                            <div style={{ float: "left", fontWeight: "bold", color: "purple" }}>
                                <p>₦{paymentData.shoppingCredit}</p>
                                <p>₦{paymentData.downPayment}</p>
                                <p>₦{paymentData.monthlyRepayment}</p>
                                <p>{paymentData.tenure} Month</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} lg={5}>
                            <div style={{ color: "white", borderRadius: "7px", padding: "10px", height: "154%", position: "absolute", top: '-15px', width: "100%", background: "#f50057", textAlign: "center" }}>
                                <p style={{ fontSize: "19px" }}>Customize Down Payment</p>
                                <Paper component="form" style={{ width: "100%" }} className={classes.root}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        ₦
                                    </IconButton>
                                    <InputBase
                                        className={classes.input}
                                        placeholder=""
                                        onChange={handleDownPayment}
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                </Paper>
                                <Button variant="outlined" style={{ borderRadius: "20px", border: "2px solid white", color: "white", display: "inline-block" }} onClick={update}>
                                    Update Breakdown
                                </Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>

        </div>
    );

}
