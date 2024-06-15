function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;

  if (numbers.startsWith('//')){
    const delimiterIndex = numbers.indexOf('\n');
    delimiter = new RegExp(`[${numbers.charAt(2)}\n,]`);
    numbers = numbers.substring(delimiterIndex + 1);
  }
  const nums = numbers.split(delimiter).map(Number);

  const negativeNumbers = nums.filter(num => num < 0);
  
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
