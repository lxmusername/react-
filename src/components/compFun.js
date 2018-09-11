import React from 'react';



function ClickFun(props) {
    function alertFun() {
        alert(this.state.site)
    }
    return (
        <a href={props.site} onClick={alertFun}>外部的点击事件</a>
    )
}
export default class CompFun extends React.Component {
    constructor() {
        super()
        this.state = {
            site: 'http://www.runoob.com/react/react-event-handle.html'
        }
    }
    alertFun() {
        this.setState({
            site: 'https://www.baidu.com'
        })
        alert('click')
    }
    render() {
        return (
            <div>
                <button onClick={this.alertFun}>点击事件</button>
                <ClickFun site={this.state.site} />
            </div>
        );
    }


}
