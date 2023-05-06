
var syllabus_id;
var syllabus_files;
var syllabus_titles;
var syllabus_path;

function loadSyllabus() {

    var syllabus_list = "";
    var syllabus_num;

    syllabus_list += "<table class='table' border='0'>";
    syllabus_list += "<th>S.no</th><th>Course Code</th><th>Course Title</th><th>Semester</th><th>Read</th>";

    for (i = 1; i < syllabus_titles.length ; i++) {

        syllabus_list += "<tr><td>";
        syllabus_list += i + "</td>";
        syllabus_list += "<td>";
        syllabus_list += course_codes[i];
        syllabus_list += "</td>";
        syllabus_list += "<td>";
        syllabus_list += syllabus_titles[i];
        syllabus_list += "</td>";
        syllabus_list += "<td>";
        syllabus_list += semester_no[i];
        syllabus_list += "</td>";
        syllabus_list += "<td>";
        syllabus_list += "<a href='" + syllabus_path + "/" + syllabus_files[i] + "' target='_blank'/><button class='btn btn-danger'>Read</button></a>";
        syllabus_list += "</td></tr>";
    }
    syllabus_list += "</table>";
    document.getElementById(syllabus_id).innerHTML = syllabus_list;
   // document.getElementById("id_ques_paper_list").innerHTML = "";
}