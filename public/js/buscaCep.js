const btnCep = document.getElementById('btn-cep');
const inputCep = document.getElementsByName('cep')[0];
const inputLogradouro = document.getElementsByName('logradouro')[0];
const inputBairro = document.getElementsByName('bairro')[0];
const inputLocalidade = document.getElementsByName('localidade')[0];
const inputUf = document.getElementsByName('uf')[0];
console.log(btnCep)
btnCep.onclick = () => {
	const cep = inputCep.value;

	if (!cep) return

	fetch(`https://viacep.com.br/ws/${cep}/json/`, {
		// mode:"no-cors"
		
	})
		
		.then(response => response.text())
		.then(jsonResponse  => {
			inputLogradouro.value = jsonResponse.logradouro;
			inputBairro.value = jsonResponse.bairro;
			inputLocalidade.value = jsonResponse.localidade;
			inputUf.value = jsonResponse.uf;
			
		})
		.catch(error => console.log(error));

};