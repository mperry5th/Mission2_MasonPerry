//JS file for my project - 1/8/22
$("#btnSubmit").click(function () {

    //Gather inputs
    fAssignmentGrade = parseInt($("#gAssignments").val()) * .55;
    fGpGrade = parseInt($("#gGroupProjects").val()) * .05;
    fQuizGrade = parseInt($("#gQuizzes").val()) * .10;
    fExamGrade = parseInt($("#gExams").val()) * .20;
    fIntexGrade = parseInt($("#gIntex").val()) * .10;

    //Do maths
    sFinalGradeLetter = ''
    fFinalGrade = fAssignmentGrade + fGpGrade + fQuizGrade + fExamGrade + fIntexGrade;

    //Determine letter grade
    if (fFinalGrade >= 94) {
        sFinalGradeLetter = 'A';
    }
    else if (fFinalGrade >= 90) {
        sFinalGradeLetter = 'A-';
    }
    else if (fFinalGrade >= 87) {
        sFinalGradeLetter = 'B+';
    }
    else if (fFinalGrade >= 84) {
        sFinalGradeLetter = 'B';
    }
    else if (fFinalGrade >= 80) {
        sFinalGradeLetter = 'B-';
    }
    else if (fFinalGrade >= 77) {
        sFinalGradeLetter = 'C+';
    }
    else if (fFinalGrade >= 740)  {
        sFinalGradeLetter = 'C';
    }
    else if (fFinalGrade >= 70) {
        sFinalGradeLetter = 'C-';
    }
    else if (fFinalGrade >= 67) {
        sFinalGradeLetter = 'D+';
    }
    else if (fFinalGrade >= 64) {
        sFinalGradeLetter = 'D';
    }
    else if (fFinalGrade >= 60) {
        sFinalGradeLetter = 'D-';
    }
    else {
        sFinalGradeLetter = 'E';
    }

    //Make output string and send to html doc
    sOutput = 'You managed a ' + fFinalGrade.toFixed(2) + '% which netted you a ' + sFinalGradeLetter + " in the class!";
    $("#sOutput").html(sOutput);
    sessionStorage.setItem('Output', sOutput)
});