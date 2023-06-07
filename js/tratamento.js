//Função para indicar um tratamento adequado para a plantação
function escolha(plantacao) {
    let mensagemElement = document.getElementById("escolha");
    //Algodão
    if (plantacao == '1'){
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de algodão?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta-do-cartucho: spodovir");
        });

        //Percevejo-marrom
        let percevejoMarrom = document.createElement('button');
        percevejoMarrom.textContent = "Percevejo-marrom"
        pragas.appendChild(percevejoMarrom);

        percevejoMarrom.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-marrom: engeo pleno s");
        });

        //Lagarta Helicoverpa
        let lagartaHelicoverpa = document.createElement('button');
        lagartaHelicoverpa.textContent = "Lagarta helicoverpa"
        pragas.appendChild(lagartaHelicoverpa);

        lagartaHelicoverpa.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta helicoverpa: bacillus thuringienses");
        });

        //Pulgão do algodoeiro
        let pulgaoAlgodoeiro = document.createElement('button');
        pulgaoAlgodoeiro.textContent = "Pulgão do algodoeiro"
        pragas.appendChild(pulgaoAlgodoeiro);

        pulgaoAlgodoeiro.addEventListener('click', function() {
        exibirMensagem("Tratamento contra pulgão do algodoeiro: AUG 106");
        });

        //Tripes
        let tripes = document.createElement('button');
        tripes.textContent = "Tripes"
        pragas.appendChild(tripes);

        tripes.addEventListener('click', function() {
        exibirMensagem("Tratamento contra tripes: AUG 106");
        });

        //Cupim de montículo
        let cupimMonticulo = document.createElement('button');
        cupimMonticulo.textContent = "Cupim de Montículo"
        pragas.appendChild(cupimMonticulo);

        cupimMonticulo.addEventListener('click', function() {
        exibirMensagem("Tratamento contra cupim de montículo: AUG 106");
        });

    //Arroz
    } else if (plantacao == '2') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de arroz?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta do cartucho: spodovir");
        });

        //Percevejo do arroz
        let percevejoArroz = document.createElement('button');
        percevejoArroz.textContent = "Percevejo do arroz"
        pragas.appendChild(percevejoArroz);

        percevejoArroz.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo do arroz: engeo pleno s");
        });

    //Aveia
    } else if (plantacao == '3') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de aveia?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta do cartucho: spodovir");
        });

    //Café    
    } else if (plantacao == '4') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de café?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta Helicoverpa
        let lagartaHelicoverpa = document.createElement('button');
        lagartaHelicoverpa.textContent = "Lagarta helicoverpa"
        pragas.appendChild(lagartaHelicoverpa);

        lagartaHelicoverpa.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta helicoverpa: bacillus thuringienses");
        });

    //Cana-de-açúcar
    } else if (plantacao == '5') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de cana-de-açúcar?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta do cartucho: spodovir");
        });

    //Feijão
    } else if (plantacao == '6') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação feijão?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta do cartucho: spodovir");
        });

        //Lagarta Helicoverpa
        let lagartaHelicoverpa = document.createElement('button');
        lagartaHelicoverpa.textContent = "Lagarta helicoverpa"
        pragas.appendChild(lagartaHelicoverpa);

        lagartaHelicoverpa.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta helicoverpa: bacillus thuringienses");
        });

    //Girassol
    } else if (plantacao == '7') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de girassol?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Percevejo-verde-pequeno
        let percevejoVerdePequeno = document.createElement('button');
        percevejoVerdePequeno.textContent = "Percevejo-verde-pequeno"
        pragas.appendChild(percevejoVerdePequeno);

        percevejoVerdePequeno.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-verde-pequeno: engeo pleno s");
        });

        //Percevejo-da-soja
        let percevejoSoja = document.createElement('button');
        percevejoSoja.textContent = "Percevejo-da-soja"
        pragas.appendChild(percevejoSoja);

        percevejoSoja.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-da-soja: engeo pleno s");
        });        

        //Percevejo-marrom
        let percevejoMarrom = document.createElement('button');
        percevejoMarrom.textContent = "Percevejo-marrom"
        pragas.appendChild(percevejoMarrom);

        percevejoMarrom.addEventListener('click', function() {
        exibirMensagem("Tratamento percevejo-marrom: engeo pleno s");
        });        

    //Milho
    } else if (plantacao == '8') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de milho?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Percevejo-barriga-verde
        let percevejoBarrigaVerde = document.createElement('button');
        percevejoBarrigaVerde.textContent = "Percevejo-barriga-verde"
        pragas.appendChild(percevejoBarrigaVerde);

        percevejoBarrigaVerde.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-barriga-verde: engeo pleno s");
        });

        //Lagarta Helicoverpa
        let lagartaHelicoverpa = document.createElement('button');
        lagartaHelicoverpa.textContent = "Lagarta helicoverpa"
        pragas.appendChild(lagartaHelicoverpa);

        lagartaHelicoverpa.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta helicoverpa: bacillus thuringienses");  
        });

        //Cigarrinha do milho
        let cigarrinhaMilho = document.createElement('button');
        cigarrinhaMilho.textContent = "Cigarrinha do Milho"
        pragas.appendChild(cigarrinhaMilho);

        cigarrinhaMilho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra cigarrinha do milho: AUG 106");  
        });

        //Vaquinha verde amarela
        let vaquinhaVerdeAmarela = document.createElement('button');
        vaquinhaVerdeAmarela.textContent = "Vaquinha Verde Amarela"
        pragas.appendChild(vaquinhaVerdeAmarela);

        vaquinhaVerdeAmarela.addEventListener('click', function() {
        exibirMensagem("Tratamento contra vaquinha verde amarela: AUG 106");  
        });

        //Cupim
        let cupim = document.createElement('button');
        cupim.textContent = "Cupim"
        pragas.appendChild(cupim);

        cupim.addEventListener('click', function() {
        exibirMensagem("Tratamento contra cupim: AUG 106");  
        });

        //Pulgão
        let pulgao = document.createElement('button');
        pulgao.textContent = "Pulgão"
        pragas.appendChild(pulgao);

        pulgao.addEventListener('click', function() {
        exibirMensagem("Tratamento contra pulgão: AUG 106");  
        });

    //Soja
    }  else if (plantacao == '9') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de soja?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta do cartucho: spodovir");
        });

        //Percevejo-marrom
        let percevejoMarrom = document.createElement('button');
        percevejoMarrom.textContent = "Percevejo-marrom"
        pragas.appendChild(percevejoMarrom);

        percevejoMarrom.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-marrom: engeo pleno s");
        }); 

        //Percevejo-da-soja
        let percevejoSoja = document.createElement('button');
        percevejoSoja.textContent = "Percevejo-da-soja"
        pragas.appendChild(percevejoSoja);

        percevejoSoja.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-da-soja: engeo pleno s");
        }); 

        //Percevejo-verde-pequeno
        let percevejoVerdePequeno = document.createElement('button');
        percevejoVerdePequeno.textContent = "Percevejo-verde-pequeno"
        pragas.appendChild(percevejoVerdePequeno);

        percevejoVerdePequeno.addEventListener('click', function() {
        exibirMensagem("Tratamento percevejo-verde-pequeno: engeo pleno s");
        });

        //Lagarta Helicoverpa
        let lagartaHelicoverpa = document.createElement('button');
        lagartaHelicoverpa.textContent = "Lagarta helicoverpa"
        pragas.appendChild(lagartaHelicoverpa);

        lagartaHelicoverpa.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta helicoverpa: bacillus thuringienses");
        });

    //Trigo    
    }  else if (plantacao == '10') {
        mensagemElement.innerHTML = "Qual o nome da praga que está atacando sua plantação de trigo?";

        //Para limpar os textos após um novo click
        let pragas = document.getElementById("pragas");
        pragas.innerHTML = "";

        //Lagarta do cartucho
        let lagartaCartucho = document.createElement('button');
        lagartaCartucho.textContent = "Lagarta do cartucho"
        pragas.appendChild(lagartaCartucho);

        lagartaCartucho.addEventListener('click', function() {
        exibirMensagem("Tratamento contra lagarta do cartucho: spodovir");
        });

        //Percevejo-barriga-verde
        let percevejoBarrigaVerde = document.createElement('button');
        percevejoBarrigaVerde.textContent = "Percevejo-barriga-verde"
        pragas.appendChild(percevejoBarrigaVerde);

        percevejoBarrigaVerde.addEventListener('click', function() {
        exibirMensagem("Tratamento contra percevejo-barriga-verde: engeo pleno s");
        });
    }
}

function exibirMensagem(mensagem) {
    let mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = mensagem;
}