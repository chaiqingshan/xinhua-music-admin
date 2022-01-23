import fetch from '@/config/fetch'

// 签到
export const signIn = data => fetch('/nodeApi/signer/signIn', data, 'POST');
// 签退
export const signOut = data => fetch('/nodeApi/signer/signOut', data, 'POST');
// 查询签到列表
export const getSigner = () => fetch('/nodeApi/signer/getSigner');

/**
 * 登陆
 */

export const login = data => fetch('/nodeApi/users/login', data, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('/nodeApi/users/signout');

/**
 * 获取用户列表
 */

export const getUserList = () => fetch('/nodeApi/users/userList');

// 获取歌手列表
// export const getSingerList = () => fetch('https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq')
export const getSingerList = () => fetch('/nodeApi/singers/singerList')
/**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/admin/info');

/**
 * api请求量
 */

export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => fetch('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => fetch('/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => fetch('/admin/count');