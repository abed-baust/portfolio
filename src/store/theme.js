import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state: () => ({ dark: true }),
  actions: {
    toggle(){ this.dark = !this.dark; document.documentElement.classList.toggle('light', !this.dark) }
  }
})