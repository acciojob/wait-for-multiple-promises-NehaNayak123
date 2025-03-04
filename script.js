    const loading=document.getElementById("loading");
//your JS code here. If required.
// function createPromise(index) {
//     const time = (Math.random() * 2 + 1).toFixed(3);
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ index, time }), time * 1000);
//     });
// }
function createPromise(index) {
    const time = (Math.random() * 1 + 1).toFixed(3); // adjust the maximum time to 2 seconds
    return new Promise(resolve => {
        setTimeout(() => resolve({ index, time }), time * 1000);
    });
}

// Selecting the table body
const output = document.getElementById("output");

// Creating 3 promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// Waiting for all promises to resolve
const startTime = performance.now();

// Promise.all(promises).then(results => {
//     const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
//     output.innerHTML = "";

//     // Append resolved results to the table
//     results.forEach(({ index, time }) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `<td>Promise ${index}</td><td>${time}</td>`;
        
// 		output.appendChild(row);
//     });

//     // Append total time row
//     const totalRow = document.createElement("tr");
//     totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
// 	output.appendChild(totalRow);
// });

Promise.all(promises).then(results => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
    let resultsHTML = "";

    // Append resolved results to the string
    results.forEach(({ index, time }) => {
        resultsHTML += `<tr><td>Promise ${index}</td><td>${time}</td></tr>`;
    });

    // Append total time row to the string
    resultsHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;

    // Set the table body's innerHTML to the results string
    output.innerHTML = resultsHTML;
});