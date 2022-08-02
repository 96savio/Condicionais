/*instanciando função e variaveis pra proteinas, realizado calculo e selecionando o imput com
a quantidade digitada recuperando  o value,  apos isso utilizado o get pra selecionar a div
que apresentara o e resultado utilizando o innertext concatenando variavel com o valor*/


function proteinas() {
	let quantidadeproteina = document.querySelector("input[name='quantidadeproteina']").value
	let totalp = (quantidadeproteina * 4)

	document.getElementById('recebep').innerText = ('a quantidade calorica de proteina  e ' + totalp + ' calorias')

}
/*instanciando função e variaveis pra carboidratos, realizado calculo e selecionando o imput com
a quantidade digitada recuperando  o value,  apos isso utilizado o get pra selecionar a div
que apresentara o resultado e utilizando o innertext concatenando variavel com o valor*/
function carboidratos() {
	let quantidadecarboidrato = document.querySelector("input[name='quantidadecarboidrato']").value
	let totalc = (quantidadecarboidrato * 4)
	document.getElementById('recebec').innerText = ('a quantidade calorica do Carboidrato  e ' + totalc + ' calorias')

}

/*instanciando função e variaveis pra gordura, realizado calculo e selecionando o imput com
a quantidade digitada recuperando  o value,  apos isso utilizado o get pra selecionar a div
que apresentara o resultado e utilizando o innertext concatenando variavel com o valor*/

function gorduras() {
	let quantidadegordura = document.querySelector("input[name='quantidadegordura']").value
	let totalg = (quantidadegordura * 9)

	document.getElementById('recebeg').innerText = ('a quantidade calorica a gordura  e ' + totalg + ' calorias')

}

/* como as variaveis foram declaradas em escopo local tive que declar novamente abaixo
todas elas dentro de uma função que recebe tudo e somar tudo, como estão em uma func local não terar conflito
devido a ficar acessivel so na funcion calctudo
*/

function calctudo() {
	let quantidadegordura = document.querySelector("input[name='quantidadegordura']").value
	let totalg = (quantidadegordura * 9)
	let quantidadecarboidrato = document.querySelector("input[name='quantidadecarboidrato']").value
	let totalc = (quantidadecarboidrato * 4)
	let quantidadeproteina = document.querySelector("input[name='quantidadeproteina']").value
	let totalp = (quantidadeproteina * 4)
	document.getElementById('recebetotal').innerText = ('a quantidade e : ' + (totalg + totalc + totalp))


}

/* Usando condicionais pra validar e mostrar se a pessoa esta dentro da idade ecom a quantidade calorica*/

function validar() {
	let quantidadegordura = document.querySelector("input[name='quantidadegordura']").value
	let totalg = (quantidadegordura * 9)
	let quantidadecarboidrato = document.querySelector("input[name='quantidadecarboidrato']").value
	let totalc = (quantidadecarboidrato * 4)
	let quantidadeproteina = document.querySelector("input[name='quantidadeproteina']").value
	let totalp = (quantidadeproteina * 4)
	var entre = 40
	var klcm = 2500
	var klcf = 1800
	var tudo = (totalg + totalc + totalp)
	var idade = document.querySelector("input[name='idade']").value
	var sexo = document.querySelector("input[name='sexo']:checked").value
	var sexorecebe = sexo


	if (sexorecebe == 'Masculino' && idade <= entre && tudo <= klcm && idade >= '0') {
		document.getElementById('printvalidacao').innerText = ('Na media')
	} else if (sexorecebe == 'Masculino' && idade >= entre && tudo <= klcm) {
		document.getElementById('printvalidacao').innerText = ('Idade fora do padrao')
	} else if (sexorecebe == 'Masculino' && idade <= entre && tudo >= klcm) {
		document.getElementById('printvalidacao').innerText = ('ultrapassou calorias')
	} else if (sexorecebe == 'Masculino' && idade > entre && tudo > klcm) {
		document.getElementById('printvalidacao').innerText = ('ultrapassou calorias e idade')
	} else if (sexorecebe == 'Feminino' && idade <= entre && tudo <= klcf && idade >= '0') {
		document.getElementById('printvalidacao').innerText = ('Na media')
	} else if (sexorecebe == 'Feminino' && idade >= entre && tudo <= klcf) {
		document.getElementById('printvalidacao').innerText = ('Idade fora do padrao')
	} else if (sexorecebe == 'Feminino' && idade <= entre && tudo >= klcf) {
		document.getElementById('printvalidacao').innerText = ('ultrapassou calorias')
	} else if (sexorecebe == 'Feminino' && idade > entre && tudo > klcf) {
		document.getElementById('printvalidacao').innerText = ('ultrapassou calorias e idade')
	} else {
		document.getElementById('printvalidacao').innerText = ('Não entra nos requisitos solicitados')
	}
	console.log(tudo)

	
}
/* verificando os valores recebibos do imput e mostando o valor pro alimento selecionado */
function valorcarb() {
	var carb = document.querySelector("input[name='carb']:checked").value
	var carbval = carb
	document.getElementById('printqtdcarbo').innerText = (' contem ' + carb + ' gr de carboidratos')

}

teste =>  {
	document.getElementById('container').style ='black'

}