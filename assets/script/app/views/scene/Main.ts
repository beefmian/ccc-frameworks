import BaseComponent from "../../../base/BaseComponent";
import UIManager from "../../../base/mvc/UIManager";
import TestUI from "../ui/TestUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends BaseComponent {

    onLoad() {
		UIManager.instance().showUI(TestUI);
    }

}