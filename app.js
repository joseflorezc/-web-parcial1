let urlJson =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

let seccionNombre = document.getElementById("nombreProducto").innerHTML;
let seccionProductos = document.getElementById("listaProductos").innerHTML;





let hamburguesas = (element)=>{




    fetch(urlJson).then((response) => response.json()).then(response => {

        for (let j of response)
        {
            if(j.name === burguer)
            {
                document.getElementById("nombreProducto").innerHTML.replace("f", <div class='card' style='width: 18rem;'>
                <img src='{{j.name.image}}' class="card-img-top" alt='...'>
                <div class='card-body'>
                  <h5 class='card-title'>Card title</h5>
                  <p class='card-text'>{{j.name.description}}</p>
                  <p class='card-text'>{{j.name.price}}</p>
                  <a href='#' class='btn btn-primary'>Go somewhere</a>
                </div>
              </div>)
    
            }
            else{}
    
        }

    });
};


let tacos = (element)=>{




fetch(urlJson).then((response) => response.json()).then(response => {

    for (let j of response)
    {
        if(j.name === burguer)
        {
            document.getElementById("nombreProducto").innerHTML.replace("f", <div class='card' style='width: 18rem;'>
            <img src='{{j.name.image}}' class="card-img-top" alt='...'>
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>{{j.name.description}}</p>
              <p class='card-text'>{{j.name.price}}</p>
              <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
          </div>)

        }
        else{}

    }

});
};

let salads = (element)=>{




fetch(urlJson).then((response) => response.json()).then(response => {

    for (let j of response)
    {
        if(j.name === burguer)
        {
            document.getElementById("nombreProducto").innerHTML.replace("f", <div class='card' style='width: 18rem;'>
            <img src='{{j.name.image}}' class="card-img-top" alt='...'>
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>{{j.name.description}}</p>
              <p class='card-text'>{{j.name.price}}</p>
              <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
          </div>)

        }
        else{}

    }

});
};

let desserts = (element)=>{




fetch(urlJson).then((response) => response.json()).then(response => {

    for (let j of response)
    {
        if(j.name === burguer)
        {
            document.getElementById("nombreProducto").innerHTML.replace("f", <div class='card' style='width: 18rem;'>
            <img src='{{j.name.image}}' class="card-img-top" alt='...'>
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>{{j.name.description}}</p>
              <p class='card-text'>{{j.name.price}}</p>
              <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
          </div>)

        }
        else{}

    }

});
};

let drinkandsides = (element)=>{




fetch(urlJson).then((response) => response.json()).then(response => {

    for (let j of response)
    {
        if(j.name === burguer)
        {
            document.getElementById("nombreProducto").innerHTML.replace("f", <div class='card' style='width: 18rem;'>
            <img src='{{j.name.image}}' class="card-img-top" alt='...'>
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>{{j.name.description}}</p>
              <p class='card-text'>{{j.name.price}}</p>
              <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
          </div>)

        }
        else{}

    }

});
};



