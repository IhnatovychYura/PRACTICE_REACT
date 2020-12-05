import React, {Component} from 'react';

class MarriedCoupleComponent extends Component {
    render() {
        let {man, woman} =this.props

        return (
            <div>
                <h3>Married Couple</h3>
                <p>
                    {man.name} + {woman.name}
                </p>
                ___________________________________________
            </div>
        );
    }
}

export default MarriedCoupleComponent;