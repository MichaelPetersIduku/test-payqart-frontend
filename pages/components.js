import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";

import Stepper from "components/Stepper/Stepper.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import phone from "assets/img/phone.jpg";
import shirt from "assets/img/shirt.jpg";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  //Set the cart value
  const totalCartValue = 80500;
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={3}>
                <Parallax width="100%" height="100%" image={require("assets/img/bg1.png")} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={4}>
                <div style={{ width: "100%" }} className={classes.title}>
                  <h3>ORDER SUMMARY</h3>
                  <Card style={{ marginBottom: "0px" }}>
                    <CardBody>
                      <div style={{ marginBottom: "15px" }}>
                        <Card style={{ margin: "0px", marginRight: "10px", width: "fit-content", float: "left" }}>
                          <CardBody style={{ padding: "10px", width: "fit-content" }}>
                            <img src={phone} style={{ width: "100px", height: "120px" }} />
                          </CardBody>
                        </Card>
                        <div style={{ fontWeight: "normal", color: "gray", position: "relative", top: "10px" }}>
                          <span>Meysoo P45 pro</span><br />
                          <span>₦75,600</span><br />
                          <span>Qty: 1</span><br />
                        </div>
                        <br />
                      </div>
                      <br /><br />
                      <div>
                        <Card style={{ margin: "0px", marginRight: "10px", width: "fit-content", float: "left" }}>
                          <CardBody style={{ padding: "10px", width: "fit-content" }}>
                            <img src={shirt} style={{ width: "100px", height: "120px" }} />
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
