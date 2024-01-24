const initCocktailList = () => {

    const containerList = document.getElementById('containerList');
    const inputName = document.getElementById('cocktailName');
    const inputImage = document.getElementById('cocktailImage');
    const inputGlass = document.getElementById('cocktailGlass');
    const inputCategory = document.getElementById('cocktailCategory');
    const inputIngredients = document.getElementById('cocktailIngredients');
    const inputInstructions = document.getElementById('cocktailInstructions');

    const lastTwentyCocktails = cocktails.slice(-20);
  
    
    lastTwentyCocktails.forEach((cocktail) =>{
  
      const cocktailName = cocktail.strDrink;
      const cocktailImg = cocktail.strDrinkThumb;
      const cocktailGlass = cocktail.strGlass;
      const cocktailCategory = cocktail.strCategory;
      const cocktailInstructions = cocktail.strInstructions;
      const cocktailIngredients = [];

      const cocktailContainer = document.createElement('a');
      cocktailContainer.setAttribute("data-name", cocktailName);
      cocktailContainer.className = 'list-group-item list-group-item-action pe-auto';
      cocktailContainer.addEventListener('click' , handleClick(cocktailName, cocktailImg, cocktailGlass,cocktailCategory, cocktailInstructions, cocktailIngredients));

      const li = document.createElement('li');
      li.innerText = cocktailName;
      li.className = 'cocktail-item';

      cocktailContainer.appendChild(li);
      
      containerList.appendChild(cocktailContainer);

      let arrayCocktails = Object.values(cocktail);
      for (let i=9 ; i < 24; i++){
        if (arrayCocktails[i] === '' || arrayCocktails[i] === null) {
          arrayCocktails[i] = "N/A";
          } else {
            cocktailIngredients.push(arrayCocktails[i]);
          }
        }

    });  
    
    function handleClick(cocktailName, cocktailImg, cocktailGlass, cocktailCategory, cocktailInstructions, cocktailIngredients){
      return (event)=>{
        event.preventDefault();
    
        const clearFields = () => {
          inputName.value='';
          inputImage.value='';
          inputCategory.value="";
          inputIngredients.innerHTML="";
          inputInstructions.value='';
        }
    
        clearFields();
    
        inputName.value = cocktailName;
        inputImage.src = cocktailImg;
        inputGlass.value = cocktailGlass;
        inputCategory.value = cocktailCategory;
        inputInstructions.innerText = cocktailInstructions;
    
        cocktailIngredients.map((ing) => {
          const ingListItem = document.createElement('li');
          ingListItem.className='list-group-item text-start mb-1';
          ingListItem.innerText = ing;
          inputIngredients.appendChild(ingListItem);
    
        })
      } 
    };  
};


initCocktailList();
