
Section();
//Récupération des articles dans l'API 
async function getArticles() {
    const articlesCatch = await fetch ("http://localhost:3000/api/products")
    return await articlesCatch.json();
}


//Répartition des données de l'API dans le DOM
async function Section() {
    let result = await getArticles()
    .then(function(resultatAPI){
        const articles = resultatAPI;
        console.log(articles);
        for (let article in articles){

            //Création de l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html id=${resultatAPI[article]._id}`;

            // Création de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Création de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultatAPI[article].imageUrl;
            productImg.alt = resultatAPI[article].altTxt;

            // Création du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // Création de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = resultatAPI[article].description;

        }
    })
    .catch (function(error){
        return error;
    })
}