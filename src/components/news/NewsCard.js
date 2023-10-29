import React,{useState,useEffect} from 'react'
import styles from './NewsCard.module.css'

export const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const apiKey = 'b5ee863cea184de2b3890cb84e501c47';
  const city = 'us'

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${city}&apiKey=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsData(data.articles);
        // console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching weather data: ', error);
      });
  },[]);

  // Set the selected article based on an index (0 for the first article)
  useEffect(() => {
    if (newsData.length > 0) {
      setSelectedArticle(newsData[4]); // Display the first article
    }
  }, [newsData]);

    let[date, setDate] = useState('')
    let[time, setTime] = useState('')
    useEffect(()=>{
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = currentDate.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
        setDate(formattedDate)
        setTime(formattedTime)
    },[])

  return (
    <div className={styles.newsCard}>
    {/* {newsData ? (
        <ul>
          {newsData.map((article, index) => (
            <li key={index}>
              <img className={styles.newsCardImg} src={article.urlToImage}></img>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>Author: {article.author}</p>
              <p>Published at: {article.publishedAt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}
      {selectedArticle ? (
        <div className={styles.article}>
          <img className={styles.newsCardImg} src={selectedArticle.urlToImage} alt='newsImage'></img>
          <p className={styles.newsCardTitle}>{selectedArticle.title}<br></br>{date} | {time}</p>
        <div className={styles.scrollableContent}>
          <p style={{fontSize:'20px',color:'gray'}}>{selectedArticle.description}</p>
          <p>{selectedArticle.content}</p>
          <p>Author: {selectedArticle.author}</p>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
