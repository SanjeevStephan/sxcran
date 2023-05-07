
var challan_id;
var country_names;
var country_flag_cover_file_name;
var challan_cover_file_path;
var challan_pdf_file_name;
var challan_pdf_path;
var country_lang;

function loadChallans() {


    /*
    audio_card_text += "<div class='card'>";
    audio_card_text += " <div class='badge badge-success badge-lg'><h6>Audio Books</h6></div>";
    audio_card_text += "<div class='card-body'>";
    audio_card_text += "<div id='audio_card'></div>"
    */


    var challan_list = "";
    var apps_num;

    challan_list += "<table class='table' border='0'>";
    challan_list += "<th>S.no</th><th>Flag</th><th>Country</th><th>Language</th><th>Read</th>";
    /*   ques_list += "<th>S.no</th><th>Title</th><th>Read</th>"; */
    for (i = 0; i < country_names.length ; i++) {

        challan_list += "<tr><td>";
        challan_list += i + "</td>";
        challan_list += "<td>";
        challan_list += "<img src='" + challan_cover_file_path + "/" + country_flag_cover_file_name[i] + "' style='width:155px;height:120px'/>";
        challan_list += "</td>";
        challan_list += "<td>";
        challan_list += country_names[i];
        challan_list += "</td>";
	challan_list += "<td>" + country_lang[i] + "</td>";
        challan_list += "<td>";
        challan_list += "<a href='" + challan_pdf_path + "/" + challan_pdf_file_name[i] + "' target='_blank'/><button class='btn btn-danger'>Read</button></a>";
        challan_list += "</td></tr>";
    }
    challan_list += "</table>";
    document.getElementById(challan_id).innerHTML = challan_list;
}