arr_obj = [
  {key: "a", property:0}, // 0
  {key: "b", property:1}, // 1
  {key: "c", property:2}, // 2
  {key: "d", property:3}, // 3
  {key: "e", property:4}, // 4
  {key: "f", property:5}, // 5
  {key: "g", property:6}, // 6
  {key: "h", property:7}, // 7
  {key: "i", property:8}, // 8
  {key: "j", property:9}, // 9
];

/* This function returns the index of the object in the array which key matched the passed argument */
console.log(arr_obj.map(function (x) {  return x.property;}));

console.log(arr_obj.map(function (x) {  return x.key;}).indexOf("g"));
console.log(arr_obj.map(function (x) {  return x.property;}).indexOf(5));
