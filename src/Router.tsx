import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({toggleDark, isDark}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId"> {/** 라우팅 할 경로 */}
          <Coin isDark={isDark} />              {/** 라우팅 시에 보여줄 컴포넌트 */}
        </Route>
        <Route path="/">
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;