# Minha API

Este pequeno projeto faz parte do material diático da Disciplina **Desenvolvimento Full Stack Básico**, com o objetivo aqui é ilutsrar o conteúdo apresentado ao longo das três aulas da disciplina.

O presente trabalho terá como tema o processo de desenvolvimento de software, com o foco na prospecção de requisitos de uma solução web para gerenciar materias de obra e afins. Tal fato constitui o Minimum viable product (MVP) “Produto viável mínimo” de um sistema inicial em andamento, sob responsabilidade deste autor.

---
## Como executar 

Inicie clonando o meu repositório no GitHub colocando no seu navegador o seguinte endereço: https://github.com/PhelipeGabriel/MVP-EngenhariaSoftwarePucRio.git

Em seguida mova-se para o diretório BackWeb e crie o ambiente virtual Python por meio do seguinte comando: python -m venv env.

A pasta env será criada neste ambiente. Em seguida, ative o env pelo comando: env\Scripts\Activate.ps1 se estiver executando no Windows. Caso esteja executando em um ambiente compatível com o Unix (linux ou Mac OSX, por exemplo), execute env/activate.

Em seguida, execute o comando :(env)$ pip install -r requirements.txt para instalar as bibliotecas de dependência do python para este aplicativo.

Agora ative o flask através do comando abaixo:

```
(env)$ flask run --host 0.0.0.0 --port 5000
```

Abra o [http://localhost:5000/](http://localhost:5000/) no navegador e verifique que o Swagger está aberto. Você poderá verificar o status do banco de dados, bem como inserir e deletar entradas nele através do Swagger. Isto mostra que o aplicativo BackEnd está rodando e pronto para receber dados do aplicativo de FrontEnd.

