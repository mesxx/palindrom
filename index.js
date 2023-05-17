function palindrom(value) {
  if (value.toLowerCase() === value) {
    const palindrom = value.split(" ");
    return { palindrom: palindrom.length, firstPalindrom: palindrom[0] };
  } else {
    return "your value isnt lower case";
  }
}

console.log(palindrom("kasur ini rusak"));
