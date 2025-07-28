function toggleCalculator() {
  const widget = document.getElementById("lotCalcWidget");
  widget.style.display = widget.style.display === "block" ? "none" : "block";
}

// Load saved values on page load
window.onload = () => {
  document.getElementById("accountSize").value = localStorage.getItem("accountSize") || "";
  document.getElementById("riskPercent").value = localStorage.getItem("riskPercent") || "";
  document.getElementById("slPips").value = localStorage.getItem("slPips") || "";
};

function calculateLot() {
  const account = parseFloat(document.getElementById("accountSize").value);
  const risk = parseFloat(document.getElementById("riskPercent").value);
  const sl = parseFloat(document.getElementById("slPips").value);

  if (isNaN(account) || isNaN(risk) || isNaN(sl) || account <= 0 || sl <= 0 || risk <= 0) {
    document.getElementById("result").innerText = "Please fill all fields correctly.";
    return;
  }

  // Save values
  localStorage.setItem("accountSize", account);
  localStorage.setItem("riskPercent", risk);
  localStorage.setItem("slPips", sl);

  const riskAmount = (account * risk) / 100;
  const lotSize = riskAmount / (sl * 10); // assuming $1/pip for standard lot
  document.getElementById("result").innerText = `Lot Size: ${lotSize.toFixed(2)}`;
}
