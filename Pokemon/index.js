const initPokemonChart = () => {

    const pokemonChart = document.getElementById('myChart');
    const buttonFind = document.querySelector('#buttonFind');
    const buttonRandom = document.querySelector('#buttonRandom');
    const invalidFeedback = document.querySelector('.invalid-feedback');
    const pokemonDisplyaName = document.querySelector('.pokemonName');
    let chart;

    // Gráfico sin datos

    chart = new Chart(pokemonChart, {
      type: 'bar',
      data: {
        labels: ['Hp', 'Attack', 'Defense', 'Special-attack', 'Special-defense', 'Speed'],
        datasets: [
          {
            label: 'Pokemon name',
            data: [0 , 0 , 0 , 0 , 0, 0],
          },
        ],
      },
    });
    
    buttonFind.addEventListener('click', (e) => {
      
      const pokemonId = document.getElementById('pokemonId').value;
      const pokemonIdInput = document.getElementById('pokemonId');
      const pokemonImage = document.getElementById('pokemonImage');
      
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  
      .then(response => response.json())
      .then(data => {
          console.log(data);

          if (chart) {
            chart.destroy();
          };

          if (invalidFeedback){
            invalidFeedback.style.display = "none";
            pokemonIdInput.classList.remove('is-invalid')
          };

          pokemonIdInput.classList.add('is-valid');  
  
          const stats = [];
          const statsName = [];
          const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);

          pokemonImage.src = data.sprites.front_default;
          pokemonImage.alt = data.name;
          pokemonDisplyaName.innerText = pokemonName;
            
          data.stats.map(({stat , base_stat}) => {
            statsName.push(stat.name[0].toUpperCase() + stat.name.slice(1));
            stats.push(base_stat);
          });
          
          chart = new Chart(pokemonChart, {
              type: 'bar',
              data: {
                labels: statsName,
                datasets: [
                  {
                    label: pokemonName,
                    data: stats,
                  },
                ],
              },
            });

          }).catch(() => {

            invalidFeedback.style.display = "block";
            pokemonIdInput.classList.add('is-invalid');
            pokemonImage.src = "src/img/pokeball.png";
            pokemonDisplyaName.innerText = "";

            if (chart) {
              chart.destroy();
            };

             // Gráfico sin datos cuando no existe el pokemon

            chart = new Chart(pokemonChart, {
              type: 'bar',
              data: {
                labels: ['Hp', 'Attack', 'Defense', 'Special-attack', 'Special-defense', 'Speed'],
                datasets: [
                  {
                    label: 'Pokemon name',
                    data: [0 , 0 , 0 , 0 , 0, 0],
                  },
                ],
              },
            });
          });
    });

    buttonRandom.addEventListener('click', (e) =>{
      
      let randomNumber = Math.floor((Math.random() * 893) + 1); 
      const pokemonId = randomNumber;
      const pokemonIdInput = document.getElementById('pokemonId');
      pokemonIdInput.value= pokemonId;
      const pokemonImage = document.getElementById('pokemonImage');
      
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  
      .then(response => response.json())
      .then(data => {
          console.log(data);

          if (chart) {
            chart.destroy();
          }

          if (invalidFeedback){
            invalidFeedback.style.display = "none";
            pokemonIdInput.classList.remove('is-invalid')
          }

          pokemonIdInput.classList.add('is-valid'); 
  
          const stats = [];
          const statsName = [];
          const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);

          pokemonImage.src = data.sprites.front_default;
          pokemonImage.alt = data.name;
          pokemonDisplyaName.innerText = pokemonName;
            
          data.stats.map(({stat , base_stat}) => {
            statsName.push(stat.name[0].toUpperCase() + stat.name.slice(1));
            stats.push(base_stat);
          });
          
          chart = new Chart(pokemonChart, {
              type: 'bar',
              data: {
                labels: statsName,
                datasets: [
                  {
                    label: pokemonName,
                    data: stats,
                  },
                ],
              },
            });

          })
    });
};


initPokemonChart();