'use strict';
let imagesDiv = document.getElementById('images-div')
let leftImageElement = document.getElementById('left-image')
let rightimageElement = document.getElementById('right-image')
let middleimageElement = document.getElementById('middle-image')
let maxAttempts = 25;
let userAttemptsCounter = 0
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
   


function Products(name,source){
    this.name=name;
    this.source=source;
    this.votes=0;
    this.times = 0;
    Products.allImages.push(this);
}
Products.allImages=[];

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
function RenderThreeImages() {
     
   leftImageIndex = generateRandomIndex();

   do{
       rightimageElement === generateRandomIndex();
   }while (leftImageIndex === rightImageIndex)

   do {middleimageElement = generateRandomIndex();
    }while (rightImageIndex === middleImageIndex || leftImageIndex === middleImageIndex)



   leftImageElement.src = Products.allImages[leftImageIndex].source;
   Products.allImages[leftImageIndex].times++;
   middleimageElement.src = Products.allImages[middleImageIndex].source;
   Products.allImages[middleImageIndex].times++;
   rightimageElement.src = Products.allImages[rightImageIndex].source;
   Products.allImages[rightImageIndex].times++;
}
RenderThreeImages();

imagesDiv.addEventListener('click',handleUserClick);


function handleUserClick(event){
    userAttemptsCounter++;
    if(userAttemptsCounter<maxAttempts){
        if(event.target.id === 'left-image'){
        Products.allImages[leftImageIndex].votes++

    }else if (event.target.id == 'right-image'){
        Products.allImages[rightImageIndex].votes++
    }else{ 
        Products.allImages[middleImageIndex].votes++
    }    
    RenderThreeImages();

}else{

    let list = document.getElementById("result-list");
    let btn = document.createElement("button")
    list.appendChild(btn);
    btn.textContent= "Show Results"
    btn.addEventListener('click', press)
    imagesDiv.removeEventListener('click', handleUserClick);
}


}
function press (){
    for (let i =0; i<Products.allImages.length; i++){
        let result = document.createElement('li')
        let list = document.getElementById("result-list");
        list.appendChild("result");
        
        result.textContent = Products.allImages[i].name + "had" + Products.allImages[i].votes + "vote, and was seen" + Products.allImages[i].times + " times";
    }
}




