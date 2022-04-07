import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/actions';
import NewsListContainer from '../components/NewsList/NewsList';

function Auxiliary(url) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.receivedNews);

  useEffect(() => {
    if (news.receivedNews[`${url}`].length === 0) {
      dispatch(fetchNews(url));
    }
  }, [dispatch]);

  return <NewsListContainer news={news.receivedNews[`${url}`]} />;
}

export default Auxiliary;
