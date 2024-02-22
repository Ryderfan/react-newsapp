import { useState, useEffect } from 'react'
import '../assests/MyApp.css'
import News from './News'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const App = () => {
  let [articles, setArticles] = useState([])
  let [category, setCategory] = useState('News')
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=f8eb4f8042d2470ba38a3d756336dc48`
    )
      .then(response => response.json())
      .then(news => {
        setArticles(news.articles)

      })
      .catch(err => {
        console.log(err)


      })
  }, [category, date])

  return (
    <div className='app mt-5'>
      <header className='p-3'>
        <h2 className='text-capitalize d-flex '>LOGIC</h2>
        <div className='d-flex justify-content-end'>
          <div className='date me-3'>
            <DatePicker
              selected={date}
              onChange={date => {
                if (date.target.value !== '') {
                  setDate(date.target.value)
                } else {
                  setDate('date')
                }
              }}


            />
          </div>
          <input
            type='text'
            onChange={event => {
              if (event.target.value !== '') {
                setCategory(event.target.value)
              } else {
                setCategory('bitcoin')
              }
            }}
            placeholder='search'
          />
        </div>
      </header>
      <section className='news-articles'>
        {articles.length !== 0 ? (
          articles.map(article => {
            return <News article={article} key={article.index}/>
          })
        ) : (
          <h3>No item found for search</h3>
        )}
      </section>
    </div>
  )
}
export default App
