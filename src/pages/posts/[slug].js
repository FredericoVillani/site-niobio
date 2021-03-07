import { getAllPosts, getPostBySlug } from '@api'
import PostLayout from '@components/PostLayout'

export default function Post({ title, description, content }) {
  return (
    <PostLayout title={title} description={description} content={content} />
  )
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
  }
}

export async function getStaticPaths() {
  const paths = (await getAllPosts()).map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
