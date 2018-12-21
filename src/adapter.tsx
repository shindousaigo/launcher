import * as React from "react";
import * as ReactDom from "react-dom";
import Fab from "src/bower/material-ui/packages/material-ui/src/Fab";
import AddIcon from "src/bower/material-ui/packages/material-ui-icons/src/Add";
import MenuItem from "src/bower/material-ui/packages/material-ui/src/MenuItem";
import Menu from "src/bower/material-ui/packages/material-ui/src/Menu";
import { withStyles } from "src/bower/material-ui/packages/material-ui/src/styles";
import ClickAwayListener from "src/bower/material-ui/packages/material-ui/src/ClickAwayListener";




export function serverInitData(res: AppLauncher.Init.ServerResponse) {
  // res.data.isCheck = 1
  res.data.publics.currentPhoto = "http://res-pkg-cdn.pocketgamesol.com/pmfr/tt.png,http://res-pkg-cdn.pocketgamesol.com/pmfr/tt.png,http://res-pkg-cdn.pocketgamesol.com/pmfr/tt.png,http://res-pkg-cdn.pocketgamesol.com/pmfr/tt.png"
  // res.data.publics.currentPhoto = "http://res-pkg-cdn.pocketgamesol.com/pmfr/tt.png"
  return res
}

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
      tmp.soFarBytes += Math.floor(Math.random() * 55686100)
      tmp.speed = Math.floor(Math.random() * 5686)
      if (tmp.soFarBytes >= tmp.totalBytes) {
        tmp.soFarBytes = tmp.totalBytes;
        window.clearInterval(interval_ as any);
        window.NativeToJs.downloadUpdate(tmp);
      } else {
        window.NativeToJs.downloadUpdate(tmp);
      }
    }
  }, 1000);
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
      operatorOs: "Android8.0",
      source: 0,
      network: "0",
      packageName: "asdsfsdf",
      version: "21.0.0",
      language: "zh",
      currentCPU: 0,
      localAddr: '',
      isX86: 0
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
  },
  checkPatch: function (param: string) {
    console.log('checkPatch', param)
    window.NativeToJs.catchException('1004')
  },
  pthInst: function () {
    console.log('pthInst')
  }
} as any

const options = [
  "退出 APP 接口调用",
  "模拟用户点击返回按钮",
  "错误处理 code 1001",
  "错误处理 code 1002",
  "错误处理 code 1011",
  "错误处理 code 1010",
  "错误处理 code 1005"
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
      case 4:
        window.NativeToJs.catchException("1011");
        break;
      case 5:
        window.NativeToJs.catchException("1010");
        break;
      case 6:
        window.NativeToJs.catchException("1005");
        break;
    }
    this.state.show = !this.state.show;
    this.setState(this.state);
  };

  render() {
    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <div className={this.props.classes.wrapper + ' adapter_shin'}>
          <Fab
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
          </Fab>
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
    position: "fixed",
    left: "4.5rem",
    top: "-2.5rem"
  },
  wrapper: {
    position: "fixed",
    zIndex: 99999,
    left: "0",
    top: "0"
  }
})(UtilBtn);

window.onload = function () {
  var div = document.createElement("div");
  document.body.appendChild(div);
  ReactDom.render(<UtilBtn_ />, div);
};
