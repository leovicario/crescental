import React from 'react'
import ArticleCard from './ArticleCard.jsx'

import{ useState, useEffect } from "react"

import {client} from "../../sanity.js"
import LatestArticle from './LatestArticle.jsx'


const Articles = () => {

  const [posts, setPosts] = useState (null);

  useEffect(() => {
    client
    .fetch(`*[_type == "post"]{
        title,
        slug,
        description,
        "category": categories[0]->title,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`)
    .then((data) => setPosts(data))
    .catch(console.error)
},[]);

if(!posts) return <div>Loading...</div>;

  return (
    <div>
    
      <div className="grid grid-cols-3 gap-8">
      {posts && posts.map((post, index) =>(
        <ArticleCard key={index} post={post}/>
      ))}
      </div>

      {/* <LatestArticle key={index} post={post}/> */}
      
     </div>
  )
}

export default Articles
