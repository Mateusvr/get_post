// const getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }
// getPosts()


const getById = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
getById(4)
//getById(12)

