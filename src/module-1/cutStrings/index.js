export const cutStrings = (arr = []) => {
    if (arr.length === 0) {
      return [];
    }

    const shortestStr = [...arr].sort((a, b) => a.length - b.length)[0].length;
    const result = [];
  
    for (const str of arr) {
      result.push(str.slice(0, shortestStr));
    }
  
    return result;
};
