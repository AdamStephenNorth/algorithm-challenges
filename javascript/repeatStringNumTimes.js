function repeatStringNumTimes(str, num) {
  if (num < 1) return "";
  return Array(num).fill(str).join("");
}

repeatStringNumTimes("abc", 3);
