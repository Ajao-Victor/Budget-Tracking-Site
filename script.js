let db1 = []

function display() {
  let db2 = JSON.parse(localStorage.getItem("set"))
if (db2 !== null) {
  let prices = ""
  db2.map(each => {
      let scrn = ""
      scrn += 
      `<div class="card" style="width: 250px;border:3px solid white;background-color: mediumvioletred;color: white;border-radius:15px;margin-left:10px">
      <img src="./cardPic.webp" class="card-img-top" alt="..." style="width:100%;">
      <div class="card-body">
        <h5 class="card-title">Item Name : ${each.itemName}</h5>
        <p class="card-text">Price : #${each.itemPrice}</p>
        <p class="card-text">Quantity : ${each.itemQuantity}</p>
      </div>
    </div>`
    // <a href="#" class="btn btn-primary">Delete Item</a>
      document.getElementById("disp").innerHTML += scrn
      })
}
}
function add() {
  if (price.value != "" && quantity.value != "" && name2.value != "") {
    let eachItem = {
      itemName : document.getElementById("name2").value ,
      itemPrice : document.getElementById("price").value ,
      itemQuantity : document.getElementById("quantity").value ,
      finalPrice : document.getElementById("price").value *  document.getElementById("quantity").value ,
  }
  db1.push(eachItem)
  localStorage.setItem("set", JSON.stringify(db1))
  let db2 = JSON.parse(localStorage.getItem("set"))  
  let b = Number(JSON.parse(localStorage.getItem("setAmountDisplay")))
  if (!(b < 0)) {
    error1.innerHTML= ""
    amountBreak()
  }else{
    error1.innerHTML = "budget exceeded"
  }
  }
    price.value = ""
    quantity.value = ""
    name2.value = ""
  
}
let b = Number(JSON.parse(localStorage.getItem("setAmountDisplay")))
if (!(b < 0)) {
  display()
}
else{
  error1.innerHTML = "budget exceeded"
}
// display()
function balance() {
  if (document.getElementById("balanceInput").value !== "") {
    let amtInp = document.getElementById("balanceInput").value
  let budgetInput = {
    input : ""
  }
  budgetInput.input = Number(amtInp)

  localStorage.setItem("budgetAmount", JSON.stringify(budgetInput))
  let bal = JSON.parse(localStorage.getItem("budgetAmount"))
  this.bal2 = bal.input
  document.getElementById("budget").innerHTML = bal2
  document.getElementById("balanceInput").value = ""
  let b = Number(JSON.parse(localStorage.getItem("setAmountDisplay")))
  if (!(b < 0)) {
    error1.innerHTML= ""
    amountBreak()
  }else{
    error1.innerHTML= "budget exceeded"
  }
  }
}

function check() {
    let db2 = JSON.parse(localStorage.getItem("set"))
    window.location.assign("itemDisplay.html")
    display()
}
function amountBreak() {
  let bal = JSON.parse(localStorage.getItem("budgetAmount"))
  let db2 = JSON.parse(localStorage.getItem("set"))
  if (db2 !== null) {
    let prices = ""
    db2.map(each => {
        prices += `+${each.finalPrice}`
        this.finalPrice2 = Number(eval(prices))
        })
        let budgetInput = this.budgetInput
        let bal3 = bal.input
// let amt1 = Number(budgetInput.input)
let amt1 = Number(bal3)
let amt2 = Number(this.finalPrice2)
this.amtDisplay = amt1 - amt2
let amtDisplay2 = amtDisplay
amtDisplay2 -= amt2
localStorage.setItem("setAmountDisplay",JSON.stringify(amtDisplay))
let b = Number(JSON.parse(localStorage.getItem("setAmountDisplay")))
document.getElementById("amount").innerHTML = b
// console.log(this.finalPrice2);
// console.log(amt1);
// console.log(amt2);
// console.log(amtDisplay);
// console.log(amtDisplay2);

}
}
const goBack = () => {
  window.location.href = "index.html"
  error1.innerHTML= ""
}