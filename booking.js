/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_day = 40;
let days_input = document.getElementById('days');
let total_cost_element = document.getElementById('total_cost');
let reset = document.getElementById('reset_button');

function updateTotalCost() {
    let number_of_days = parseInt(days_input.value, 10);
    if (isNaN(number_of_days) || number_of_days < 1) {
        number_of_days = 1;
    }
    let total_cost = number_of_days * cost_day;
    total_cost_element.text_content = total_cost;
}


days_input.addEventListener('input', updateTotalCost);

reset.addEventListener('click', () => {
    days_input.value = 1;
    updateTotalCost();
});

updateTotalCost();



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let day_counter_element = document.getElementById('day_counter');
let day_buttons = document.querySelectorAll('.day_button');

let selected_days = new Set();

function updateTotals() {
    let number_of_days = selected_days.size;
    let total_cost = number_of_days * cost_day;
    day_counter_element.text_content = number_of_days;
    total_cost_element.text_content = total_cost;
}

function handleDayButtonClick(event) {
    let button = event.target;

    if (button.class_list.contains('clicked')) {
        button.class_list.remove('clicked');
        selected_days.delete(button.text_content);
    } else {
        button.class_list.add('clicked');
        selected_days.add(button.text_content);
    }

    updateTotals();
}

day_buttons.forEach(button => {
    button.addEventListener('click', handleDayButtonClick);
});

updateTotals();





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear_button = document.getElementById('clear_button');


function updateTotals() {
    let number_of_days = selected_days.size;
    let total_cost = number_of_days * cost_day;
    day_counter_element.text_content = number_of_days;
    total_cost_element.text_content = total_cost;
}

function handleDayButtonClick(event) {
    let button = event.target;

    if (button.class_list.contains('clicked')) {
        button.class_list.remove('clicked');
        selected_days.delete(button.text_content);
    } else {
        button.class_list.add('clicked');
        selected_days.add(button.text_content);
    }

    updateTotals();
}

function clearSelections() {
    day_buttons.forEach(button => {
        button.class_list.remove('clicked');
    });
    selected_days.clear();
    updateTotals();
}

day_buttons.forEach(button => {
    button.addEventListener('click', handleDayButtonClick);
});

clear_button.addEventListener('click', clearSelections);

updateTotals();






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let full_day_button = document.getElementById('full_day_button');
let half_day_button = document.getElementById('half_day_button');

function updateTotals() {
    let number_of_days = selected_days.size;
    let total_cost = number_of_days * cost_day;
    day_counter_element.text_content = number_of_days;
    total_cost_element.text_content = total_cost;
}

function handleDayButtonClick(event) {
    let button = event.target;

    if (button.class_list.contains('clicked')) {
        button.class_list.remove('clicked');
        selected_days.delete(button.text_content);
    } else {
        button.class_list.add('clicked');
        selected_days.add(button.text_content);
    }

    updateTotals();
}

function clearSelections() {
    day_buttons.forEach(button => {
        button.class_list.remove('clicked');
    });
    selected_days.clear();
    updateTotals();
}

function setFullDayRate() {
    cost_day = 35;
    full_day_button.class_list.add('clicked');
    half_day_button.class_list.remove('clicked');
    updateTotals();
}

function setHalfDayRate() {
    cost_day = 20;
    full_day_button.class_list.remove('clicked');
    half_day_button.class_list.add('clicked');
    updateTotals();

    day_buttons.forEach(button => {
        button.addEventListener('click', handleDayButtonClick);
    });

    clear_button.addEventListener('click', clearSelections);

    full_day_button.addEventListener('click', setFullDayRate);
    half_day_button.addEventListener('click', setHalfDayRate);

    updateTotals();




    // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


    function updateTotals() {
        let number_of_days = selected_days.size;
        let total_cost = number_of_days * cost_day;
        day_counter_element.text_content = number_of_days;
        total_cost_element.text_content = total_cost;
    }

    function handleDayButtonClick(event) {
        let button = event.target;

        if (button.class_list.contains('clicked')) {
            button.class_list.remove('clicked');
            selected_days.delete(button.text_content);
        } else {
            button.class_list.add('clicked');
            selected_days.add(button.text_content);
        }

        updateTotals();
    }

    function clearSelections() {
        day_buttons.forEach(button => {
            button.class_list.remove('clicked');
        });
        selected_days.clear();
        updateTotals();
    }

    function setFullDayRate() {
        cost_day = 40;
        full_day_button.class_list.add('clicked');
        half_day_button.class_list.remove('clicked');
        updateTotals();

        function setHalfDayRate() {
            cost_day = 20;
            full_day_button.class_list.remove('clicked');
            half_day_button.class_list.add('clicked');
            updateTotals();

            day_buttons.forEach(button => {
                button.addEventListener('click', handleDayButtonClick);
            });

            clear_button.addEventListener('click', clearSelections);

            full_day_button.addEventListener('click', setFullDayRate);
            half_day_button.addEventListener('click', setHalfDayRate);

            updateTotals();





            /********* calculate *********/
            // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

            function updateTotals() {
                let number_of_days = selected_days.size;
                let total_cost = number_of_days * cost_day;
                day_counter_element.text_content = number_of_days;
                updateCalculatedCost(total_cost);
            }

            function handleDayButtonClick(event) {
                let button = event.target;

                if (button.class_list.contains('clicked')) {
                    button.class_list.remove('clicked');
                    selected_days.delete(button.text_content);
                } else {
                    button.class_list.add('clicked');
                    selected_days.add(button.text_content);
                }

                updateTotals();
            }

            function clearSelections() {
                day_buttons.forEach(button => {
                    button.class_list.remove('clicked');
                });
                selected_days.clear();
                updateTotals();
            }

            function setFullDayRate() {
                cost_day = 40;
                full_day_button.class_list.add('clicked');
                half_day_button.class_list.remove('clicked');
                updateTotals();

                function setHalfDayRate() {
                    cost_day = 20;
                    full_day_button.class_list.remove('clicked');
                    half_day_button.class_list.add('clicked');
                    updateTotals();

                    function updateCalculatedCost(total_cost) {
                        calculated_cost_element.innerHTML = total_cost;
                    }

                    day_buttons.forEach(button => {
                        button.addEventListener('click', handleDayButtonClick);
                    });
                }
            }
        }
    }
}
clear_button.addEventListener('click', clearSelections);

full_day_button.addEventListener('click', setFullDayRate);
half_day_button.addEventListener('click', setHalfDayRate);

updateTotals();
