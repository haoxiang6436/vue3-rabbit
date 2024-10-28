import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  const time = ref(0)
  let timer = null
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (curTime) => {
    time.value = curTime
    timer = setInterval(() => {
      if (time.value == -1) {
        clearInterval(timer)
        timer = null
      }
      time.value--
    }, 1000);
  }
  onUnmounted(() => {
    clearInterval(timer)
    timer = null
  })
  return {
    formatTime,
    start
  }
}