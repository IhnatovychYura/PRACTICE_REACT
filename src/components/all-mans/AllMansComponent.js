import React, {Component} from 'react';
import ManComponent from "../man/ManComponent";
import "./AllMans.css"

class AllMansComponent extends Component {
    render() {
    let {mans} = this.props;
        return (
            <div className={'mansDiv'}>
                <h1>MANS</h1>
                {
                    mans.map((value, index) => {
                        return (<ManComponent man={value} key={index}/>)})
                }
            </div>
        );
    }
}

export default AllMansComponent;