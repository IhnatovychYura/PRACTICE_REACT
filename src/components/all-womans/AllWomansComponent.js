import React, {Component} from 'react';
import WomanComponent from "../woman/WomanComponent";
import "./AllWomans.css"

class AllWomansComponent extends Component {
    render() {
        let {womans} =this.props
        return (
            <div className={'womansDiv'}>
                <h1>WOMANS</h1>
                {
                    womans.map((value, index) => {
                        return (<WomanComponent woman={value} key={index}/>)})
                }
            </div>
        );
    }
}

export default AllWomansComponent;