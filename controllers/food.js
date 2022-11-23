const food = (req,res)=>{
    const fooddata = {s1:[
        {
            img:"https://static.toiimg.com/thumb/95616456.cms?width=680&height=512&imgsize=59398",
            head:"Fill your kids’ tiffin with these 5 winter-friendly nutrient-rich foods",
            text:"Winter is a time of year when everyone, especially children should be particularly vigilant about their diet. The cold weather makes it difficult for our immune system to fight germs and bacteria.",
            time:"November 21 2022",
            cat:'food'
        },
        {
            img:"https://static.toiimg.com/thumb/95650985.cms?width=680&height=512&imgsize=72808",
            head:"Here’s how passion fruit peels help preserve fresh fruits",
            text:"According to research from the University of Johannesburg, the high levels of antioxidants and polyphenols in passion fruit peels have a substantial potential to preserve fresh fruits and fresh cuts in an edible food covering.",
            time:"November 21 2022",
            cat:'food'
        },
        {
            img:"https://static.toiimg.com/thumb/95665037.cms?width=680&height=512&imgsize=145462",
            head:"The REAL reason why most fast-food chains have red & yellow logos",
            text:"Let’s accept it, fast food is a part of our life. From burgers to fries, and crispy chicken to pizza, we love consuming all these junk foods from our favourite food joints.",
            time:"November 21 2022",
            cat:'food'
        },
        {
            img:"https://static.toiimg.com/thumb/95560619.cms?width=680&height=512&imgsize=198828",
            head:"How to make restaurant style Italian food at home",
            text:"We all love and crave Italian food. But eating out daily might not be the best option and a viable one. So why not dish out some healthy Italian fare at home? Chef Aabhas Mehrotra, Chef and Partner Sorrentina All Day Dining, Mumbai gives tips on how to cook Italian food at home like a pro.",
            time:"November 21 2022",
            cat:'food'
        },
        {
            img:"https://static.toiimg.com/thumb/95535715.cms?width=680&height=512&imgsize=59894",
            head:"What is MCT oil and how Bollywood stars are using it to lose weight",
            text:"Have you ever thought how Bollywood celebs stay so fit and active even after eating their favourite foods? Well, this little secret will leave you amazed as they include MCT oil (fats) to stay in shape.",
            time:"November 21 2022",
            cat:'food'
        },
        {
            img:"https://static.toiimg.com/thumb/95486554.cms?width=680&height=512&imgsize=104214",
            head:"This is how tomatoes in the diet change human gut microbes",
            text:"From reducing the risk of heart disease to cancer, tomatoes are considered one of the most nutritious vegetables. Tomatoes are rich in the antioxidant lycopene, vitamin C, potassium, folate, and vitamin K.",
            time:"November 21 2022",
            cat:'food'
        },
        {
            img:"https://static.toiimg.com/thumb/95616060.cms?width=680&height=512&imgsize=124850",
            head:"4 simple tricks that can help you keep fruits fresh for a longer period",
            text:"When we talk about eating healthy food then, fruits come at the top as they are rich in natural sugar, dietary fibre, vitamins & minerals, which are necessary to sustain the day. They are the most natural snacks to gain instant energy. But, it’s a sad reality that fruits rot so quickly.",
            time:"November 21 2022",
            cat:'food'
        }

    ],
    s2:{
        s3c3g1:{
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            head:"The Foods You Choose Can Impact Your Sleep, New Review Shows",
            time:'November 21 2022',
            cat:"Food"
        },
        s3c3g2:{
            img:"https://ichef.bbci.co.uk/news/976/cpsprodpb/0AB0/production/_127463720_myyardfooddelivery-credit-myyard.jpg.webp",
            head:"WhatsApp groups help get food to those who need it",
            time:"November 21 2022",
            cat:"Food"
        },
        s3c3g3:{
            head:"PCOS diet for winter: Foods you must eat to manage PCOS symptoms",
            img:"https://images.hindustantimes.com/img/2022/11/21/550x309/pcos_diet_1669017304771_1669017304948_1669017304948.jpg",
            time:"November 21 2022",
            cat:"Food"
        },
        s3c3g4:{
            img:"https://static.toiimg.com/thumb/95521032.cms?width=680&height=512&imgsize=60986",
            head:"The perfect temperature for a refrigerator that keeps food healthy",
            time:"November 21 2022",
            cat:"Food"
        }
     }
 };
    res.send(fooddata);
}
module.exports.foodData = food;