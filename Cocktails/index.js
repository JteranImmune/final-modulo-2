const initCocktailChart = () => {

  const cocktailChart = document.getElementById('myChart');
  const dataCount = [];
  const cocktailYear = [];
  let chart;

  cocktails.forEach(({ dateModified }) => {

    if (!dateModified) return null;

    const years = dateModified.slice(0, 4);

    if (cocktailYear.includes(years)) {
      const yearIndex = cocktailYear.indexOf(years);
      dataCount[yearIndex] += 1;
    } else {
      cocktailYear.push(years);
      dataCount.push(1);
    };

    return cocktailYear.sort((year1, year2) => {
      return year1 - year2;
    });
  });

  chart = new Chart(cocktailChart, {
    type: 'line',
    data: {
      labels: cocktailYear,
      datasets: [
        {
          label: "Cocktails",
          data: dataCount,
        },
      ],
    },
  });

  const cocktailChart2 = document.getElementById('myChart2');
  const cocktailsIngredients = ['Gin', 'Vodka', 'Tequila', 'Rum', 'Whiskey'];
  const dataCount2 = [];
  let chart2;

// function countIngredientOccurrences(ingredient) {

//   let count = 0;

//   cocktails.forEach(cocktail => {

//     for (let key in cocktail) {
//       if (cocktail[key] === ingredient) {
//         count++;
//       }
//       console.log(cocktail[key]);
//     }
//   });
//   return count;
// }

// Calcular la suma de cada ingrediente y agregarla a dataCount2
// cocktailsIngredients.forEach(ingredient => {
//   const count = countIngredientOccurrences(ingredient);
//   dataCount2.push(count);
// });
  
  
  const cocktailFind = (ingredient) => {

    let count = 0;

    cocktails.forEach((cocktail) => {
  
      let arrayCocktails = Object.values(cocktail);

      for (let i=9 ; i < 24; i++){

        if (arrayCocktails[i] === ingredient) {
          count++;
          };
        };
    });

    return count;
  };


  cocktailsIngredients.forEach((ingredient) => {
      let ingredientCount = cocktailFind(ingredient);
      dataCount2.push(ingredientCount);
    });


console.log(dataCount2);
console.log(cocktailsIngredients);

  chart2 = new Chart(cocktailChart2, {
    type: 'pie',
    data: {
      labels: cocktailsIngredients,
      datasets: [
        {
          label: "Cocktails Amount",
          data: dataCount2,
          backgroundColor: [
            'rgb(220, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(54, 205, 90)',
            'rgb(255, 99, 86)',
            'rgb(255, 210, 86)'
          ],
        },
      ],
    },
  });
};


initCocktailChart();


