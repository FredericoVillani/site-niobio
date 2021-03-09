import DefaultLayout from '@components/DefaultLayout'
import Link from '@components/Link'
import config from '@config'
import { getAllPosts } from '@lib/api'

export default function Posts({ title, description, posts }) {
  return (
    <DefaultLayout title={title} description={description}>
      <p>List of posts:</p>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={`${index}-${post.slug}`}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
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
