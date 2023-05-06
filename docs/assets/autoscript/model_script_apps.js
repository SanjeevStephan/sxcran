
var apps_id;
var apps_files;
var apps_titles;
var apps_path;

function loadApps() {


    /*
    audio_card_text += "<div class='card'>";
    audio_card_text += " <div class='badge badge-success badge-lg'><h6>Audio Books</h6></div>";
    audio_card_text += "<div class='card-body'>";
    audio_card_text += "<div id='audio_card'></div>"
    */


    var apps_list = "";
    var apps_num;

    apps_list += "<table class='table' border='0'>";
    apps_list += "<th>S.no</th><th>Course Code</th><th>Course Title</th><th>Read</th>";
    /*   ques_list += "<th>S.no</th><th>Title</th><th>Read</th>"; */
    for (i = 0; i < apps_titles.length ; i++) {

        apps_list += "<tr><td>";
        apps_list += i + "</td>";
        apps_list += "<td>";
        apps_list += course_codes[i];
        apps_list += "</td>";
        apps_list += "<td>";
        apps_list += apps_titles[i];
        apps_list += "</td>";
        apps_list += "<td>";
        apps_list += "<a href='" + apps_path + "/" + apps_files[i] + "' target='_blank'/><button class='btn btn-danger'>Read</button></a>";
        apps_list += "</td></tr>";
    }
    apps_list += "</table>";
    document.getElementById(apps_id).innerHTML = apps_list;
}