function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
        document.getElementById("display").style.color = "green"; 
    } catch {
        document.getElementById("display").value = "Error";
        document.getElementById("display").style.color = "red"; 
    }
}