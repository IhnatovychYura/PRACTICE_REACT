import React, {Component} from 'react';

class PeopleComponent extends Component {
    render() {
        let {people} = this.props

        return (
            <div>
                {people.name}
            </div>
        );
    }
}

export default PeopleComponent;