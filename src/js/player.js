import { addCls, removeCls, createElement, getRandomInt } from './util/utils.js';
import { MSG, PLAYER_STATE } from './util/constant.js';

const getElement = {
  forward: () => {
    const element = createElement('div', 'forward-icon', 'mt-2');
    element.textContent = MSG.FORWARD;
    return element;
  },
  spinner: () => {
    const element = createElement('div', 'd-flex', 'justify-center', 'mt-3');
    const wrapper = createElement('div', 'relative', 'spinner-container');
    const circle = createElement('span', 'material', 'spinner');
    wrapper.appendChild(circle);
    element.appendChild(wrapper);
    return element;
  },
};

export default class Player {
  constructor(name) {
    this.name = name;
    this.location = 0;
    this.state = null;
  }
  setElement() {
    const player = createElement('div', 'car-player');

    this.wrapper = createElement('div', 'car', 'mr-2');
    this.stateWrapper = createElement('div');
    this.spinner = getElement.spinner();

    player.textContent = this.name;
    this.wrapper.appendChild(player);
    this.wrapper.appendChild(this.stateWrapper);
    this.wrapper.appendChild(this.spinner);
  }
  getElement() {
    return this.wrapper;
  }
  goForward() {
    this.location++;
    addCls(this.spinner, 'd-none');
    this.stateWrapper.appendChild(getElement.forward());
    removeCls(this.spinner, 'd-none');
  }
  setState() {
    const randomNum = getRandomInt(0, 9);
    this.state = randomNum > 3 ? PLAYER_STATE.FORWARD : PLAYER_STATE.STOP;
    console.log(randomNum, this.state, this.location);
    if (this.state === PLAYER_STATE.FORWARD) {
      this.goForward();
    }
  }
  endGame() {
    addCls(this.spinner, 'd-none');
  }
}
