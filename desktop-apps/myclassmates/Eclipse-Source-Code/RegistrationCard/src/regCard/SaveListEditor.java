package regCard;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

import javax.swing.JOptionPane;

public class SaveListEditor {

static String txtStud,txtRegno,txtExmroll,txtName,txtGender,txtClassroll,txtDob,dobYear,txtFathername,txtReligion,txtCategory,
txtHonours,txtSemester,txtStream,txtAecc,aecc;
	
	public void SaveEdit() 
	{
		StudentListEditor Saveedit = new StudentListEditor();
		Scanner in  = new Scanner(System.in);
		String Homepath = System.getProperty("user.home");
		String currentDir = System.getProperty("user.dir");
		
		String docDir = Homepath +"\\Documents\\Stephenware\\sxc_student_iCards";
		String regDir =docDir + "\\Regno";
		String sxcStudDir = currentDir + "\\sxc_student_iCards";
	     
		
		//txtStud=launch.studname;
		txtName=Saveedit.studname;
		txtRegno=Saveedit.regno;
		txtExmroll=Saveedit.exmno;
        txtClassroll=Saveedit.classroll;
        txtDob=Saveedit.dob;
        txtFathername=Saveedit.fathername;
        txtGender=Saveedit.gender;
        txtReligion=Saveedit.religion;
		txtCategory=Saveedit.category;
		dobYear=Saveedit.year;
		txtStream=Saveedit.stream;
		txtHonours=Saveedit.honours;
		txtSemester=Saveedit.semester;
		txtAecc = Saveedit.aecc;
	 	String str="Saving Your Details" +"\nName :\t"+ txtName
                +"\nRegistration No :\t"+txtRegno
                +"\nExam Roll No :\t"+txtExmroll
                +"\nClass Roll no :\t"+txtClassroll
                +"\nFather Name:\t"+txtFathername
                +"\nGender :\t"+txtGender
                +"\nDate Of Birth :\t"+txtDob
                +"\nReligion :\t"+txtReligion
                +"\nCategory :\t"+txtCategory
                +"\nStream :\t"+txtStream
                +"\nHonours : \t"+txtHonours
                +"\nSemister  :\t "+txtSemester
                +"\nAECC Paper :\t "+txtAecc
	       	     +"\nSaveListEditor.java";

		 try {
			 boolean createDir = (new File(docDir)).mkdirs();
			 
			String filePath = regDir +"\\" +txtExmroll+".txt";
			 
			JOptionPane.showMessageDialog(null,"File will be saved in the path :\n"+filePath);	
			
			FileWriter fWriter = new FileWriter(filePath);
			BufferedWriter bwriter = new BufferedWriter(fWriter);
		    bwriter.write("%"+txtRegno);
		    bwriter.write("%"+txtExmroll);
		    bwriter.write("%"+txtClassroll);
		    bwriter.write("%"+txtName);
		    bwriter.write("%"+txtGender);
		    bwriter.write("%"+txtDob);
		    bwriter.write("%"+txtFathername);
		    bwriter.write("%"+txtReligion);
		    bwriter.write("%"+txtCategory);
		    bwriter.write("%"+txtStream);
		    bwriter.write("%"+txtHonours);
		    bwriter.write("%"+txtSemester);
		    bwriter.write("%"+txtAecc);
		    bwriter.close();
			
		    boolean success = (new File(docDir)).isFile();
		    while(success) 
		    {JOptionPane.showMessageDialog(null,"File Succesfully Written");}
		  } catch (IOException e) {
			  JOptionPane.showMessageDialog(null,"Please Check your Class Roll Path !","Error found in SaveListEditor.java ",JOptionPane.ERROR_MESSAGE);
				  e.printStackTrace();}
		
		 try {
			String rollPath = docDir + "\\ClassRollNo";
			boolean mdroll = (new File(rollPath)).mkdirs();
			String filePath = docDir +"\\ClassRollNo\\"+txtClassroll+".txt";
			 
			 FileWriter fWriter2 = new FileWriter(filePath);
			 BufferedWriter bw2 = new BufferedWriter(fWriter2);
			 bw2.write(txtExmroll);
			 bw2.close();
		} catch (IOException e) {
			
			JOptionPane.showMessageDialog(null,"Please Check your Class Roll Path !","Error found in SaveListEditor.java ",JOptionPane.ERROR_MESSAGE);
			e.printStackTrace();
		}
		
		 StudentListEditor studlist = new StudentListEditor();
		 studlist.setVisible(true);
	}
	}


