		let botaoDepositosEnvelope = document.querySelector(".depositosEnvelope");
		let botaoSaque = document.querySelector(".saque");
		let botaoSaqueCentavos = document.querySelector(".saqueCentavos");

		botaoDepositosEnvelope.addEventListener("click", function(){
			console.log("Clicou em Depositos Envelope");
		});

		botaoSaque.addEventListener("click", function(){
			console.log("Clicou em Saque");
		});
		botaoSaqueCentavos.addEventListener("click", function(){
			console.log("Clicou em Saque Centavos");
		});
