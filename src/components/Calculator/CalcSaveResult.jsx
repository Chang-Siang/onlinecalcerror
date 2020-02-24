import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'

const CalcSaveResult = ({ username, handleChange, handleISaveResult }) => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // 檢查不通過則取消後續動作
            event.preventDefault();
            event.stopPropagation();
        } else {
            // 檢查通過才啟動儲存機制
            handleISaveResult();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} xs="12" md="6" controlId="validationCustomUsername">
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name."
                            aria-describedby="inputGroupPrepend"
                            value={username}
                            onChange={handleChange}
                            required
                        />
                        <InputGroup.Append>
                            <Button type="submit" variant="outline-primary">Save Result</Button>
                        </InputGroup.Append>
                        <Form.Control.Feedback type="invalid">
                            Please enter your name.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default CalcSaveResult
