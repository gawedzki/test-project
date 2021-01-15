var exercisesList = ['Exercise1', 'Exercise2', 'Exercise3', 'Exercise4', 'Exercise5'];
            
var exercise = {
    name: exercisesList,
    sets: 5,
    reps: [[40, 8], [50, 7], [60, 6]]
}

function createNewTable() {
    var element = document.getElementById("tableDiv");

    var addExerciseSpan = document.createElement("span");

    var addText1 = document.createElement("span");
    addText1.innerHTML = "Number of exercises: ";
    addExerciseSpan.appendChild(addText1);
    
    var removeExerciseButton = document.createElement("button");
    removeExerciseButton.innerHTML = "-";
    removeExerciseButton.onclick = function() { removeRow(); };
    removeExerciseButton.className = "tableButtons";
    addExerciseSpan.appendChild(removeExerciseButton);

    var addExerciseButton = document.createElement("button");
    addExerciseButton.innerHTML = "+";
    addExerciseButton.onclick = function(){ addRow(); };
    addExerciseButton.className = "tableButtons";
    addExerciseSpan.appendChild(addExerciseButton);

    element.appendChild(addExerciseSpan);

    var addSetsSpan = document.createElement("span");
    
    var addText2 = document.createElement("span");
    addText2.innerHTML = "Number of sets: ";
    addSetsSpan.appendChild(addText2);

    var removeSetButton = document.createElement("button");
    removeSetButton.innerHTML = "-";
    removeSetButton.onclick = function() { removeSet(); };
    removeSetButton.className = "tableButtons";
    addSetsSpan.appendChild(removeSetButton);

    var addSetButton = document.createElement("button");
    addSetButton.innerHTML = "+";
    addSetButton.onclick = function() { addSet(); };
    addSetButton.className = "tableButtons";
    addSetsSpan.appendChild(addSetButton);

    element.appendChild(addSetsSpan);

    var newTable = document.createElement("table");
    newTable.id = "myTable";

    element.appendChild(newTable)

    var row = document.createElement("tr");
    var exerciseCell = document.createElement("th");

    exerciseCell.innerHTML = "Exercise:";
    row.appendChild(exerciseCell);

    for (var i = 0; i < exercise.sets; i++) {
        addHeadCells(row);
    }

    newTable.appendChild(row);
    addRow();
}

function addSet() {
    var rows = document.getElementsByTagName("tr");
    addHeadCells(rows[0]);
    for(var i = 1; i < rows.length; i++) {
        addBodyCells(rows[i]);
    }
    exercise.sets++;
}

function removeSet() {
    var rows = document.getElementsByTagName("tr");
    var cells = document.getElementById("myTable").rows[0].cells.length;
    
    if(cells > 3) {
        for(var i = 0; i < rows.length; i++) {
            rows[i].deleteCell(cells-1);
            rows[i].deleteCell(cells-2);
        }
        exercise.sets--;
    }else {
        alert("Do at least one ;)")
    }
}

function addRow() {
    var row = document.createElement("tr");
    var exerciseCell = document.createElement("td");
    var chooseExercise = document.createElement("select");

    for(var i = 0; i <exercisesList.length; i++) {
        chooseExercise.options[i] = new Option(exercisesList[i], exercisesList[i]);
    }

    exerciseCell.appendChild(chooseExercise);
    row.appendChild(exerciseCell);

    for(var i = 0; i < exercise.sets; i++) {
        addBodyCells(row);
    }

    var element = document.getElementById("myTable");
    element.appendChild(row);
}

function removeRow() {
    var rows = document.getElementsByTagName("tr");
    if(rows.length > 2) {
        document.getElementById("myTable").deleteRow(rows.length-1);
    }
}

function addHeadCells(row) {
    var weightCell = document.createElement("th");
    var repCell = document.createElement("th");
    weightCell.innerHTML = "Kg:"
    repCell.innerHTML = "Reps:";
    row.appendChild(weightCell);
    row.appendChild(repCell);
}

function addBodyCells(row) {
    var weightCell = document.createElement("td");
    var weightData = document.createElement("input");
    weightData.type = "text";
    weightCell.appendChild(weightData);
    
    var repCell = document.createElement("td");
    var repData = document.createElement("input");
    repData.type = "text";
    repCell.appendChild(repData);

    row.appendChild(weightCell);
    row.appendChild(repCell);
}