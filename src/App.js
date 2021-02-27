import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../src/components/Grid/GridContainer.js";
import GridItem from "../src/components/Grid/GridItem.js";
import CardBody from "../src/components/Card/CardBody.js";
import Card from "../src/components/Card/Card.js";

import Stepper from "../src/components/Stepper/Stepper.js";
import Parallax from "../src/components/Parallax/Parallax.js";

import styles from "../src/assets/jss/nextjs-material-kit/pages/components.js";
import bg1 from "../src/assets/img/bg1.png";
import phone from "../src/assets/img/phone.jpg";
import shirt from "../src/assets/img/shirt.jpg";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  //Set the cart value
  const totalCartValue = 80500;
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem style={{ paddingRight: "0px" }} xs={12} sm={12} md={12} lg={3}>
                <Parallax width="100%" height="100%" image={bg1} />
              </GridItem>
              <GridItem style={{ backgroundColor: "#ececec" }} xs={12} sm={12} md={12} lg={4}>
                <div style={{ width: "100%" }} className={classes.title}>
                  <p style={{ fontSize: "20px", color: "gray", fontWeight: "normal" }}>ORDER SUMMARY</p>
                  <Card style={{ marginBottom: "0px" }}>
                    <CardBody>
                      <div style={{ marginBottom: "15px" }}>
                        <Card style={{ margin: "0px", marginRight: "10px", width: "fit-content", float: "left" }}>
                          <CardBody style={{ padding: "10px", width: "fit-content" }}>
                            <img alt="img" src={phone} style={{ width: "100px", height: "120px" }} />
                          </CardBody>
                        </Card>
                        <div style={{ fontWeight: "normal", color: "gray", position: "relative", top: "10px" }}>
                          <span>Meysoo P45 pro</span><br />
                          <span>₦75,600</span><br />
                          <span>Qty: 1</span><br />
                        </div>
                        <br />
                      </div>
                      <br /><br /><br />
                      <div>
                        <br />
                        <Card style={{ margin: "0px", marginTop: "10px", marginRight: "10px", width: "fit-content", float: "left" }}>
                          <CardBody style={{ padding: "10px", width: "fit-content" }}>
                            <img alt="img" src={shirt} style={{ width: "100px", height: "120px" }} />
                          </CardBody>
                        </Card>
                        <div style={{ fontWeight: "normal", color: "gray", position: "relative", top: "10px" }}>
                          <span>Men's Long Sleeve Shirt</span><br />
                          <span>₦4,900</span><br />
                          <span>Qty: 2</span><br />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <Card>
                  <CardBody>
                    <div style={{ fontWeight: "normal", color: "gray", position: "relative" }}>
                      <span>Total Cart Value: </span> <span style={{ fontWeight: "bold", color: "black", position: "relative", left: "45%" }}>₦80,500</span>
                    </div>
                  </CardBody>
                </Card>

              </GridItem>
              <GridItem backgroundColor="white" xs={12} sm={12} md={12} lg={5}>
                <br />
                <Stepper totalCartValue={totalCartValue} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
