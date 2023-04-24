		let botaoCcParaCc = document.querySelector(".CCparaCC");
		let botaoCcParaCp = document.querySelector(".CCparaCP");
		let botaoPoupancaProgramada = document.querySelector(".poupancaProgramada");
		let botaoVoltar = document.querySelector(".voltar");
		let botaoDoc = document.querySelector(".doc");
		let botaoTed = document.querySelector(".ted");
		let botaoReimpressao = document.querySelector(".reimpressao");

		botaoCcParaCc.addEventListener("click", function(){
			console.log("Clicou em Transferencia Conta Corrente para Conta Corrente");
		});

		botaoCcParaCp.addEventListener("click", function(){
			console.log("Clicou em Tranasferencia Conta Corrente para COnta Poupança");
		});
		botaoPoupancaProgramada.addEventListener("click", function(){
			console.log("Clicou em Poupança Programada");
		});

		botaoVoltar.addEventListener("click", function(){
			console.log("Clicou em Voltar");
		});
		botaoDoc.addEventListener("click", function(){
			console.log("Clicou em DOC");
		});
		botaoTed.addEventListener("click", function(){
			console.log("Clicou em TED");
		});
		botaoReimpressao.addEventListener("click", function(){
			console.log("Clicou em Reimpressão");
		});

		botaoEmprestimos.addEventListener("click", function(){
			console.log("Clicou em Emprestimos");
		});
