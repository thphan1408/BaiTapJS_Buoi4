// Bài 1: Nhập 3 số nguyên, sắp xếp 3 số theo thứ tự tăng dần
// Mô hình 3 khối:

// Bước 1: Input
/* 
    inputNumber1, inputNumber2, inputNumber3
*/
//Bước 2: Xử lý
document.getElementById("sapXep").onclick = function () {
  var number1 = +document.getElementById("inputNumber1").value;
  var number2 = +document.getElementById("inputNumber2").value;
  var number3 = +document.getElementById("inputNumber3").value;

  var kq = 0;

  if (number1 > number2) {
    kq = number1;
    number1 = number2;
    number2 = kq;
  }
  if (number1 > number3) {
    kq = number1;
    number1 = number3;
    number3 = kq;
  }
  if (number2 > number3) {
    kq = number2;
    number2 = number3;
    number3 = kq;
  }

  // console.log(number1, number2, number3)
  document.querySelector(
    ".result__sapXep"
  ).innerHTML = `Kết quả đã được sắp xếp: ${number1}, ${number2}, ${number3}`;
};

// Bài 2: Viết chương trình "chào hỏi" các thành viên trong gia đình: Bố(B), Mẹ (M), anh Trai (A), Em gái (E);
// Mô hình 3 khối:
// Bước 1: Input
/*
    inputMemberName
*/
// Bước 2: Xử lý
document.getElementById("hello").onclick = function () {
  var memberName = document.getElementById("inputMemberName").value;

  var kq = "";

  switch (memberName) {
    case "b":
      kq = "Chào Bố";
      break;
    case "m":
      kq = "Chào Mẹ";
      break;
    case "a":
      kq = "Chào Anh Trai";
      break;
    case "e":
      kq = "Chào Em Gái";
      break;
    default:
      kq = "Không có trong gia đình";
      break;
  }

  document.querySelector(".result__Hello").innerHTML = kq;
};

// Bài 3: Cho 3 số nguyên. Viết chương trình xuất ra bao nhiêu số lẻ và bao nhiêu số chẵn
// Mô hình 3 khối:
// Bước 1: Input
/*
    inputNumber1, inputNumber2, inputNumber3
*/
// Bước 2: Xử lý
document.getElementById("chanLe").onclick = function () {
  var inputNumber1 = +document.getElementById("Number1").value;
  var inputNumber2 = +document.getElementById("Number2").value;
  var inputNumber3 = +document.getElementById("Number3").value;

  var soChan = 0;
  var soLe = 0;

  if (inputNumber1 % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }

  if (inputNumber2 % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }

  if (inputNumber3 % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }

  document.querySelector(
    ".result__chanLe"
  ).innerHTML = `Số chẵn: ${soChan}, Số lẻ: ${soLe}`;
};

// Bài 4: Nhập 3 cạnh tam giác, cho biết là tam giác gì?
// Mô hình 3 khối:
// Bước 1: Input
/*
    inputCanhA, inputCanhB, inputCanhC
*/

// Bước 2: Xử lý
document.getElementById("triangle").onclick = function () {
  var inputCanhA = +document.getElementById("inputEdgeA").value;
  var inputCanhB = +document.getElementById("inputEdgeB").value;
  var inputCanhC = +document.getElementById("inputEdgeC").value;

  var kq = "";

  if (inputCanhA == inputCanhB && inputCanhB == inputCanhC) {
    kq = "Tam giác đều";
  } else if (
    inputCanhA == inputCanhB ||
    inputCanhB == inputCanhC ||
    inputCanhA == inputCanhC
  ) {
    kq = "Tam giác cân";
  } else if (
    inputCanhA * inputCanhA ==
      inputCanhB * inputCanhB + inputCanhC * inputCanhC ||
    inputCanhB * inputCanhB ==
      inputCanhA * inputCanhA + inputCanhC * inputCanhC ||
    inputCanhC * inputCanhC == inputCanhA * inputCanhA + inputCanhB * inputCanhB
  ) {
    kq = "Tam giác vuông";
  } else {
    kq = "Tam giác thường";
  }
  document.querySelector(".result__Triangle").innerHTML = kq;
};
