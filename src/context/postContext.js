import React from 'react';
import PropTypes from 'prop-types';
import {useBestPost} from '../hooks/useBestPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [posts] = useBestPost();
  console.log('posts', posts);
  return (
    <postsContext.Provider value={{posts}}>{children}</postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
