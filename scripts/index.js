// Implementar la clase activity con los parametros solicitados -->
 
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Impementar la clase Repository con el parametro solicitado iniciado como un array que contendra las activities -->
class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  // Metodo que devuelve el array con las actividades -->

  getAllActivities() {
    return this.activities;
  }

  // Metodo que crea una instancia de la clase Activity y la agrega al array -->

  createActivity(title, description, imgUrl) {
    this.id++;
    const newItem = new Activity(this.id, title, description, imgUrl);
    this.activities.push(newItem);
  }

  // Metodo que filtra las actividades y compara el id dejando solo las que no coincidan con el id que reibe -->

  deleteActivity(id) {
    this.activities = this.activities.filter((item) => item.id !== id);
  }
}

//---------------------L3

const repository = new Repository();

// seleccionar el input de titulo

const inputName = document.getElementById("inputName");

// seleccionar el input de descripcion

const inputDescription = document.getElementById("inputDescription");

// seleccionar el input del urlImg

const inputImg = document.getElementById("inputImg");

// seleccionar el boton

const addButton = document.getElementById("addButton");

// seleccionar el contenedor de las tarjetas

const allActivities = document.getElementById("allActivities");

//handler-->
// tomar el valor de los inputs

//validar inputs

// repository.createActivity

const handlerSubmit = () => {
   
    const title = inputName.value;
    const description = inputDescription.value;
    const imgUrl = inputImg.value;

    if (title && description && imgUrl) {
      repository.createActivity(title, description, imgUrl);
      displayCards();
    } else {
      alert("Completa todos los campos")
    }
    
    console.log(repository);

    inputName.value = "";
    inputDescription.value= "";
    inputImg.value = "";
}

addButton.addEventListener('click', handlerSubmit);


//convertir los ojetos a cards

function displayCards() {
  let activities = repository.getAllActivities();
  allActivities.innerHTML = "";

  activities.forEach(activity => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="activity">
      <img src=${activity.imgUrl} alt="actividad"/>
      <h1>${activity.title}</h1>
      <p>${activity.description}</p>
      <button onclick="deleteCard(${activity.id})" >Borrar</button>
      </div>
      `;
    // appendear todas las tarjetas al contenedor
    allActivities.appendChild(card);
  })
}
 
 // Función para eliminar la card
function deleteCard(id) {
  repository.deleteActivity(id);
  displayCards();  
  
}
 
