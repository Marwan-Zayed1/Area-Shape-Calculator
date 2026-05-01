let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let shapeArea = document.getElementById("shapeArea").value;
let result = document.getElementById("result");
let image = document.getElementById("image");

function changePlaceholder() {
  let shapeArea = document.getElementById("shapeArea").value;
  if (shapeArea === "choose") {
    image.src = "";
    num1.placeholder = "num1";
    num2.placeholder = "num2";
  } else if (shapeArea === "rectangle") {
    image.src = "../img/المستطيل.jpg";
    num1.placeholder = "الطول";
    num2.placeholder = "العرض";
  } else if (shapeArea === "square") {
    image.src = "../img/OIP.webp";
    num1.placeholder = "طول الضلع";
    num2.style.display = "none";
  } else if (shapeArea === "triangle") {
    image.src = "../img/OIP (1).webp";
    num1.placeholder = "القاعدة";
    num2.placeholder = "الارتفاع";
    num2.style.display = "inline";
  } else if (shapeArea === "circle") {
    image.src = "../img/istockphoto-1354316616-612x612.jpg";
    num1.placeholder = "نصف القطر";
    num2.style.display = "none";
  } else if (shapeArea === "Trapezoid") {
    image.src = "../img/مساحة-شبه-المنحرف.jpg";
    num1.placeholder = "مجموع القاعدتين";
    num2.placeholder = "الارتفاع";
  } else if (shapeArea === "Rhombus") {
    image.src = "../img/almisahat-madrassatii_002.jpg";
    num1.placeholder = "القطر الاول";
    num2.placeholder = "القطر الثاني";
    num2.style.display = "inline";
  } else if (shapeArea === "Parallelogram") {
    image.src = "../img/OIP.jfif";
    num1.placeholder = "القاعده";
    num2.placeholder = "الارتفاع";
  }
}

function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let shapeArea = document.getElementById("shapeArea").value;

  if (isNaN(num1) || isNaN(num2)) {
    result.value = "Please enter number";
  } else if (shapeArea === "choose") {
    result.value = "please choose a shape";
  } else if (shapeArea !== "choose") {
    switch (shapeArea) {
      case "rectangle":
        result.value = num1 * num2;
        break;
      case "square":
        result.value = num1 * num1;
        break;
      case "triangle":
        result.value = 0.5 * num1 * num2;
        break;
      case "circle":
        result.value = 3.14 * num1 * num1;
        break;
      case "Trapezoid":
        result.value = 0.5 * num1 * num2;
        break;
      case "Rhombus":
        result.value = (num1 * num2) / 2;
        break;
      case "Parallelogram":
        result.value = num1 * num2;
        break;

      default:
        break;
    }
  }
}
