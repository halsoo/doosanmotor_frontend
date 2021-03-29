const links = [
    {   
        code: "naver",
        name: "네이버 지도",
        paths: {
            web: "https://map.naver.com/v5/search/성심두산자동차검사소",
            mobile: {
                common: "nmap://search?query=성심두산자동차검사소&appname=localhost:3000",
                ios: undefined,
                android: undefined,
            }
        },
    },
    {   
        code: "kakao",
        name: "카카오맵",
        paths: {
            web: "https://map.kakao.com/link/search/성심두산자동차검사소",
            mobile: undefined,
        },
    },
    {   
        code: "tMap",
        name: "T맵",
        paths: {
            web: undefined,
            mobile: {
                common: "tmap://search?name=성심두산자동차검사소",
                ios: undefined,
                android: undefined,
            }
        }
    },
    {   
        code: "google",
        name: "구글 지도",
        paths: {
            web: "https://www.google.com/maps/search/?api=1&query=(주)성심+두산자동차검사소",
            mobile: {
                common: undefined,
                ios: "comgooglemaps://?q=(주)성심+두산자동차검사소",
                android: "geo:0,0?q=(주)성심+두산자동차검사소",
            }
        }
    },
]

export default links