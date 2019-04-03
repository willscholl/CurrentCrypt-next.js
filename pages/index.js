import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to CurrentCrypt</h1>
      <p>Check current Crypto rates</p>
      <Prices coins={props.coins} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key={b45a6f00c3fccba61b898d1892102afeb94dbfbcd5916a53b7557068390b1239}');
  const data = await res.json();
  console.log(data)
  return {
    coins: data
  };
}

export default Index;