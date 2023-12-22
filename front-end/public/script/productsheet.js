function Products(pic,name,price,category,size,description){
    this.pic = pic,
    this.name = name,
    this.price = price,
    this.category = category,
    this.size = size,
    this.description = description
}

const product1 = new Products('public/images/other/tshirt.webp', 'Tee-shirt Bio - officiel Zevent 2022', 26, 'tshirt', ["xs", "s", "m", "l", "xl","xxl","xxxl"], 
[
    {
        "icon": "leaf.svg",
        "summary": "Composition & Fabrication",
        "details": "<p>100% coton biologique - 170 g</p> <p>Ce tee-shirt est certifié Oeko-Tex Standard 100, Fairwear, GOTS, PETA Approved Vegan</p> <p>Nous sommes convaincus, comme vous, qu'il est important d'avoir de la transparence et une traçabilité sur les produits que nous achetons. Merci d'avoir cliqué pour en savoir plus.</p> <p>Les t-shirts sont fabriqués en coton bio et ont reçu le label GOTS. Ils ont été montés dans des usines labellisées Fairwear au Bangladesh puis imprimés dans un atelier GOTS à Bidart en France.</p> <p>Si vous voulez en savoir plus sur notre partenaire Stanley Stella qui produit nos tee-shirts noirs, vous pouvez aller sur ce site : <a href='https://www.stanleystella.com/fr-be/public-home'>stanleystella.com</a> ou télécharger leur <a href='https://online.flippingbook.com/view/967420076/'>Social Report 2021</a></p> <p>Pour en savoir plus sur le Label GOTS : <a href='https://www.labelinfo.be/fr/label/gots'>labelinfo.be</a></p>"
    },
    {
        "icon": "delivery.svg",
        "summary": "Délais de livraison",
        "details": "<p>Les t-shirts seront expédiés à partir du 3 octobre.</p> <p>Le planning de production des produits de la boutique ZEvent est consultable <<a href='https://www.labelinfo.be/fr/label/gots'>ici</a>></p>"
    },
    {
        "icon": "size.svg",
        "summary": "Taille",
        "details": "<p>Ce t-shirt est unisexe !</p> <p>Pour les hommes : prenez votre taille habituelle</p> <p>Pour les femmes : prenez une taille en dessous</p>"
    },
    {
        "icon": "wash.svg",
        "summary": "Lavage",
        "details": "<p>Laver à 30°C retourné. Ne pas mettre au sèche-linge. Repasser à l'envers.</p>"
    }
]);

const product2 = new Products('public/images/other/zplace.webp', 'ZEvent Place - Tirage sur Dibond', 60, 'zplace', 'rien', 
[
    {
        "icon": "size.svg",
        "summary": "Dimension",
        "details": "<p>Taille 50x50 cm</p>"
    },
    {
        "icon": "location.svg",
        "summary": "Fabrication",
        "details": "<p>Imprimé en France 🇫🇷</p>"
    },
    {
        "icon": "print.svg",
        "summary": "Impression",
        "details": "<p>Impression à plat directement Dibond (fines plaques d'aluminium) avec des encres 100% écologiques et en haute définition. Cette œuvre est fabriquée avec 2 accroches aux dos pour pouvoir l'exposer directement sur son mur.</p>"
    },
    {
        "icon": "padlock.svg",
        "summary": "Design exclusif",
        "details": "<p>Nous attendrons la fin du ZEVENT PLACE pour réaliser l'impression de cette œuvre disponible uniquement sur la boutique ZEvent.</p>"
    }
] );

const product3 = new Products('public/images/other/plaque.webp', 'Trophée numéroté ZEvent 2022', 175, 'trophee', 'rien', [
    {
        "icon": "delivery.svg",
        "summary": "Délais de livraison",
        "details": "<p>Début des expéditions prévu à partir du 28 septembre.</p>"
    },
    {
        "icon": "size.svg",
        "summary": "Dimensions",
        "details": "<p>La plaque mesure 18 x 13 cm</p>"
    },
    {
        "icon": "label.svg",
        "summary": "Mise en panier",
        "details": "<p>Tirage numéroté et limité à 3 000 exemplaires (limité à 1 exemplaire par commande)</p>"
    },
    {
        "icon": "location.svg",
        "summary": "Fabrication",
        "details": "<p>Ce produit est fabriqué sur-mesure en Italie</p>"
    }
] );

let products = [];
products.push(product1,product2,product3);

function populateTableList(){
    let listOfProducts = '';

    products.forEach(prod=>
        listOfProducts += `
          <tr>
            <td><img src='${prod.pic}' class="imgfluid w50></td>
            <td class="w-25 align-middle">${prod.pic}</td>
            <td class="w-25 align-middle">${prod.name}</td>
            <td class="w-25 align-middle">${prod.price}€</td>
            <td class="w-25 align-middle">${prod.category}</td>
            <td class="w-25 align-middle">${prod.size}</td>
            <td class="w-25 align-middle">${prod.description}</td>
          </tr>
          `   
      )

    document.getElementById('productList').innerHTML = listOfProducts;
}
