import UserList from "./UserList";
import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import usernames from '../fictures'
import {Row, Col} from "antd";
import ChangeName from "./changeName";
import 'antd/dist/antd.css';

function App() {
    const [state, setState] = useState(usernames);
    const removeItem = function (value) {
        return state.filter(item => item.user !== value)
    }

    return (
        <div style={{marginTop: '140px'}}>
            <Row>
                <Col span={6} offset={7} align="middle" justify="space-around">
                    <div>
                        <Col span={6} align="left"><h1 className="title_name">Name</h1></Col>
                        <Router>
                            <Switch>
                                <Route exact path='/'>
                                    <UserList usernames={state} onClick={onClick}/>
                                </Route>
                                <Route exact path='/change'>
                                    <ChangeName/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </Col>
            </Row>
        </div>
    )

    function onClick(value) {
        alert('User is deleted')
        setState(removeItem(value))
    }
}

export default App