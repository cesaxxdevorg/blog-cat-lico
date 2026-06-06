async function carregarNoticias() {

    const resposta = await fetch("/api/noticias");
    const xml = await resposta.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "text/xml");

    const itens = doc.querySelectorAll("item");

    const noticias = document.getElementById("noticias");

    itens.forEach(item => {

        const titulo =
            item.querySelector("title")?.textContent || "";

        const link =
            item.querySelector("link")?.textContent || "";

        noticias.innerHTML += `
            <div class="card">
                <h2>${titulo}</h2>
                <a href="${link}" target="_blank">
                    Ler notícia
                </a>
            </div>
        `;
    });
}

carregarNoticias();
