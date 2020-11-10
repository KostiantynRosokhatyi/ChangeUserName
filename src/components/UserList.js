import React, {PureComponent} from 'react'
import UserName from "./UserName"
import 'antd/dist/antd.css';
import "./style.css"

export default class UserList extends PureComponent {
    myRef = React.createRef();
    render() {
        const articleElements = this.props.articles.map((article) =>
            <li  key={article.id} className="article-list__li" value={<UserName article={article}/>}>
                <UserName article={article}/>
            </li>
        )
        return (
            <ul >
                {articleElements }
            </ul>
        )

    }
}