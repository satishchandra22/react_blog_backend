const fitness = (req,res)=>{
    const fitnessdata = {s1:[
        {
            img:"https://images.indianexpress.com/2022/11/winter-workout_1200_getty.jpg",
            head:"Workout routine to prepare your body for the winter season",
            text:"Following and maintaining a workout plan can be challenging for some. And you will probably agree when we say that it becomes even more difficult when your body is exposed to cold temperatures. ",
            time:"November 21 2022",
            cat:"Fitness"
        },
        {
            img:"https://images.indianexpress.com/2022/11/gul-panag_3_insta.jpg",
            head:"Gul Panag’s dedication has borne fruit, her ‘quads are finally standing out from the fat’",
            text:"The happiness of fitness enthusiasts knows no bounds when their hard work at the gym pays off and they achieve their target.",
            time:"November 21 2022",
            cat:"Fitness"
        },
        {
            img:"https://images.indianexpress.com/2022/04/squats_1200_karishma-tanna-insta.jpg",
            head:"Ultra trail runner explains how to progress with squats",
            text:"Many people, who are starting with their fitness journey, find it hard to do squats or bending at the hips and holding the movement. ",
            time:"November 21 2022",
            cat:"Fitness"
        },
        {
            img:"https://images.indianexpress.com/2022/07/workout_1200_getty.jpg",
            head:"‘No pain, no gain?’: Expert busts some popular fitness myths",
            text:"With the increasing popularity of influencers and a social media culture that rewards ‘perfection’, fitness, for many, has now become a trend, instead of something you pursue to lead a healthy life.",
            time:"November 21 2022",
            cat:"Fitness"
        },
        {
            img:"https://images.indianexpress.com/2022/04/katrina-kaif_1200_insta.jpg",
            head:"Mr India 2019 bodybuilding title holder on why post-workout nutrition is essential",
            text:"With a whole lot of emphasis on workout nutrition, many tend to eat too much post workout, or too many dense calories, instead of opting for a well-balanced nutritive diet.",
            time:"November 21 2022",
            cat:"Fitness"
        },
        {
            img:"https://images.indianexpress.com/2022/10/rashmika-mandanna-fitness_200_insta.jpg",
            head:"Watch: Rashmika Mandanna serves some major fitness goals ahead of the festivities",
            text:"Acing the fitness game is none other than Rashmika Mandanna, this pre-Diwali weekend, as she teamed up with her trainer in the gym to practice some legs and core workout",
            time:"November 21 2022",
            cat:"Fitness"
        },
        {
            img:"https://images.indianexpress.com/2022/04/pelvic-floor-exercise_1200_getty.jpg",
            head:"If you have pain during sexual intercourse, try these pelvic floor exercises",
            text:"Workouts benefit overall health, both mental and physical. But there are some specific exercises that focus on exclusive body parts or provide relief from certain conditions.",
            time:"November 21 2022",
            cat:"Fitness"
        }

    ],
    s2:{
        s3c3g1:{
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Running_Man_Kyle_Cassidy.jpg/1280px-Running_Man_Kyle_Cassidy.jpg",
            head:"To Avoid Age-Related Pain, Study Suggests Ramping Up Your Workouts",
            time:'November 20 2022',
            cat:"Fitness"
        },
        s3c3g2:{
            img:"https://images.hindustantimes.com/img/2022/11/20/550x309/pexels-the-lazy-artist-gallery-1332313_1668950787324_1668950812939_1668950812939.jpg",
            head:"All about what is plant-based diet, why it's better for your health, environment",
            time:"November 21 2022",
            cat:"Fitness"
        },
        s3c3g3:{
            img:"https://www.businessinsider.in/thumb/msid-95652160,width-700,resizemode-4,imgsize-116064/sports/news/with-messi-posters-and-team-flags-kolkata-goes-high-on-football-fever/lionel-messi.jpg",
            head:"With Messi posters and team flags, Kolkata goes high on football fever",
            time:"November 20 2022",
            cat:"sports"
        },
        s3c3g4:{
            img:"https://images.indianexpress.com/2022/09/weight-loss-weight-gain-1200.jpg",
            head:"Five dos and don’ts to follow if you are trying to lose weight",
            time:"November 20 2022",
            cat:"Fitness"
        }
     }
 };
    res.send(fitnessdata);
}
module.exports.fitnessData = fitness;