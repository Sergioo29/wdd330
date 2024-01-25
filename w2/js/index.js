/*

Pull existing state of the checkbox from LS

Update checkbox

If the checkbox is checked, show the input porm else hide it

Pull existing expensees from localstorae

Renger expenses

When enter button clicked
  Get content
  Update LS content
  Reset
  Re-REnder

  */

  import { saveExpenses } from "./expense";

  let checkState = localStorage.getItem("checkState");
  const inputCheckbox = document.querySelector("#allowInput");
  inputCheckbox.checked = checkState === "true" ? true : false;

  console.log(checkState);


function toggleInput() {
     if (inputCheckbox.checked) {
        document.querySelector("#input").classList.remove("hide");
     } else {
        document.querySelector("#input").classList.add("hide");
     };
     localStorage.setItem('checkState', inputCheckbox.checked? "true": "false")
};

function saveHandler(e) {
   const description = document.querySelector('#description');
   const amount = document.querySelector('#amount');
   const newExpense = {
      description: description.value,
      amount: amount.value
   };

   saveExpenses(newExpense);
}

toggleInput();

inputCheckbox.addEventListener('change', toggleInput);

document.querySelector("#submit").addEventListener("click", saveHandler);


