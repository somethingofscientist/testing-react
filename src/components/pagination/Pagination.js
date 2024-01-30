import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.css';
import axios from 'axios';

const Pagination = () => {
  const api = 'https://jsonplaceholder.typicode.com/posts';
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setMyData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(myData.length / postsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {currentPosts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
