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
//模板列表
export function alltemp(data) {
    return getdataRequest($ + '/global-site/theme-list', data)
}
////模板列表http://www.site.maoyt.com/api/global-site/theme-type
export function alltemptype(data) {
    return getRequest($ + '/global-site/theme-type')
}
////模板列表http:/ / www.site.maoyt.com / api / global - site / theme - industry
export function alltempindustry(data) {
    return getRequest($ + '/global-site/theme-industry')
}
//模板推荐
export function temptuijian(data) {
    return getdataRequest($ + '/global-site/theme-recommend', data)
}
//网站预览http://www.site.maoyt.com/api/global-site/site-preview
export function temppreview(data) {
    return getdataRequest($ + '/global-site/site-preview&site_id=' + data)
}
//我的网站http://www.site.maoyt.com/api/global-site/site-list
export function mytemp(data) {
    return getdataRequest($ + '/global-site/site-list', data)
}
//发布网站http://www.site.maoyt.com/api/global-site/site-publish
export function publish(data) {
    return getdataRequest($ + '/global-site/site-publish', data)
}
//回收站http://www.site.maoyt.com/api/global-site/site-recycle
export function recycle() {
    return getRequest($ + '/global-site/site-recycle')
}
//恢复网站http://www.site.maoyt.com/api/global-site/site-recover
export function recover(data) {
    return getdataRequest($ + '/global-site/site-recover', data)
}
//删除网站http://www.site.maoyt.com/api/global-site/site-del
export function delrecover(data) {
    return getdataRequest($ + '/global-site/site-del', data)
}
//网站编辑http://www.site.maoyt.com/api/global-site/site-edit
export function edittemp(data) {
    return getdataRequest($ + '/global-site/site-edit', data)
}
//网站名称http://www.site.maoyt.com/api/global-site/site-rename
export function rename(data) {
    return postRequest($ + '/global-site/site-rename', data)
}