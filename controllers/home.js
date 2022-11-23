const home = (req,res)=>{
    homedata = {s1:{
        s1c1:{
        head:"Recreate the Yeh Jawaani Hai Deewani moment in Rajasthan. It's magical!",
        img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/brij_lakshman_sagar-sixteen_nine.jpg?VersionId=LAGORL.i94PlLUn8tHoY9zRjLGuY5mIN&size=690:388',
        time:'Travel/November 21 2022',
        text: " When was the last time you took some time out from your busy schedule and sat down on the terrace with your favourite person and gazed at the stars? Oh, wait! If you are a Delhi resident, clear skies are not what you are probably accustomed to; forget about spotting a star in the night sky! However, if we tell you there is a hidden gem located just about 100kms from Ajmer that offers not just an opportunity for you to star gaze but so much more, would it pique your interest? The prospect of visiting such a dreamy place piqued my interest too. It was not just the star-studded skies, but the idea of staying in a cottage nestled in the lap of nature that came as an interesting prospect. So, I started off early in the morning from Delhi. My destination was Raipur, Rajasthan, which is about 500 kms from the national capital. Travelling by road would have been quite a task so the most plausible option was to take the New Delhi-Ajmer Shatabdi Express. From Ajmer, it was a 2-hour-long drive to our destination.Oh wait, I didn't tell you about the location yet, did I? Well, it's Brij Lakshman Sagar, which was originally built in the late 19th century as a hunting lodge and later transformed into a boutique hotel. Away from the hustle and bustle of city life, as soon as you step into Lakshman Sagar, you will realise it’s a world of its own. It gives you the taste of a rustic life laced with luxury."
        },
        s1c2:{
            head:"What employees does Twitter need, anyway?",
            img:"https://images.indianexpress.com/2022/11/Twitter-app-Pixabay-1.jpg",
            time:'Technology/November 20 2022',
            text:"The resignations of more than 1,000 Twitter employees this week included many people who kept the site running smoothly and protected it from hackers. Their departures set off a wave of hand-wringing about whether the site will continue to operate well. Twitter is unlikely to experience a sudden crash, many tech experts said. But the company could start to experience more outages, slow uploads and hacks."
        },
        s1c3:{
            head:"Wakanda Forever Will Not Witness Its OTT Premiere This Year & It Has To Do With Avatar",
            time:'Hollywood/November 20 2022',
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/black-panther-wakanda-forever-ott-release-date-delayed-because-of-avatar-the-way-of-water-01.jpg",
            text:"Black Panther: Wakanda Forever may not be released on Disney+ this year. The latest entry in the MCU is creating a lot of buzz. Whoever has watched the film can’t stop praising the Ryan Coogler starrer. From its storyline to its music score, moviegoers are enjoying this cinematic viewing. The Letitia Wright starrer opened to a marvelous start and became the second-highest opener in the US. Currently, its box office earnings stand at $400 million. This includes $213 million domestically (North America) and another $187 million overseas."
        }
    },
    s2:{
        s2c1:{
            img:"https://static.toiimg.com/thumb/resizemode-4,msid-95616957,imgsize-58440,width-720/95616957.jpg",
            head:"Google sets rules for HQ guest speakers after row over Indian historian",
            time:'November 20 2022',
            cat:"Technology",
            text:"OAKLAND: Alphabet Inc's Google this week introduced rules for inviting guest speakers to its offices, days after it canceled a talk by an Indian historian who has disparaged marginalized groups and their concerns, according to company emails seen by Reuters."
        },
        s2c2:{
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Running_Man_Kyle_Cassidy.jpg/1280px-Running_Man_Kyle_Cassidy.jpg",
            head:"To Avoid Age-Related Pain, Study Suggests Ramping Up Your Workouts",
            time:'November 20 2022',
            cat:"Fitness",
            text:"Researchers looked at more than 5,800 people over age 50 who were part of a large, long-term study on aging in England. Participants provided information on their physical activity levels, as well as whether they were bothered by any type of chronic pain over a 10-year period, with about half reporting this type of issue in that timeframe."
        },
        s2c3:{
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            head:"The Foods You Choose Can Impact Your Sleep, New Review Shows",
            time:'November 21 2022',
            cat:"Food",
            text:"The research included in our review shows that, generally speaking, consuming more protein, fiber-rich carbohydrates, and healthier fats is associated with having less waking during the night, more deep sleep, and taking less time to fall asleep."
        }
    },
    s3:{
        s3c1:[{
            id:1,
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/box-office-kantara-hindi-staying-on-to-be-stable-to-grow-again-over-the-weekend-01.jpg",
            head:"Kantara Box Office Day 51 (Hindi): Staying On To Be Stable, To Grow Again Over The Weekend",
            time:"November 21 2022",
            cat:"Bollywood",
            text:"Kantara (Hindi) enjoyed a stable fifth week at the box office as well with consistent collections coming in. That said, it went below the 1 crore mark for the first time from Monday onwards, though things stabilised on Tuesday (0.80 crores), Wednesday (0.75 crores) and Thursday (0.75 crores)."
        },
        {   id:2,
            img:"https://www.hollywoodreporter.com/wp-content/uploads/2022/11/split_3_16x9_template_v1-copy-6.jpg?w=1296&h=730&crop=1",
            head:"Goal! 22 of Hollywood's Best Soccer Movies",
            time:"NOvember 20 2022",
            cat:"Hollywood",
            text:"For the next four weeks, that big section of the planet obsessed with the round-ball form of football, i.e. soccer, will be spending most of their waking hours watching, discussing and debating — loudly on social media and beyond — the 2022 World Cup. "
        },
        {
            id:3,
            img:"https://images.hindustantimes.com/img/2022/11/20/550x309/pexels-the-lazy-artist-gallery-1332313_1668950787324_1668950812939_1668950812939.jpg",
            head:"All about what is plant-based diet, why it's better for your health, environment",
            time:"November 21 2022",
            cat:"Fitness",
            text:"A non-vegetarian diet is not necessarily bad but it is not ideal either because most people are unaware that meat, specifically 'industrial meat,' is harmful to the environment. Here's all you need to know about veganism, what is plant-based diet and why it's better for your health and environment"
        },
        {
            id:4,
            img:"https://ichef.bbci.co.uk/news/976/cpsprodpb/E690/production/_127642095_ftxgettyimages-1440504577.jpg.webp",
            head:"FTX crypto exchange owes biggest creditors $3.1bn",
            time:"November 20 2022",
            cat:"Technology",
            text:"The embattled firm, which filed for bankruptcy in the US last week, says it owes about $1.45bn to its top 10 creditors, but has not named any. The collapse of the world's second largest crypto exchange shook confidence in the already troubled cryptocurrency market."
        }
    ],
    s3c2:{
        img:"https://images.hindustantimes.com/img/2022/11/17/550x309/once_upon_a_time_in_hollywood_1668696075795_1668696076014_1668696076014.jpeg",
        head:"Quentin Tarantino calls Once Upon a Time In Hollywood his personal favourite film",
        time:"november 15 2022",
        cat:"Hollywood"
    },
    s3c3:{
        s3c3g1:{
            img:"https://www.businessinsider.in/thumb/msid-95652160,width-700,resizemode-4,imgsize-116064/sports/news/with-messi-posters-and-team-flags-kolkata-goes-high-on-football-fever/lionel-messi.jpg",
            head:"With Messi posters and team flags, Kolkata goes high on football fever",
            time:"November 20 2022",
            cat:"sports"
        },
        s3c3g2:{
            img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2022/11/Drishyam-2-Overseas-Box-Office-Ajay-Devgn-starrer-crosses-USD-1-mil.-in-overseas-collects-USD-1.56-million-Rs.-12.71-cr.-at-close-of-Day-2.jpg",
            head:"Drishyam 2 Overseas Box Office: Ajay Devgn starrer crosses USD 1 mil. in overseas;",
            time:"November 20 2022",
            cat:"Bollywood"
        },
        s3c3g3:{
            img:"https://stat5.bollywoodhungama.in/wp-content/uploads/2022/11/Black-Panther-Wakanda-Forever-Box-Office-Film-maintains-strong-momentum-collects-Rs.-46.88-cr-in-week-1.jpeg",
            head:"Wakanda Forever Box Office: Film maintains strong momentum; collects Rs. 46.88 cr in week 1",
            time:"November 21 2022",
            cat:"hollywood"
        },
        s3c3g4:{
            img:"https://ichef.bbci.co.uk/news/976/cpsprodpb/0AB0/production/_127463720_myyardfooddelivery-credit-myyard.jpg.webp",
            head:"WhatsApp groups help get food to those who need it",
            time:"November 21 2022",
            cat:"Food"
        }
    }
    },
    s4:{
        s4c1:{
            head:"Nearly 20 dead, 300 injured in Indonesia earthquake: Official",
            text:"More than a dozen people were killed in a 5.6-magnitude quake that rattled Indonesia's West Java province on Monday, a local official said. The epicentre of the earthquake was located in Cianjur, the town in West Java.",
            time:"November 21 2022",
            cat:"World"
        },
        s4c2:{
            head:"Man who failed to get into IIM Bangalore delivers speech at the college, shares inspiring journey",
            text:"Sharan Hegde shared pictures of himself standing at his dream college, Indian Institute of Management Bangalore (IIMB), with a detailed caption. “98% in CAT. No entry, better luck next time you GEM. 3.3 Mn followers. Guest speaker to 100+ women entrepreneurs at IIMB,” he wrote in an Instagram post.",
            time:"November 21 2022",
            cat:"Trending"
        },
        s4c3:{
            head:"PCOS diet for winter: Foods you must eat to manage PCOS symptoms",
            text:"Diet is crucial in the treatment of PCOS (polycystic ovary syndrome). Knowing what foods to eat and what not to eat can boost your mood and help relieve PCOS symptoms.",
            time:"November 21 2022",
            cat:"Food"
        }
    }
    }
    res.send(homedata)
}
module.exports.homedata = home;