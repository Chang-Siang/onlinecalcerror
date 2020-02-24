import React from "react";
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../../stylesheets/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <Container>
                    <h1>Error Calculator</h1>
                </Container>
            </div>
            <div className="header-nav">
                <Container>
                    <Nav justify variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link eventKey="0" as={NavLink} to="/" exact={true} activeClassName="active">Calculator</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="1" as={NavLink} to="/ranking" activeClassName="active">Ranking</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>

            <hr />
        </div>

    )
}


export default Header