import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InitScene')
export class InitScene extends Component {
    start() {
        console.info('Hello World')
    }

    update(deltaTime: number) {
    }
}

