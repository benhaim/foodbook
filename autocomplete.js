
var tags = ["bar","cafeteria","diner","cafe","bistro","kitchen","eatery","lunch","buffet","cuisine","steakhouse","sushi","deli","hotel","brasserie","waiter","menu","grill","fast food","coffee shop","dining","pub","dinner","canteen","waitress","tavern","alcoholic beverage","greasy spoon","tearoom","chef","seafood","food","bakery","pizzeria","lunchroom","steak","pizza","restaurateurs","brewpub","breakfast","wine","store","beer","business","coffeehouse","wine bar","grillroom","tapas","restaurant","fastfood","chefs","hostess","pizza parlor","shop","eating place","rotisserie","sushi restaurant","retail","eating house","chophouse","grille","pf chang","teashop","inn","diners","casual dining","steakhouses","dining establishments","sandwich","nightclub","wok","donut shop","fast","olive garden","bennigan","supermarket","catering","meal","tgi friday","mall","pompeii","brewery","bars","salon","grocery","service","applebee","coffee","smokehouse","hospitality","cantina","club","red lobster","supper club","fast food restaurant","restaurants","shopping","outback steakhouse","barbeque","melting pot","takeaway","takeout","delivery","bar bq","quiznos","cafes"]

restaurants = ["Applebee's","Arby'","Auntie","Baton","BeaverTails	Baked","Big","Bonchon","Buffalo","Burger","Cafe","Carl's","Charleys","Chipotle","Church's","Costa","Crepes","Dairy","Denny's"		,"Din","Domino's","Dunkin'","Earls","East","Five","Freshly","Gloria","Hamburguesas","Hard","Hardee's","Harvey's","Hooters","IHOP","Jack","Jack","Jimmy","Joe","Jollibee","Juan","The","Kenny","KFC","Krispy","Little","Long","Louisa","Loving","Marrybrown"	,"McDonald's","MK","MOS","Nando's","Olive","Outback"];



var tags_for_autocomplete = [];

var test = [
  {
    _id: "639b0252770cd9bc721efcfe",
    userId: "639afe50de6fc9aa3fc783cb",
    restaurantId: "63483ac382423955445cb01c",
    foodCategory: ["fish", "gluten-free"],
    dishType: ["Entree"],
    img: "https://res.cloudinary.com/dlml6omng/image/upload/v1671103058/avatars/lyto2mmsvu0k7gogabxn.jpg",
    likes: [],
    createdAt: "2022-12-15T11:17:38.075Z",
    updatedAt: "2022-12-15T11:17:38.075Z",
    __v: 0,
  },
  {
    _id: "639a3f1060e4dd546305b23b",
    userId: "63931ce478ba61e01dbf2a1b",
    restaurantId: "638f6370b5ba4755ecbff413",
    foodCategory: ["sharing"],
    dishType: ["Entree"],
    img: "https://res.cloudinary.com/dlml6omng/image/upload/v1671053071/avatars/xvclieaeabcysmqin8l2.jpg",
    likes: ["63931ce478ba61e01dbf2a1b"],
    createdAt: "2022-12-14T21:24:32.144Z",
    updatedAt: "2022-12-14T22:12:38.228Z",
    __v: 0,
  },
  {
    _id: "6399ebe8e1a36d2bc38832a4",
    userId: "63975671d73637cce49efe50",
    restaurantId: "6399eb92d7e45cf3d86af298",
    foodCategory: ["sharing"],
    dishType: ["Salad"],
    img: "https://res.cloudinary.com/dlml6omng/image/upload/v1671031783/avatars/qlnoj73prohdkjj90cjs.jpg",
    likes: ["6393464a6ad8fd0fa4bc7662"],
    createdAt: "2022-12-14T15:29:44.483Z",
    updatedAt: "2022-12-14T21:49:24.811Z",
    __v: 0,
  },
  {
    _id: "6399db652daea1dac8eb65de",
    userId: "63975671d73637cce49efe50",
    restaurantId: "638f6522b5ba4755ecbff4b5",
    foodCategory: [],
    dishType: ["Main-Course"],
    img: "https://res.cloudinary.com/dlml6omng/image/upload/v1671027561/avatars/f6vhethahehr2sprkrax.jpg",
    likes: [],
    createdAt: "2022-12-14T14:19:17.893Z",
    updatedAt: "2022-12-14T14:19:17.893Z",
    __v: 0,
  },
  {
    _id: "6399d62a20f146808a5a49c7",
    userId: "63931ce478ba61e01dbf2a1b",
    restaurantId: "63483ac382423955445cb01c",
    foodCategory: ["sharing"],
    dishType: ["Main-Course"],
    img: "https://res.cloudinary.com/dlml6omng/image/upload/v1671026217/avatars/uensqfbwox7hnxinwap0.jpg",
    likes: [],
    createdAt: "2022-12-14T13:56:58.247Z",
    updatedAt: "2022-12-14T13:56:58.247Z",
    __v: 0,
  },

  {
    _id: "6399d2fdae8d3bc287393552",
    userId: "63975671d73637cce49efe50",
    restaurantId: "638f6370b5ba4755ecbff413",
    foodCategory: ["vegan", "gluten-free", "kosher", "sharing"],
    dishType: ["Dessert"],
    img: "https://res.cloudinary.com/dlml6omng/image/upload/v1671025408/avatars/nbdbniuatcq2s3wnoy3n.jpg",
    likes: [],
    createdAt: "2022-12-14T13:43:25.320Z",
    updatedAt: "2022-12-14T13:43:25.320Z",
    __v: 0,
  },
];


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

