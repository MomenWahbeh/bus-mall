'use strict';
let imagesDiv = document.getElementById('images-div')

let leftImageElement = document.getElementById('left-image')
let rightImageElement = document.getElementById('right-image')
let middleImageElement = document.getElementById('middle-image')

let maxAttempts = 25;
let userAttemptsCounter = 0

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let Images = [];
let productsName=[];
let productsTimes = [];
let productsVotes = [];

function Products(name,source){
    this.name=name;
    this.source=source;
    this.votes=0;
    this.times = 0;


    Products.allImages.push(this);
    productsName.push(name)
}
Products.allImages=[];

function setItems() {
    let data = JSON.stringify(Products.allImages);
    localStorage.setItem('product' , data);
}
new Products('bag','image/bag.jpg');
new Products('banana','image/banana.jpg');
new Products('bathroom','image/bathroom.jpg');
new Products('boots','image/boots.jpg');
new Products('breakfast','image/breakfast.jpg');
new Products('bubblegum','image/bubblegum.jpg');
new Products('chair','image/chair.jpg');
new Products('cthulhu','image/cthulhu.jpg');
new Products('dog-duck','image/dog-duck.jpg');
new Products('dragon','image/dragon.jpg');
new Products('pen','image/pen.jpg');
new Products('pet-sweep','image/pet-sweep.jpg');
new Products('scissors','image/scissors.jpg');
new Products('shark','image/shark.jpg');
new Products('sweep','image/sweep.png');
new Products('tauntaun','image/tauntaun.jpg');
new Products('unicorn','image/unicorn.jpg');
new Products('usb','image/usb.gif');
new Products('water-can','image/water-can.jpg');
new Products('wine-glass','image/wine-glass.jpg');

function generateRandomIndex() {
    return Math.floor(Math.random()*Products.allImages.length);
}

function getItems() {
    let srtringObject = localStorage.getItem('product')
    if (srtringObject) {
      Products.allImages = JSON.parse(srtringObject)
    }

}
function RenderThreeImages() {
     
   leftImageIndex = generateRandomIndex();

   do{
       rightImageIndex = generateRandomIndex();
       middleImageIndex= generateRandomIndex();
       leftImageIndex = generateRandomIndex();

   
    }
    while ((leftImageIndex === rightImageIndex) || (rightImageIndex)=== (middleImageIndex) || (middleImageIndex === leftImageIndex)  || Images.includes(middleImageIndex) || Images.includes(rightImageIndex) || Images.includes(leftImageIndex))

   leftImageElement.src = Products.allImages[leftImageIndex].source;
   Products.allImages[leftImageIndex].times++;

   middleImageElement.src = Products.allImages[middleImageIndex].source;
   Products.allImages[middleImageIndex].times++;

   rightImageElement.src = Products.allImages[rightImageIndex].source;
   Products.allImages[rightImageIndex].times++;
}
RenderThreeImages();

imagesDiv.addEventListener('click',handleUserClick);


function handleUserClick(event){
    userAttemptsCounter++;
    if(userAttemptsCounter<=maxAttempts){
        if(event.target.id === 'left-image'){
        Products.allImages[leftImageIndex].votes++
        setItems()
    }else if (event.target.id = 'right-image'){
        Products.allImages[rightImageIndex].votes++
        setItems()
    }else{ 
        Products.allImages[middleImageIndex].votes++
        setItems()
    }    
    RenderThreeImages();

}else{

    /*let list = document.getElementById("result-list");
    let btn = document.createElement("button")
    list.appendChild(btn);
    btn.textContent= "Show Results"
    btn.addEventListener('click', press)
    imagesDiv.removeEventListener('click', handleUserClick);*/


//function press (){

    for (let i =0; i<Products.allImages.length; i++){
       /* let result = document.createElement('li')
        let list = document.getElementById("result-list");
        list.appendChild(result);
        
        result.textContent = Products.allImages[i].name + "had" + Products.allImages[i].votes + "vote, and was seen" + Products.allImages[i].times + " times";
    */
   productsVotes.push(Products.allImages[i].votes);
   productsTimes.push(Products.allImages[i].times);
    }


   viewChart();
}

}





function viewChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
        // The data for our dataset
        data: {
            labels: productsName,
            datasets: [
                {
                    label: ' product votes',
                    backgroundColor: '#ef8d32',
                    borderColor: '#ef8d32',
                    data: productsVotes
                },
                {
                    label: ' product Times',
                    backgroundColor: '#aa2b1d',
                    borderColor: '#aa2b1d',
                    data: productsTimes
                },
            ]
        },
        // Configuration options go here
        options: {}
    });

}