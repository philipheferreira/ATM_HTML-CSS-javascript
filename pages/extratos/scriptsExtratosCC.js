		let botaoTarifas = document.querySelector(".tarifas");
		let botaoMesAnterior = document.querySelector(".mesAnterior");
		let botaoPorPeriodo = document.querySelector(".porPeriodo");
		let botaoMesAtual = document.querySelector(".mesAtual");
		let botaoUltimosLancamentos = document.querySelector(".ultimosLancamentos");

		botaoTarifas.addEventListener("click", function(){
			console.log("Clicou em Extratos Tarifas");
		});

		botaoMesAnterior.addEventListener("click", function(){
			console.log("Clicou em Mes Anterior");
		});
		botaoPorPeriodo.addEventListener("click", function(){
			console.log("Clicou em Extratos por Periodo");
		});

		botaoMesAtual.addEventListener("click", function(){
			console.log("Clicou em pagamentos contas");
		});
		botaoUltimosLancamentos.addEventListener("click", function(){
			console.log("Clicou em Ultimos Lançamentos");
		});
