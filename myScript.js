var exercisesList = ['Exercise1', 'Exercise2', 'Exercise3', 'Exercise4', 'Exercise5'];
            
            var exercise = {
                name: exercisesList,
                sets: 4,
                reps: [[40, 8], [50, 7], [60, 6]]
            }

            var rows = 0;

            function createNewTable() {
                var row = document.createElement("tr");
                var exerciseCell = document.createElement("th");
                exerciseCell.innerHTML = "Exercise:";

                row.appendChild(exerciseCell);

                for (var i = 0; i < exercise.sets; i++) {
                    var weightCell = document.createElement("th");
                    var repCell = document.createElement("th");
                    weightCell.innerHTML = "Kg:"
                    repCell.innerHTML = "Reps:";
                    row.appendChild(weightCell);
                    row.appendChild(repCell);
                }
                var element1 = document.getElementById("myTable");
                element1.appendChild(row);

                var addExerciseButton = document.createElement("button");
                addExerciseButton.innerHTML = "Add exercise!";
                addExerciseButton.onclick = function(){ addRow(); };

                var addSetButton = document.createElement("button");
                addSetButton.innerHTML = "Add set!";
                addSetButton.onclick = function() { addSet(); };

                var removeSetButton = document.createElement("button");
                removeSetButton.innerHTML = "Remove set!";
                removeSetButton.onclick = function() { removeSet(); }

                var element2 = document.getElementById("tableDiv");
                element2.appendChild(addExerciseButton);
                element2.appendChild(addSetButton);
                element2.appendChild(removeSetButton);
            }

            function addSet() {
                // exercise.sets++;
            }

            function removeSet() {
                // if(exercise.sets > 1) {
                //     exercise.sets--;
                // }
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
                var element = document.getElementById("myTable");
                element.appendChild(row);
                rows++;
                //console.log(exercise.sets, rows);
            }