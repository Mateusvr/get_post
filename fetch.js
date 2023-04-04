function getPosts() {
    fetch(url)
//then trata a promise
.then(response => response.json())
// .then(function(response) {
//     return response.json()
// })

.then(json => console.log(json))
}
getPosts('https://jsonplaceholder.typicode.com/posts')
getPosts('https://jsonplaceholder.typicode.com/users')