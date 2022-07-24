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
        <tr class="addedRows">
            <td class="addedRows">${first}</td>
            <td class="addedRows">${last}</td>
            <td class="addedRows">${id}</td>
            <td class="addedRows">${title}</td>
            <td class="addedRows">$${annualSalary}</td>
            <td class="addedRows"><button class="dleteBtn">Delete</td>
        <tr/>
            `);
            // empty the input
            $('#firstInput').val('');
            $('#lastInput').val('');
            $('#idInput').val('');
            $('#titleInput').val('');
            $('#salaryInput').val('');
            // gathering the sum of annual salaries and calculating monthly total cost (rounding to two decimals)
            monthlyTotal += annualSalary/12
            console.log(monthlyTotal);
            $('#monthlyTotal').empty()
            $('#monthlyTotal').append(monthlyTotal.toFixed(2))
            // Color alert for monthly cost exceeding $20,000
            if(monthlyTotal > 20000){
                $('#monthlyTotal').addClass('red')
            }
}



function removeEntry() {
    console.log('time to remove!');
    // removes last entry
    $(this).closest('tr').remove();
    
}