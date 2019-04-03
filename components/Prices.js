class Prices extends React.Component {
  state = {
    coin: 'BTC'
    
  }

  render() {
    const { Data } = this.props.coins
    // console.log(Data)
    let list = '';
    if(this.state.coin === 'BTC') {
      list = <li className="list-group-item">
             {Data[0].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[0].RAW.USD.TOSYMBOL}</span> <strong>{Data[0].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'EOS') {
      list = <li className="list-group-item">
            {Data[1].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[1].RAW.USD.TOSYMBOL}</span> <strong>{Data[1].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'ETH') {
      list = <li className="list-group-item">
            {Data[2].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[2].RAW.USD.TOSYMBOL}</span> <strong>{Data[2].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'LTC') {
      list = <li className="list-group-item">
            {Data[3].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[3].RAW.USD.TOSYMBOL}</span> <strong>{Data[3].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'XRP') {
      list = <li className="list-group-item">
            {Data[4].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[4].RAW.USD.TOSYMBOL}</span> <strong>{Data[4].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'BCH') {
      list = <li className="list-group-item">
            {Data[5].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[5].RAW.USD.TOSYMBOL}</span> <strong>{Data[5].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'NEO') {
      list = <li className="list-group-item">
            {Data[6].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[6].RAW.USD.TOSYMBOL}</span> <strong>{Data[6].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'TRX') {
      list = <li className="list-group-item">
            {Data[7].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[7].RAW.USD.TOSYMBOL}</span> <strong>{Data[7].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'ZEC') {
      list = <li className="list-group-item">
            {Data[8].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[8].RAW.USD.TOSYMBOL}</span> <strong>{Data[8].RAW.USD.PRICE}</strong>
            </li>
    } else if(this.state.coin === 'ADA') {
      list = <li className="list-group-item">
            {Data[9].RAW.USD.FROMSYMBOL}: <span className="badge badge-primary">{Data[8].RAW.USD.TOSYMBOL}</span> <strong>{Data[9].RAW.USD.PRICE}</strong>
            </li>
    }
    return (
      <div>
        <select onChange={e => this.setState({coin: e.target.value})} className="form-control">
          <option value="BTC">Bitcoin</option>
          <option value="EOS">EOS</option>
          <option value="ETH">Etherium</option>
          <option value="LTC">Litecoin</option>
          <option value="XRP">XRP</option>
          <option value="BCH">BitcoinCash</option>
          <option value="NEO">NEO</option>
          <option value="TRX">Tron</option>
          <option value="ZEC">ZCash</option>
          <option value="ADA">Cardano</option>
        </select>
        <br/>
        <ul className="list-group">
          {list}
        </ul>
      </div>
    );
  }
}

export default Prices