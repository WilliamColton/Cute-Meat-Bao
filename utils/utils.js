var darkenHexColor=function(hexColor, factor = 0.2) {
  // 去掉前导的 # 符号
  hexColor = hexColor.replace('#', '');
  // 将十六进制颜色转换为 RGB
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);
  
  // 按比例减少每个通道的亮度
  r = Math.max(0, Math.floor(r * (1 - factor)));
  g = Math.max(0, Math.floor(g * (1 - factor)));
  b = Math.max(0, Math.floor(b * (1 - factor)));
  
  // 将 RGB 转回十六进制并返回
  const darkenedColor = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
  return darkenedColor;
}
module.exports.darkenHexColor=darkenHexColor
// 示例：将 #ff6600 加深 20%
//const darkenedColor = darkenHexColor('#ff6600', 0.2);
//console.log(darkenedColor);  // 输出加深后的颜色
