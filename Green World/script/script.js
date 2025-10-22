///Cart Section

  let i=0;
  let pr=0;
  let pk=1;
  let  PT=i;
  const clearCart=(price,items)=>{
   const DeleteCart=document.getElementById(`ClearBtn-${items}`);
  //   //console.log(DeleteCart);
     const DeleteCartSm=document.getElementById(`ClearBtnsm-${items}`);
  //   //console.log(DeleteCartSm);
        DeleteCart.classList.add('hdn');
      DeleteCartSm.classList.add('hdn');
      pr-=price;
     prBtn=document.getElementById('PriceBtn');
     prBtn.innerText=pr;

  }

  
  const CartSection=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`;
  const res=await fetch(url);
  const data=await res.json();
  const mnData=data.plants;
  //console.log(mnData);
    const CartSections=document.getElementById('DesktopCartSection');
    //alert("Hello");
    const Cnt=document.getElementById('cntCart');
    //console.log(cnt);
    const dv=document.createElement('div');
    //i++;
    //console.log(pr);
    const Price=document.getElementById('PriceBtn');
    pr+=mnData.price;
    Price.innerText=pr;

    const LastOption=document.getElementById('totalOption');
    // LastOption.classList.add("move");
    const Options=document.getElementById('totalOptions');
    Options.style.marginTop=pk+"10px";
    pk++;
    i++;
    dv.innerHTML=`
    
    <div class="px-3 relative">
              <div id="ClearBtn-${i}" class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p class="font-medium">${mnData.name}</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>${mnData.price}</p>
                  </div>
                  <div class="-mt-2">
                    <button onclick="clearCart(${mnData.price},${i})" class="cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                  </div>
                </div>
              </div>
            </div>
    `;
    CartSections.appendChild(dv);
    
  }

//modal section for responsive cart section

//smCart(${it.id})

let pr1=pr;

const smCart=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`;
  const respnse=await fetch(url);
  const cnvrtjson=await respnse.json();
  const data=cnvrtjson.plants;
  //console.log(data);
  const modalDetails = document.getElementById('modlDetails');
  //const CNTCART=document.getElementById('cntCart');
  //console.log(CNTCART);
  //CNTCART.innerText=pp;
  //const PriceRemain=document.getElementById('cartModalPrice');
  //PriceRemain.innerText=pr1;
  ///modalDetails.classList.add('hidden');
  //console.log(modalDetails);
  //pr1+=data.price;
  const dv=document.createElement('div');
  dv.innerHTML=`

  <div class="px-3 relative">
              <div id="ClearBtnsm-${i}" class="bg-[#f0fcf4] p-2 rounded-md mb-2">
                <p class="font-medium">${data.name}</p>
                <div class="flex justify-between">
                  <div>
                    <p class="mt-1"><span>৳</span>${data.price}</p>
                  </div>
                  <div class="-mt-2">
                    <button onclick="clearCart(${data.price},${i})" class="cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                  </div>
                </div>
              </div>
            </div>
  
  `;
  modalDetails.appendChild(dv);


}



// End of_modal section for responsive cart section




///Manage Spinner

const Spinner=(status)=>{
  if(status==true){
    document.getElementById('Spin').classList.remove('hidden');
    document.getElementById('card_Section').classList.add('hidden');

  }
  else{

    document.getElementById('Spin').classList.add('hidden');
    document.getElementById('card_Section').classList.remove('hidden');
  }
}

///End Of Manage Spinner

// catagory Name or all tree name



const allTreeCatagory=()=>{
const url = 'https://openapi.programming-hero.com/api/categories';

fetch(url)
  .then(response => response.json())
  .then(data => treeBtn(data.categories));


const treeBtn = (arr) => {
  for (it of arr) {
    Spinner(true);
    const treeCatagry = document.getElementById('treeCatagory');
    // console.log(treeCatagry);

    const treeCatagorySm = document.getElementById('treeCatagorysm');

    const dv = document.createElement('div');
    const dv1 = document.createElement('div');
    dv.innerHTML = `
    <button id=btn-${it.id} onclick="selctedBtn(${it.id})" class="AllBtns cursor-pointer w-full hover:bg-[#58d786] hover:text-white text-left py-1 px-1 rounded-md">${it.category_name}</button>
    `;

    dv1.innerHTML = `
    <button id=btn1-${it.id} onclick="selctedBtn(${it.id})" class=" AllBtns1 cursor-pointer w-full  hover:bg-[#58d786] hover:text-white text-left py-1 px-1 rounded-md">${it.category_name}</button>
    `;
    treeCatagry.appendChild(dv);
    treeCatagorySm.appendChild(dv1);
    Spinner(false);
  }
}

}

allTreeCatagory();



// End of catagory Name or all tree name


const ClearSelectedBtnStyle=()=>{

  const allBtn=document.getElementsByClassName('AllBtns');

  const allBtn1=document.querySelectorAll('.AllBtns1');
  //console.log(allBtn1);
  for(it of allBtn){
    //console.log(it);
    it.classList.remove('SelectedBtn');
  }
  //For small size catagory selected btn

  for(it1 of allBtn1){
    it1.classList.remove('SelectedBtn');
  }

}



const specificBtnItems=(SpecificPlants)=>{
  const plantsSection = document.getElementById('card_Section');
  plantsSection.innerText="";


  
  for(it of SpecificPlants){

    const dv=document.createElement('div');
    Spinner(true);

    dv.innerHTML=`
    
    <div class="bg-white px-3 py-4 rounded-md h-full">
                <div class="For_Images h-[13rem] rounded-md">

                  <div>
                    <img class="h-[16rem] w-full mx-auto rounded-md " src="${it.image}" alt="">
                  </div>


                </div>
                <p onclick="SinglePlantDescription(${it.id})" class=" mt-15 font-semibold mb-2">${it.name}</p>
                <p class="mt-3 mb-4 text-justify sm:h-[8rem] md:h-[6rem]">${it.description}</p>
                <div class="flex justify-between items-center mb-5 h-[3rem]">
                  <button class="px-2 py-1 bg-[#cef0dc] rounded-full text-[#14803c] font-medium cursor-pointer">${it.category}</button>
                  <p class="font-semibold "><span>৳</span>${it.price}</p>
                </div>
                <button onclick="CartSection(${it.id}),smCart(${it.id})" class="mb-2 h-fit p-2 w-full bg-[#14803c] text-white rounded-full cursor-pointer hover:bg-green-800">Add to Cart</button>
                </div>
    
    
    `;

    plantsSection.appendChild(dv);
    Spinner(false);
  }
}



const selctedBtn=(id)=>{


  const url=`https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
  .then(response => response.json())
  .then(data => specificBtnItems(data.plants));
  Spinner(true);
  const specificBtn=document.getElementById(`btn-${id}`);
  const specificBtn1=document.getElementById(`btn1-${id}`);
  
  ClearSelectedBtnStyle();
  specificBtn.classList.add("SelectedBtn");
   specificBtn1.classList.add('SelectedBtn');
}

// const clearCart=(pr,id)=>{
//   const spBtn=document.getElementById(`ClearBtn-${id}`);
//   spBtn.classList.add('hdn');
//   const priceBtn=document.getElementById("PriceBtn");
//   //spriceBtn.classList.add('hdn');
//   //priceBtn.remove();
//   //console.log(priceBtn);
//   //console.log(priceBtn.innerText);
//   total=parseInt(priceBtn.innerText);
//   //console.log(total);
//   //console.log(pr);
//   total-=pr;
//   if(total<=0){
//     total=0;
//   }
//   console.log(total);
//   priceBtn.innerText=total;
//   priceBtn.remove();

//   //priceBtn.innerText=pr;

// }



//SepcificPantsModals

const SinglePlantDescription=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`;
  const res=await fetch(url);
  const cnvrtJson= await res.json();
  const data= cnvrtJson.plants;
  my_modal_3.showModal();
  const PlantsDescription=document.getElementById('PlantsDescription');
  PlantsDescription.innerHTML=`
  
    <div>
        <p class="text-[1.5rem] font-semibold">${data.name}</p>
    </div>
    <div>
      <img class="h-[20rem] w-full rounded-md mt-3 mb-4" src="${data.image}" alt="">
    </div>
    <div>
      <p class="text-[1.1rem]"><span class="text-[1.2rem] font-medium">Catagory:</span> ${data.category}</p>
      <p class="text-[1.1rem]"><span class="text-[1.2rem] font-medium">Price:</span> <span>৳</span>${data.price}</p>
      <p class="text-[1.1rem]"><span class="text-[1.2rem] font-medium">Description:</span> ${data.description}</p>
    </div>
  `;
  PlantsDescription.appendChild(dv);

}


// ///display all card Section


const AllCardSection=() =>{

  const LinkSection = 'https://openapi.programming-hero.com/api/plants';
 fetch(LinkSection)
  .then(response => response.json())
  .then(allData => allPlantsData(allData.plants));
  Spinner(true);

 const allPlantsData = (plants) => {

   for (it of plants) {
    // console.log(it.image);
     const plantsSection = document.getElementById('card_Section');
     const dv = document.createElement('div');

     dv.innerHTML = `

     <div class="bg-white px-3 py-4 rounded-md h-full">
                <div class="For_Images h-[13rem] rounded-md">

                  <div>
                    <img class="h-[16rem] w-full mx-auto rounded-md " src="${it.image}" alt="">
                  </div>
                </div>
                <p id="specific-${it.id}" onclick="SinglePlantDescription(${it.id})" class=" mt-15 font-semibold mb-2">${it.name}</p>
                <p class="mt-3 mb-10 text-justify sm:h-[8rem] md:h-[6rem]">${it.description}</p>
                <div class="flex justify-between items-center mb- h-[3rem]">
                  <button class="px-2 py-1 bg-[#cef0dc] rounded-full text-[#14803c] font-medium cursor-pointer">${it.category}</button>
                  <p class="font-semibold "><span>৳</span>${it.price}</p>
                </div>
                <button onclick="CartSection(${it.id}),smCart(${it.id})" class="mb-2 mt-5 h-fit p-2 w-full bg-[#14803c] text-white rounded-full cursor-pointer hover:bg-green-800">Add to Cart</button>
                </div>
    
    
 `;
     plantsSection.appendChild(dv);
     Spinner(false);
  }
}

}

AllCardSection();


///End of display all card Section 

