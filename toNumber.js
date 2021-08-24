exports.convert = (strConvert) => {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let num = 0

  if (strConvert.includes()) { if (strConvert.includes('CM')) num -= 200 }
  if (strConvert.includes('CD')) num -= 200
  if (strConvert.includes('XC')) num -= 20
  if (strConvert.includes('XL')) num -= 20
  if (strConvert.includes('IX')) num -= 2
  if (strConvert.includes('IV')) num -= 2

  for (let i = 0; i < strConvert.length; i++) {
    num += roman[strConvert[i]]
  }

  return num
}
