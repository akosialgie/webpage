
function loadPage() {
    var admin = localStorage.getItem('admin');
    document.getElementById('admin').innerHTML = admin;

    try {
        let formdata = localStorage.getItem('formdata')
        let form_txtXML = new DOMParser().parseFromString(formdata, 'text/xml')
        let reports = form_txtXML.querySelectorAll('formReports')
        let divContainer = document.getElementById('items')

        for (let i = 0; i < reports.length; i++) {
            let res = reports[i];
            const fullname_res = res.querySelector('fullname').textContent
            const age_res = res.querySelector('age').textContent
            const address_res = res.querySelector('address').textContent
            const email_res = res.querySelector('email').textContent
            const cpNum_res = res.querySelector('cpNum').textContent
            const qa_res = res.querySelector('qa').textContent
            const plantImg_res = res.querySelector('plantImg').textContent
            const plantName_res = res.querySelector('plantName').textContent
            const plantAge_res = res.querySelector('plantAge').textContent
            const plantType_res = res.querySelector('plantType').textContent
            
            const div = document.createElement('div')
            div.classList.add('d-flex')
            div.innerHTML = `
                <div class="itemReport">
                    <div class="d-flex" style="gap: 30px;">
                        <div class="reportCard">
                            <img class="img" src="${plantImg_res}" alt="picture">
                            <div class="card-body">
                                <h3 class="spacing">Name: ${plantName_res}</h3>
                                <h4 class="spacing">Age: ${plantAge_res}</h4>
                                <h4 class="spacing">Type: ${plantType_res}</h4>
                            </div>
                        </div>
                        <div class="reportInfo">
                            <h1 style="text-align: center;">Information of Adopter</h1>
                            <div class="info">
                                <h3 class="spacing">Name: <span>${fullname_res}</span></h3>
                                <h3 class="spacing">Age: <span>${age_res} years old</span></h3>
                                <h3 class="spacing">Address: <span>${address_res}</span></h3>
                                <h3 class="spacing">Email: <span>${email_res}</span></h3>
                                <h3 class="spacing">Phone Number: <span>${cpNum_res}</span></h3>
                                <h3 class="spacing">Why do you want to adopt a pet?</h3>
                                <h4 class="message"><span>${qa_res}</span></h4>
                            </div>
                            <div class="btnDiv">
                                <button onclick="deleteInfo('${i}')" class="btn">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            divContainer.appendChild(div)
        }
    } catch (error) {
        alert(error)
    }
}

function deleteInfo(index) {
    try {
        let formdata = localStorage.getItem('formdata');
        let form_txtXML = new DOMParser().parseFromString(formdata, 'text/xml');
        let reports = form_txtXML.querySelectorAll('formReports');
        reports[index].parentNode.removeChild(reports[index]);
        localStorage.setItem('formdata', new XMLSerializer().serializeToString(form_txtXML));
        location.reload();
    } catch (error) {
        alert('Error deleting report: ' + error);
    }
}

function logoutAdmin() {
    localStorage.setItem('admin', '');
    window.location.href = 'login.html'
}