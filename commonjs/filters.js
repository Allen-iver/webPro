/**
 * 过滤秒
 * @param {number} second
 */
export function changeSecond(second, num) {
  if (second < 59) {
    if (second < 10 && second > 0) {
      return '0' + "'0" + second + "''"
    } else if (second >= 10) {
      return '0' + "'" + second + "''"
    } else if (second <= 0) {
      if (num == 2) {
        return '0' + "'0" + second + "''"
      } else {
        return '--'
      }
    }
  } else {
    if ((second - (Math.floor(second / 60) * 60)) < 10) {
      return Math.floor(second / 60) + "'0" + (second - (Math.floor(second / 60) * 60)) + "''"
    } else {
      return Math.floor(second / 60) + "'" + (second - (Math.floor(second / 60) * 60)) + "''"
    }
  }
}

/**
 * textMoreThenNum 截取字符串（指定数值）
 * @param {string} text
 * @param {number} num
*/
export function textMoreThenNum(text, num) {
  if (text.length > num) {
    return text.substring(0, num) + '...'
  } else {
    return text
  }
}

