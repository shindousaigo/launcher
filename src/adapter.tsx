import * as React from "react";
import * as ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

var tmp
function test1() {
  var interval_ = setInterval(() => {
    if (!tmp) {
      tmp = {
        soFarBytes: 0,
        totalBytes: 519045120,
        localFilePath: "localFilePath",
        speed: 0
      };
      window.NativeToJs.downloadUpdate(tmp);
    } else {
      let bytes = Math.floor(Math.random() * 50000000)
      let speed = Math.floor(bytes / 1024)
      tmp.soFarBytes += bytes
      tmp.speed = speed
      if (tmp.soFarBytes >= tmp.totalBytes) {
        tmp.soFarBytes = tmp.totalBytes;
        window.clearInterval(interval_ as any);
        window.NativeToJs.downloadUpdate(tmp);
      } else {
        window.NativeToJs.downloadUpdate(tmp);
      }
    }
  }, 750);
}

window.JsToNative = {
  exitApp: function () {
    window.NativeToJs.catchException("窗口关闭被调用");
  },
  getDeviceMsg: function (): string {
    return JSON.stringify({
      gaid: "string",
      device: "string",
      deviceNo: "string",
      model: "0",
      operatorOs: "string",
      source: 0,
      network: "0",
      packageName: "string",
      version: "0.5",
      language: "zh",
      currentCPU: 0,
      localAddr: '',
      patchVersion: ''
    });
  },
  startLoad: function (param: string) {
    tmp = null;
    test1();
  },
  checkVaStatus: function (): string {
    return JSON.stringify(1);
  },
  plinst: function (param: string) {
    console.info(param);
    console.log("开始安装插件包");
  },
  replinst: function (param: string) {
    console.info(param);
    console.info("开始安装替换包");
  },
  lachgm: function (param: string) {
    console.info(param)
    console.info('拉起插件游戏包接口')
  },

  loadPatch: function (param: string) {
    console.log('loadPatch', param)
  }
} as any

const options = [
  "退出 APP 接口调用",
  "模拟用户点击返回按钮",
  "错误处理 code 1001",
  "错误处理 code 1002"
];

class UtilBtn extends React.Component<any, any, any> {
  state = {
    show: false
  };

  handleClickAway = () => {
    this.state.show = false;
    this.setState(this.state);
  };
  handleClick = index => {
    switch (index) {
      case 0:
        window.JsToNative.exitApp();
        break;
      case 1:
        window.NativeToJs.backPressed();
        break;
      case 2:
        window.NativeToJs.catchException("1001");
        break;
      case 3:
        window.NativeToJs.catchException("1002");
        break;
    }
    this.state.show = !this.state.show;
    this.setState(this.state);
  };

  render() {
    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <div>
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            style={{
              position: "absolute",
              left: "1.2rem",
              top: "1.2rem"
            }}
            onClick={() => {
              this.state.show = true;
              this.setState(this.state);
            }}
          >
            <AddIcon />
          </Button>
          <Menu className={this.props.classes.lockMenu} open={this.state.show}>
            {options.map((option, index) => (
              <MenuItem
                key={option}
                onClick={this.handleClick.bind(this, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </ClickAwayListener>
    );
  }
}

var UtilBtn_ = withStyles({
  lockMenu: {
    position: "absolute",
    left: "3rem",
    top: "3rem"
  }
})(UtilBtn);

window.onload = function () {
  var div = document.createElement("div");
  document.body.appendChild(div);
  ReactDom.render(<UtilBtn_ />, div);
};
