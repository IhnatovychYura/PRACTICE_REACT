import React, {Component} from 'react';
import './AllMarriedCouple.css'
import MarriedCoupleComponent from "../marriedCouple/MarriedCoupleComponent";

class AllMarriedCouplesComponent extends Component {

    render() {
        let {mans, womans} = this.props;

        return (
            <div className={'marriedDiv'}>
                <h1>WHO ARE COUPLES?</h1>
                {
                    mans.map((value, index) => {
                        for (let i=0; i<womans.length; i++){
                            if (womans[i].id === value.wife_id){
                                return (<MarriedCoupleComponent man={value} woman={womans[i]} key={index} />)
                            }
                        }
                    })
                }
            </div>
        );
    }
}

export default AllMarriedCouplesComponent;