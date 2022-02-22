module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sideproject-pomodoro/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/scss/main.scss";
        `
      }
    }
  }
};