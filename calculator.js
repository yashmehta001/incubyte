function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;

  if (numbers.startsWith('//')){
    const delimiterIndex = numbers.indexOf('\n');
    delimiter = new RegExp(`[${numbers.charAt(2)}\n,]`);
    numbers = numbers.substring(delimiterIndex + 1);
  }
  const nums = numbers.split(delimiter).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
