getgif = async () => {


    let im1 = document.getElementById("im1")
    let im2 = document.getElementById("im2")
    let im3 = document.getElementById("im3")
    let im4 = document.getElementById("im4")
    let im5 = document.getElementById("im5")
    let im6 = document.getElementById("im6")
    let im7 = document.getElementById("im7")
    let im8 = document.getElementById("im8")
    let im9 = document.getElementById("im9")
    let im10 = document.getElementById("im10")
    let im11 = document.getElementById("im11")
    let im12 = document.getElementById("im12")
    let im13 = document.getElementById("im13")
    let im14 = document.getElementById("im14")
    let im15 = document.getElementById("im15")
    let im16 = document.getElementById("im16")
    let im17 = document.getElementById("im17")
    let im18 = document.getElementById("im18")
    let im19 = document.getElementById("im19")
    let im20 = document.getElementById("im20")
    let im21 = document.getElementById("im21")
    let im22 = document.getElementById("im22")
    let im23 = document.getElementById("im23")
    let im24 = document.getElementById("im24")
    let im25 = document.getElementById("im25")
    let image = document.getElementById("image")
    image.style.display = "flex"
    try {
        let input = document.getElementById("search")
        let search = input.value
        let api = `https://api.giphy.com/v1/gifs/search?api_key=s17aYSAC0pi9w7Six7nutWVywoGTSt3c&q=${search}&limit=25&offset=0&rating=g&lang=en`
        const response = await fetch(api)
        // console.log(response)
        const jsondata = await response.json()
        const arrdata = [jsondata]
        console.log(arrdata)
        img = arrdata[0].data[0].images.original.url
        img2 = arrdata[0].data[1].images.original.url
        img3 = arrdata[0].data[2].images.original.url
        img4 = arrdata[0].data[3].images.original.url
        img5 = arrdata[0].data[4].images.original.url
        img6 = arrdata[0].data[5].images.original.url
        img7 = arrdata[0].data[6].images.original.url
        img8 = arrdata[0].data[7].images.original.url
        img9 = arrdata[0].data[8].images.original.url
        img10 = arrdata[0].data[9].images.original.url
        img11 = arrdata[0].data[10].images.original.url
        img12 = arrdata[0].data[11].images.original.url
        img13 = arrdata[0].data[12].images.original.url
        img14 = arrdata[0].data[13].images.original.url
        img15 = arrdata[0].data[14].images.original.url
        img16 = arrdata[0].data[15].images.original.url
        img17 = arrdata[0].data[16].images.original.url
        img18 = arrdata[0].data[17].images.original.url
        img19 = arrdata[0].data[18].images.original.url
        img20 = arrdata[0].data[19].images.original.url
        img21 = arrdata[0].data[20].images.original.url
        img22 = arrdata[0].data[21].images.original.url
        img23 = arrdata[0].data[22].images.original.url
        img24 = arrdata[0].data[23].images.original.url
        img25 = arrdata[0].data[24].images.original.url

        // let img = arrdata[0].images.original.url;
        // console.log(src)
        console.log(img)
        im1.src = `${img}`
        im2.src = `${img2}`
        im3.src = `${img3}`
        im4.src = `${img4}`
        im5.src = `${img5}`
        im6.src = `${img6}`
        im7.src = `${img7}`
        im8.src = `${img8}`
        im9.src = `${img9}`
        im10.src = `${img10}`
        im11.src = `${img11}`
        im12.src = `${img12}`
        im13.src = `${img13}`
        im14.src = `${img14}`
        im15.src = `${img15}`
        im16.src = `${img16}`
        im17.src = `${img17}`
        im18.src = `${img18}`
        im19.src = `${img19}`
        im20.src = `${img20}`
        im21.src = `${img21}`
        im22.src = `${img22}`
        im23.src = `${img23}`
        im24.src = `${img24}`
        im25.src = `${img25}`



        let share = document.getElementById("share")
        share.addEventListener("click", () => {
            window.open(`https://api.whatsapp.com/send?text=+encodeURIComponent(${img})`)

        })
    } catch (error) {

    }
}
