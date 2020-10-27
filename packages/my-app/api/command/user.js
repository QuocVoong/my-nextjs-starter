import { command } from 'utils/axios';

export const createOrUpdateUser = async ({ formData }) => {
  const { data } = await command({ data: formData });
  return data;
};