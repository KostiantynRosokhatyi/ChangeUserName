import React from 'react';
import {Button, Input, Row, Col, message} from "antd";
import 'antd/dist/antd.css';
import './style.css';

function ChangeName() {
    return (
        <Row>
            <Col>
                <Input placeholder={'name'} className="input-change"/>
                <Button className="save-changed-name__button"
                        onClick={function handleClick(e2) {
                            e2.preventDefault();
                            console.log(document.getElementsByClassName('article-list__li').value);
                            message.success({
                                content: 'User is saved!', duration: 10,
                                className: 'notification'
                            })
                            window.setTimeout(() => {
                                window.location.replace('https://kostiantynrosokhatyj.github.io/ChangeUserName/');
                            }, 1000)
                        }}>Save
                </Button>
            </Col>
        </Row>
    )
}

export default ChangeName