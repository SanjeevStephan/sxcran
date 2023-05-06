   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   
            ques_files = [
						"2015.History.S01.Paper.01.pdf",
                        "2015.History.S01.Paper.02..pdf",
                        "2015.History.S01.Paper.AECC01.pdf",
                        "2016.History.Mid.S01.Paper.01.pdf",
                        "2016.History.Mid.S01.Paper.02.pdf",
                        "2016.History.Mid.S02.Paper.04.pdf",
                        "2016.History.Mid.S02.Paper.03.pdf",
                        "2016.History.Mid.S02.Paper.04.pdf",
                        "2016.History.S01.Paper.AECC01.pdf",
                        "2017.History.Mid.S02.Paper.HISC203.pdf",
                        "2017.History.Mid.S03.Paper.07.pdf",
                        "2017.History.S02.AECC.02.pdf",
                        "218 2017.History.S02.GE.02.pdf",
                        "2017.History.S02.Paper.03.pdf",
                        "2017.History.S02.Paper.04.pdf",
                        "2017.History.S03.Paper.05.pdf",
                        "2017.History.S03.Paper.06.pdf",
                        "2017.History.S03.Paper.07.pdf",
                        "2017.History.S03.SEC.01.pdf",
                        "2018.History.Mid.S04.Paper.08.pdf",
                        "2018.History.Mid.S04.Paper.09.pdf",
                        "2018.History.Mid.S04.Paper.10(1).pdf",
                        "2018.History.Mid.S04.Paper.10.pdf",
                        "2018.History.Mid.S05.Paper.12.pdf",
                        "2018.History.S04.GE.04.pdf",
                        "2018.History.S04.Paper.010(1).pdf",
                        "2018.History.S04.Paper.010.pdf",
                        "2018.History.S04.Paper.08.pdf",
                        "2018.History.S04.SEC.02.pdf",
                        "2018.History.S05.DSE01.pdf",
                        "2018.History.S05.DSE02.pdf",
                        "2018.History.S05.Paper.011.pdf",
                        "2018.History.S05.Paper.012.pdf",
                        "2019.History.S06.DSE04.HISDSE04.pdf",
                        "2019.History.S06.Paper.013.HISCC613.pdf",
                        "2019.History.S06.Paper.014.HISCC614.pdf",
                        "2020.History.S06.Paper.013.HISCC613.pdf",
                        "2020.History.S06.Paper.014.HISCC614.pdf",
                        "2020.History.S06.Paper.DSE03.pdf",
                        "2020.History.S06.Paper.HISDSE04.pdf",
						
   ];

   course_codes = [
       "HISCC101",
       "HISCC101",
       "ENGAEC01",
       "HISGE01",
       "HISCC203",
       "HISCC204",
       "HISCC205",
       "HISCC206",
       "HISCC207",
       "HISCC208",
       "HISC209",
        "HISC209",
         "HISC209",
          "HISC209",

   ];
            ques_titles = [
						 "2015.History.S01.Paper.01.pdf",
                        "2015.History.S01.Paper.02..pdf",
                        "2015.History.S01.Paper.AECC01.pdf",
                        "2016.History.Mid.S01.Paper.01.pdf",
                        "2016.History.Mid.S01.Paper.02.pdf",
                        "2016.History.Mid.S02.Paper.04.pdf",
                        "2016.History.Mid.S02.Paper.03.pdf",
                        "2016.History.Mid.S02.Paper.04.pdf",
                        "2016.History.S01.Paper.AECC01.pdf",
                        "2017.History.Mid.S02.Paper.HISC203.pdf",
                        "2017.History.Mid.S03.Paper.07.pdf",
                        "2017.History.S02.AECC.02.pdf",
                        "218 2017.History.S02.GE.02.pdf",
                        "2017.History.S02.Paper.03.pdf",
                        "2017.History.S02.Paper.04.pdf",
                        "2017.History.S03.Paper.05.pdf",
                        "2017.History.S03.Paper.06.pdf",
                        "2017.History.S03.Paper.07.pdf",
                        "2017.History.S03.SEC.01.pdf",
                        "2018.History.Mid.S04.Paper.08.pdf",
                        "2018.History.Mid.S04.Paper.09.pdf",
                        "2018.History.Mid.S04.Paper.10(1).pdf",
                        "2018.History.Mid.S04.Paper.10.pdf",
                        "2018.History.Mid.S05.Paper.12.pdf",
                        "2018.History.S04.GE.04.pdf",
                        "2018.History.S04.Paper.010(1).pdf",
                        "2018.History.S04.Paper.010.pdf",
                        "2018.History.S04.Paper.08.pdf",
                        "2018.History.S04.SEC.02.pdf",
                        "2018.History.S05.DSE01.pdf",
                        "2018.History.S05.DSE02.pdf",
                        "2018.History.S05.Paper.011.pdf",
                        "2018.History.S05.Paper.012.pdf",
                        "2019.History.S06.DSE04.HISDSE04.pdf",
                        "2019.History.S06.Paper.013.HISCC613.pdf",
                        "2019.History.S06.Paper.014.HISCC614.pdf",
                        "2020.History.S06.Paper.013.HISCC613.pdf",
                        "2020.History.S06.Paper.014.HISCC614.pdf",
                        "2020.History.S06.Paper.DSE03.pdf",
                        "2020.History.S06.Paper.HISDSE04.pdf",
                          
					 ];
					 
			  
            ques_path = "../../../uploads/sxcran/Previous.Year.Semester.Question.Papers";
         //   ques_id = "id_ques_paper_list";
            ques_id = "demo";

			  //loadQues();