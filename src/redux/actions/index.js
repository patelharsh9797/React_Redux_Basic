export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num || 1,
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num || 1,
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};
