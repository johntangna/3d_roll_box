import {
  _decorator,
  Component,
  Node,
  input,
  Input,
  EventKeyboard,
  KeyCode,
} from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
108.160.172.200 github.global.ssl.fastly.net
 * rollBox object
 * main operate object in game
 */
@ccclass('RollBox')
export class RollBox extends Component {
  /**
   * when click key w/s/a/d to move, as move flag, true is moving
   */
  isFrontMove: boolean = false;
  isBackMove: boolean = false;
  isLeftMove: boolean = false;
  isRightMove: boolean = false;
  start() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }

  onKeyDown(event: EventKeyboard) {
    if (event.keyCode == KeyCode.KEY_W) {
      this.isFrontMove = true;
      console.log('key down w');
    }
  }

  onKeyUp(event: EventKeyboard) {}

  onDestroy() {
    input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
  }

  update(deltaTime: number) {}
}
