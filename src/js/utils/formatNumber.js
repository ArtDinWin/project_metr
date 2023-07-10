export default function formatNumber(num, type = "exp") {
  let newInt = "";
  let numSplit;
  let int;
  if (num === 0) {
    return (newInt = "0");
  }
  // + или - в зависимости от type
  // 87.454545 => 87.45
  // 10,100.00

  // Убираем знак минус
  num = Math.abs(num);

  // обрезаем до 2 знаков после точки
  num = num.toFixed(2);
  numSplit = num.split("."); // 45.67 => [45, 67]
  int = numSplit[0]; // десятич часть

  let dec = numSplit[1]; // целая часть

  if (dec === "00") {
    dec = "";
  }

  if (int.length > 3) {
    for (let i = 0; i < int.length / 3; i++) {
      newInt =
        "," +
        int.substring(int.length - 3 * (i + 1), int.length - 3 * i) +
        newInt;
    }
    if (newInt[0] === ",") {
      newInt = newInt.substring(1);
    }
    if (dec !== "") {
      newInt += "." + dec;
    }
  } else {
    newInt = num;
  }

  return newInt;
}
