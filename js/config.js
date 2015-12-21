var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Loveland,Ohio',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '672c517630d46e815db856524819daa5'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            ' ',
            ' ',
            ' '
        ],
        afternoon: [
            ' ',
            ' ',
            ' '
        ],
        evening: [
            ' ',
            ' ',
            ' '
        ]
    },
    calendar: {
        maximumEntries: 8,
        url: "https://sharing.calendar.live.com/calendar/private/83667c61-994c-4894-b58b-b2586180dd74/85b7b063-6cf9-436d-b223-84a49209af84/cid-3cbb9c66f381e218/calendar.ics"
    },
    news: {
        feed: [
        'http://www.npr.org/rss/rss.php?id=1001', 
      'http://feeds.arstechnica.com/arstechnica/index']
    }
}
