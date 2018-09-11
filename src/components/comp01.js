import React, { Component } from 'react';
import CompFun from './compFun.js'

function formatDate(date) {
    return date.toISOString();
}
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
            <CompFun/>
        </div>
    );
}

export default class ComPart extends Component {
    render() {
        return (
            <Comment
                author={{
                    avatarUrl: 'https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/3ae1dc06.jpg',
                    name: 'zhangyatao'
                }}
                text={'我的名字叫张亚涛'}
                date={new Date()} />
        )
    }

}


