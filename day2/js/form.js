// DOM declaration
var form = document.querySelector("#form");
var table = document.querySelector("#app3");

// // Fields in form
var fields = ["name", "ass1", "ass2", "baove"];
// Array data
var csdl = [{ id: "jhsdjhsd", name: "tuva9", ass1: 5, ass2: 5, baove: 3 }];

// Validate function
function validate() {
  // Errors status
  var error = false;
  // Data of form
  var data = {};
  for (var i = 0; i < fields.length; i++) {
    // Loop every field of form to validate
    if (document.getElementById(fields[i]).value) {
      error = false;
      data[fields[i]] = document.getElementById(fields[i]).value;
      document.getElementsByClassName("error-" + fields[i])[0].innerHTML = "";
    } else {
      error = true;
      document.getElementsByClassName(
        "error-" + fields[i]
      )[0].innerHTML = `Error: ${fields[i]} is required`;
      break;
    }
  }
  if (!error) {
    return data;
  }
  return false;
}

form.onsubmit = function (e) {
  e.preventDefault();
  //   validate form
  var sinhvien = validate();
  //   add data event
  if (sinhvien) {
    console.log(sinhvien);
    // them moi 1 phan tu vao mang (them vao csdl)
    csdl.push(sinhvien);
    // Re-render data
    render();
    // Reset form
    form.reset();
  }
};

// Render function
function render() {
  // Show data
  var content = "";
  for (var i = 0; i < csdl.length; i++) {
    content =
      content +
      `
    <tr>
      <td>${csdl[i].name}</td>
      <td>${csdl[i].ass1}</td>
      <td>${csdl[i].ass2}</td>
      <td>${csdl[i].baove}</td>
      <td><button onclick="deleteSinhvien(${i})" data-id="${i}">Xoa</button></td>
    </tr>
    `;
  }
  table.innerHTML = content;
}

function deleteSinhvien(index) {
  if (index >= 0 && index < csdl.length) {
    csdl.splice(index, 1); // Xóa sinh viên khỏi mảng
    render(); // Cập nhật giao diện
  }
}
