// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent', /* ... */)
  }
}