import React, {Component} from 'react';
import AllMansComponent from "./components/all-mans/AllMansComponent";
import AllWomansComponent from "./components/all-womans/AllWomansComponent";
import AllMarriedCouplesComponent from "./components/all-marriedCouples/AllMarriedCouplesComponent";

class App extends Component {
    state = {
        mans: [
            {
                id: 1,
                name: 'Yura',
                age: 25,
                wife_id: 2
            },
            {
                id: 2,
                name: 'Taras',
                age: 26,
                wife_id: 8
            },
            {
                id: 3,
                name: 'Petro',
                age: 30,
                wife_id: 7
            },
            {
                id: 4,
                name: 'Stas',
                age: 35,
                wife_id: 3
            },
            {
                id: 5,
                name: 'Sviat',
                age: 18,
                wife_id: 1
            },
            {
                id: 6,
                name: 'Oleg',
                age: 28,
                wife_id: 4
            },
            {
                id: 7,
                name: 'Oleksa',
                age: 33,
                wife_id: 5
            },
            {
                id: 8,
                name: 'Volodymyr',
                age: 50,
                wife_id: 6
            },
        ],
        womans: [
            {
                id: 1,
                name: 'Maruna',
                age: 18,
                husband_id: 5
            },
            {
                id: 2,
                name: 'Marta',
                age: 25,
                husband_id: 1
            },
            {
                id: 3,
                name: 'Olga',
                age: 35,
                husband_id: 4
            },
            {
                id: 4,
                name: 'Zhanna',
                age: 28,
                husband_id: 6
            },
            {
                id: 5,
                name: 'Oksana',
                age: 33,
                husband_id: 7
            },
            {
                id: 6,
                name: 'Tanya',
                age: 50,
                husband_id: 8
            },
            {
                id: 7,
                name: 'Lesya',
                age: 30,
                husband_id: 3
            },
            {
                id: 8,
                name: 'Nastiya',
                age: 26,
                husband_id: 2
            },
        ]
    }

    render() {
        return (
            <div>
                {/*Поділити сторінку на 3 колонки, в 1 вивести чоловіків, в 2 жінок.*/}
                {/*    В третю колонку ми виводимо пару ( чоловік + жінка, відповідно до id)*/}

                {/*Компоненти - Mans, Man, Womens, Woman, MarriedCouples, MarriedCouple"*/}

                <AllMansComponent mans={this.state.mans}/>
                <AllWomansComponent womans={this.state.womans}/>
                <AllMarriedCouplesComponent mans={this.state.mans} womans={this.state.womans}/>

            </div>
        )
    }
}

export default App;
