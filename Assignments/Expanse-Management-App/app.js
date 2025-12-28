const amountInput = document.querySelector("#input");
const commentInput = document.querySelector("#input2");
const categorySelect = document.querySelector("#category");
const ol = document.querySelector("#ol");
const totalEl = document.querySelector("#total");

const allExpenses = [];

function getCurrentDate() {
  const date = new Date();
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
}

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < allExpenses.length; i++) {
    total += Number(allExpenses[i].amount);
  }
  totalEl.innerText = total;
}

function renderExpense() {
  ol.innerHTML = "";

  for (let i = 0; i < allExpenses.length; i++) {
    const expense = allExpenses[i];

    ol.innerHTML += `
      <li>
        <strong>${expense.amount}</strong> - ${expense.category}
        (${expense.comment}) - ${expense.date}
        <br>
        <button onclick="editExpense(${i})">Edit</button>
        <button onclick="deleteExpense(${i})">Delete</button>
      </li>
    `;
  }

  calculateTotal();
}

function addTodo() {
  if (
    amountInput.value === "" ||
    categorySelect.value === "" ||
    commentInput.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  const expenseObj = {
    amount: amountInput.value,
    category: categorySelect.value,
    comment: commentInput.value,
    date: getCurrentDate(),
  };

  allExpenses.push(expenseObj);
  renderExpense();

  amountInput.value = "";
  commentInput.value = "";
  categorySelect.value = "";
}

function deleteExpense(index) {
  allExpenses.splice(index, 1);
  renderExpense();
}

function editExpense(index) {
  const newAmount = prompt("Enter new amount", allExpenses[index].amount);
  const newComment = prompt("Enter new comment", allExpenses[index].comment);

  if (newAmount !== null && newComment !== null) {
    allExpenses[index].amount = newAmount;
    allExpenses[index].comment = newComment;
    renderExpense();
  }
}
