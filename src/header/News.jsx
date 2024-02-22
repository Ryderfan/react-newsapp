import '../assests/MyApp.css'
import Not_available from '../assests/Image_not_available.png'
import { Link } from 'react-router-dom'
export default function News (props) {
  return (
    <div className='news'>
      <div className='news-img'>
        {props.article.urlToImage !== null ? (
          <img src={props.article.urlToImage} />
        ) : (
          <img src={Not_available} />
        )}
      </div>
      <h4>{props.article.title}</h4>
      <p>
        {props.article.description?.substring(0, 100).concat('...')}
        <Link to={props.article.url} target='_blank' rel='noreferrer'>
          Read more
        </Link>
      </p>
      <div className='news-source'>
        <p>
          Author <br /> {props.article.author}
        </p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  )
}
