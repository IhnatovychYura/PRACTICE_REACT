import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            < div >
            Створити масив man. { id, name, age, wife_id }
        Створити масив woman. { id, name, age, husband_id }

        Поділити сторінку на 3 колонки, в 1 вивести чоловіків, в 2 жінок.
            В третю колонку ми виводимо пару ( чоловік + жінка, відповідно до id)

        Компоненти - Mans, Man, Womens, Woman, MarriedCouples, MarriedCouple
            < /div>
    );
    }
}

export default App;
