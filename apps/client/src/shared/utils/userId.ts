import { v4 } from 'uuid';

export const getUserId = () => {
  const userId = localStorage.getItem('userId') || v4();
  localStorage.setItem('userId', userId);
  return userId;
};
