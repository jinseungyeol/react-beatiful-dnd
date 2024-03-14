import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId"> {/** 라우팅 할 경로 */}
          <Coin />              {/** 라우팅 시에 보여줄 컴포넌트 */}
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;