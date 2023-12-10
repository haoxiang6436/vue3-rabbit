import imgView from './imgView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
  install (app) {
    app.component('XtxImgView',imgView)
    app.component('XtxSku',XtxSku)
  }
}