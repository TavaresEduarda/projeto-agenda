let posts = JSON.parse(localStorage.getItem("posts")) || [];
const dateInput = document.getElementById("date");
dateInput.min = new Date().toISOString().split("T")[0];

function savePost() {
      localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
    const board = document.getElementById("board");
    board.innerHTML = "";

     posts.forEach((post, index) => {
    const col = document.createElement("div");
    col.className = "col-md-3";

    col.innerHTML = `
      <div class="card-post h-100">
        <small>${post.date} - ${post.time}</small>
        <p class="mt-2">${post.description}</p>
        <button class="btn btn-delete btn-sm text-light mt-2" onclick="deletePost(${index})">
          Excluir
        </button>
      </div>
    `;

    board.appendChild(col);
  });
}


function addPost() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const description = document.getElementById("description").value;

  if (!date || !time || !description) {
    alert("Preencha todos os campos!");
    return;
  }

    const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(date);

  if (selectedDate < today) {
    alert("Não é possível adicionar eventos em datas passadas.");
    return;
  } if (selectedDate > new Date("2030-12-31")) {
    alert("Não é possível adicionar eventos em datas futuras muito longe.");
    return;
  }

  posts.push({ date, time, description });
  savePost();
  renderPosts();

  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("description").value = "";
}

function deletePost(index) {
  posts.splice(index, 1);
  savePost();
  renderPosts();
}

renderPosts();

