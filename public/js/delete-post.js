const forms = document.querySelector('.delete-event-container').addEventListener('click', deleteFormHandler);

async function deleteFormHandler(event) {
	event.preventDefault();
    
    if (event.target.getAttribute('data-post-id')) {
        const id = event.target.getAttribute('data-post-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    } else if (event.target.getAttribute('href')) {
        window.location.replace(event.target.getAttribute('href'));
    }
}