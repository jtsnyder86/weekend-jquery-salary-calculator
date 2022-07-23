console.log('client.js is running');

$(document).ready(calculateNow);

function calculateNow() {  // this is our base function to call jquery
    console.log('calculateNow is working'); // this is checking for functionality -- works!

    $('#submitBtn').on('click', addEE)



}

function addEE() {
    console.log('clicked!');
    //getter!
    let first = $('#firstInput').val();
    let last = $('#lastInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = Number($('#salaryInput').val());

    console.log(first,last, id, title, annualSalary);

    $('#container').append(`
        <tr>
            <td>${first}</td>
            <td>${last}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
        <tr/>
            `);

}