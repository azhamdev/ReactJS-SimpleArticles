import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response = await request.json();

      setArticles(response)
      setLoading(false)
      console.log(response);
    }
    getArticles();

  }, [])

  return (
    <section>
      <h1>
        Blog Gue
      </h1>
      <p>
        Haloo ini berita ya gaes :v
      </p>
      {loading && <i>Loading articles ...</i>}
      {!loading && (
        <div>
          {articles.map(function (article) {
            return (
              <article key={article.id}>
                <h2>
                  <Link to={`/blog/${article.id}`}>
                    {article.title}
                  </Link>
                </h2>
                <p>
                  {article.summary}
                </p>
                <img src={article.imageUrl} style={{ width: 200, height: 200 }} />
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
