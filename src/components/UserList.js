import React, {PureComponent} from 'react'
import UserName from "./UserName"
import 'antd/dist/antd.css';
import "./style.css"

function UserList(props){
        return(
            <ul>
                {props.usernames.map((username) =>
                <li  key={username.id} className="article-list__li" value={<UserName username={username.user}/>}>
                    <UserName username={username.user}/>
                </li>)}
            </ul>
        )
}
export default UserList