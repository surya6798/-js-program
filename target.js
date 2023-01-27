function findIndexOfSumPair(lst, trgt) {
  const len = lst.length;
  for (let i = 0; i < len; i++) {
    const found = lst.findIndex(x => trgt - lst[i] === x);
    if (found !== i && found !== -1) {
      return [found, i];
    }
  }
}

console.log(findIndexOfSumPair(lst, target));
