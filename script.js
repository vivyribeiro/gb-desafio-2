

const form = document.getElementById('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let name = document.getElementById('name').value;        
        let salary = document.getElementById('salary').value;
	    let sales = document.getElementById('sales').value;
        let totalComission = sales * 0.15;
        let payment = salary + totalComission;

        let employees = {
            name,
            salary,
	        sales,
            payment
        }
        let convertData = JSON.stringify(employees);
        localStorage.setItem('employee', convertData)

        let contentForm = document.getElementById('content-form')
        let carregando = `<p>Carregando...</p>`
        let pronto = `<p>Cadastrado com sucesso!</p>`

        contentForm.innerHTML = carregando;
        setTimeout(() => {
            contentForm.innerHTML = pronto;
        },1000 )

        cleanField()
        listEmployees()
        
    })

function cleanField() {
      document.querySelector('#name').value = "";
      document.querySelector('#salary').value = "";
      document.querySelector('#sales').value = "";
      document.querySelector('#content-form').value = ""; 
} 

function listEmployees() {

    if (typeof(Storage) !== "undefined") {
        let vendor = localStorage.getItem("employees");

        employees = JSON.parse(vendor)
            vendor.forEach(employees => {
                
                let dataTable = document.querySelector("#table-data") 
                let tableList = ` 
                                  <td>${employees.name }</td>
                                  <td>${employees.salary}</td>
                                  <td>${employees.sales}</td>
                                  <td>${employees.payment}</td>
                `
                dataTable.innerHTML += tableList;

            })

       } 
        else {
            alert("Não há funcionarios cadastrados!")
        }
      
} 
 
