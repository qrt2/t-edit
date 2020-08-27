/*
 * Primeiramente me desculpem pelos comentarios e
 * erros de degitação neste arquivo, eu não uso
 * muito o corretor e esses comentarios são desnecessarios.
 * Se alguem quiser me ajudar fiquem a vontade.
*/


/*
 * Todo o texto  com as informações de instalação e
 * como usar devem ser inseridas nesse objeto como
 * no exemplo do editor Nano
*/
const texts = {
    "select": {
        "author": {
            "name": "Grupo Shell Android Termux",
            "url": "https://t.me/shell_at"
        },
        "name": "Editor",
        "text": "Aqui vai aparecer o texto ensinando instalar.",
        "learn": "E aqui vai aparecer umas informações básicas de como usar."
    },
    "nano": {
        "author": {
            "name": "Dheisom Gomes",
            "url": "https://t.me/TSA9a"
        },
        "name": "Nano",
        "text": "O editor Nano é simples e fácil de usar mas não tem muito destaque de sintaxe para algumas linguagens, para instalar ele você precisar dar o comando<br/><code>apt update && apt install nano -y</code><br/>no termux e esperar um pouco, ele é bem leve.",
        "learn": "Sair sem salvar: CTRL + X(talvés depois \"n\")<br/>Salvar e sair: CTRL + O e CTRL + X"
    }
};

/*
 * Essa parte do código tem o dever de organizar
 * toda a página com as informações acima
*/
window.onload = function(){
    /*
     * Obtem os elementos do DOM para poder
     * manipular da forma correta
    */
    let editor_list = document.getElementById("edit");
    let div_text = document.getElementById("text");
    let div_learn = document.getElementById("learn");
    let div_author = document.getElementById("author");
    let copyright = new Date();
    // Remove a opção "Carregando..." da lista
    editor_list.innerHTML = "";
    // Adiciona cada elemento contido no objeto com as informações
    for (key in texts) {
        editor_list.innerHTML += `<option value="${key}">${texts[key]["name"]}</option>`;
    }
    // Define as informações padrões, acho que isso
    // deveria ter sido melhor organizado de alguma forma
    div_author.innerHTML = `<p>${texts.select.author.name}</p>`;
    div_author.innerHTML += `<a href="${texts.select.author.url}">${texts.select.author.url}</a>`;
    div_text.innerHTML = texts.select.text;
    div_learn.innerHTML = texts.select.learn;
    // Se alguem reclamar desse "T.S A.9" eu removo e coloco outro melhor
    document.getElementById("copyright").innerHTML = `© T.S A.9 - ${copyright.getFullYear()}`;
    // Atualiza as informações de acordo com a opção selecionada
    editor_list.onchange = function() {
        let info = texts[this.value];
        div_author.innerHTML = `<p>${info.author.name}</p>`;
        if (info.author.url) {
            div_author.innerHTML += `<a href="${info.author.url}">${info.author.url}</a>`;
        }
        div_text.innerHTML = info.text;
        div_learn.innerHTML = info.learn;
    };
};
