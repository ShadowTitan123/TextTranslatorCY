// Get Form and Output Area

const table1 = document.querySelector('#table1');


// Get All Cache for View 
document.addEventListener('DOMContentLoaded',()=>{
    axios.get('/GetAllCaches')
      .then(function (response) {
            console.log(response.data);
            if(response.data.message == 'Data Not Found'){
              console.log("display empty error");
             let h1 = document.createElement('h5');
             h1.textContent = 'No Caches Found...';
             table1.appendChild(h1);
            }
            if(response.data != '' || response.data != undefined || response.data != null){
                response.data.forEach(function(row){
                    let tr = document.createElement('tr');
                    tr.innerHTML = `<td> ${row.id} </td>
                    <td> ${row.text} </td>
                    <td> ${row.translation}  </td>
                    <td> ${row.from_lang} </td>
                    <td> ${row.to_lang} </td>
                    <td> ${row.expiry_date} </td>`;
                    table1.appendChild(tr);
                })
            }else{
                console.log("Empty data");  
                let Empty = 'No Cache Found';

            }
      })
      .catch(function (err){
        console.log(err);
      });
});


// Flush All Cache Via View 
document.querySelector('.DeleteBtn').addEventListener('click',()=>{
    axios.delete('/DeleteAllCache')
      .then(function (response) {
            console.log(response.data);
            if(response.data.status === true){
              location.reload();
            }
      })
      .catch(function (err){
        console.log(err);
      });
});