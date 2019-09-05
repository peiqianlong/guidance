import {
    postRequest,
    getRequest,
    uploadFileRequest,
    putRequest,
    getdataRequest
} from "../units/request"

let $ = '/a'
if (process.env.NODE_ENV === 'development') {
    $ = '/a'
        // 编译环境
} else {
    // 测试环境
    if (process.env.type === 'test') {
        $ = ''
            // 正式环境
    } else {
        $ = ''
    }
}
//模板列表http://www.site.maoyt.com/api/global-site/theme-list
//http: //www.site.maoyt.com/api/global-site/theme-list
export function alltemp(data) {
    return getdataRequest($ + '/global-site/theme-list', data)
}
//http://www.site.maoyt.com/api/global-site/theme-type
export function alltemptype(data) {
    return getRequest($ + '/global-site/theme-type')
}
//http:/ / www.site.maoyt.com / api / global - site / theme - industry
export function alltempindustry(data) {
    return getRequest($ + '/global-site/theme-industry')
}