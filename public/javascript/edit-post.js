const post_id = document.getElementById('edit-post').dataset.id;

const editPostHandler = async function(e){
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value

    await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, 
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    document.location.replace('/admin')
}

const deletePostHandler = async function(){
    await fetch(`/api/post/${post_id}`, {method: 'DELETE'})

    document.location.replace('/admin')
}

document.getElementById('edit-post').addEventListener('submit', editPostHandler)
document.getElementById('delete').addEventListener('click', deletePostHandler)