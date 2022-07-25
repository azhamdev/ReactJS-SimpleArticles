import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    async function getDetail() {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
      const response = await request.json();

      setArticle(response);
      setLoading(false)
      console.log(response);
    }
    getDetail();
    
  }, [])
  return (
    <div>
      {loading && <i>Tunggu ya breee lg loading ...</i>}
      {!loading && (
        <div>
          <div className='Header'>
            <img src={article.imageUrl} style={{ width: 300, height: 200 }} />
            <h1>
              {article.title}
            </h1>
            <date>
              {new Date(article.publishedAt).toLocaleDateString()}
            </date>
            <h3>
              {article.newsSite}
            </h3>
          </div>
          <article>
            {article.summary}
          </article>
        </div>
      )}
    </div>
  )
}
