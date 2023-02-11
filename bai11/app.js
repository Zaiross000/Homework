const user = document.querySelector("#user-code");
const password = document.querySelector("#password");
const isTrue = false;
const form = document.querySelector("form");
const tbody = document.querySelector("tbody ");
console.log(tbody);

form.onsubmit = (e) => {
  e.preventDefault();
  const userValue = user.value;
  const passwordValue = password.value;
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.setAttribute("colspan", 2);

  if (userValue === "tungvjppro" && passwordValue === "tungdeptrai") {
    tr.appendChild(td);
    td.innerText = "Đăng nhập thành công";
    tbody.appendChild(tr);
  } else {
    tr.appendChild(td);
    td.innerText = "Đăng nhập thất bại";
    tbody.appendChild(tr);
  }
};
