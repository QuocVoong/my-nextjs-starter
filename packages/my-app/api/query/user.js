import { query }     from 'utils/axios'
import { PAGE_SIZE } from '../constanst'

export const findUsers = async ({ page }) => {
  const { data } = await query({ data: {
      queryName: 'findUsers',
      params: {
        limit: PAGE_SIZE,
        skip:   Math.max((+page || 0) - 1, 0) * PAGE_SIZE,
        select: {
          username: 1,
          email: 1,
          first_name: 1,
          last_name: 1,
          address: 1,
          is_active: 1,
        },
        sort: {
          username: 1
        }
      }
    }});
  return data;
};

export const findUser = async ({ id }) => {
  const { data } = await query({ data: {
      queryName: 'findUser',
      params: {
        find: {
          _id: id,
        },
        select: {
          username: 1,
          email: 1,
          first_name: 1,
          last_name: 1,
          address: 1,
          is_active: 1
        },
      }
    }});
  return data;
};

