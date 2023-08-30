var myDocument = {
  html: {
    head: {
      meta: {
        charset: "UTF-8",
      },
      title: {
        content: "Xin chao cac ban",
      },
    },
  },
};

// thao tac voi element
// var documentDemo = document.getElementsByTagName("h1")[0];
// console.log(documentDemo);

var documentDemo = document.querySelector("div.header > h1");
console.log(documentDemo);

// thao tac voi attributes
var content = `
<h1>Tieu de bai viet</h1>
<p>Noi dung mo ta san pham, bai viet.....</p>
`;
var mainContentElement = document.getElementById("main-content");

mainContentElement.innerHTML = content;
