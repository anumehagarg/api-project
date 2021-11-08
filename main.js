document.getElementById('getPosts').addEventListener('click', getPosts);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            let output = '<h1>Posts</h1>';
            data.forEach((post) => {
                output += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>`;
            });
            document.getElementById('output').innerHTML = output;
        })
}
