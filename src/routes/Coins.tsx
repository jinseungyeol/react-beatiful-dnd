import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``; 

const Coin = styled.li`
  background: #fff;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color .2s ease-in;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`; 

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface Icoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchCoins);
  // console.log(isLoading, data)
  /* const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
       
      console.log(json.slice(0, 100))
      setCoins(json.slice(0, 100));
      setLoading(false);
    })(); //즉시 실행 함수
  }, []); */
  
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header></Header>
      <Header>
        <Title>Coin</Title>
      </Header>
      {isLoading ?
        <Loader>Loading...</Loader>
        : (
        <CoinsList>
            {data?.slice(0, 100).map(coin => 
            <Coin key={coin.id}>
              <Link to={{
                  pathname: `/${coin.id}`,
                  state: {name: coin.name}
                }}>
                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                {coin.name} &rarr;
              </Link>
            </Coin>)
          }
        </CoinsList>
      )}
    </Container>
  )
}

export default Coins;