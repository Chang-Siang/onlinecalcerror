import React from "react";
// Bs components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ClacScore = ({ mape, nrmse }) => {
    return (
        <div>
            <Row className="align-items-center rmse">
                <Col xs={12} className="align-items-center score-type ">
                        <Badge pill variant="danger">nRMSE</Badge>
                        <OverlayTrigger overlay={<Tooltip>{nrmse}</Tooltip>} >
                            <span className="score-value">{nrmse.toFixed(2)}%</span>
                        </OverlayTrigger>
                </Col>
            </Row>
            <Row className="align-items-center mape">
                <Col xs={12} className="score-type">
                    <Badge pill variant="primary">&nbsp;MAPE&nbsp;</Badge>
                    <OverlayTrigger overlay={<Tooltip>{mape}</Tooltip>}>
                        <span className="score-value">{mape.toFixed(2)}%</span>
                    </OverlayTrigger>
                </Col>
            </Row>
        </div>
    )
}


export default ClacScore