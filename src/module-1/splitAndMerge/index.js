export const splitAndMerge = (str = "", separator = "") => {
    const result = [];

    for(const subStr of str.split(' ')) {
      result.push(subStr.split('').join(separator));
    }
  
    return result.join(' ');
};
