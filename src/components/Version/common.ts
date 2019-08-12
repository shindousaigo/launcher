import App from "./index"
import { Delay } from "src/factory/functions";

export const exceptionCodeMap = {
  "1002": "mg_net_wrong",
  "google_play": "msg_tip_googleplay",
  "isX86": "msg_tip_isX86",
  "1014": "msg_tip_out_of_memory",
  "server_exception": "msg_tip_server_exception"
}

export const LanguagePack = {
  mg_net_wrong: {
    de: 'Netzwerkverbindungs Fehler',
    en: 'Network connection error',
    fr: 'Erreur de connexion',
    id: 'Kesalahan koneksi jaringan',
    ko: '인터넷 연결 오류',
    th: 'ข้อผิดพลาดในการเชื่อมต่ออินเทอร์เน็ต',
    vi: 'Lỗi kết nối mạng',
    zh: '网络连接异常',
  },
  msg_tip_googleplay: {
    de: 'Bitte neeste Version aktualisieren',
    en: 'Please update latest version',
    fr: 'Mettez à jour la dernière version',
    id: 'Silahkan update versi terbaru',
    ko: '최신 버전으로 업데이트하세요',
    th: 'โปรดอัพเดทแพทช์ใหม่',
    vi: 'Cập nhật phiên bản mới nhất',
    zh: '请更新到最新版本',
  },
  msg_tip_isX86: {
    de: 'Oops! In deinem Gerät kann dieses Paket nicht installiert werden. Bitte lade das passendes Paket herunter! ',
    en: "Oops! Your device can't install this pack, please click to re-download the compatible pack!",
    fr: 'Nous sommes désolés! Votre appareil ne peut pas installer ce pack, veuillez re-télécharger le pack compatible!',
    id: 'Maaf! Perangkat kamu tidak dapat menginstal paket ini, silahkan muat ulang paket yang kompatibel! ',
    ko: '죄송합니다. 당신의 기기가 이 팩을 설치할 수 없습니다. 해당 팩을 다시 다운로드하세요.',
    th: 'ขอโทษ! เครื่องของท่านติดตั้งแพคเกจนี้ไม่ได้ โปรดเลือกดาวน์โหลดแพคที่เหมาะสม! ',
    vi: 'Rất tiếc! Thiết bị của bạn không thể cài đặt pack này, vui lòng nhấp tải lại pack tương thích! ',
    zh: '抱歉！您的设备无法安装此游戏包，请点击重新下载可兼容的游戏包!',
  },
  msg_tip_out_of_memory: {
    de: "Nicht genug Speicherplatz",
    en: "Out of memory",
    fr: "Mémoire insuffisante",
    id: "Memori Tidak Cukup",
    ko: "메모리 부족",
    th: "หน่วยความจำไม่เพียงพอ",
    vi: "Không đủ bộ nhớ",
    zh: "内存不足",
  },
}

export const serverExceptionCheck = function (app: App) {
  if (app.props.responses.serverInitData.code === 0) {
    app.componentDidMountList.push(function () {
      app.refs.catchException.state["open"] = true
      app.refs.catchException.state["type"] = "1002"
      app.refs.catchException.state["clickFn"] = function () {
        app.refs.catchException.state["clickFn"] = null
        Delay().then(function () {
          window.JsToNative.exitApp()
        })
      }
      app.refs.catchException.setState(
        app.refs.catchException.state
      )
    })
    return true
  } else {
    return false
  }
}