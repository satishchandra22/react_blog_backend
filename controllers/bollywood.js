const bollywood = (req,res)=>{
    const bollywooddata = {s1:[
        {img:"https://media5.bollywoodhungama.in/wp-content/uploads/2022/11/Rashmika-Mandanna-looks-like-a-dream-in-red-embellished-lehenga-by-Mishru-worth-Rs.4-Lakh-2.jpg",
         head:"Rashmika Mandanna looks like a dream in red embellished lehenga by Mishru worth Rs.4 Lakh",
         text:"Every season, red is one of the most popular colours. Regardless of how much you enjoy playing around with other hues, red has a certain allure. Your personality and your curves are both enhanced by this regal shade. It is a must-have in your closet, regardless of whether you are getting married, a bridesmaid, or a wedding guest. ",
         time:"November 22 2022",
         cat:"Bollywood"
    },
    {
        img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2022/11/Ajay-Devgn-showcases-his-intense-side-in-620.jpg",
        head:"Ajay Devgn showcases his intense side in the teaser of Bholaa 3D",
        text:"Known for his intense performance in Drishyam 2, Ajay Devgn is currently enjoying the rave reviews he is garnering for his recent release. While that one too is a remake of a South suspense thriller franchise, the next one featuring the actor will also be another remake of a popular Tamil film.",
        time:"November 22 2022",
        cat:"Bollywood"
    },
    {
        img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2022/11/Maula-Jatt-Box-Office-Fawad-Khan-starrer-achieves-new-milestone-crosses-Rs.-200-cr.-mark-at-the-worldwide-box-office-1.jpg",
        head:"Fawad Khan starrer achieves new milestone; crosses Rs. 200 cr. mark at the worldwide box office",
        text:"The Fawad Khan starrer The Legend of Maula Jatt hit screens a while back and since then the film has been unstoppable at the box office. In fact, the Pakistani Punjabi-language action-drama film directed and written by Bilal Lashari, has been plodding on at the box office despite a plethora of newer releases hitting screens. ",
        time:"November 22 2022",
        cat:"Bollywood"
    },
    {
        img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/anupam-kher-takes-a-jibe-at-john-abraham-001.jpg",
        head:"Anupam Kher Says “John Abraham Se Mere Jitna Lamba Dialogue Bulwa Lo…”",
        text:"2022 turned out to be humongous for veteran actor Anupam Kher. Right from The Kashmir Files to Karthikeya 2 and now Uunchai the actor is on the role. Currently, Kher is garnering accolades for his stupendous performance in Sooraj Barjatya directorial which also stars Amitabh Bachchan, Boman Irani and others in pivotal roles.",
        time:"November 22 2022",
        cat:"Bollywood"
    },
    {
        img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/netizens-praise-hanuman-teaser-for-better-vfx-than-adipurush-takes-a-yet-another-dig-at-prabhas-starrer-001.jpg",
        head:"Prabhas’ Adipurush Receives More Flak From The Viewers After HanuMan Teaser Release, Netizens Praise It For Better VFX, Say 'Bollywood Is Fraud'",
        text:"For quite some time since the release of the trailer, Om Raut’s directorial magnum opus, Adipurush starring Prabhas, Saif Ali Khan and Kriti Sanon has been on the news and for every wrong reason possible.",
        time:"November 22 2022",
        cat:"Bollywood"
    },
    {
        img:"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/11/alizeh-1669172410.jpg",
        head:"Salman Khan's niece Alizeh Agnihotri to make her Bollywood debut with Soumendra Padhi's next",
        text:"Salman Khan's niece and Atul and Alvira Agnihotri’s daughter Alizeh Agnihotri is gearing up to make her Bollywood debut. Reports claimed that she will be making her debut with national award-winning filmmaker Soumendra Padhi's next film.",
        time:"November 22 2022",
        cat:"Bollywood"
    },
    {
        img:"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/11/tamanaah-bhatia-1-1668649751.jpg",
        head:"Tamannaah Bhatia is getting married? Actress introduces her 'businessman husband' amid wedding rumours",
        text:"If reports are to be believed, Tamannaah Bhatia will get married soon. She is rumoured to be dating a 'businessman' from Mumbai and apparently, the actress said yes when he popped the question. While the actress hasn't verified the rumours, she finally reacted to them with a fun take.",
        time:"November 22 2022",
        cat:"Bollywood"
    }
    ],
    s2:{
        s3c3g4:{
            img:"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/11/janhvi-kapoor-3-1668661261.jpg",
            head:"Janhvi Kapoor accidentally reveals about Sridevi-Boney Kapoor's 'secret wedding'",
            time:"November 22 2022",
            cat:"Bollywood"
        },
        s3c3g1:{
            img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/box-office-kantara-hindi-staying-on-to-be-stable-to-grow-again-over-the-weekend-01.jpg",
            head:"Kantara Box Office Day 51 (Hindi): Staying On To Be Stable, To Grow Again Over The Weekend",
            time:"November 21 2022",
            cat:"Bollywood"
        },
        s3c3g2:{
            img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2022/11/Drishyam-2-Overseas-Box-Office-Ajay-Devgn-starrer-crosses-USD-1-mil.-in-overseas-collects-USD-1.56-million-Rs.-12.71-cr.-at-close-of-Day-2.jpg",
            head:"Drishyam 2 Overseas Box Office: Ajay Devgn starrer crosses USD 1 mil. in overseas;",
            time:"November 20 2022",
            cat:"Bollywood"
        },
        s3c3g3:{
            img:"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/11/dsdedfcsffdddddgus-1669120212.jpg",
            head:"VADH Trailer Out: Sanjay Mishra, Neena Gupta's crime thriller promises nail-biting suspense",
            time:"November 22 2022",
            cat:"Bollywood"
        }

     }
 };
    res.send(bollywooddata);
}
module.exports.bollywoodData = bollywood;