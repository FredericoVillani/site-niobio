import { getAllPosts } from '@api'
import DefaultLayout from '@components/DefaultLayout'
import config from '@config'
import Link from 'next/link'

export default function Posts({ title, description, posts }) {
  return (
    <DefaultLayout title={title} description={description}>
      <p>List of posts:</p>
      <ul>
        {posts.map((post, idx) => {
          return (
            <li key={idx}>
              <Link href={'/posts/' + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const { title, description } = config
  const posts = await getAllPosts()

  return {
    props: { title, description, posts },
  }
}
