console.log('client.js is running');

$(document).ready(calculateNow);

let monthlyTotal = 0

function calculateNow() {  // this is our base function to call jquery
    console.log('calculateNow is working'); // this is checking for functionality -- works!
    // adds the employee info to table in dom
    $('#submitBtn').on('click', addEE)
    // add the salaries to calculate monthly total

    //deletes information added (currently does NOT remove salary from monthly total)
    $('#container').on('click', '.dleteBtn', removeEntry)



}

function addEE() {
    // console.log('clicked!');
    //getter!
    let first = $('#firstInput').val();
    let last = $('#lastInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = Number($('#salaryInput').val());


    // console.log(first,last, id, title, annualSalary);
    //appending to add the input data into the table
    $('#container').append(`
        <tr>
            <td>${first}</td>
            <td>${last}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
            <td><button class="dleteBtn">Delete<td>
        <tr/>
            `);
            // empty the input
            $('#firstInput').val('');
            $('#lastInput').val('');
            $('#idInput').val('');
            $('#titleInput').val('');
            $('#salaryInput').val('');

            monthlyTotal += annualSalary/12
            console.log(monthlyTotal);
            $('#monthlyTotal').empty()
            $('#monthlyTotal').append(Math.round(monthlyTotal))

            if(monthlyTotal > 20000){
                $('#monthlyTotal').addClass('red')
            }
}



function removeEntry() {
    console.log('time to remove!');
    // removes last entry
    $(this).closest('tr').remove();
    
}