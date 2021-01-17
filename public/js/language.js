// Get Table
const table1 = document.querySelector('#table1');

// Get All Languages for Configure Panel 
document.addEventListener('DOMContentLoaded', () => {
  axios.get('/GetAllSupportedLanguages')
    .then(function (response) {
      console.log(response.data);
      let checked = '';
      if (response.data != '' || response.data != undefined || response.data != null) {
        response.data.forEach(function (row) {
          if (row.status === 1) {
            checked = 'checked';
          } else {
            checked = ' ';
          }
          let tr = document.createElement('tr');
          tr.innerHTML = `<td> ${row.id} </td>
                    <td> ${row.language_title} </td>
                    <td> ${row.language_code}  </td>
                    <td> <input type="checkbox" class="messageCheckbox" name="${row.language_code}" value="${row.id}"${checked}>
                   </td>
                   
                  `;
          table1.appendChild(tr);
        })
      } else {
        console.log("Empty data");
        let Empty = 'No Cache Found';

      }
    })
    .catch(function (err) {
      console.log(err);
    });
});


// Update Languages On User Input 

document.querySelector('#UpdateLangs').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("update");
  const checkedArray = [];
  var checkedValue = document.querySelectorAll('.messageCheckbox:checked');
  checkedValue.forEach(function (value, index) {
    console.log(value.name);
    checkedArray.push(value.name);
  })
  console.log(checkedArray);
  if (typeof checkedArray !== 'undefined' && checkedArray.length > 0) {
    axios.put('/UpdateLanguages', {
      activeLanguages: JSON.stringify(checkedArray)

    }).then((response) => {
      if (response.status === 200) {
        console.log(response);
        location.reload();
      } else {
        console.log("Server error");
      }
    })
      .catch((err) => {
        console.log(err);
      })
  } else {
    console.log("Select Minimum 1 Language");
    alert("Please select atleast One Language");
  }

});



