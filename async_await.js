const header = {
    'Content-Type': 'application/json; charset=UTF-8'
}

const getPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();

    console.log(data)
}
//getPosts();


const newPost = async () => {

    // let newPost = {
    //     title: 'Teste1',
    //     body: 'Este é um novo teste',
    //     userId: 5
    // }
//Pode ser assim ou como está abaixo


    const url = 'https://jsonplaceholder.typicode.com/posts'
    let options = {
        method: 'POST', 
        body: {
            title: 'Teste1',
            body: 'Este é um novo teste',
            userId: 5 
    }
}
  

    let response = await fetch(url, options, header)
    let data = await response.json()
    console.log(data)
}

//newPost();

const updatePost = async (id) => {

    let url = `https://jsonplaceholder.typicode.com/posts/${id}`
    let options = {
        method: 'PUT',
        body: 'body'
    }           

    let response = await fetch(url, options, header);
    let json = await response.json()
    console.log(json);
}

updatePost(2, {
    title: 'Teste update',
    body: 'teste update body',
    userId: 10
})

const deletePost = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    method: 'DELETE'});
    console.log('deletado!')
    
}

deletePost(3)