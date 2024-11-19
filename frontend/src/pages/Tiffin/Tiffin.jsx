import './Tiffin.css';
function Tiffin(){
      
      

    const data=[
        {
            title: "Rdhika Tiffin Service",
            image: "https://content.jdmagicbox.com/comp/jaipur/x8/0141px141.x141.230324085929.z9x8/catalogue/radhika-tiffin-service-devi-nagar-jaipur-tiffin-services-sy1hyb2txr.jpg"
        },
        {
            title: "Vanshika Tiffin Service",
            image: "https://homefoodi.com/wp-content/uploads/2023/09/Best-Tiffin-Services-in-Bhopal.jpeg"
        },
        {
            title: "Nakul Tiffin Service",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_32ptVXfUnPdKaiWtEceM6Rp408qCzZGniwqmtmC6n_jplAzd9YWXCw1ja9IzoRDO9gM&usqp=CAU"
        },
        {
            title: "Rajkumar Tiffin Service",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzGnBFS-6hnVNFrXJ91Nf0KipMwDehlfG7Yx_fb7SfFmdmzsUyWE6BU-GPfb7c17wQiY&usqp=CAU"
        },
        {
            title: "Krishna Tiffin Service",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzABrthNwrf2wN9mMIaaA0mskHF3UO6f1hQ&s"
        },
        {
            title: "Pooja Tiffin Service",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpZiyhBuUghlET94XI_DyXoIq2ZDuMM7Uwg&s"
        },
        {
            title: "Sneha Tiffin Service",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtIEWnU1A1ZUZ7sqZEYboEbkmcLuyXT0Bgw&s"
        }
    ]
    return(
        <div className='tiffin-container'>
         <p>Tiffin Service DashBord</p>
        <div className="tiffin-cards">
        {data.map((tiffin)=>{
            return (
                <div className="tiffin-card">
               <img src={tiffin.image} alt="image" />
               <p>{tiffin.title}</p>
               </div>
            )
        })}
       </div>
       </div>
    )
}

export default Tiffin;