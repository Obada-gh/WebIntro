const api_url = "https://api.publicapis.org/entries";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data.entries[0]);
  showApi(data.entries);
}

function showApi(data) {
  let tab = `<tr>
    <th>API<th>
    <th>Category<th>
    <th>Description<th>
    <th>HTTPS<th>
    <th>Cors<th>
    <th>Auth<th>
    <th>Link<th>
    <th>Date<th>
    </tr>`;
    let date = new Date()

  for (let i = 0; i <= 20; i++) {
    tab += `<tr>
        <td>${data[i].API}<td>
        <td>${data[i].Category}<td>
        <td>${data[i].Description}<td>
        <td>${data[i].HTTPS}<td>
        <td>${data[i].Cors}<td>
        <td>${data[i].Auth}<td>
        <td>${data[i].Link}<td>
        <td>${date}<td> 
        </tr>`;
  }
  
  document.getElementById("employees").innerHTML = tab;
}

getapi(api_url);



