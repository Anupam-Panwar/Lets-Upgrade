import React, { useState } from "react";
import Icon from "./Components/Icon";
// import react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import reactstrap
import { Button, Container, Card, CardBody, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { waitFor } from "@testing-library/react";

const tiktacArray = new Array(9).fill("");

const App = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");
  let [start, setStart] = useState("true");

  const playAgain = () => {
    setIsCross(true);
    setWinMessage("");
    tiktacArray.fill("");
    setStart("true");
  };

  const circle = () => {
    setIsCross(false);
    setStart("false");
  };
  const cross = () => {
    setIsCross(true);
    setStart("false");
  };

  const findWinner = () => {
    if (
      tiktacArray[0] === tiktacArray[1] &&
      tiktacArray[0] === tiktacArray[2] &&
      tiktacArray[0] !== ""
    ) {
      setWinMessage("Congratulation " + tiktacArray[0] + " won");
      return toast(tiktacArray[0] + " won", { type: "dark" });
    } else if (
      tiktacArray[3] === tiktacArray[4] &&
      tiktacArray[3] === tiktacArray[5] &&
      tiktacArray[3] !== ""
    ) {
      setWinMessage("Congratulation " + tiktacArray[3] + " won");
      return toast(tiktacArray[3] + " won", { type: "dark" });
    } else if (
      tiktacArray[6] === tiktacArray[7] &&
      tiktacArray[6] === tiktacArray[8] &&
      tiktacArray[6] !== ""
    ) {
      setWinMessage("Congratulation " + tiktacArray[6] + " won");
      return toast(tiktacArray[6] + " won", { type: "dark" });
    } else if (
      tiktacArray[0] === tiktacArray[3] &&
      tiktacArray[0] === tiktacArray[6] &&
      tiktacArray[0]
    ) {
      setWinMessage("Congratulation " + tiktacArray[0] + " won");
      return toast(tiktacArray[0] + " won", { type: "dark" });
    } else if (
      tiktacArray[1] === tiktacArray[4] &&
      tiktacArray[1] === tiktacArray[7] &&
      tiktacArray[1]
    ) {
      setWinMessage("Congratulation " + tiktacArray[1] + " won");
      return toast(tiktacArray[1] + " won", { type: "dark" });
    } else if (
      tiktacArray[2] === tiktacArray[5] &&
      tiktacArray[2] === tiktacArray[8] &&
      tiktacArray[2]
    ) {
      setWinMessage("Congratulation " + tiktacArray[2] + " won");
      return toast(tiktacArray[2] + " won", { type: "dark" });
    } else if (
      tiktacArray[2] === tiktacArray[4] &&
      tiktacArray[2] === tiktacArray[6] &&
      tiktacArray[2]
    ) {
      setWinMessage("Congratulation " + tiktacArray[2] + " won");
      return toast(tiktacArray[2] + " won", { type: "dark" });
    } else if (
      tiktacArray[0] === tiktacArray[4] &&
      tiktacArray[0] === tiktacArray[8] &&
      tiktacArray[0]
    ) {
      setWinMessage("Congratulation " + tiktacArray[0] + "  won");
      return toast(tiktacArray[0] + " won", { type: "dark" });
    }
    draw();
  };

  const draw = () => {
    let counter = 0;
    tiktacArray.map((value, index) => {
      if (value !== "") counter++;
    });
    if (counter === 9) {
      setWinMessage("It's a DRAW");
      return toast("Ops!! It's a DRAW", { type: "dark" });
    }
  };

  const changeItem = (index) => {
    if (start === "true") return;
    if (winMessage !== "") return;
    if (tiktacArray[index] === "") {
      tiktacArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Please choose an appropriate position", {
        type: "error",
      });
    }
    findWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"> </ToastContainer>

      <Row className="row">
        <div className="heading">
          {start === "true" ? (
            <div>
              <h1 className="text-center">
                Choose with which you want to start
              </h1>
              <div className="start">
                <Button
                  className="btn"
                  color="primary"
                  size="lg"
                  onClick={circle}
                >
                  {" "}
                  Circle
                </Button>
                <Button
                  className="btn"
                  color="primary"
                  size="lg"
                  onClick={cross}
                >
                  {" "}
                  Cross
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
          {start === "false" ? (
            winMessage !== "" ? (
              <div className="title">
                <h1 className="text-center">{winMessage}</h1>
                <Button
                  className="btn"
                  color="primary"
                  size="lg"
                  onClick={playAgain}
                >
                  {" "}
                  Play Again
                </Button>
              </div>
            ) : (
              <h1 className="title">
                {isCross ? "Cross's Turn" : "Circle's Turn"}
              </h1>
            )
          ) : (
            <></>
          )}
        </div>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {tiktacArray.map((value, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon choice={tiktacArray[index]} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
