let commentForm = document.getElementById('comment-form');
let commentsList = document.getElementById('comments-list');
let noCommentsMessage = document.getElementById('no-comments-message');
let messageBox = document.getElementById('message-box');

function showMessage(message, type = 'success') {
    // If messageBox doesn't exist in your HTML, alert as fallback
    if (!messageBox) {
        alert(message);
        return;
    }
    messageBox.textContent = message;
    messageBox.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
    messageBox.style.display = 'block';
    setTimeout(() => { messageBox.style.display = 'none'; }, 3000);
}

/**
 * Fetch comments from the Flask SQLAlchemy backend
 */
async function loadComments() {
    try {
        let response = await fetch('/get_comments');
        let comments = await response.json();
        renderComments(comments);
    } catch (e) {
        console.error("Error loading comments:", e);
    }
}

/**
 * Render the fetched comments
 */
function renderComments(comments) {
    commentsList.innerHTML = ''; 

    if (comments.length === 0) {
        commentsList.appendChild(noCommentsMessage);
        noCommentsMessage.style.display = 'block';
        return;
    }

    noCommentsMessage.style.display = 'none';

    comments.forEach(comment => {
        let commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        
        // Format the ISO string from Python to local string
        let date = new Date(comment.timestamp).toLocaleString();

        commentItem.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${comment.author || 'Anonymous'}</span>
                <span class="comment-date">${date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        `;
        commentsList.appendChild(commentItem);
    });
}

/**
 * Submit to Flask API
 */
async function handleCommentSubmit(event) {
    event.preventDefault();

    let authorInput = document.getElementById('author');
    let textInput = document.getElementById('comment-text');

    let newComment = {
        author: authorInput.value.trim() || 'Anonymous',
        text: textInput.value.trim()
    };

    if (newComment.text.length === 0) {
        showMessage("Comment cannot be empty.", 'error');
        return;
    }

    try {
        let response = await fetch('/add_comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        });

        if (response.ok) {
            authorInput.value = '';
            textInput.value = '';
            showMessage("Comment posted successfully!");
            loadComments(); // Refresh list
        } else {
            showMessage("Failed to post comment.", 'error');
        }
    } catch (e) {
        console.error("Error saving comment:", e);
        showMessage("Server error. Please try again.", 'error');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComments();
    commentForm.addEventListener('submit', handleCommentSubmit);
});