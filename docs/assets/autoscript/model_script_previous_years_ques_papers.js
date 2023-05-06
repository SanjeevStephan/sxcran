
var ques_id;
var ques_files;
var ques_titles;
var ques_path;

function loadQues() {


    /*
    audio_card_text += "<div class='card'>";
    audio_card_text += " <div class='badge badge-success badge-lg'><h6>Audio Books</h6></div>";
    audio_card_text += "<div class='card-body'>";
    audio_card_text += "<div id='audio_card'></div>"
    */


    var ques_list = "";
    var ques_num;

    ques_list += "<table class='table' border='0'>";
    ques_list += "<th>S.no</th><th>Course Code</th><th>Course Title</th><th>Read</th>";
 /*   ques_list += "<th>S.no</th><th>Title</th><th>Read</th>"; */
    for (i = 1; i < ques_titles.length ; i++) {

        ques_list += "<tr><td>";
        ques_list += i + "</td>";
        ques_list += "<td>";
        ques_list += course_codes[i];
        ques_list += "</td>";
        ques_list += "<td>";
        ques_list += ques_titles[i];
        ques_list += "</td>";
        ques_list += "<td>";
        ques_list += "<a href='" + ques_path + "/" + ques_files[i] + "' target='_blank'/><button class='btn btn-danger'>Read</button></a>";
        ques_list += "</td></tr>";
    }
    ques_list += "</table>";
    document.getElementById(ques_id).innerHTML = ques_list;
  // document.getElementById("syllabus_lists").innerHTML = "";
}