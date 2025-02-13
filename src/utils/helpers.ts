export const validateEmailPattern = (email: string) =>  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

export const upperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getSubString = (string: string) => {
  const substr = string.substring(string.length, string.length - 3);
  return substr;
};
