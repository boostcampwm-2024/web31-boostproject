import { v4 } from 'uuid';

export const getUserId = () => {
  const userId = localStorage.getItem('userId');
  return userId;
};

export const createUserId = () => {
  const newUserId = v4();
  localStorage.setItem('userId', newUserId);
  return newUserId;
};
