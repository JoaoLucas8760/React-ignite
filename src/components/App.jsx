import { useState } from 'react'
import {Header} from './Header'
import { Post } from './Post'
import { Sidebar } from './Sidebar'

import styles from './App.module.css'

import './Global.css'

const posts = [
 {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego fernandes',
    role: 'CTO RS'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
           
  ],
  publishedAt: new Date('2022-07-03 21:23:00'),
 },
 {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/joaolucas.png',
    name: 'MAIKOLA',
    role: 'Estagiario'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
           
  ],
  publishedAt: new Date('2022-07-03 19:02:00'),
 },
]





 function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
          return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          
          />)
         })}
        </main>
      </div>
  

    </div>
      
  )
}

export default App


