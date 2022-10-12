function changeMode() {
    var element = document.body
    element.classList.toggle("dark-mode");
  }

function show(){
	document.getElementById("drop").style.visibility = "visible"
}
function unshow(){
	document.getElementById("drop").style.visibility = "hidden"
}
const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

  function left () {
      document.getElementById('contain').scrollLeft += 250;
    };
   function right () {
      document.getElementById('contain').scrollLeft -= 250;
    };
fetch("https://fakestoreapi.com/products/category/women's%20clothing?limit=10").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data1 = "";
	json.map((values)=> {
		data1 += ` 
		<div class="bs-product me-4" style=" min-width: 250px; text-align: center; background-color: #02010a; "><img src="${values.image}"style="width:100%; height: 50%; object-fit: contain; border-radius: 10px 10px 10px 10px;">
	   <div style="color:  #fff;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
	   <h5 style="color: #fff;">${values.title}</h5>
	<h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6></div>
		</div>`;
	})
	document.getElementById("contain").innerHTML = data1;
}).catch((err)=> {
	console.log(err);
})

fetch("https://fakestoreapi.com/products?limit=4").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `<div class="col-md text-center mx-auto " style="height: 300px;  border-radius: 10px 10px 10px 10px;"><img src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%; object-fit:contain; border-radius: 10px;">
		<div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
		<h6 style="color: #112A46;">${values.title}</h6>
		<h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
	  </div>`;
	})
	document.getElementById("prod1").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})

fetch("https://fakestoreapi.com/products/category/jewelery?limit=4").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `<div class="col-md text-center mx-auto" style="height: 300px;  border-radius: 10px 10px 10px 10px;"><img  src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%;  object-fit:contain; border-radius: 10px;">
		<div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
		<h6 style="color: #112A46;">${values.title}</h6>
		<h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
	  </div>`;
	})
	document.getElementById("prod2").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})

fetch("https://fakestoreapi.com/products/category/women's%20clothing?limit=4").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `<div class="col-md  text-center mx-auto" style="height: 300px; border-radius: 10px 10px 10px 10px;"><img src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%;  object-fit:contain; border-radius: 10px;">
		<div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
		<h6 style="color: #112A46;">${values.title}</h6>
		<h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
	  </div>`;
	})
	document.getElementById("prod3").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    
   var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("mins").innerHTML = minutes + "m";
  document.getElementById("sec").innerHTML = seconds + "s";
     
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
  
}, 1000);

const testimonialsContainer = document.querySelector('.testimonials-container') 
 const testimonial = document.querySelector('.testimonial') 
 const userImage = document.querySelector('.user-image') 
 const username = document.querySelector('.username') 
 const role = document.querySelector('.role') 
  
 const testimonials = [ 
   { 
     name: 'Jane Wales', 
     position: 'Customer', 
     photo: 
       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6', 
     text: 
       "I am so happy I found this online store..easy to used and very helpful. excellent online store..i am surely recommend this store to everybody.. thank you so much.. thumps up!", 
   }, 
   { 
     name: 'Prima Kim', 
     position: 'Customer', 
     photo: 'https://randomuser.me/api/portraits/women/44.jpg', 
     text: 
       'Love using this app makes it so easy. Love there clothes. Always with updated merchandise. Thanks', 
   }, 
   { 
     name: 'Maya Carson', 
     position: 'Customer', 
     photo: 'https://randomuser.me/api/portraits/women/68.jpg', 
     text: 
       "I started using this site when I realized the people behind it were the same I was already getting clothing from for my boutique. It's good clothing, great prices, and they are really starting to stay on top of and add in a bit more 'trendy' styles each week (they sell out super fast) but it's mostly basics. Great to add variety to your shop for sure and not carry extra stock!", 
   }, 
   { 
     name: 'Bella Melson', 
     position: 'Customer', 
     photo: 'https://randomuser.me/api/portraits/women/65.jpg', 
     text: 
       "So far my experience has been great! The items are in good quality. They probably just have to increase the resolution of the photos so it won’t end up blurry after copying... great customer service", 
   }, 
   { 
     name: 'Brock Darwin', 
     position: 'Customer', 
     photo: 'https://randomuser.me/api/portraits/men/43.jpg', 
     text: 
       "Great clothing options as well as accessories and shoes. The drop shipping option is perfect for those who may not have the space to store the items or time to package and ship. The site keeps getting better in terms of what they offer and customer service is awesome!", 
   }, 
   { 
     name: 'Casie Hofana', 
     position: 'Customer', 
     photo: 
       'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb', 
     text: 
       'UPDATE : I am Super Pleased with the App. They have made adjustments to the app just on my suggestion. The Plus Size Selection has been updated frequently and I am happy with the new additions. I have had other apps that I had major issues with and could never get them resolved. Thank you', 
   }, 
   { 
     name: 'Veeti Seppanen', 
     position: 'Customer', 
     photo: 'https://randomuser.me/api/portraits/men/97.jpg', 
     text: 
       'Excellent product quality and excellent delivery with each order I’d placed with ShopFiend. So I would like to say, CC Fashion is the best place to buy quality products!"       ', 
   }, 
 ] 
  
 let idx = 1 
  
 function updateTestimonial() { 
   const { name, position, photo, text } = testimonials[idx] 
   document.querySelector('.testimonial').innerHTML = text ;
   document.querySelector('.user-image').src = photo ;
   document.querySelector('.username').innerHTML = name ;
   document.querySelector('.role').innerHTML = position ;
   idx++ ;
   if (idx > testimonials.length - 1) { 
     idx = 0 
   } 
 } 
  
 setInterval(updateTestimonial, 10000);

 fetch("https://fakestoreapi.com/products/category/men's%20clothing").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `   <div class="col-md text-center mx-auto " style="height: 300px;  border-radius: 10px 10px 10px 10px;;"><img src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%; object-fit:contain; border-radius: 10px;">
    <div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
    <h6 style="color: #112A46;">${values.title}</h6>
    <h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
  </div>`;
	})
	document.getElementById("cont-div").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})

fetch("https://fakestoreapi.com/products/category/women's%20clothing").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `   <div class="col-md text-center mx-auto " style="height: 300px;  border-radius: 10px 10px 10px 10px;;"><img src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%; object-fit:contain; border-radius: 10px;">
    <div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
    <h6 style="color: #112A46;">${values.title}</h6>
    <h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
  </div>`;
	})
	document.getElementById("cont-div2").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})

fetch("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `   <div class="col-md text-center mx-auto " style="height: 300px;  border-radius: 10px 10px 10px 10px;;"><img src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%; object-fit:contain; border-radius: 10px;">
    <div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
    <h6 style="color: #112A46;">${values.title}</h6>
    <h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
  </div>`;
	})
	document.getElementById("cont-div3").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})
fetch("https://fakestoreapi.com/products").then((res)=>{
	return res.json();
}).then((json) => {
	//console.log(json)
	let data2 = "";
	json.map((values)=> {
		data2 += `   <div class="col-md mb-5 text-center mt-5" style="height: 300px; width:50%; border-radius: 10px 10px 10px 10px;;"><img src="${values.image}" alt="photo" class="cat-dis" style="width: 100%; height: 50%; object-fit:contain; border-radius: 10px;">
    <div style="color:  #112A46;" class="stars mt-3"><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i><i class="fi fi-ss-star"></i></div>
    <h6 style="color: #112A46;">${values.title}</h6>
    <h6 style="color: #F51800;" class="text-center">${"$" + values.price}</h6>
  </div>`;
	})
	document.getElementById("cont-div4").innerHTML = data2;
}).catch((err)=> {
	console.log(err);
})


var SECRET_KEY = "0x07093C9253300980fEd2B56Ffb32979f1BD8208d"   
var VERIFY_URL = "https://hcaptcha.com/siteverify"
var token = request.POST_DATA['h-captcha-response']

var data = { 'secret': SECRET_KEY, 'response': token }


response = http.post(url=VERIFY_URL, data=data)
response_json = JSON.parse(response.content)
success = response_json['success']

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}