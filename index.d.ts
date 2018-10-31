declare var SERVER: string
declare var md5: Function
declare var isTest: boolean
declare var version: string

declare interface Window {
  Main: Function
  adapter: {
    utilBtn: React.ReactInstance
  }
  overwrite: {
    // 获取设备信息
    getDeviceMsg(): AppLauncher.Init.NativeResponse
    startLoad(param: {
      // 下载链接
      url: string
    })
    /**
     * 检查指定包名的插件包是否安装成功接口
     * 安装成功状态返回1  否则为0
     */
    checkVaStatus(param: {
      packageName: string
    }): number
    /**
     * 插件包虚拟安装接口
     */
    plinst(param: {
      /** 要安装的本地包地址 */
      localAddr: string
      /** 要安装的插件包包名 */
      packageName: string
      /** 服务器端返回的插件包版本包 */
      plgVersion: string
    })
    /** 替换安装接口（包括替换包安装和启动器更新版本）*/
    replinst(param: {
      localAddr: string
    })
    /** 拉起插件游戏包接口 */
    lachgm(param: {
      packageName: string
    })
  }

  // 插件包安装地址
  currentPlugDownloadUrl: string
  currentPlugVersion: string
  currentPlugPackageName: string
  localAddr: string

  JsToNative: {
    // 退出应用
    exitApp()
    // 获取设备信息
    getDeviceMsg(): string
    startLoad(param: string)
    // queryLoadMsg(): string
    /**
     * 检查指定包名的插件包是否安装成功接口
     * 安装成功状态返回1  否则为0
     */
    checkVaStatus(param: string): string
    /**
     * 插件包虚拟安装接口
     */
    plinst(param: string)
    /** 替换安装接口（包括替换包安装和启动器更新版本）*/
    replinst(param: string)
    /** 拉起插件游戏包接口 */
    lachgm(param: string)
    /** 检查补丁 */
    checkPatch(param: string)
  }

  NativeToJs: {
    catchException(code: string)
    // 点击返回按钮回调
    backPressed()
    downloadUpdate(msg: {
      soFarBytes: number,
      totalBytes: number,
      speed: number,
      localFilePath: string
    })
  }
}

declare interface Date {
  format: any
}

declare namespace AppLauncher {

  namespace Init {
    interface Responses {
      serverInitData: ServerResponse
      nativeInitData: NativeResponse
    }
    interface NativeResponse {
      /** google 广告ID */
      gaid: string
      /** Android: MAC地址 IOS: IDFA */
      device: string
      /** 设备号 */
      deviceNo: string
      /** 机型 */
      model: string
      /** 操作系统，例如Android4.4 */
      operatorOs: string
      /** 充值来源 0=Android 1=IOS 2=网页 */
      source: number
      // 网络 0=wifi 1 = 3g 2=其他
      network: number
      /** 启动器的包名 */
      packageName: string
      /** 启动器版本 */
      version: string
      /** 当前手机系统语言 */
      language: string
      /** cpu的类型 是否为x86 1 是 0 其他 */
      isX86: number
      /** 插件包版本 */
      plgVersion: string
      /** 补丁更新字段 */
      localAddr: string
    }
    interface ServerRequest {
      /** 平台方分配给启动器的startId */
      startId: number
      /** 客户端时间 */
      clientTime: number
      /** 启动器版本 */
      version: string
      /** 网络 0=wifi 1=3g 2=其他 */
      network: number
      /** 机型 */
      model: string
      /** 操作系统 */
      operatorOs: string
      /** 设备号(android 设备ID， IOS：IDFV) */
      deviceNo: string
      /** Android:MAC地址 IOS:IDFA */
      device: string
      /** 额外参数（没有特殊需求可不传） */
      exInfo?: string
      /** 参数签名结果 MD5(startId +model+network+startKey) */
      sign: string
    }
    interface ServerResponse {
      /** 200代表成功，失败的CODE,请详见错误表 */
      code: number
      /** 错误信息 */
      error_msg: string
      data: ServerResponseData
    }
    interface ServerResponseData {
      /** 0=不更新 1=更新 */
      isCheck: number
      /** 0=不更新1=强更 2=非强更 */
      updateWay: number
      /** 启动器下载地址 */
      downloadUrl: string
      /** 提审状态下的背景图 */
      currentTrialPhoto: string
      publics: {
        /** 游戏包的包名 */
        currentPlugPackageName: string
        /** 游戏包的下载地址 */
        currentPlugDownloadUrl: string
        /** 游戏包的版本 */
        currentPlugVersion: string
        /** 0=插件安装 1=插件强更成启动器 */
        currentPlugUpdateWay: string
        /** 落地页地址 */
        currentStartDownPage: string
        /** FB粉丝页地址 */
        currentStartFbPage: string
        /** 背景图 */
        currentPhoto: string
        /** 启动器更新方式 */
        currentStartType: number
        currentPlugAppId: string
        currentPlugPackageId: string
        currentPlugRplDownloadUrl: string
        currentStartDownloadUrl: string
      }
    }
  }
}