const whatOS = () => {
    const UserAgent = navigator.userAgent

    // web / iOS / android
    const os = (UserAgent.indexOf('iPhone') > -1) || (UserAgent.indexOf('iPad') > -1) 
                ? 'ios'
                : (UserAgent.indexOf('Android') > -1) 
                    ? 'android'
                    : 'web'

    return os
}

const isMobile = () => {
    const UserAgent = navigator.userAgent

    //mobile browser?
    const result = (UserAgent.indexOf('iPhone') > -1) || (UserAgent.indexOf('iPad') > -1 ||(UserAgent.indexOf('Android') > -1))
                    ? true
                    : false

    return result
}

export { whatOS, isMobile }