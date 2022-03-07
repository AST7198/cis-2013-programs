//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final MidTerm pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final Test pts (0-35):"));

intGradeOption = parseFloat(prompt("please enter 1 for Grade, 2 for audit"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = 2;

if (intGradeOption===1)
{
    if (floatTotalPts >= 80)
    {
        stringFinalGrade = "Pass";
    }
    else
    {
        stringFinalGrade = "Fail";
    }
}
else
{
    if (floatTotalPts >=90)
    {
        stringFinalGrade = "A";
    }
        else if (floatTotalPts >=80 && floatTotalPts <=89)
        {
            stringFinalGrade = "B";
        }
            else
            {
                stringFinalGrade = "F";
            }
}






alert("Your final grade is: " +stringFinalGrade);
