const whatOS = () => {
    const UserAgent = navigator.userAgent

    //mobile browser?
    const os = (UserAgent.indexOf('iPhone') > -1) || (UserAgent.indexOf('iPad') > -1) 
                ?   'ios'
                :   (UserAgent.indexOf('Android') > -1) 
                    ?  'android'
                    :   'web'

    return os
}

export default whatOS