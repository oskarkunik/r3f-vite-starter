import { CONFIG } from '../constants';

const boardOffsetLeft = () =>
  (CONFIG.BOARD.COLUMNS * CONFIG.CARD_SPACE.WIDTH) / 2 -
  CONFIG.CARD_SPACE.WIDTH / 2;


const boardOffsetTop = () =>
  (-1 * CONFIG.BOARD.ROWS * CONFIG.CARD_SPACE.HEIGHT) / 2 +
  CONFIG.CARD_SPACE.HEIGHT / 2;

export {
  boardOffsetLeft,
  boardOffsetTop,
};
