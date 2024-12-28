import { myPlayer } from 'playroomkit';
import { NB_ROUNDS, useGameEngine } from '../hooks/useGameEngine';

export const UI = () => {

  const {
    phase,
    startGame,
    timer,
    playerTurn,
    players,
    round,
    getCard,
    actionSuccess,
  } = useGameEngine();

  const currentPlayer = players[playerTurn];
  const me = myPlayer();
  const currentCard = getCard();
  const target =
    phase === 'playerAction' &&
    currentCard === 'punch' &&
    players[currentPlayer.getState('playerTarget')];

  const currentPlayerName = currentPlayer?.state.profile?.name;

  let label = '';

  switch (phase) {
    case 'cards':
      label = 'Select the card you want to play';
      break;
    case 'playerChoice':
      label = currentPlayer.id === me.id
        ? "Select the player you want to punch"
        : `${currentPlayerName} is going to punch someone`;
      break;
    case 'playerAction':
      switch (currentCard) {
        case 'punch':
          label = actionSuccess
            ? `${currentPlayerName} is punching ${target?.state.profile?.name}`
            : `${currentPlayerName} failed punching ${target?.state.profile?.name}`;
          break;
        case 'shield':
          label = `${currentPlayerName} can't be punched until next turn`;
          break;
      }
      break;
    case 'end':
      label = 'Game over';
      break;
    default:
      break;
  }


  return (
    <div className='text-white drop-shadow-xl fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col pointer-events-none'>
      <div className='p-4 w-full flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-center uppercase'>
          Round {round}/{NB_ROUNDS}
        </h2>

        <div className='flex items-center gap-1 w-14'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h2 className='text-2xl font-bold text-center uppercase'>{timer}</h2>
        </div>
      </div>
      <div className='flex-1' />
    </div>
  );
}
