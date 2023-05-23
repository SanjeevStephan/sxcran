
    function hello()
    {
        //document.write("hello world");
        var name = document.getElementById("name");
        //document.write(name);
        alert(document.getElementById("name").value);
        //document.write(document.getElementById("name").value);
        document.form1.Username.value;

    }
    function color()
    {
        hide();
        document.getElementById("body").style.backgroundColor = "#ffb3d9";
        window.print();
        
    }
	function pink()
	{   document.getElementById("body").style.backgroundColor = "#ffb3d9";
	}
    function read()
    {
//      document.getElementById("username").innerHTML = "SANJEEV STEPHAN MURMU";
        var name = document.getElementById("NAME").value;
        var id = document.getElementById("CID").value;
        var stream = document.getElementById("STREAM").value;
        var honours = document.getElementById("HONOURS").value;
        var batch = document.getElementById("BATCH").value;
        var examroll = document.getElementById("EXAMROLL").value;
//        var admf  = +document.getElementById("ADMF").value;
        var tf = +document.getElementById("TF").value;
/*
        var sf = +document.getElementById("SF").value;
        var cf = +document.getElementById("CF").value;
        var grty = +document.getElementById("GRTY").value;
        var bfe = +document.getElementById("BFE").value;
        var lb = +document.getElementById("LB").value;
        var ce = +document.getElementById("CE").value;
        var yec = +document.getElementById("YEC").value;
*/
        var s = "S";
        var cby = document.getElementById("CBY").value;
        var cdate = document.getElementById("CDATE").value;
        var ctime = document.getElementById("CTIME").value;
        var amount = document.getElementById("AMOUNT").value;
        var aword = document.getElementById("AWORD").value;
        var part =  document.getElementById("PART").value;
		var account = document.getElementById("ACCOUNT").value;

      
        document.getElementById("student1").innerHTML = name;
        document.getElementById("student2").innerHTML = name;
        document.getElementById("student3").innerHTML = name;
        document.getElementById("student4").innerHTML = name;

        document.getElementById("stream1").innerHTML = stream;
        document.getElementById("stream2").innerHTML = stream;
        document.getElementById("stream3").innerHTML = stream;
        document.getElementById("stream4").innerHTML = stream;

        document.getElementById("honours1").innerHTML = honours;
        document.getElementById("honours2").innerHTML = honours;
        document.getElementById("honours3").innerHTML = honours;
        document.getElementById("honours4").innerHTML = honours;

        document.getElementById("batch1").innerHTML = batch;
        document.getElementById("batch2").innerHTML = batch;
        document.getElementById("batch3").innerHTML = batch;
        document.getElementById("batch4").innerHTML = batch;

        document.getElementById("roll1").innerHTML = examroll;
        document.getElementById("roll2").innerHTML = examroll;
        document.getElementById("roll3").innerHTML = examroll;
        document.getElementById("roll4").innerHTML = examroll;
/*
        document.getElementById("Admf1").innerHTML = admf;
        document.getElementById("Admf2").innerHTML = admf;
        document.getElementById("Admf3").innerHTML = admf;
        document.getElementById("Admf4").innerHTML = admf;
*/
        document.getElementById("tf1").innerHTML = tf;
        document.getElementById("tf2").innerHTML = tf;
        document.getElementById("tf3").innerHTML = tf;
        document.getElementById("tf4").innerHTML = tf;
/*
        document.getElementById("sf1").innerHTML = sf;
        document.getElementById("sf2").innerHTML = sf;
        document.getElementById("sf3").innerHTML = sf;
        document.getElementById("sf4").innerHTML = sf;

        document.getElementById("cf1").innerHTML = cf;
        document.getElementById("cf2").innerHTML = cf;
        document.getElementById("cf3").innerHTML = cf;
        document.getElementById("cf4").innerHTML = cf;

        document.getElementById("grty1").innerHTML = grty;
        document.getElementById("grty2").innerHTML = grty;
        document.getElementById("grty3").innerHTML = grty;
        document.getElementById("grty4").innerHTML = grty;

        document.getElementById("bfe1").innerHTML = bfe;
        document.getElementById("bfe2").innerHTML = bfe;
        document.getElementById("bfe3").innerHTML = bfe;
        document.getElementById("bfe4").innerHTML = bfe;


        document.getElementById("lb1").innerHTML = lb;
        document.getElementById("lb2").innerHTML = lb;
        document.getElementById("lb3").innerHTML = lb;
        document.getElementById("lb4").innerHTML = lb;

        document.getElementById("ce1").innerHTML = ce;
        document.getElementById("ce2").innerHTML = ce;
        document.getElementById("ce3").innerHTML = ce;
        document.getElementById("ce4").innerHTML = ce;

        document.getElementById("yec1").innerHTML = yec;
        document.getElementById("yec2").innerHTML = yec;
        document.getElementById("yec3").innerHTML = yec;
        document.getElementById("yec4").innerHTML = yec;
*/
        //  var total = admf + tf + sf + cf + grty + bfe + lb + ce + yec;
            var total = tf;
	       document.getElementById("AMOUNT").value = total;
        
        document.getElementById("amount1").innerHTML = total;
        document.getElementById("amount2").innerHTML = total;
        document.getElementById("amount3").innerHTML = total;
        document.getElementById("amount4").innerHTML = total;
		

        document.getElementById("part1").innerHTML = s + part;
        document.getElementById("part2").innerHTML = s + part;
        document.getElementById("part3").innerHTML = s + part;
        document.getElementById("part4").innerHTML = s + part;

        document.getElementById("part5").innerHTML = part;
        document.getElementById("part6").innerHTML = part;
        document.getElementById("part7").innerHTML = part;
        document.getElementById("part8").innerHTML = part;
		    //  document.getElementById("total").innerHTML = total;

        document.getElementById("aword1").innerHTML = aword;
        document.getElementById("aword2").innerHTML = aword;
        document.getElementById("aword3").innerHTML = aword; 
        document.getElementById("aword4").innerHTML = aword;

        document.getElementById("cby1").innerHTML = cby;
        document.getElementById("cby2").innerHTML = cby;
        document.getElementById("cby3").innerHTML = cby;
        document.getElementById("cby4").innerHTML = cby;

        document.getElementById("date1").innerHTML = cdate;
        document.getElementById("date2").innerHTML = cdate;
        document.getElementById("date3").innerHTML = cdate;
        document.getElementById("date4").innerHTML = cdate;

        document.getElementById("time1").innerHTML = ctime;
        document.getElementById("time2").innerHTML = ctime;
        document.getElementById("time3").innerHTML = ctime;
        document.getElementById("time4").innerHTML = ctime;

        document.getElementById("ChallanID1").innerHTML = id;
        document.getElementById("ChallanID2").innerHTML = id;
        document.getElementById("ChallanID3").innerHTML = id;
        document.getElementById("ChallanID4").innerHTML = id;
		
		
        document.getElementById("account1").innerHTML = account;
        document.getElementById("account2").innerHTML = account;
        document.getElementById("account3").innerHTML = account;
        document.getElementById("account4").innerHTML = account;
		
		

    }
    function hide()
    {
        document.getElementById("dropbox").style.display = "none";
    }
    function display() {
	  document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("dropbox").style.display = "block";
    }

    function calculate()
    {
        var name = document.getElementById("NAME").value;
        var id = document.getElementById("CID").value;
        var stream = document.getElementById("STREAM").value;
        var honours = document.getElementById("HONOURS").value;
        var batch = document.getElementById("BATCH").value;
        var examroll = document.getElementById("EXAMROLL").value;
    //    var admf  = +document.getElementById("ADMF").value;
        var tf = +document.getElementById("TF").value;
        /*

        var sf = +document.getElementById("SF").value;
        var cf = +document.getElementById("CF").value;
        var grty = +document.getElementById("GRTY").value;
        var bfe = +document.getElementById("BFE").value;
        var lb = +document.getElementById("LB").value;
        var ce = +document.getElementById("CE").value;
        var yec = +document.getElementById("YEC").value;
 */       var cby = document.getElementById("CBY").value;
        var cdate = document.getElementById("CDATE").value;
        var ctime = document.getElementById("CTIME").value;
        var amount = document.getElementById("AMOUNT").value;
        var aword = document.getElementById("AWORD").value;
		

    //    var total = admf + tf + sf + cf + grty + bfe + lb + ce + yec;
        var total = tf;
        document.getElementById("total").innerHTML = total;

        document.getElementById("tf1").innerHTML = total;
        document.getElementById("tf2").innerHTML = total;
        document.getElementById("tf3").innerHTML = total;
        document.getElementById("tf4").innerHTML = total;

        //document.getElementById("AMOUNT").value = total;

        document.getElementById("amount1").innerHTML = total;
        document.getElementById("amount2").innerHTML = total;
        document.getElementById("amount3").innerHTML = total;
        document.getElementById("amount4").innerHTML = total;
/*
	    document.getElementById("Admf1").innerHTML = admf;
        document.getElementById("Admf2").innerHTML = admf;
        document.getElementById("Admf3").innerHTML = admf;
        document.getElementById("Admf4").innerHTML = admf;

        document.getElementById("sf1").innerHTML = sf;
        document.getElementById("sf2").innerHTML = sf;
        document.getElementById("sf3").innerHTML = sf;
        document.getElementById("sf4").innerHTML = sf;

        document.getElementById("cf1").innerHTML = cf;
        document.getElementById("cf2").innerHTML = cf;
        document.getElementById("cf3").innerHTML = cf;
        document.getElementById("cf4").innerHTML = cf;

        document.getElementById("grty1").innerHTML = grty;
        document.getElementById("grty2").innerHTML = grty;
        document.getElementById("grty3").innerHTML = grty;
        document.getElementById("grty4").innerHTML = grty;

        document.getElementById("bfe1").innerHTML = bfe;
        document.getElementById("bfe2").innerHTML = bfe;
        document.getElementById("bfe3").innerHTML = bfe;
        document.getElementById("bfe4").innerHTML = bfe;


        document.getElementById("lb1").innerHTML = lb;
        document.getElementById("lb2").innerHTML = lb;
        document.getElementById("lb3").innerHTML = lb;
        document.getElementById("lb4").innerHTML = lb;

        document.getElementById("ce1").innerHTML = ce;
        document.getElementById("ce2").innerHTML = ce;
        document.getElementById("ce3").innerHTML = ce;
        document.getElementById("ce4").innerHTML = ce;

        document.getElementById("yec1").innerHTML = yec;
        document.getElementById("yec2").innerHTML = yec;
        document.getElementById("yec3").innerHTML = yec;
        document.getElementById("yec4").innerHTML = yec;
*/
		//   var total = admf + tf + sf + cf + grty + bfe + lb + ce + yec;
	
		
		
		
		
    }
