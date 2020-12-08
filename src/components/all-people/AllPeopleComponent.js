import React, {Component} from 'react';
import PeopleService from "../../services/PeopleService";
import PeopleComponent from "../people/PeopleComponent";

class AllPeopleComponent extends Component {

    peopleService = new PeopleService()

    state = {people: []}

    async componentDidMount() {
        let users = await this.peopleService.getAllPeople();
        this.setState({people: users});
    }

    render() {

        let {people} =this.state
        console.log(people);

        return (
            <div>
                <h1>All People from StarWars</h1>
                {
                    people.map(value => (<PeopleComponent
                        people={value}
                        key={value.id}
                        />))
                }

            </div>
        );
    }
}

export default AllPeopleComponent;