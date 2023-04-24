		let botaoAplicacao = document.querySelector(".aplicacao");
		let botaoResgate = document.querySelector(".resgate");
		let botaoSaldo = document.querySelector(".saldo");
		
		botaoAplicacao.addEventListener("click", function(){
			console.log("Clicou em Saldo");
		});

		botaoResgate.addEventListener("click", function(){
			console.log("Clicou em Extrato");
		});
		botaoSaldo.addEventListener("click", function(){
			console.log("Clicou em Transferencia");
		});
