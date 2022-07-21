/** processForm: get data from form and make AJAX call to our API. */
BASE_URL = 'http://localhost:5000/api'

async function processForm(evt) {
    evt.preventDefault();
    let name = $('#name').val();
    let year = $('#year').val();
    let email = $('#email').val();
    let color = $('#color').val();
    //Serialize the variables to JSON format.
    const payload = handleResponse(name, year, email, color);
    console.log(payload);
    const res = await axios({url: `${BASE_URL}/lucky-num`, method: "POST", data: {payload}});
    
    $("#form").trigger("reset");
}
 function handleResponse(name, year, email, color) {
    return {"name": name, "year": year, "email": email, "color": color}
}


$("#form").on("submit", processForm);