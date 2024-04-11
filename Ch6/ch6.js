const calculateBtn = document.getElementById('calculateBtn'); /* it assigns the variable to calculate when the button is pressed. */
calculateBtn.addEventListener('click', () => { /*it listens for the button to click to start calculating. */
    const cost = parseFloat(document.getElementById('cost').value);/* this converts the value to a float and assigns it to the cost. */
    const liters = parseFloat(document.getElementById('liters').value); /*his converts the value to a float and assigns it to the liters. */
    const totalCost = cost * liters; /*this calculates the cost and liters by multiplying it to make up the total cost. */

    document.getElementById('result').innerText = `Total Cost: $${totalCost.toFixed(2)}`; /*this for displaying the calculated total amount of cost. */
});
