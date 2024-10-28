import { useIntersectionObserver } from '@vueuse/core'

export const directivePlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted: (el, binding) => {
        /**
         * el：表示绑定的元素
         * binding：binding.value表示指令后面绑定的表达式值
         */ 
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          stop()
        }
      },
      )
      }
    })
  }
}

