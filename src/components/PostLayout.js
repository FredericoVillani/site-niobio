import DefaultLayout from '@components/DefaultLayout'

export default function PostLayout({ title, description, content }) {
  return (
    <DefaultLayout title={title} description={description}>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </DefaultLayout>
  )
}
