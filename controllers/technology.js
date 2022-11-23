const technology = (req,res)=>{
    const technologydata = {s1:[
        {
            img:"https://images.indianexpress.com/2022/11/samsung-black-friday-sale-2022.jpg",
            head:"Samsung Black Friday sale 2022 announced in India: Offers on Galaxy S22, Galaxy Z Flip 3, and more",
            text:"A few years back, the Black Friday sale was usually limited to the US. But a lot of brands now offer similar deals in India as well to commemorate the commencement of Christmas season shopping.",
            time:"November 22 2022",
            cat:"Technology"
        },
        {
            img:"https://images.indianexpress.com/2022/11/Pixxel_ANAND_LEAD.jpg",
            head:"The Bengaluru startup that will launch its third hyperspectral imaging satellite via ISRO’s PSLV",
            text:"Bengaluru-based start-up Pixxel will launch Anand–its third hyper-spectral satellite– into space on November 26. The launch will use the Indian Space Research Organisation’s (ISRO) Polar Satellite Launch Vehicle (PSLV).",
            time:"November 22 2022",
            cat:"Technology"
        },
        {
            img:"https://images.indianexpress.com/2022/11/Dyson-Pet-Grooming-Kit.jpg",
            head:"Dyson launches Pet Grooming Kit for cord-free vacuum cleaners in India",
            text:"To make life easier for pet owners, Dyson has launched its Pet Groom Kit in India. Designed to clean loose hair from medium-haired and long-haired pets, the pet grooming kit can be with any of the company’s existing cord-free vacuum cleaners.",
            time:"November 22 2022",
            cat:"Technology"
        },
        {
            img:"https://images.indianexpress.com/2022/11/NASA-Orion-NASA.jpg",
            head:"NASA spacecraft finishes its close encounter with the Moon",
            text:"NASA’s Orion spacecraft zipped past the moon’s far side Monday, passing within 81 miles of the surface.",
            time:"November 22 2022",
            cat:"Technology"
        },
        {
            img:"https://images.indianexpress.com/2022/11/JioCinema-Hype-Mode-1.jpg",
            head:"FIFA World Cup 2022: How to use ‘Hype Mode’ and ‘Multicam’ on JioCinema",
            text:"World Cup 2022: Football fans in India are already hooked on the 2022 Qatar FIFA World Cup since it kicked off on Sunday.",
            time:"November 22 2022",
            cat:"Technology"
        },
        {
            img:"https://images.indianexpress.com/2022/11/FTX_Crypto_Reuters1.jpg",
            head:"FTX owes its 50 biggest unsecured creditors more than $3 billion",
            text:"Sam Bankman-Fried’s bankrupt crypto empire owes its 50 biggest unsecured creditors a total of $3.1 billion, new court papers show, with a pair of customers owed more than $200 million each.",
            time:"November 20 2022",
            cat:"Technology"
        },
        {
            img:"https://images.indianexpress.com/2022/11/Microsoft-Swiftkey.jpg",
            head:"Microsoft brings back its SwiftKey iOS keyboard, teases new features",
            text:"In September this year, Microsoft said that it will be discontinuing the iOS version of Swiftkey and instead focus on the Android version of the app. Following the announcement, the company terminated app support and removed it from the Apple App Store earlier this month.",
            time:"November 20 2022",
            cat:"Technology"
        }

    ],
    s2:{
        s3c3g1:{
            img:"https://static.toiimg.com/thumb/resizemode-4,msid-95616957,imgsize-58440,width-720/95616957.jpg",
            head:"Google sets rules for HQ guest speakers after row over Indian historian",
            time:'November 20 2022',
            cat:"Technology"
        },
        s3c3g2:{
            img:"https://images.indianexpress.com/2022/11/Windows-11-featured.jpg",
            head:"Here’s how you can schedule dark mode on Windows 11",
            time:"November 20 2022",
            cat:"Technology"
        },
        s3c3g3:{
            img:"https://images.indianexpress.com/2022/11/Top-Android-expense-tracking-apps.jpg",
            head:"Axios to AndroMoney: The top Android apps to help you track expenses",
            time:"Nonember 20 2022",
            cat:"Technology"
        },
        s3c3g4:{
            img:"https://images.indianexpress.com/2022/11/data-protection.jpg",
            head:"Govt’s draft Data Protection Bill proposes hefty fine for violation",
            time:"Nonember 20 2022",
            cat:"Technology"
        }
     }
 };
    res.send(technologydata);
}
module.exports.technologyData = technology;