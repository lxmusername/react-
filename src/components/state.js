import React from 'react';
export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), num: 0 };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        let num = (this.state.num += 2)
        this.setState({
            date: new Date(),
            num: num,
            name:'000',
            site:'http://www.runoob.com/react/react-props.html'
        });
    }
    render() {
        return (
            <div>
                <span>数量{this.state.num} </span>
                <span>设置props的默认值，使用ComName.defaultProps方式
                {this.props.name}</span>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
                <Name name={this.state.name}/>
                <Link site={this.state.site}/>

            </div>
        );
    }
}
Clock.defaultProps = {
    name: 'default value'
}
class Name extends React.Component {
    render() {
        return (
            <h1>通过props的方式获取属性：props.name {this.props.name}</h1>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
}