import Main from '../main/main';

type CardsAmount = {
  cardsAmount: number[]
}

function App({cardsAmount}: CardsAmount): JSX.Element {
  return (
    <Main cardsAmount={cardsAmount}/>
  );
}

export default App;
