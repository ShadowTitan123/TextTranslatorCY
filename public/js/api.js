
// Get Form and Output Area
const GetForm = document.querySelector('#Translate');
const OutputText = document.querySelector('#translated_text');



// Listen for Submit Event and Make Api Request to Server
GetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const [from, to, text] = [GetForm.elements[0].value, GetForm.elements[2].value, GetForm.elements[1].value];

  if (from != '' && to != '' && text != '') {
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.translator__field').textContent = ``;
    if (navigator.onLine) {
      console.log("You are online");
      document.querySelector('.NoInternet').style.display = 'none';
    } else {
      document.querySelector('.NoInternet').style.display = 'block';
    }
    // Post Request to Server to Translate data
    axios.post('/Translate', {
      from: from,
      to: to,
      text: text
    })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
          document.querySelector('.loader').style.display = 'none';
          const TranslatedText = response.data[0].translations[0].text;
          console.log(TranslatedText);
          OutputText.textContent = TranslatedText;
        }
        else {
          document.querySelector('.loader').style.display = 'none';
          document.querySelector('.err-msg').classList.remove('text-dark');
          document.querySelector('.err-msg').classList.add('text-error');
          document.querySelector('.err-msg').textContent = `Something Went Error : ${response.data}`;
        }

      })
      .catch(function (error) {
        console.log(error);
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.err-msg').classList.remove('text-dark');
        document.querySelector('.err-msg').classList.add('text-error');
        document.querySelector('.err-msg').textContent = `Something Went Error : ${error.message}`;

      });
  } else {
    console.log("Input error By Client");
    document.querySelector('.err-msg').classList.remove('text-dark');
    document.querySelector('.err-msg').classList.add('text-error');
    document.querySelector('.err-msg').textContent = `Enter All Feilds`;
  }
});


// Populate The Select Box with Supported Languages 

document.addEventListener('DOMContentLoaded', () => {
  axios.get('/GetAllSupportedLanguages')
    .then(function (response) {
      console.log(response.data);
      const getSelectBox = document.querySelector('#fromL');
      const getSelectBox2 = document.querySelector('#toL');
      let checked = '';
      let checkedtwo = '';
      if (response.data != '' || typeof response.data != undefined || response.data != null) {
        response.data.forEach(function (row, index) {
          if (row.status === 1) {
            checked += `<option value="${row.language_code}">${row.language_title}</option>`
            if (index === 1) {
              checkedtwo += `<option value="${row.language_code}" selected>${row.language_title}</option>`
            } else {
              checkedtwo += `<option value="${row.language_code}">${row.language_title}</option>`
            }
          }
        });
        getSelectBox.innerHTML = checked;
        getSelectBox2.innerHTML = checkedtwo;

      } else {
        console.log("Empty data");
        let Empty = 'No Cache Found';

      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

