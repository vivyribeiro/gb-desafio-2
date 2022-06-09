

const form = document.getElementById("form");
form.addEventListener("submit", e => {
	e.preventDefault();

	let employeeData = JSON.parse(localStorage.getItem("employee")) || [];

	let name = document.getElementById("name").value;
	let salary = parseFloat(document.getElementById("salary").value);
	let sales = parseFloat(document.getElementById("sales").value);
	let totalComission = sales * 0.15;
	let payment = salary + totalComission;

	employeeData.push({
		vendorName: name,
		vendorSalary: salary.toFixed(2),
		vendorComission: totalComission.toFixed(2),
		vendorPayment: payment.toFixed(2)
	});

	localStorage.setItem("employee", JSON.stringify(employeeData));

	listEmployees();

	let contentForm = document.getElementById("content-form");
	let save = `<p>Dados salvos com sucesso!</p>`;
	let clearMessage = "";
	contentForm.innerHTML = save;

	setTimeout(() => {
		contentForm.innerHTML = clearMessage;
	}, 3000);

	form.reset();
});

function listEmployees() {
	// Add Participant Data on Table
	if (typeof Storage !== "undefined" || typeof Storage !== "") {
		let showEmployeeData = JSON.parse(localStorage.getItem("employee"));

		let dataTable = document.querySelector("#table-data");

		dataTable.innerHTML = "";

		showEmployeeData.forEach(employee => {
			dataTable.innerHTML += `
	 		<tr>
			 <td>${employee.vendorName}</td>
			 <td>${employee.vendorSalary}</td>
			 <td>${employee.vendorComission}</td>
			 <td>${employee.vendorPayment}</td>
	 		</tr>
	 	`;
		});
	}
}
