

export const trackPageView = (title, path) => {
    gtag('config', process.env.VUE_APP_GA_TRACKING_ID, {
        page_title: title,
        page_path: path,
        page_location: window.location.href
      })
}