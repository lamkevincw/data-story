import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Scrollama, Step } from "react-scrollama";

import narration from "./narration.json";
import sample from "./sample.json";

import soilCoreImg from "../../images/soil_cores.png";
import uncertaintyChart from "../../images/uncertainty_chart.png";
import uncertaintyChart2 from "../../images/uncertainty_chart_2.png";

const debugState = false;

const styles = {
    main: {
        padding: "70vh 2vw",
        // display: "flex",
        fontFamily: "Helvetica",
        justifyContent: "space-between"
    },
    graphic: {
        flexBasis: "60%",
        position: "sticky",
        width: "100%",
        padding: "5rem 0",
        top: "160px",
        alignSelf: "flex-start",
        backgroundColor: "#aaa",
        "& p": {
            fontSize: "5rem",
            textAlign: "center",
            color: "#fff"
        }
    },
    scroller: {
        flexBasis: "35%"
    },
    step: {
        margin: "0 auto 2rem auto",
        paddingTop: 200,
        paddingBottom: 200,
        border: "1px solid #333",
        "& p": {
            textAlign: "center",
            padding: "1rem",
            fontSize: "1.5rem"
        },
        "&:last-child": {
            marginBottom: 0
        }
    }
};

function Story(props) {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [currentProgress, setCurrentProgress] = useState(null);

    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };

    const onStepProgress = (p) => {
        setCurrentProgress(p.progress);
    }

    const onStepExit = ({ element }) => {
        element.style.backgroundColor = "#fff";
    };

    return (
        // <div>
        //     <p>{sample.text}</p>
        //     <Row>
        //         <div>
        //             <Scrollama offset={0.5} onStepEnter={onStepEnter} onStepProgress={onStepProgress} debug>
        //                 {narration.map((text, stepIndex) => (
        //                     <Step data={stepIndex} key={stepIndex}>
        //                         <div
        //                             style={{
        //                                 height: "300px",
        //                                 width: "500px",
        //                                 margin: '50vh 0',
        //                                 border: '1px solid gray',
        //                                 opacity: currentStepIndex === stepIndex ? 1 : 0.2,
        //                             }}
        //                         >
        //                             {text.narration}
        //                         </div>
        //                     </Step>
        //                 ))}
        //             </Scrollama>
        //         </div>
        //         <div style={{ position: 'sticky', border: '1px solid orchid' }}>
        //             I'm sticky. The current triggered step index is: {currentProgress}
        //         </div>


        //         <Col className="col-6">

        //             <p>{sample.text}</p>
        //         </Col>
        //     </Row>


        // </div>
        <Row>
            <Row style={{ padding: "10vh 2vw 10vh"}}>
                <h1 className="m-2 mt-4 text-center">EMS Data Story Demo</h1>
            </Row>
            <Row className="scrollMain d-flex justify-content-between mx-5" key="scroll1">
                <Col className="scrollText col-4">
                    <Scrollama
                        onStepEnter={onStepEnter}
                        onStepExit={onStepExit}
                        offset={0.8}
                        debug={debugState}
                    >
                        {[0, 1].map((stepIndex) => (
                            <Step data={stepIndex} key={"scrollStep1-" + stepIndex}>
                                <div className="scrollStep">
                                    {narration[stepIndex].narration}
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </Col>
                <Col className="scrollGraphic col-6">
                    <img id="soilCoreImg" src={soilCoreImg} width={"700px"} />
                </Col>
            </Row>
            <Row className="scrollMain d-flex justify-content-between mx-5" key="scroll2">
                <Col className="scrollText col-4">
                    <Scrollama
                        onStepEnter={onStepEnter}
                        onStepExit={onStepExit}
                        offset={0.8}
                        debug={debugState}
                    >
                        {[2, 3, 4, 5, 6, 7, 8].map((stepIndex) => (
                            <Step data={stepIndex} key={"scrollStep2-" + stepIndex}>
                                <div className="scrollStep">
                                    {narration[stepIndex].narration}
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </Col>
                <Col className="scrollGraphic col-6">
                    <img id="uncertaintyChart" src={uncertaintyChart} width={"700px"} />
                </Col>
            </Row>
            <Row className="scrollMain d-flex justify-content-between mx-5" key="scroll3">
                <Col className="scrollText col-4">
                    <Scrollama
                        onStepEnter={onStepEnter}
                        onStepExit={onStepExit}
                        offset={0.8}
                        debug={debugState}
                    >
                        {[9, 10, 11, 12, 13, 14].map((stepIndex) => (
                            <Step data={stepIndex} key={"scrollStep3-" + stepIndex}>
                                <div className="scrollStep">
                                    {narration[stepIndex].narration}
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </Col>
                <Col className="scrollGraphic col-6">
                    <img id="uncertaintyChart2" src={uncertaintyChart2} width={"700px"} />
                </Col>
            </Row>
            <Row style={{ padding: "100vh 2vw 1vh" }}>
                <p className="text-end">Data story by Environmental Material Science Inc.</p>
            </Row>
            {/* <Row className="scrollMain d-flex justify-content-between mx-5">
                <Col className="col-4">
                    <Scrollama
                        onStepEnter={onStepEnter}
                        onStepExit={onStepExit}
                        offset={0.33}
                        debug
                    >
                        {narration.map((text, stepIndex) => (
                            <Step data={stepIndex} key={stepIndex}>
                                <div
                                    style={{
                                        height: "300px",
                                        margin: '50vh 0',
                                        border: '1px solid gray',
                                        opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                                    }}
                                >
                                    {text.narration}
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </Col>
                <Col className="scrollGraphic col-6">
                    <p>{sample.text}</p>
                </Col>
            </Row> */}
        </Row>
    );
}

export default Story;