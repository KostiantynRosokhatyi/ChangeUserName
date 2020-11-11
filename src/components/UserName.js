import React, {Component, useState} from 'react'
import {Button, Row, Col} from "antd";
import 'antd/dist/antd.css';
import './style.css';
import Bucket from "./Bucket";
import usernames from '../fictures'
function UserName (props){
    const {username} = props
    const handleChange = () => {
        alert("User is deleted!!!!!")

    }
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
                        window.location.replace('http://localhost:3000/change');
                        }}>Change</Button>
                    </Col>
                    <Col>
                        <Bucket onCustomClick={handleChange}/>
                    </Col>
                </Row>
            </div>
        </div>
    )

/*    function HandleClick(id) {
        alert('User is deleted!', id)
    }*/

}

export default UserName