import {
  withStyles
} from '@material-ui/core/styles';

export function Px(x) {
  return x / 13.34 / 2 + 'rem'
}

let _isModernBrowser = null
export function isModernBrowser() {
  if (_isModernBrowser === null) {
    _isModernBrowser = true
    let android = navigator.userAgent.match(/Android (\d*|.*);/)
    if (android) {
      // let versionArr = android[0].replace(/(Android |;)/g, '').split('.')
      let version = android[0].replace(/(Android |;)/g, '')
      if (version === '4.4.2' || version === '4.4.3') {
        _isModernBrowser = false
      }
    }

  }
  return _isModernBrowser
}

const Default = {
  wrapper: {
    position: 'fixed',
    width: '100%',
    height: '100%'
  },
  facebook: {
    width: Px(213),
    height: Px(65),
    top: Px(40),
    right: Px(19),
    position: 'absolute'
  },
  button_img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  progress: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    height: Px(136),
    background: 'rgba(0, 0, 0, .4)'
  },
  ing: {
    color: '#fff',
    position: 'relative'
  },
  _05: {
    position: 'relative',
    top: Px(13),
    transform: 'scale(.5)',
    width: '200%',
    transformOrigin: 'left top'
  },
  up: {
    color: '#fff',
    fontSize: Px(40),
  },
  yellow: {
    color: '#ffff00',
  },
  bbb: {
    color: '#00f0ff',
    textDecoration: 'underline',
    paddingLeft: '.5rem',
  }
}

const ProgressClasses = {
  progress_downloading: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    fontSize: Px(45),
    transform: 'scale(.5)',
    transformOrigin: 'center center',
    // background: 'rgba(0,0,0,.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress_downloading_split: {
    width: "3px",
    background: "#fff",
    height: "1.5rem",
    margin: "0 0.7rem"
  }
}

if (!isModernBrowser()) {
  (ProgressClasses.progress_downloading as any).marginTop = '-.2rem'
}

const TipClasses = {
  tip_wrapper: {
    color: '#fff',
    position: 'absolute',
    width: Px(450),
    height: Px(450),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, .7)',
    borderRadius: '.7rem',
  },
  tip_wrapper2: {
    position: 'relative',
    width: Px(216),
    height: Px(216),
    marginTop: Px(32),
  },
  tip_line_wrapper: {
    width: '100%',
    height: Px(5),
  },
  tip_line: {
    marginLeft: '10%',
    width: '40%',
    height: '100%',
  },
  tip_txt_wrapper: {
    width: Px((450 - 20) * 1.25),
    fontSize: Px(29),
    transform: 'scale(.8)',
    position: 'absolute',
    top: Px(222),
    bottom: Px(34),
    left: '50%',
    marginLeft: '-' + Px((450 - 20) * 1.25 / 2),
  },
  tip_ok: {
    width: Px(84),
    height: Px(37),
    position: 'absolute',
    top: Px(392),
    left: '50%',
    marginLeft: '-' + Px(84 / 2),
  }
}

const Exitapp = {
  exit_app_wrapper: {
    width: "22rem !important",
    margin: "0 auto",
  },
  exit_app_dialog_content: {
    textAlign: "center",
    margin: ".5rem 0",
    fontSize: Px(28),
    fontWeight: '500'
  },
  exit_app_button: {
    fontSize: Px(32),
    color: '#000',
    background: '#fff',
    transform: 'scale(.8)',
  }
}

export var Style = function () {
  return Object.assign(Default, ProgressClasses, TipClasses, Exitapp)
}


export var S = withStyles(Style as any)