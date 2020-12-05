import React, {Component} from 'react';

class WomanComponent extends Component {
    render() {

        let {woman} = this.props

        return (
            <div>
                <h3>{woman.name}</h3>
                <p>
                    ID:{woman.id} <br/>
                    AGE:{woman.age} <br/>
                    Husband ID:{woman.husband_id} <br/>
                </p>
                ___________________________________________
            </div>
        );
    }
}

export default WomanComponent;