
let allArr = []

// Fetch Data with async
async function fetchData() {
    const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos/');  
    const data = await response.json();
    const endData = data.data.data;
    // console.log(endData);
    // console.log(data);

    // for itteration data
    endData.map(item=>{
        let channelLogo = item.items.snippet.thumbnails.default.url;
        let thumbnail = item.items.snippet.thumbnails.high.url;
        let title = item.items.snippet.title;
        let channelTitle = item.items.snippet.channelTitle;
        let videoId = item.items.id;
        let hyperLink = `https://www.youtube.com/watch?v=${videoId}`;  

        

        // console.log("my Item -- "+thumbnail)

        let playList = document.createElement('div'); // Creates a <div> element
        playList.classList.add('box');

       playList.innerHTML = `<a href="${hyperLink}" target="_blank"><div class="thumbnail"><img src="${thumbnail}" /></div><div class="content"><div class="channelLogo"><img src="https://yt3.ggpht.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s68-c-k-c0x00ffffff-no-rj"></div><div class="discription"><h6>${title}</h6><div class="channelDetail"><small class="channelName">${channelTitle}</small></div></div></div></a>`
            // console.log(playList)

        allArr.push(playList);

            document.getElementById("boxWrap").appendChild(playList);
    })
}
  
fetchData();  // Call Fetch Function for get data through API



// For Filtering data
const searchInputValue = document.getElementById("searchInput");
searchInputValue.addEventListener("input",  (e) => {
    // console.log(e.target.value);
    let getValue = e.target.value;    
    allArr.filter((currentValue)=>{
        // currentValue.includes(getValue)
        // console.log(currentValue.innerText.toLowerCase().includes(getValue.toLowerCase()));
        currentValue.innerText.toLowerCase().includes(getValue.toLowerCase()) ?  currentValue.classList.remove("hideDiv")  :   currentValue.classList.add("hideDiv")
    })

})

// console.log(allArr)