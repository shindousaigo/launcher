declare var SERVER: string;
declare var md5: Function;
declare var TEST: boolean;
declare var VERSION: string;
declare var IS_CACHE: string;
declare var _myInitGame: Function;
declare var Swiper: Function;

declare interface Window {
  localAddr: string;

  /** 当前客户端插件包下载地址 */
  currentPlugDownloadUrl: string;
  /** 当前客户端插件包版本 */
  currentPlugVersion: string;
  /** 当前客户端插件包名 */
  currentPlugPackageName: string;
  /** 调启本地安装的插件包地址 */
  localPluginAddress: string;
  currentPlugDownloadResolve: Function;

  /** 当前客户端启动器下载地址 */
  currentStartDownloadUrl: string;
  currentStartDownloadResolve: Function;
  /** 调启本地安装的启动器地址 */
  localStartAddress: string;
  localPatchAddress: string;

  /** 当前客户端插件包补丁的下载地址 */
  currentPatchDownloadUrl: string;

  Version: string;
  Main: Function;
  adapter: {
    utilBtn: React.ReactInstance;
  };
  overwrite: {
    // 获取设备信息
    getDeviceMsg(): AppLauncher.Init.NativeResponse;
    startLoad(param: {
      // 下载链接
      url: string;
    });
    /**
     * 检查指定包名的插件包是否安装成功接口
     * 安装成功状态返回1  否则为0
     */
    checkVaStatus(param: { packageName: string }): number;
    /**
     * 插件包虚拟安装接口
     */
    plinst(param: {
      /** 要安装的本地包地址 */
      localAddr?: string;
      /** 要安装的插件包包名 */
      packageName?: string;
      /** 服务器端返回的插件包版本包 */
      plgVersion?: string;

      isInstLocal?: any
      obbAddr?: any
      launchercls?: any

    });
    /** 替换安装接口（包括替换包安装和启动器更新版本）*/
    replinst(param: { localAddr: string });
    /** 拉起插件游戏包接口 */
    lachgm(param: {
      packageName: string
      launchercls?: string
    });
    /** 安装补丁 */
    loadPatch(param: { patchPath: string; patchVersion: string; localAddr: string });
    addPkgVisible(param: { plgPkgName: string });

    /** 获取插件信息 */
    getPlgInfo(param: {
      packageName: string
    }): {
      instplg: {
        versionCode: string
        plgName: string
      }
      isobexist: string
    }

  };

  JsToNative: {
    // obb补丁文件安装
    pthInst();
    // 退出应用
    exitApp();
    // 获取设备信息
    getDeviceMsg(): string;
    startLoad(param: string);
    /**
     * 检查指定包名的插件包是否安装成功接口
     * 安装成功状态返回1  否则为0
     */
    checkVaStatus(param: string): string;
    /**
     * 插件包虚拟安装接口
     */
    plinst(param: string);
    /** 替换安装接口（包括替换包安装和启动器更新版本）*/
    replinst(param: string);
    /** 拉起插件游戏包接口 */
    lachgm(param: string);
    loadPatch(json: string);
    /** 检查补丁 */
    checkPatch(param: string);
    /** addPkgVisible */
    addPkgVisible(param: String);
    /** getPlgInfo */
    getPlgInfo(param: string): string
  };

  NativeToJs: {
    catchException(code: string);
    // 点击返回按钮回调
    backPressed();
    downloadUpdate(msg: { soFarBytes: number; totalBytes: number; speed: number; localFilePath: string });
  };
}

declare interface Date {
  format: any;
}

declare namespace AppLauncher {
  namespace Init {
    interface Responses {
      serverInitData: ServerResponse;
      nativeInitData: NativeResponse;
    }
    interface NativeResponse {
      /** google 广告ID */
      gaid: string;
      /** Android: MAC地址 IOS: IDFA */
      device: string;
      /** 设备号 */
      deviceNo: string;
      /** 机型 */
      model: string;
      /** 操作系统，例如Android4.4 */
      operatorOs: string;
      /** 充值来源 0=Android 1=IOS 2=网页 */
      source: number;
      // 网络 0=wifi 1 = 3g 2=其他
      network: number;
      /** 启动器的包名 */
      packageName: string;
      /** 启动器版本 */
      version: string;
      /** ob1 安装插件包的版本 */
      versionCode: string
      /** 当前手机系统语言 */
      language: string;
      /** cpu的类型 是否为x86 1 是 0 其他 */
      isX86: number;
      /** 插件包版本 */
      plgVersion: string;
      /** 补丁更新字段 */
      localAddr: string;
      /** 补丁版本 */
      patchVersion: string;
    }
    interface ServerRequest {
      /** 平台方分配给启动器的startId */
      startId: number;
      /** 客户端时间 */
      clientTime: number;
      /** 启动器版本 */
      version: string;
      /** 网络 0=wifi 1=3g 2=其他 */
      network: number;
      /** 机型 */
      model: string;
      /** 操作系统 */
      operatorOs: string;
      /** 设备号(android 设备ID， IOS：IDFV) */
      deviceNo: string;
      /** Android:MAC地址 IOS:IDFA */
      device: string;
      /** 额外参数（没有特殊需求可不传） */
      exInfo?: string;
      /** 参数签名结果 MD5(startId+model+network+startKey) */
      sign: string;
    }
    interface ServerResponse {
      /** 200代表成功，失败的CODE,请详见错误表 */
      code: number;
      /** 错误信息 */
      error_msg: string;
      data: ServerResponseData;
    }
    interface ServerResponseData {
      /** 0=不更新 1=更新 */
      isCheck: number;
      /** 0=不更新1=强更 2=非强更 */
      updateWay: number;
      /** 启动器下载地址 */
      downloadUrl: string;
      /** 提审状态下的背景图 */
      currentTrialPhoto: string;
      //提审状态下背景是游戏还是图片 0游戏，1图片
      bgType: string;

      // 非提审状态才有的返回值
      publics: {
        /** 补丁版本 */
        patchVersion: string;
        /** 补丁下载地址 */
        patchURL: string;
        /** 游戏包的包名 */
        currentPlugPackageName: string;
        /** 游戏包的下载地址 */
        currentPlugDownloadUrl: string;
        /** 游戏包的版本 */
        currentPlugVersion: string;
        // /** obb启动器版本 */
        // obbVersion: string;
        /** 0=插件安装 1=插件强更成启动器 */
        currentPlugUpdateWay: string;
        /** 落地页地址 */
        currentStartDownPage: string;
        /** FB粉丝页地址 */
        currentStartFbPage: string;
        /** 背景图 */
        currentPhoto: string;
        /** 启动器更新方式 */
        currentStartType: string;
        currentPlugAppId: string;
        currentPlugPackageId: string;
        currentPlugRplDownloadUrl: string;
        currentStartDownloadUrl: string;
        /** 外部可见包名 */
        plgPkgName: string;

        x86;

        androidPie;
        // 背景是游戏还是图片 0游戏，1图片
        bgType: string;
        /** 插件包启动类名 */
        launchercls: string
      };
    }
  }
}
