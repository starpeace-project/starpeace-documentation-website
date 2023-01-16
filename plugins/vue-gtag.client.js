import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-ZLSH9MYFPL',
      params: {
        send_page_view: nuxtApp.$config.public.sendAnalytics
      }
    }
  });
});
