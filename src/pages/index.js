import DefaultLayout from '@components/DefaultLayout'
import Link from '@components/Link'
import config from '@config'
import styles from '@styles/pages/index.module.css'

export default function Home() {
  return (
    <DefaultLayout title={config.title} description={config.description}>
      <div class={styles.container}>
        <title>Niobio</title>
        <h1>Site Oficial em Construção!</h1>
        <h1>Niobio - Dinheiro do Povo</h1>
        <h2>A quantidade máxima de moedas é de 210.000 unidades</h2>
        <h2><Link href="https://bololex.com/trading/?symbol=NBR-USDT">
            <u>Negociar na Bololex</u></h2>
        <h3>
          <Link href="https://niobio.org">
            <u>Consultar saldos</u>
          </Link>
        </h3>
        <h3>
          <Link href="https://niobio.cash">
            <u>Explorer</u>
          </Link>
        </h3>
        <h3>Redes Sociais:</h3>
        <h4>
          <Link href="https://www.facebook.com/niobio.dinheiro">
            <u>Facebook</u>
          </Link>
        </h4>
        <h4>
          <Link href="https://twitter.com/niobio_dinheiro/">
            <u>Twitter</u>
          </Link>
        </h4>
        <h4>
          <Link href="https://www.youtube.com/user/melecadosapo/">
            <u>Canal do Marconi no Youtube</u>
          </Link>
        </h4>
        <h2>#DinheiroDoPovo #Niobio #NBR #ToTheMoon</h2>
      </div>
    </DefaultLayout>
  )
}
