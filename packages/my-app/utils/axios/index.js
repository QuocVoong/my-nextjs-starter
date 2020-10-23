import React, { memo, useEffect, useState } from 'react';
import axios                                from 'axios';
import useAxios                             from 'axios-hooks';
import { isFunction, get }                  from 'lodash';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const COMMAND      = 'command';
const QUERY        = 'query';

axios.interceptors.request.use(request => {
  return request;
}, error => Promise.reject(error));

axios.interceptors.response.use(response => {
  return response;
}, error => Promise.reject(error));

export const command = ({
                          data,
                          headers = {
                            'Cache-Control': 'no-cache',
                            'Content-Type':  'application/json',
                          }
                        }) => {
  return axios({
    method: 'post',
    url:    `${API_ENDPOINT}/${COMMAND}`,
    data,
    headers,
  });
};

export const query = ({
                        data,
                        headers = {
                          'Cache-Control': 'no-cache',
                          'Content-Type':  'application/json',
                        },
                        cancelToken
                      }) => {
  return axios({
    method: 'post',
    url:    `${API_ENDPOINT}/${QUERY}`,
    data,
    headers,
    cancelToken
  });
};

export const useQuery = ({
                           data,
                           headers = {
                             'Cache-Control': 'no-cache',
                             'Content-Type':  'application/json',
                           },
                         }) => {
  return useAxios({
    method: 'post',
    url:    `${API_ENDPOINT}/${QUERY}`,
    data,
    headers,
  }, {
    useCache: false
  });
};

export const Query = memo(({
                             data,
                             headers = {
                               'Cache-Control': 'no-cache',
                               'Content-Type':  'application/json',
                             },
                             children,
                           }) => {
  const cancelSourceRef   = React.useRef();
  const [state, setState] = useState({
    isLoading: false,
    error:     null,
    data:      null,
  });

  useEffect(() => {
    cancelSourceRef.current = axios.CancelToken.source();

    (async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true }));
        const resp = await query({
          data,
          headers,
          cancelToken: cancelSourceRef.current.token,
        });
        setState(prev => ({ ...prev, data: get(resp, 'data.result.items'), isLoading: false }));
      } catch (error) {
        const err = get(error, 'message');
        setState(prev => ({ ...prev, error: !err ? null : error, isLoading: false }));
      }
    })();

    return () => cancelSourceRef.current.cancel();
  }, [data]);

  if (!isFunction(children)) {
    throw new Error('children must be a function');
  }

  return children({
    isLoading: state.isLoading,
    data:      state.data,
    error:     !get(state.error, 'message') ? state.error : null,
  });
});

export default axios;
