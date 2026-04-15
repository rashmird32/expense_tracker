let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let total = 0;

function renderExpenses(){
// display saved data on page load
const list = document.getElementById("expenseList");
list.innerHTML = ""; //clears list
total = 0;

if (expenses.length === 0) {
        list.innerHTML = `<p class="empty-msg">No expenses yet 🚀</p>`;
        document.getElementById("total").textContent = 0;
        return;
    }

expenses.forEach((expense,index) => {
    const li = document.createElement("li");
    li.innerHTML  = `<div>₹${expense.amount} - ${expense.category}</div>`;

    //add to total
    total += expense.amount;

    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(){
        expenses.splice(index,1);
        localStorage.setItem("expenses",JSON.stringify(expenses));
        renderExpenses();
    })
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

document.getElementById("total").textContent = total;
}



// Add expense
document.getElementById("addBtn").addEventListener("click", function (event){
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (!amount || !category) {
        alert("Please fill all fields");
        return;
    }

    const newExpense = {
        amount: Number(amount),
        category: category
    };

    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    renderExpenses();
     
    
    //clear inputs
    document.getElementById("amount").value = "";
    document.getElementById("category").value;

    console.log(amount + " "+ category);

})

// run on page load
renderExpenses();