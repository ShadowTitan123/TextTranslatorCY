
// Get Form and Output Area
const GetForm = document.querySelector('#Translate');
const OutputText = document.querySelector('#translated_text');



// Listen for Submit Event and Make Api Request to Server
GetForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const [from,to,text] = [GetForm.elements[0].value,GetForm.elements[2].value,GetForm.elements[1].value];

    if(from != '' && to != '' && text != ''){
        document.querySelector('.loader').style.display = 'block';
          axios.post('/Translate', {
        from: from,
        to: to,
        text: text
      })
      .then(function (response) {
       if(response.status === 200){
         console.log(response);
        document.querySelector('.loader').style.display = 'none';
        const TranslatedText = response.data[0].translations[0].text;
        console.log(TranslatedText);
        OutputText.textContent = TranslatedText;
       }
       else{
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
    }else{
        console.log("Input error By Client");
        document.querySelector('.err-msg').classList.remove('text-dark');
        document.querySelector('.err-msg').classList.add('text-error');
        document.querySelector('.err-msg').textContent = `Enter All Feilds`;
    }
});

