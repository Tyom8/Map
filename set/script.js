function w(name) {
  let names = name.split(" ");
  let upperNmaes1 =  names.map(function (val) {
    return (
      val.substring(0, 1).toUpperCase() +
      val.substring(1, val.length).toLowerCase()
    );
  });
  return upperNmaes1.join(" ");
};

alert(w("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."));

let allwords = "angel arc brag bored car robed cat cider cried dusty study grab elbow  glean below act inch chin";
let all = allwords.split(" ");

for (let x = 0; x < all.length; x++) {
  let word = all[x];
  let sorted = word.split("").sort().join("");


for (let y = 0; y < all.length; y++) {
  if (x === y) {
    continue
  }
  let result = all[y];
if (sorted === result.split("").sort().join("")) {
  console.log(word + " " + result);
}
}
};
