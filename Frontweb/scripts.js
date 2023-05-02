/*
  --------------------------------------------------------------------------------------
  Obter a lista de filmes existentes no banco de dados via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/materiais';
  fetch(url, {
    method: 'get'
  })
    .then((response) => response.json())
    .then((data) => {
      data.materiais.forEach(item => insertList(item.nome, item.quantidade, item.custo, item.nf))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}



/*
  --------------------------------------------------------------------------------------
  Carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()

/*
  --------------------------------------------------------------------------------------
  Colocar um filme na lista via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (nome, quantidade, custo, nf) => {
  const formData = new FormData();
  formData.append('nome', nome);
  formData.append('quantidade', quantidade);
  formData.append('custo', custo);
  formData.append('nf', nf);

  let url = 'http://127.0.0.1:5000/material';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}



/*
  --------------------------------------------------------------------------------------
  Cria um botão "close" para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}


/*
  --------------------------------------------------------------------------------------
  Remover um item da lista ao clicar no botão "close"
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeMaterial = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Tem certeza?")) {
        div.remove()
        deleteItem(nomeMaterial)
        alert("Removido!")
      }
    }
  }
}


/*
  --------------------------------------------------------------------------------------
  Deletar um filme da lista via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (nome) => {
  console.log(nome)
  let url = 'http://127.0.0.1:5000/material?nome=' + nome;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    })
}


/*
  ---------------------------------------------------------------------------------------
  Adicionar um novo filme com titulo, tipo, media e informações sobre o filme 
  ---------------------------------------------------------------------------------------
*/
const newItem = () => {
  let nome = document.getElementById("matNome").value;
  let quantidade = document.getElementById("matQuant").value;
  let custo = document.getElementById("matCusto").value;
  let nf = document.getElementById("matNF").value;

  if (!nome) {
    alert("Informe o Nome do Material!");
  } else if (isNaN(quantidade) || !quantidade) {
    alert("Você precisa inserir um valor numerico na quantidade do Material!");
  } else if (isNaN(custo) || !custo) {
    alert("Você precisa inserir um valor decimal no custo do Material!");
  } else if (!nf) {
    alert("Você precisa colocar a Nota Fiscal!");
  } else {
    insertList(nome, quantidade, custo, nf);
    postItem(nome, quantidade, custo, nf);
    alert("Material Adicionado!");
  
  }
  
}

/*
  --------------------------------------------------------------------------------------
  Insere items na lista e a apresenta
  --------------------------------------------------------------------------------------
*/

const insertList = (nome, quantidade, custo, nf) => {
  var material = [nome, quantidade, custo, nf];

  var table = document.getElementById('mytable');
  var row = table.insertRow();

  for (var i = 0; i < material.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = material[i];
  }
  insertButton(row.insertCell(-1))
  document.getElementById("matNome").value = "";
  document.getElementById("matQuant").value = "";
  document.getElementById("matCusto").value = "";
  document.getElementById("matNF"). value = "";

  removeElement()

}
