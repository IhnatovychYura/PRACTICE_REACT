class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'

    getAllPeople() {
        return fetch(this.url)
            .then(value => value.json())
    }

}

export default UserService