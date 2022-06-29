// var uploaded_image;
$(document).ready(function () {
  console.log("doc ready");
});

var loadFile = function (event) {
  console.log("change");
  uploaded_image = URL.createObjectURL(event.target.files[0]);
};

const startButton = document.getElementById("start-button");
var runApp = function () {
  console.log("running");
  all_rows = {} // id: objc
    appending_container = "appending_container"

    project_name_1 = "burger"
    let obj1 = makeGrabCutRow(appending_container, uploaded_image, project_name_1)
    let obj1_id = obj1.id
    all_rows[obj1_id] = obj1
}
//   all_rows = {}; // id: objc
//   appending_container = "appending_container";

//   project_name_1 = "burger";
//   let obj1 = makeGrabCutRow(
//     appending_container,
//     `url(${uploaded_image})`,
//     project_name_1
//   );
//   let obj1_id = obj1.id;
//   all_rows[obj1_id] = obj1;

//project_name_2 = "chess"
//let obj2 = makeGrabCutRow(appending_container, "../static/images/chess/_original/test_chess.jpeg", project_name_2)
//let obj2_id = obj2.id
//all_rows[obj2_id] = obj2
// });
