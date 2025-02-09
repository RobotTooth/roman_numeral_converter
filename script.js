const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const handleInput = () => {
    const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    result.innerText = "Please provide a decimal number greater than or equal to 0";
    return;
  }
};

convertBtn.addEventListener("click", handleInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});