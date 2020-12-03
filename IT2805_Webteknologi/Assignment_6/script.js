function calculateTax(){
    const income = document.getElementById("inc").value;
    const wealth = document.getElementById("wlt").value;
    document.getElementById("tx").value = (0.35 * income) + (0.25 * wealth);
}
