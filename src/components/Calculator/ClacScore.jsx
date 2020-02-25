import React from "react";
// Bs components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ClacScore = ({ mape, rmse }) => {
    return (
        <div>
            <Row className="align-items-center rmse">
                <Col xs={12} className="align-items-center score-type ">
                        <Badge pill variant="danger">RMSE</Badge>
                        <OverlayTrigger overlay={<Tooltip>{rmse}</Tooltip>} >
                            <span className="score-value">{rmse.toFixed(4)}</span>
                        </OverlayTrigger>
                </Col>
            </Row>
            <Row className="align-items-center mape">
                <Col xs={12} className="score-type">
                    <Badge pill variant="primary">MAPE</Badge>
                    <OverlayTrigger overlay={<Tooltip>{mape}</Tooltip>}>
                        <span className="score-value">{mape.toFixed(4)}</span>
                    </OverlayTrigger>
                </Col>
            </Row>
        </div>
    )
}


export default ClacScore