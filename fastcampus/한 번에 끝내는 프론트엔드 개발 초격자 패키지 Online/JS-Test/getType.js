// export default function getType(data) {
//   return Object.prototype.toString.call(data).slice(8, -1);
// }

export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}