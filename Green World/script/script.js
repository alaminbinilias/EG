


// console.log('connected');


// modal section for responsive cart section


const viewCartBtn = document.getElementById('viewForCart');

const modalDetails = document.getElementById('modlDetails');
//console.log(modalDetails);

modalDetails.innerHTML = `


<div class="max-h-[50rem] block md:hidden bg-[#ffffff] col-span-2 rounded-md">
            <div class="p-3">
              <p class="mb-2 font-semibold text-[1.5rem] inter">Your Cart</p>
              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>


              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>


              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>


              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>


              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>



              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>



              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>



              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>

              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>






              <div class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p>Mango Tree</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>500 x 1</p>
                  </div>
                  <div class="-mt-2">
                    <span class="cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="sticky">
                <p>
                  <hr class="text-gray-400">
                </p>
                <div class="mb-5 mt-2 px-3 flex justify-between items-center inter">
                  <p class="font-medium text-[1.2rem]">Total:</p>
                  <p class="font-medium text-[1.2rem]"><span>৳</span>1000</p>
                </div>
              </div>
            </div>
          </div>

`;


// End of_modal section for responsive cart section




// catagory Name or all tree name



const allTreeCatagory=()=>{
const url = 'https://openapi.programming-hero.com/api/categories';

fetch(url)
  .then(response => response.json())
  .then(data => treeBtn(data.categories));


const treeBtn = (arr) => {
  for (it of arr) {
    const treeCatagry = document.getElementById('treeCatagory');
    // console.log(treeCatagry);

    const treeCatagorySm = document.getElementById('treeCatagorysm');

    const dv = document.createElement('div');
    const dv1 = document.createElement('div');
    dv.innerHTML = `
    <button id=btn-${it.id} onclick="selctedBtn(${it.id})" class="AllBtns cursor-pointer w-full hover:bg-[#58d786] hover:text-white text-left py-1 px-1 rounded-md">${it.category_name}</button>
    `;

    dv1.innerHTML = `
    <button id=btn1-${it.id} onclick="selctedBtn1(${it.id})" class=" AllBtns1 cursor-pointer w-full  hover:bg-[#58d786] hover:text-white text-left py-1 px-1 rounded-md">${it.category_name}</button>
    `;
    treeCatagry.appendChild(dv);
    treeCatagorySm.appendChild(dv1);
  }
}

}

allTreeCatagory();



// End of catagory Name or all tree name


const ClearSelectedBtnStyle=()=>{

  const allBtn=document.getElementsByClassName('AllBtns');
  for(it of allBtn){
    //console.log(it);
    it.classList.remove('SelectedBtn');
  }
  //allBtn.classList.remove('SelectedBtn');

}



const specificBtnItems=(SpecificPlants)=>{

  const plantsSection = document.getElementById('card_Section');
  plantsSection.innerText="";
  for(it of SpecificPlants){

    const dv=document.createElement('div');

    dv.innerHTML=`
    
    <div class="bg-white px-3 py-4 rounded-md h-full">
                <div class="For_Images h-[13rem] rounded-md">

                  <div>
                    <img class="h-[13rem] w-full mx-auto rounded-md " src="${it.image}" alt="">
                  </div>


                </div>
                <p class=" mt-4 font-semibold mb-2">${it.name}</p>
                <p class="mt-3 mb-7 text-justify sm:h-[8rem] md:h-[6rem]">${it.description}</p>
                <div class="flex justify-between items-center mb-5 h-[3rem]">
                  <button class="px-2 py-1 bg-[#cef0dc] rounded-full text-[#14803c] font-medium cursor-pointer">${it.category}</button>
                  <p class="font-semibold "><span>৳</span>${it.price}</p>
                </div>
                <button class="mb-2 h-fit p-2 w-full bg-[#14803c] text-white rounded-full cursor-pointer hover:bg-green-800">Add to Cart</button>
                </div>
    
    
    `;

    plantsSection.appendChild(dv);

  }
}


const selctedBtn=(id)=>{



  const url=`https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
  .then(response => response.json())
  .then(data => specificBtnItems(data.plants));
  
  const specificBtn=document.getElementById(`btn-${id}`);
  
  ClearSelectedBtnStyle();
  specificBtn.classList.add("SelectedBtn");
}









// ///display all card Section


const AllCardSection=() =>{

  const LinkSection = 'https://openapi.programming-hero.com/api/plants';
 fetch(LinkSection)
  .then(response => response.json())
  .then(allData => allPlantsData(allData.plants));

 const allPlantsData = (plants) => {

   for (it of plants) {
    // console.log(it.image);
     const plantsSection = document.getElementById('card_Section');

     const dv = document.createElement('div');

     dv.innerHTML = `

     <div class="bg-white px-3 py-4 rounded-md h-full">
                <div class="For_Images h-[13rem] rounded-md">

                  <div>
                    <img class="h-[13rem] w-full mx-auto rounded-md " src="${it.image}" alt="">
                  </div>


                </div>
                <p class=" mt-4 font-semibold mb-2">${it.name}</p>
                <p class="mt-3 mb-7 text-justify sm:h-[8rem] md:h-[6rem]">${it.description}</p>
                <div class="flex justify-between items-center mb-5 h-[3rem]">
                  <button class="px-2 py-1 bg-[#cef0dc] rounded-full text-[#14803c] font-medium cursor-pointer">${it.category}</button>
                  <p class="font-semibold "><span>৳</span>${it.price}</p>
                </div>
                <button class="mb-2 h-fit p-2 w-full bg-[#14803c] text-white rounded-full cursor-pointer hover:bg-green-800">Add to Cart</button>
                </div>
    
    
 `;
     plantsSection.appendChild(dv);
  }
}

}

AllCardSection();


///End of display all card Section 

