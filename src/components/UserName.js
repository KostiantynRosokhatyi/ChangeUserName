import React, {Component, useState} from 'react'
import {Button, Row, Col} from "antd";
import 'antd/dist/antd.css';
import './style.css';
import Bucket from "./Bucket";

function UserName(props) {
    const {username, onClick} = props
    return (
        <div>
            <div className="test">
                <Row justify="space-around" align="middle">
                    <Col span={13} align="right">
                        <span className="name">{username}</span>
                    </Col>
                    <Col>
                        <Button type="primary" className="name-change__button"
                                onClick={function handleClick(e) {
                                    e.preventDefault();
                                    window.location.replace('/#/change');
                                }}>Change</Button>
                    </Col>
                    <Col>
                        <Bucket onClick={onClick}/>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default UserName