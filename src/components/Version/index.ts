import * as React from "react"
import { Refs } from "src/const";

// type AppProps = {
//   responses: AppLauncher.Init.Responses
//   classes: any
// }

// type AppRefs = {
//   exitApp: ExitApp
//   catchException: CatchException
//   catchExceptionContainer: Element
//   [Refs.SophixProgress]: SophixProgress
//   [Refs.ObbProgress]: ObbProgress
// }

export default class App extends React.Component<any, any, any> {
  refs: any
  state: any
  downloadPlugPackage?: any
  componentDidMountList?: Function[]
}