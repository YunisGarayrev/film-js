const SEARCHAPI = "https://api.tvmaze.com/search/shows?q=query"
const search = document.getElementById("in-search");
const films= document.getElementsByClassName("films");


const area = document.querySelector("#area");
axios.get('https://api.tvmaze.com/shows').then(resp => {
    for (let i = 0; i < 10; i++) {
        area.innerHTML += `<div class="part p-1" >
    <img src="${resp.data[i].image.original}">
    <div class="middle">
        <div class="text"><i class="las la-play-circle"></i></div>
    </div>
    <span>${resp.data[i].rating.average}</span>
    <div class="d-flex">
    <h3 style="font-size:18px">${resp.data[i].name} </h3><h4 style="font-size:12px">${resp.data[i].genres}</h4></div>
</div>`
    }
});



// search hissesini yazzmaga calisdim alinmadi

// function getMovies(search) {
//   axios.get('https://api.tvmaze.com/search/shows?q=query').then((response) => {
//       console.log(response);
//       let movies = response.data.Search;
//       let output = "";
//       $.each(movies, (index, movie) => {
//         output += `
//         <div class="part p-1" >
//         <img src="${resp.data[i].image.original}">
//         <div class="middle">
//             <div class="text"><i class="las la-play-circle"></i></div>
//         </div>
//         <span>${resp.data[i].rating.average}</span>
//         <div class="d-flex">
//         <h3 style="font-size:18px">${resp.data[i].name} </h3><h4 style="font-size:12px">${resp.data[i].genres}</h4></div>
//     </div>`
//       });
//       $("#area").html(output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
