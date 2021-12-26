const newPostHandler = async function(e){
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value

    await fetch(`/api/post/`, {
        method: 'POST',
        body: JSON.stringify({
            title: title, 
            content: content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    document.location.replace('/admin')
}

document.getElementById('new-post').addEventListener('submit', newPostHandler)