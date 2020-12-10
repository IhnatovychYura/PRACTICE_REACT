class UserService {
    url = 'https://swapi.dev/api/people'

    getAllPeople() {
        return fetch(this.url)
            .then(value => value.json())
    }

}

export default UserService