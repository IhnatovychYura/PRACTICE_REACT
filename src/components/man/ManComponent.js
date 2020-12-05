import React, {Component} from 'react';

class ManComponent extends Component {
    render() {
        let {man} = this.props

        return (
            <div>
                <h3>{man.name}</h3>
                <p>
                    ID:{man.id} <br/>
                    AGE:{man.age} <br/>
                    Wife ID:{man.wife_id} <br/>
                </p>
                ___________________________________________
            </div>
        );
    }
}

export default ManComponent;