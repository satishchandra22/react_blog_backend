const hollywood = (req,res)=>{
    const hollywooddata = {s1:[
        {
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/quentin-tarantino-criticises-the-marvelization-of-hollywood-001.jpg",
            head:"Quentin Tarantino Criticizes The ‘Marvel’ization Of Hollywood, Says It’s Not The Actors But “These Franchise Characters That Become A Star”",
            text:"Quentin Tarantino has sent criticism toward Marvel and its stars. This time the acclaimed director has spoken about how there aren’t any movie stars in Hollywood anymore. A big reason for that, Tarantino says, is because of the success of the MCU.",
            time:"November 21 2022",
            cat:"Hollywood"
        },
        {
            img:"https://static.toiimg.com/thumb/msid-95713806,imgsize-119504,width-800,height-600,resizemode-75/95713806.jpg",
            head:"JJ Valaya on teaming up with Ruth Carter for 'Wakanda Forever': It was a joy to work with the best",
            text:"One of the most celebrated couturiers in the country, Valaya and his brand were first discovered by the famed Hollywood costumer designer while working on the Eddie Murphy-starrer movie 'Coming 2 America' which released in 2021.",
            time:"November 21 2022",
            cat:"Hollywood"
        },
        {
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/01/MCDBELF_UC004-H-2022.jpg?w=1296&h=730&crop=1",
            head:"‘Belfast,’ ’The Quiet Girl’ Among 2022 European Film Awards Craft Winners",
            text:"Kenneth Branagh’s Belfast, Jerzy Skolimowski’s donkey drama EO and Colm Bairéad’s Irish period drama piece The Quiet Girl are among the winners of the 2022 European Film Awards in the craft categories.",
            time:"November 21 2022",
            cat:"Hollywood"
        },
        {
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/The-Walking-Dead-Finale-Still-FX-Publicity-H-2022.jpg?w=1296&h=730&crop=1",
            head:"TV Ratings: ‘Walking Dead’ Gets Finale Bump, ‘Yellowstone’ Stays High",
            text:"The Walking Dead drew 2.27 million viewers for its final episode — a far cry from its heyday in the mid-2010s but the largest initial tune-in since Feb. 28, 2021. ",
            time:"November 21 2022",
            cat:"Hollywood"
        },
        {
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/Print-Issue-35-Entrepreneurs-Kevin-Hart-Publicity-H-2022.jpg?w=1296&h=730&crop=1",
            head:"The Hollywood Reporter’s Celebrity Entrepreneur of the Year: Kevin Hart",
            text:"By the middle of the past decade, Kevin Hart had climbed about as high up the comedy mountaintop as it was possible to go, reliably filling arenas, releasing top-ranked Netflix specials and pumping out No. 1 box office hits like The Upside and Ride Along.",
            time:"November 21 2022",
            cat:"Hollywood"
        },
        {
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/09/8I9A6443-H-2022.jpg?w=1296&h=730&crop=1",
            head:"Where to Go Out in Los Angeles Right Now",
            text:"“We’re entering a beautiful renaissance” of L.A. nightlife, says Tom Topit of West Hollywood hotspot Employees Only (which was just named one of the best bars in North America by World’s 50 Best.) ",
            time:"November 21 2022",
            cat:"Hollywood"
        },
        {
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/Echo-3-Still-1-AppleTV-Publicity-H-2022.jpg?w=1296&h=730&crop=1",
            head:"‘Echo 3’ Review: Mark Boal’s Apple TV+ Drama Blends Action and Artiness",
            text:"Mark Boal’s new Apple TV+ drama Echo 3 will put to the test whether viewers are willing to stick with their militaristic revenge stories if they come packaged with some nuance and characterization.",
            time:"November 21 2022",
            cat:"Hollywood"
        }

    ],
    s2:{
        s3c3g1:{
            head:"Wakanda Forever Will Not Witness Its OTT Premiere This Year & It Has To Do With Avatar",
            time:'November 20 2022',
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/black-panther-wakanda-forever-ott-release-date-delayed-because-of-avatar-the-way-of-water-01.jpg",
            cat:"Hollywood"
        },
        s3c3g2:{
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/split_3_16x9_template_v1-copy-6.jpg?w=1296&h=730&crop=1",
            head:"Goal! 22 of Hollywood's Best Soccer Movies",
            time:"NOvember 20 2022",
            cat:"Hollywood"
        },
        s3c3g3:{
            img:"https://images.hindustantimes.com/img/2022/11/17/550x309/once_upon_a_time_in_hollywood_1668696075795_1668696076014_1668696076014.jpeg",
            head:"Quentin Tarantino calls Once Upon a Time In Hollywood his personal favourite film",
            time:"november 15 2022",
            cat:"Hollywood"
        },
        s3c3g4:{
            img:"https://stat5.bollywoodhungama.in/wp-content/uploads/2022/11/Black-Panther-Wakanda-Forever-Box-Office-Film-maintains-strong-momentum-collects-Rs.-46.88-cr-in-week-1.jpeg",
            head:"Wakanda Forever Box Office: Film maintains strong momentum; collects Rs. 46.88 cr in week 1",
            time:"November 21 2022",
            cat:"hollywood"
        }
     }
 };
    res.send(hollywooddata);
}
module.exports.hollywoodData = hollywood;