const deleteBox = document.querySelector('.delete');

deleteBox.addEventListener('click', function() {
    fetch('/delete/signal', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    })
})