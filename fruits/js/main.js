var fruits=[
  { "id": 0, "name": "Banana", "providerId": 0, "description": "A yellow fruit"},
  { "id": 1, "name": "Apple", "providerId": 0, "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."} ,
  { "id": 2, "name": "Peach", "providerId": 0, "description": "A Green fruit"},
  { "id": 3, "name": "Strawberry", "providerId": 0, "description": "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit." },
  { "id": 4, "name": "Tomato", "providerId": 0, "description": "The tomato is the edible fruit of Solanum lycopersicum, commonly known as a tomato plant, which belongs to the nightshade family, Solanaceae. The species originated in Central and South America."},
  { "id": 5, "name": "Cherry", "providerId": 0, "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium."},

  { "id": 0, "name": "Banana", "providerId": 1, "description": "A yellow fruit"},
  { "id": 1, "name": "Apple", "providerId": 1, "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."} ,
  { "id": 5, "name": "Cherry", "providerId": 1, "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium."},

  { "id": 0, "name": "Banana", "providerId": 2, "description": "A yellow fruit"},
  { "id": 1, "name": "Apple", "providerId": 2, "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."} ,
  { "id": 4, "name": "Tomato", "providerId": 2, "description": "The tomato is the edible fruit of Solanum lycopersicum, commonly known as a tomato plant, which belongs to the nightshade family, Solanaceae. The species originated in Central and South America."},
  { "id": 5, "name": "Cherry", "providerId": 2, "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium."},

  { "id": 0, "name": "Banana", "providerId": 3, "description": "A yellow fruit"},
  { "id": 1, "name": "Apple", "providerId": 3, "description": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."} ,
  { "id": 2, "name": "Peach", "providerId": 3, "description": "A Green fruit"},

  { "id": 3, "name": "Strawberry", "providerId": 4, "description": "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit." },
  { "id": 4, "name": "Tomato", "providerId": 4, "description": "The tomato is the edible fruit of Solanum lycopersicum, commonly known as a tomato plant, which belongs to the nightshade family, Solanaceae. The species originated in Central and South America."},
  { "id": 5, "name": "Cherry", "providerId": 4, "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. The cherry fruits of commerce usually are obtained from a limited number of species such as cultivars of the sweet cherry, Prunus avium."}
]

	console.log(fruits)

	$(".row").append(`<div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
`)


for(i = 0; i < 5; i=fruits)
{
  $(".main").html append(`<div class="col-md-3">${fruits [i].name}</div>`)
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
}
