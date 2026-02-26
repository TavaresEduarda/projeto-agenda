let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePost() {
      localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
    const board = document.getElementById("board");
    board.innerHTML = "";
}