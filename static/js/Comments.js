let STORAGE_KEY = 'TheComments';
let commentForm = document.getElementById('comment-form');
let commentsList = document.getElementById('comments-list');
let noCommentsMessage = document.getElementById('no-comments-message');
let messageBox = document.getElementById('message-box');

/**
 * Message box.
 * @param {string} message - message.
 * @param {string} type - 'success' hoac 'error'.
 */
function showMessage(message, type = 'success') {
    messageBox.textContent = message;
    messageBox.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
    messageBox.style.display = 'block';
    
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

/**
 * @returns {Array<Object>} - Array comment.
 */
function loadComments() {
    try {
        let storedComments = localStorage.getItem(STORAGE_KEY);
        return storedComments ? JSON.parse(storedComments) : [];
    } catch (e) {
        console.error("Error loading comments from localStorage:", e);
        return [];
    }
}

/**
 * @param {Array<Object>} comments - Array comment.
 */
function saveComments(comments) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch (e) {
        console.error("Error saving comments to localStorage:", e);
        showMessage("Could not save comment. Local storage is full or unavailable.", 'error');
    }
}

/**
 * @param {Array<Object>} comments - Array comment.
 */
function renderComments(comments) {
    // Xoa comments
    commentsList.innerHTML = ''; 

    if (comments.length === 0) {
        commentsList.appendChild(noCommentsMessage);
        noCommentsMessage.style.display = 'block';
        return;
    }

    noCommentsMessage.style.display = 'none';

    // Thu tu tu moi den cu
    let sortedComments = [...comments].sort((a, b) => b.timestamp - a.timestamp);

    sortedComments.forEach(comment => {
        let commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        
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
 * Form Submit.
 * @param {Event} event - Su kien form Submit.
 */
function handleCommentSubmit(event) {
    event.preventDefault();

    let authorInput = document.getElementById('author');
    let textInput = document.getElementById('comment-text');

    let newComment = {
        author: authorInput.value.trim() || 'Anonymous',
        text: textInput.value.trim(),
        timestamp: Date.now()
    };

    if (newComment.text.length === 0) {
        showMessage("Comment cannot be empty.", 'error');
        return;
    }

    let comments = loadComments();
    comments.push(newComment);
    
    saveComments(comments);
    renderComments(comments);

    // Xoa comment da dua len
    authorInput.value = '';
    textInput.value = '';
    
    showMessage("Comment posted successfully!");
}

// DOM
document.addEventListener('DOMContentLoaded', () => {
    // Tai comment da luu
    let initialComments = loadComments();
    renderComments(initialComments);

    // Submit handler tren form
    commentForm.addEventListener('submit', handleCommentSubmit);
});