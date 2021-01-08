// Genera 10 mail tramite api e stampale in una lista
// La richiesta AJAX per gli indirizzi email inviatela al seguente link: https://flynn.boolean.careers/exercises/api/random/mail

// Vue e Axios
let app = new Vue ({
  el: '#app',
  data: {
    emails: [],
  },
  mounted(){
    for(var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(resp => {
        console.log(resp.data.response);
         let email = resp.data.response;
         this.emails.push(email);
      })
    }
  }
});
