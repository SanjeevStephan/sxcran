
var ebook_id;
var country_names;
var country_flag_cover_file_name;
var ebook_cover_file_path;
var ebook_pdf_file_name;
var ebook_pdf_path;
var country_lang;

function loadEbooks() {


    /*
    audio_card_text += "<div class='card'>";
    audio_card_text += " <div class='badge badge-success badge-lg'><h6>Audio Books</h6></div>";
    audio_card_text += "<div class='card-body'>";
    audio_card_text += "<div id='audio_card'></div>"
    */


    var ebook_list = "";
    var apps_num;

    ebook_list += "<table class='table' border='0'>";
    ebook_list += "<th>S.no</th><th>Flag</th><th>Country</th><th>Language</th><th>Read</th>";
    /*   ques_list += "<th>S.no</th><th>Title</th><th>Read</th>"; */
    for (i = 0; i < country_names.length ; i++) {

        ebook_list += "<tr><td>";
        ebook_list += i + "</td>";
        ebook_list += "<td>";
        ebook_list += "<img src='" + ebook_cover_file_path + "/" + country_flag_cover_file_name[i] + "' style='width:155px;height:120px'/>";
        ebook_list += "</td>";
        ebook_list += "<td>";
        ebook_list += country_names[i];
        ebook_list += "</td>";
	ebook_list += "<td>" + country_lang[i] + "</td>";
        ebook_list += "<td>";
        ebook_list += "<a href='" + ebook_pdf_path + "/" + ebook_pdf_file_name[i] + "' target='_blank'/><button class='btn btn-danger'>Read</button></a>";
        ebook_list += "</td></tr>";
    }
    ebook_list += "</table>";
    document.getElementById(ebook_id).innerHTML = ebook_list;
}