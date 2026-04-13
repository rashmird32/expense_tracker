let total = 0;
document.getElementById("addBtn").addEventListener("click", function (event){
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (!amount || !category) {
        alert("Please fill all fields");
        return;
    }

    let amountValue = Number(amount);
    total += amountValue;

    document.getElementById("total").textContent = total;

    //creates list element
    const li = document.createElement("li");
    li.textContent = `$${amount} - ${category}`;

    //add delete button
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "❌";

    //delete logic
    deletebtn.addEventListener("click",function(){
        li.remove();

        total -= amountValue;
        document.getElementById("total").textContent = total;
    })

    li.appendChild(deletebtn);
    
    //appends to list
    document.getElementById("expenseList").appendChild(li);

    //clear inputs
    document.getElementById("amount").value = "";
    document.getElementById("category").value;

    console.log(amount + " "+ category);

})