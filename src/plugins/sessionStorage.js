import Vue from 'vue'

export default () => {
  Vue.prototype.$sessionStorage = {
    set: (key, value) => {
      if (value && (value.length > 0 || value > 0)) {
        sessionStorage.setItem(key, value)
      }
    },
    get: key => sessionStorage.getItem(key),
    restore: (key, callback) => {
      const value = sessionStorage.getItem(key)
      if (value !== null) {
        callback(value)
      }
    },
    clear: () => {
      sessionStorage.clear()
    }
  }
}
