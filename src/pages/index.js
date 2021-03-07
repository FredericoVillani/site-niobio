import DefaultLayout from '@components/DefaultLayout'
import config from '@config'

export default function Home() {
  return (
    <DefaultLayout title={config} description={config}>
      home
    </DefaultLayout>
  )
}
