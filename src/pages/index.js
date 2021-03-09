import DefaultLayout from "@components/DefaultLayout";
import config from "@config";

export default function Home() {
  return (
    <DefaultLayout title={config.title} description={config.description}>
      <center>
      <title>Niobio</title>
      <h1>Site Oficial em Construção!</h1>
      <h1>Niobio - Dinheiro Transparente</h1>
      <h1></h1>
      <h2>A quantidade máxima de moedas é de 210.000 unidades</h2>
      <h3><Link ink href="https://niobio.org" ><a><u>Consultar saldos</u></a></Link></h3>
      <h3><Link ink href="https://niobio.cash"><a><u>Explorer</u></a></Link></h3>
      <h3>Redes Sociais:</h3>
      <h4><Link ink href="https://www.facebook.com/niobio.dinheiro"><a><u>Facebook</u></a></Link></h4>
      <h4><Link ink href="https://twitter.com/niobio_dinheiro/"><a><u>Twitter</u></a></Link></h4>
      <h4><Link ink href="https://www.youtube.com/user/melecadosapo/"><a><u>Canal do Marconi no Youtube</u></a></Link></h4>  
      <h2>#SemEnrolação #NovoNiobio #goNBR #ToTheMoon</h2>
      </center>      
    </DefaultLayout>
  );
}
