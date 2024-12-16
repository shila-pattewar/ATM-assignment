let balance = 1000;

function checkBalance(){
    document.getElementById("balanceInfo").innerText = `Your Current Balance is: $${balance}`;
}


function showWithdrawForm(){
    document.getElementById("withdrawForm").classList.remove("hidden");
    document.getElementById("depositForm").classList.add("hidden");
    document.getElementById("withdrawInfo").innerText ="";
}

function withdrawCash(){
    let amount = parseFloat(document.getElementById("withdrawAmount").value);
    if (amount <= 0 )
        {
            alert("Please Enter a valid amount to withdraw.");
        }
        else if ( amount > balance)
        {
            alert("Insufficient Amount");
        }
        else if (withdrawAmount.value === ""){
            
            alert ("Input box is empty enter valid amount");
        }
        else
        {
            balance = balance - amount;
            document.getElementById("withdrawInfo").innerText = `You have sucessfully withdrawn $${amount} \n Your New Balance is: $${balance} `;
            //document.getElementById("withdrawAmount").value = "";
        }
    }
    
function showDepositForm(){
    document.getElementById("depositForm").classList.remove("hidden");
    document.getElementById("withdrawForm").classList.add("hidden");
    document.getElementById("depositInfo").value = "";
}

function depositCash(){
    let amount = parseFloat(document.getElementById("depositAmount").value);
    if (amount <= 0)
    {
        alert("Please Enter a valid amount to Deposit.")
    }
    else if (depositAmount.value === "")
    {
            
        alert ("Input box is empty enter valid amount");
    }
    else
    {
        balance = balance + amount;
        document.getElementById("depositInfo").innerText = `You have sucessfully deposit $${amount} \n Your New Balance is: $${balance} `;
        document.getElementById("depositAmount").value = "";
    }
    }

