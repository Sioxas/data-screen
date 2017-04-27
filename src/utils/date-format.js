/**
 * 带有格式化输出的Date类，继承自Date类
 * 
 * @class DateX
 * @extends {Date}
 */
class DateX extends Date{
    /**
     * 对Date的扩展，将 Date 转化为指定格式的String
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * Example:
     * new DateX().Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
     * new DateX().Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
     * 
     * @summary 格式化输出日期时间
     * 
     * @param {string} fmt Format Pattern 
     * @returns {string} Formated String
     * 
     * @memberOf DateX
     */
    Format(fmt){
        let o = {
			"M+": this.getMonth() + 1, //月份 
			"d+": this.getDate(), //日
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (let k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
    }
}

export default DateX