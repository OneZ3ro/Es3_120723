const aggiungiTask = (submitEvent) => {
  submitEvent.preventDefault();
  const form = submitEvent.target;
  const new_task_list = form.elements;
  const lista_task = {};

  for (let i = 0; i < new_task_list.length; i++) {
    if (new_task_list[i].tagName !== "BUTTON") {
      lista_task[new_task_list[i].id] = new_task_list[i].value;
    }
  }
  console.log(lista_task);

  const ul_lista = document.getElementById("ul_task_list");
  const li = document.createElement("li");
  const delete_btn = document.createElement("button");

  li.innerText = `${lista_task.new_task}`;
  li.classList.add("task");
  ul_lista.appendChild(li);

  delete_btn.innerText = "elimina task";
  delete_btn.className = "del_btn";
  li.appendChild(delete_btn);
};
