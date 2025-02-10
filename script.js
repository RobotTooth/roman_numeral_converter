const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

function convertToRoman(num) {
  const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
          result += romanNumerals[i].numeral;
          num -= romanNumerals[i].value;
      }
  }

  return result;
}


const handleInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputInt)) {
        result.innerText = "Please enter a valid number";
        return;
    } else if (inputInt < 0) {
        result.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (inputInt > 3999) {
      result.innerText = "Please enter a number less than or equal to 3999";
    } else {
      result.innerText = convertToRoman(inputInt);
    }
};

convertBtn.addEventListener("click", handleInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});