export const weirdString = (str = "") => {
    const result = [];

    for(const subStr of str.split(' ')) {
      result.push((subStr.slice(0, subStr.length - 1)).toUpperCase() + subStr.slice(subStr.length - 1));
    }
  
    return result.join(' ');
};
