export const getUserId = () => {
  const userId = localStorage.getItem('userId') || crypto.randomUUID();
  localStorage.setItem('userId', userId);
  return userId;
};
