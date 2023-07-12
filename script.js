const aggiungiTask = (submitEvent) => {
  submitEvent.preventDefault();
  const input = document.getElementById("new_task");
  console.log(input.value);

  const ul_lista = document.getElementById("ul_task_list");

  ul_lista.innerHTML += `<li>
  <span onclick="line_through(event)">
  ${input.value}
  </span>
  <button class="del_btn" onclick="cancella(event)">Cancella task</button>
  </li>`;
};

const line_through = (eventClick) => {
  eventClick.target.classList.toggle("task");
};

const cancella = (ilclick) => {
  ilclick.target.parentElement.remove();
};
