const b = document.querySelector("button");
const input = document.querySelector("#favchap");
const ul = document.querySelector("#list");
 
// Create a click event listener for the Add Chapter button
// using addEventListener and an anonymous function or arrow function.
 
b.addEventListener("click", () => {
    if (input != "")
    {
        // create a li element
        const li = document.createElement("li");
        // create a delete button
        const del = document.createElement("button");
        // del.setAttribute("type", "submit");
       
        // populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value;
        // populate the button textContent with a ❌
        del.textContent = "❌";
        // append the li element with the delete button
        li.appendChild(del);
        // append the li element to the unordered list in your HTML
        ul.appendChild(li);
        // change the input value to nothing or the empty string to clean up the interface for the user
        input.value = "";
        // add an event listener to the delete button that removes the li element when clicked
        input.focus();
        del.addEventListener("click", () => {
            ul.removeChild(li);
            // send the focus to the input element
            input.focus();
        });
    }
    else {
        input.focus();
        
    }
});