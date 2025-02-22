document.addEventListener("DOMContentLoaded",function(){
    fetch("mobiles.json")
    .then(response=>response.json())
    .then(data=>displayMobiles(data))
    .then(error=>console.error("Error fetching data:",error));
});
function displayMobiles(mobiles) {
    let tableBody=document.getElementById("mobieData");
    tableBody.innerHTML="";
    mobiles.forEach(mobile=>{
        let row=<tr>
            <td>${mobile.name}</td>
            <td>${mobile.amazon_price}</td>
            <td>${mobile.flipkart_price}</td>
        </tr>;
        tableBody.innerHTML+=row;
    });
}
function searchMoliles() {
    let input=document.getElementById("searchBox").ariaValueMax.toLowerCase();
    let rows=document.querySelectorAll("#mobileTable tbody tr");
    rows.forEach(row=>{
        let mobileName=row.cells[0].innerText.toLowerCase();
        row.style.display=mobileName.includes(input)?"":"none";
    });
}