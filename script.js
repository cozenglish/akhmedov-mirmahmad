// Cozy English Academy - Interactive English Learning Website
// Author: Farangis Rajabova

// Data for all grammar topics and questions
const grammarTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "___ am a student.", options: ["I", "He", "She"], answer: "I" },
            { type: "multiple-choice", question: "___ is my brother.", options: ["I", "He", "We"], answer: "He" },
            { type: "multiple-choice", question: "___ are good friends.", options: ["She", "He", "We"], answer: "We" },
            { type: "multiple-choice", question: "___ is a doctor.", options: ["She", "We", "They"], answer: "She" },
            { type: "multiple-choice", question: "___ are from London.", options: ["He", "They", "I"], answer: "They" },
            { type: "multiple-choice", question: "___ is a cat.", options: ["It", "They", "We"], answer: "It" },
            { type: "multiple-choice", question: "___ is my teacher.", options: ["She", "They", "It"], answer: "She" },
            { type: "multiple-choice", question: "___ are students.", options: ["He", "She", "They"], answer: "They" },
            { type: "fill-blank", question: "My sister ___ apples every day.", answer: "likes" },
            { type: "fill-blank", question: "Muhammad said ___ is tired after work.", answer: "he" }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "She gave ___ a book.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "I saw ___ yesterday.", options: ["he", "him", "his"], answer: "him" },
            { type: "multiple-choice", question: "Can you help ___?", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "He called ___ last night.", options: ["she", "her", "hers"], answer: "her" },
            { type: "multiple-choice", question: "I don't know ___", options: ["they", "them", "their"], answer: "them" },
            { type: "multiple-choice", question: "The teacher asked ___ a question.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "Muhammad told ___ the story.", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "She likes ___", options: ["he", "him", "his"], answer: "him" },
            { type: "fill-blank", question: "Please give ___ the pen when you finish.", answer: "me" },
            { type: "fill-blank", question: "I will call ___ tomorrow at 5 PM.", answer: "you" }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "This is ___ book.", options: ["I", "my", "me"], answer: "my" },
            { type: "multiple-choice", question: "That is ___ car.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "___ name is Sarah.", options: ["Her", "She", "Hers"], answer: "Her" },
            { type: "multiple-choice", question: "This is ___ house.", options: ["we", "our", "us"], answer: "our" },
            { type: "multiple-choice", question: "___ teacher is very good.", options: ["They", "Their", "Them"], answer: "Their" },
            { type: "multiple-choice", question: "Is this ___ pen?", options: ["you", "your", "yours"], answer: "your" },
            { type: "multiple-choice", question: "Muhammad forgot ___ bag.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The dog ate ___ food.", options: ["it", "its", "it's"], answer: "its" },
            { type: "fill-blank", question: "I really like ___ new phone.", answer: "my" },
            { type: "fill-blank", question: "She lost ___ keys somewhere in the house.", answer: "her" }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "This book is ___", options: ["my", "mine", "I"], answer: "mine" },
            { type: "multiple-choice", question: "Is this pen ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "multiple-choice", question: "That car is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The red house is ___", options: ["they", "their", "theirs"], answer: "theirs" },
            { type: "multiple-choice", question: "These shoes are ___", options: ["our", "ours", "us"], answer: "ours" },
            { type: "multiple-choice", question: "The idea was ___", options: ["she", "her", "hers"], answer: "hers" },
            { type: "multiple-choice", question: "Muhammad said the bag is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "Is this umbrella ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "fill-blank", question: "This phone is not yours, it's ___.", answer: "mine" },
            { type: "fill-blank", question: "The victory was not ours, it was ___.", answer: "theirs" }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "I cut ___ while cooking.", options: ["me", "myself", "my"], answer: "myself" },
            { type: "multiple-choice", question: "She bought ___ a new dress.", options: ["her", "herself", "hers"], answer: "herself" },
            { type: "multiple-choice", question: "They enjoyed ___ at the party.", options: ["them", "themselves", "theirs"], answer: "themselves" },
            { type: "multiple-choice", question: "He taught ___ to play guitar.", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "We organized the event ___", options: ["our", "ourselves", "us"], answer: "ourselves" },
            { type: "multiple-choice", question: "The cat cleaned ___", options: ["it", "itself", "its"], answer: "itself" },
            { type: "multiple-choice", question: "Muhammad fixed the car ___", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "You should do it ___", options: ["you", "yourself", "yours"], answer: "yourself" },
            { type: "fill-blank", question: "I made this cake all by ___.", answer: "myself" },
            { type: "fill-blank", question: "She spoke to ___ in the mirror every morning.", answer: "herself" }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "I have ___ apples.", options: ["one", "first", "ones"], answer: "one" },
            { type: "multiple-choice", question: "There are ___ days in a week.", options: ["seven", "seventh", "sevens"], answer: "seven" },
            { type: "multiple-choice", question: "She has ___ brothers.", options: ["two", "second", "twos"], answer: "two" },
            { type: "multiple-choice", question: "Muhammad is ___ years old.", options: ["twenty", "twentieth", "twenties"], answer: "twenty" },
            { type: "multiple-choice", question: "There are ___ students in the class.", options: ["thirty", "thirtieth", "thirty's"], answer: "thirty" },
            { type: "multiple-choice", question: "I need ___ eggs for the recipe.", options: ["three", "third", "threes"], answer: "three" },
            { type: "multiple-choice", question: "The book has ___ pages.", options: ["one hundred", "hundredth", "hundreds"], answer: "one hundred" },
            { type: "multiple-choice", question: "We walked for ___ minutes.", options: ["fifteen", "fifteenth", "fifteens"], answer: "fifteen" },
            { type: "fill-blank", question: "There are exactly ___ months in a year.", answer: "twelve" },
            { type: "fill-blank", question: "I bought ___ oranges from the market.", answer: "five" }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "January is the ___ month.", options: ["one", "first", "ones"], answer: "first" },
            { type: "multiple-choice", question: "My birthday is on the ___ of May.", options: ["five", "fifth", "fives"], answer: "fifth" },
            { type: "multiple-choice", question: "This is my ___ time in London.", options: ["two", "second", "twos"], answer: "second" },
            { type: "multiple-choice", question: "She finished in ___ place.", options: ["three", "third", "threes"], answer: "third" },
            { type: "multiple-choice", question: "Muhammad lives on the ___ floor.", options: ["ten", "tenth", "tenths"], answer: "tenth" },
            { type: "multiple-choice", question: "Today is the ___ of June.", options: ["eight", "eighth", "eighths"], answer: "eighth" },
            { type: "multiple-choice", question: "This is our ___ anniversary.", options: ["four", "fourth", "fourths"], answer: "fourth" },
            { type: "multiple-choice", question: "He came in ___ in the race.", options: ["seven", "seventh", "sevenths"], answer: "seventh" },
            { type: "fill-blank", question: "It's my ___ visit to Paris, and I'm very excited.", answer: "first" },
            { type: "fill-blank", question: "Her office is on the ___ floor of the building.", answer: "third" }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "___ is my book (near me).", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ are my keys (near me).", options: ["This", "That", "These"], answer: "These" },
            { type: "multiple-choice", question: "___ is your bag over there.", options: ["This", "That", "These"], answer: "That" },
            { type: "multiple-choice", question: "___ are my friends over there.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "multiple-choice", question: "Look at ___ beautiful flowers!", options: ["this", "that", "these"], answer: "these" },
            { type: "multiple-choice", question: "___ car is very fast.", options: ["This", "That", "Those"], answer: "That" },
            { type: "multiple-choice", question: "Muhammad said, '___ is my sister.' (pointing nearby)", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ books on the shelf are old.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "fill-blank", question: "___ house right here is where I live.", answer: "This" },
            { type: "fill-blank", question: "Look at ___ mountains far away - they're very high.", answer: "those" }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "He ___ my brother.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "We ___ friends.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "They ___ from London.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "It ___ a cat.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "You ___ my teacher.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "Muhammad ___ a good student.", options: ["am", "is", "are"], answer: "is" },
            { type: "fill-blank", question: "I ___ very happy today.", answer: "am" },
            { type: "fill-blank", question: "They ___ at school right now.", answer: "are" }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "I ___ at home yesterday.", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "They ___ in London last week.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "She ___ tired after work.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "We ___ happy to see you.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "He ___ at the party last night.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "You ___ late for class.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "Muhammad ___ sick yesterday.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "The children ___ excited about the trip.", options: ["was", "were", "are"], answer: "were" },
            { type: "fill-blank", question: "It ___ very cold yesterday.", answer: "was" },
            { type: "fill-blank", question: "We ___ at the cinema last night.", answer: "were" }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "I ___ at home tomorrow.", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "They ___ in Paris next month.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "She ___ a doctor in the future.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "We ___ happy to help you.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "He ___ here soon.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "You ___ surprised by the news.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Muhammad ___ at the meeting tomorrow.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "The weather ___ nice next week.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "fill-blank", question: "I ___ ready in five minutes.", answer: "will be" },
            { type: "fill-blank", question: "They ___ here at exactly 5 PM.", answer: "will be" }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "I ___ English every day.", options: ["study", "studies", "studying"], answer: "study" },
            { type: "multiple-choice", question: "He ___ to work by bus.", options: ["go", "goes", "going"], answer: "goes" },
            { type: "multiple-choice", question: "We ___ TV in the evening.", options: ["watch", "watches", "watching"], answer: "watch" },
            { type: "multiple-choice", question: "She ___ in an office.", options: ["work", "works", "working"], answer: "works" },
            { type: "multiple-choice", question: "They ___ in London.", options: ["live", "lives", "living"], answer: "live" },
            { type: "multiple-choice", question: "Muhammad ___ coffee every morning.", options: ["drink", "drinks", "drinking"], answer: "drinks" },
            { type: "multiple-choice", question: "I usually ___ at 7 AM.", options: ["wake up", "wakes up", "waking up"], answer: "wake up" },
            { type: "multiple-choice", question: "My parents ___ in a small town.", options: ["live", "lives", "living"], answer: "live" },
            { type: "fill-blank", question: "She always ___ to music while studying.", answer: "listens" },
            { type: "fill-blank", question: "We ___ football every Saturday.", answer: "play" }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "I ___ TV yesterday.", options: ["watch", "watched", "watching"], answer: "watched" },
            { type: "multiple-choice", question: "She ___ her homework last night.", options: ["finish", "finished", "finishing"], answer: "finished" },
            { type: "multiple-choice", question: "We ___ to the park on Sunday.", options: ["walk", "walked", "walking"], answer: "walked" },
            { type: "multiple-choice", question: "He ___ the dishes after dinner.", options: ["wash", "washed", "washing"], answer: "washed" },
            { type: "multiple-choice", question: "They ___ football yesterday.", options: ["play", "played", "playing"], answer: "played" },
            { type: "multiple-choice", question: "Muhammad ___ his room yesterday.", options: ["clean", "cleaned", "cleaning"], answer: "cleaned" },
            { type: "multiple-choice", question: "I ___ my grandmother last week.", options: ["visit", "visited", "visiting"], answer: "visited" },
            { type: "multiple-choice", question: "She ___ to music all evening.", options: ["listen", "listened", "listening"], answer: "listened" },
            { type: "fill-blank", question: "We ___ for the test all night.", answer: "studied" },
            { type: "fill-blank", question: "He ___ his car last weekend.", answer: "washed" }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "I ___ you tomorrow.", options: ["call", "will call", "called"], answer: "will call" },
            { type: "multiple-choice", question: "She ___ to the party next week.", options: ["come", "will come", "came"], answer: "will come" },
            { type: "multiple-choice", question: "We ___ dinner at 7 PM.", options: ["have", "will have", "had"], answer: "will have" },
            { type: "multiple-choice", question: "They ___ their homework tonight.", options: ["do", "will do", "did"], answer: "will do" },
            { type: "multiple-choice", question: "He ___ a new car next year.", options: ["buy", "will buy", "bought"], answer: "will buy" },
            { type: "multiple-choice", question: "Muhammad ___ to London next month.", options: ["travel", "will travel", "traveled"], answer: "will travel" },
            { type: "multiple-choice", question: "I ___ you with your project.", options: ["help", "will help", "helped"], answer: "will help" },
            { type: "multiple-choice", question: "The meeting ___ at 3 PM.", options: ["start", "will start", "started"], answer: "will start" },
            { type: "fill-blank", question: "She ___ the report by tomorrow evening.", answer: "will finish" },
            { type: "fill-blank", question: "We ___ early tomorrow morning.", answer: "will leave" }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "___ a book on the table.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ three chairs in the room.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a cat in the garden.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ many people at the party.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a problem with the computer.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ some milk in the fridge.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ two apples on the plate.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a letter for you.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "fill-blank", question: "___ a pen in my bag if you need one.", answer: "There is" },
            { type: "fill-blank", question: "___ many students in the classroom today.", answer: "There are" }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "___ a party last night.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ many people at the concert.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a big tree in the garden.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ three cats in the house.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a problem with the car.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ some coffee in the cup.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ two books on the table.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a beautiful sunset yesterday.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "fill-blank", question: "___ a good film on TV last night.", answer: "There was" },
            { type: "fill-blank", question: "___ many students in the classroom yesterday.", answer: "There were" }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "The book is ___ the table.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The cat is ___ the box.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The ball is ___ the bed.", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "She is standing ___ the door.", options: ["behind", "on", "in"], answer: "behind" },
            { type: "multiple-choice", question: "The school is ___ the hospital.", options: ["next to", "in", "on"], answer: "next to" },
            { type: "multiple-choice", question: "Muhammad is ___ the classroom.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The keys are ___ the drawer.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The picture is ___ the wall.", options: ["on", "in", "at"], answer: "on" },
            { type: "fill-blank", question: "The cat is sleeping ___ the tree.", answer: "under" },
            { type: "fill-blank", question: "He is sitting right ___ me in the classroom.", answer: "next to" }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "I go to work ___ the morning.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "We have class ___ Monday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The meeting starts ___ 9 o'clock.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "My birthday is ___ July.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "I'll see you ___ Friday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "Muhammad studies ___ the evening.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The shop closes ___ 6 PM.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "We go on holiday ___ summer.", options: ["in", "on", "at"], answer: "in" },
            { type: "fill-blank", question: "I usually wake up ___ 7 AM every morning.", answer: "at" },
            { type: "fill-blank", question: "She was born ___ 1990 in London.", answer: "in" }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "I ___ swim when I was five.", options: ["can", "could", "am able to"], answer: "could" },
            { type: "multiple-choice", question: "She ___ speak three languages.", options: ["can", "could", "was able to"], answer: "can" },
            { type: "multiple-choice", question: "___ you help me with this?", options: ["Can", "Could", "Are able to"], answer: "Can" },
            { type: "multiple-choice", question: "They ___ come to the party yesterday.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ I borrow your pen?", options: ["Can", "Could", "Am able to"], answer: "Can" },
            { type: "multiple-choice", question: "Muhammad ___ play the piano very well.", options: ["can", "could", "is able to"], answer: "can" },
            { type: "multiple-choice", question: "We ___ finish the project on time.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ you open the window, please?", options: ["Can", "Could", "Are able to"], answer: "Could" },
            { type: "fill-blank", question: "I ___ speak French fluently.", answer: "can" },
            { type: "fill-blank", question: "He ___ solve the difficult problem.", answer: "was able to" }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "You ___ wear a seatbelt in the car.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "I ___ go to the bank today.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "multiple-choice", question: "You ___ see that movie, it's great!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "Students ___ do their homework.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "We ___ be quiet in the library.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Muhammad ___ study for his exam.", options: ["must", "has to", "should"], answer: "has to" },
            { type: "multiple-choice", question: "You ___ try this cake, it's delicious!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "I ___ wake up early tomorrow.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "fill-blank", question: "You ___ drive on the left in the UK.", answer: "must" },
            { type: "fill-blank", question: "We ___ finish this report by today.", answer: "have to" }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "I ___ play football when I was young.", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "She ___ have long hair.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "We ___ live in London.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "He ___ smoke, but he quit last year.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "They ___ go to that school.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "Muhammad ___ drink coffee, but now he prefers tea.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "There ___ be a park here.", options: ["used to", "use to", "was used to"], answer: "used to" },
            { type: "multiple-choice", question: "I ___ like vegetables, but now I love them.", options: ["didn't use to", "didn't used to", "wasn't used to"], answer: "didn't use to" },
            { type: "fill-blank", question: "I ___ walk to school when I was a child.", answer: "used to" },
            { type: "fill-blank", question: "She ___ live in Paris before moving to London.", answer: "used to" }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "I ___ buy milk because we already had some.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "She ___ go to the bank because she had enough cash.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "We ___ hurry because the train was late.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "He ___ worry about the test because it was easy.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "They ___ cook because we ordered pizza.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Muhammad ___ study so hard for the easy exam.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "You ___ bring an umbrella because it didn't rain.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "I ___ call him because he called me first.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "fill-blank", question: "She ___ buy tickets; they were already free.", answer: "needn't have" },
            { type: "fill-blank", question: "We ___ rush; we had plenty of time.", answer: "didn't need to" }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "___ is your name?", options: ["Who", "What", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ do you live?", options: ["Who", "What", "Where"], answer: "Where" },
            { type: "multiple-choice", question: "___ old are you?", options: ["How", "What", "When"], answer: "How" },
            { type: "multiple-choice", question: "___ is your birthday?", options: ["When", "What", "Where"], answer: "When" },
            { type: "multiple-choice", question: "___ is that man?", options: ["Who", "What", "Where"], answer: "Who" },
            { type: "multiple-choice", question: "___ do you study English?", options: ["Why", "What", "When"], answer: "Why" },
            { type: "multiple-choice", question: "___ is your favorite color?", options: ["What", "Who", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ does Muhammad work?", options: ["Where", "What", "When"], answer: "Where" },
            { type: "fill-blank", question: "___ time does the movie start?", answer: "What" },
            { type: "fill-blank", question: "___ are you going after class?", answer: "Where" }
        ]
    }
];

// Vocabulary data - DIRECTLY LINKED TO GRAMMAR TOPICS - TRANSLATION-BASED
const vocabularyTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «я»:", options: ["I", "He", "We"], answer: "I" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «он»:", options: ["He", "She", "They"], answer: "He" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «она»:", options: ["She", "He", "They"], answer: "She" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мы»:", options: ["We", "You", "They"], answer: "We" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «они»:", options: ["They", "We", "You"], answer: "They" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «оно»:", options: ["It", "He", "She"], answer: "It" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты мой друг.»", options: ["You are my friend.", "I am your friend.", "He is my friend."], answer: "You are my friend." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Вы студенты.»", options: ["You are students.", "We are students.", "They are students."], answer: "You are students." },
            { type: "fill-blank", question: "Переведите на английский: Он сейчас дома.", answer: "He is at home now." },
            { type: "fill-blank", question: "Переведите на английский: Мы хорошие друзья.", answer: "We are good friends." }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «меня»:", options: ["me", "my", "I"], answer: "me" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["him", "his", "he"], answer: "him" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["her", "his", "she"], answer: "her" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «нас»:", options: ["us", "our", "we"], answer: "us" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["them", "their", "they"], answer: "them" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она видит меня.»", options: ["She sees me.", "She sees you.", "She sees him."], answer: "She sees me." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я помогаю им.»", options: ["I help them.", "I help us.", "I help you."], answer: "I help them." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он звонит тебе.»", options: ["He calls you.", "He calls me.", "He calls her."], answer: "He calls you." },
            { type: "fill-blank", question: "Переведите на английский: Она дала мне книгу.", answer: "She gave me a book." },
            { type: "fill-blank", question: "Переведите на английский: Я видел его вчера.", answer: "I saw him yesterday." }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мой»:", options: ["my", "your", "our"], answer: "my" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «твой»:", options: ["your", "my", "our"], answer: "your" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["his", "her", "their"], answer: "his" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["her", "his", "their"], answer: "her" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «наш»:", options: ["our", "your", "their"], answer: "our" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["their", "our", "your"], answer: "their" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это мой дом.»", options: ["This is my house.", "This is your house.", "This is his house."], answer: "This is my house." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это их машина.»", options: ["That is their car.", "That is our car.", "That is his car."], answer: "That is their car." },
            { type: "fill-blank", question: "Переведите на английский: Это его книга.", answer: "This is his book." },
            { type: "fill-blank", question: "Переведите на английский: Наш учитель очень добрый.", answer: "Our teacher is very kind." }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мой»:", options: ["mine", "my", "me"], answer: "mine" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «твой»:", options: ["yours", "your", "you"], answer: "yours" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["his", "him", "he"], answer: "his" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["hers", "her", "she"], answer: "hers" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «наш»:", options: ["ours", "our", "us"], answer: "ours" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["theirs", "their", "they"], answer: "theirs" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эта книга моя.»", options: ["This book is mine.", "This book is yours.", "This book is his."], answer: "This book is mine." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эти туфли наши.»", options: ["These shoes are ours.", "These shoes are yours.", "These shoes are theirs."], answer: "These shoes are ours." },
            { type: "fill-blank", question: "Переведите на английский: Эта сумка её.", answer: "This bag is hers." },
            { type: "fill-blank", question: "Переведите на английский: Эта победа их.", answer: "This victory is theirs." }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам»:", options: ["myself", "yourself", "himself"], answer: "myself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам» (ты):", options: ["yourself", "myself", "himself"], answer: "yourself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам» (он):", options: ["himself", "herself", "itself"], answer: "himself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сама»:", options: ["herself", "himself", "itself"], answer: "herself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сами»:", options: ["themselves", "ourselves", "yourselves"], answer: "themselves" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я сделал это сам.»", options: ["I did it myself.", "I did it for myself.", "I did it alone."], answer: "I did it myself." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она купила себе платье.»", options: ["She bought herself a dress.", "She bought a dress herself.", "She bought a dress for him."], answer: "She bought herself a dress." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они организовали вечеринку сами.»", options: ["They organized the party themselves.", "They organized the party for themselves.", "They organized the party together."], answer: "They organized the party themselves." },
            { type: "fill-blank", question: "Переведите на английский: Я приготовил этот торт сам.", answer: "I made this cake myself." },
            { type: "fill-blank", question: "Переведите на английский: Она разговаривала сама с собой.", answer: "She was talking to herself." }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «один»:", options: ["one", "first", "once"], answer: "one" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «два»:", options: ["two", "second", "twice"], answer: "two" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «десять»:", options: ["ten", "tenth", "dozen"], answer: "ten" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «двадцать»:", options: ["twenty", "twentieth", "twelve"], answer: "twenty" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сто»:", options: ["hundred", "hundredth", "century"], answer: "hundred" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У меня три яблока.»", options: ["I have three apples.", "I have third apple.", "I have thirty apples."], answer: "I have three apples." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «В неделе семь дней.»", options: ["There are seven days in a week.", "It's the seventh day of the week.", "There are seventy days in a week."], answer: "There are seven days in a week." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ему пятнадцать лет.»", options: ["He is fifteen years old.", "It's his fiftieth year.", "He is fifty years old."], answer: "He is fifteen years old." },
            { type: "fill-blank", question: "Переведите на английский: У меня пять карандашей.", answer: "I have five pencils." },
            { type: "fill-blank", question: "Переведите на английский: В классе тридцать студентов.", answer: "There are thirty students in the class." }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «первый»:", options: ["first", "one", "primary"], answer: "first" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «второй»:", options: ["second", "two", "secondary"], answer: "second" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «третий»:", options: ["third", "three", "triple"], answer: "third" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «пятый»:", options: ["fifth", "five", "fifteen"], answer: "fifth" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «десятый»:", options: ["tenth", "ten", "dozen"], answer: "tenth" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это мой первый визит.»", options: ["This is my first visit.", "This is my one visit.", "This is my main visit."], answer: "This is my first visit." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она живёт на восьмом этаже.»", options: ["She lives on the eighth floor.", "She lives on the eight floor.", "She lives on floor eight."], answer: "She lives on the eighth floor." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Сегодня пятое мая.»", options: ["Today is the fifth of May.", "Today is five May.", "Today is May fifth."], answer: "Today is the fifth of May." },
            { type: "fill-blank", question: "Переведите на английский: Это её третий день в школе.", answer: "This is her third day at school." },
            { type: "fill-blank", question: "Переведите на английский: Мой офис на втором этаже.", answer: "My office is on the second floor." }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «этот»:", options: ["this", "that", "these"], answer: "this" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «тот»:", options: ["that", "this", "it"], answer: "that" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «эти»:", options: ["these", "those", "this"], answer: "these" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «те»:", options: ["those", "these", "that"], answer: "those" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это моя книга.»", options: ["This is my book.", "That is my book.", "These are my books."], answer: "This is my book." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Та машина быстрая.»", options: ["That car is fast.", "This car is fast.", "Those cars are fast."], answer: "That car is fast." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эти цветы красивые.»", options: ["These flowers are beautiful.", "Those flowers are beautiful.", "This flower is beautiful."], answer: "These flowers are beautiful." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Те горы высокие.»", options: ["Those mountains are high.", "These mountains are high.", "That mountain is high."], answer: "Those mountains are high." },
            { type: "fill-blank", question: "Переведите на английский: Этот дом мой.", answer: "This house is mine." },
            { type: "fill-blank", question: "Переведите на английский: Те книги интересные.", answer: "Those books are interesting." }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... студент»:", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... мой брат»:", options: ["is", "am", "are"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... друзья»:", options: ["are", "am", "is"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... доктор»:", options: ["is", "am", "are"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... из Лондона»:", options: ["are", "is", "am"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Оно ... кот»:", options: ["is", "are", "am"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... хороший учитель»:", options: ["are", "is", "am"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... счастлив сегодня»:", options: ["am", "is", "are"], answer: "am" },
            { type: "fill-blank", question: "Переведите на английский: Она сейчас в школе.", answer: "She is at school now." },
            { type: "fill-blank", question: "Переведите на английский: Они счастливы сегодня.", answer: "They are happy today." }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... дома вчера»:", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... в Лондоне»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... уставшей»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... счастливы»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... на вечеринке»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... опоздали»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Оно ... холодно вчера»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Дети ... взволнованы»:", options: ["were", "was", "are"], answer: "were" },
            { type: "fill-blank", question: "Переведите на английский: Вчера было холодно.", answer: "It was cold yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Мы были в кино вчера вечером.", answer: "We were at the cinema yesterday evening." }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... дома завтра»:", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... в Париже»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... врачом»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... рады помочь»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... здесь скоро»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... удивлены»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Погода ... хорошей»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... готов через пять минут»:", options: ["will be", "was", "am"], answer: "will be" },
            { type: "fill-blank", question: "Переведите на английский: Я буду готов через пять минут.", answer: "I will be ready in five minutes." },
            { type: "fill-blank", question: "Переведите на английский: Они будут здесь в 5 часов.", answer: "They will be here at 5 o'clock." }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я работаю.»", options: ["I work", "I worked", "I will work"], answer: "I work" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он работает.»", options: ["He works", "He worked", "He will work"], answer: "He works" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они живут.»", options: ["They live", "They lived", "They will live"], answer: "They live" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она учится.»", options: ["She studies", "She studied", "She will study"], answer: "She studies" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я учу английский каждый день.»", options: ["I study English every day.", "I studied English every day.", "I will study English every day."], answer: "I study English every day." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он ездит на работу на автобусе.»", options: ["He goes to work by bus.", "He went to work by bus.", "He will go to work by bus."], answer: "He goes to work by bus." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы смотрим телевизор вечером.»", options: ["We watch TV in the evening.", "We watched TV in the evening.", "We will watch TV in the evening."], answer: "We watch TV in the evening." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она работает в офисе.»", options: ["She works in an office.", "She worked in an office.", "She will work in an office."], answer: "She works in an office." },
            { type: "fill-blank", question: "Переведите на английский: Он живёт в Лондоне.", answer: "He lives in London." },
            { type: "fill-blank", question: "Переведите на английский: Мы играем в футбол по субботам.", answer: "We play football on Saturdays." }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «работал»:", options: ["worked", "work", "will work"], answer: "worked" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «играл»:", options: ["played", "play", "will play"], answer: "played" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «убирал»:", options: ["cleaned", "clean", "will clean"], answer: "cleaned" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «посещал»:", options: ["visited", "visit", "will visit"], answer: "visited" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я смотрел телевизор вчера.»", options: ["I watched TV yesterday.", "I watch TV yesterday.", "I will watch TV yesterday."], answer: "I watched TV yesterday." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она закончила домашнее задание.»", options: ["She finished her homework.", "She finishes her homework.", "She will finish her homework."], answer: "She finished her homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы ходили в парк.»", options: ["We walked to the park.", "We walk to the park.", "We will walk to the park."], answer: "We walked to the park." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он помыл посуду.»", options: ["He washed the dishes.", "He washes the dishes.", "He will wash the dishes."], answer: "He washed the dishes." },
            { type: "fill-blank", question: "Переведите на английский: Они играли в футбол вчера.", answer: "They played football yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Я посетил бабушку на прошлой неделе.", answer: "I visited my grandmother last week." }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду работать»:", options: ["will work", "work", "worked"], answer: "will work" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду играть»:", options: ["will play", "play", "played"], answer: "will play" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду учиться»:", options: ["will study", "study", "studied"], answer: "will study" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я позвоню тебе завтра.»", options: ["I will call you tomorrow.", "I call you tomorrow.", "I called you tomorrow."], answer: "I will call you tomorrow." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она придёт на вечеринку.»", options: ["She will come to the party.", "She comes to the party.", "She came to the party."], answer: "She will come to the party." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы поужинаем в 7 вечера.»", options: ["We will have dinner at 7 PM.", "We have dinner at 7 PM.", "We had dinner at 7 PM."], answer: "We will have dinner at 7 PM." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они сделают домашнее задание.»", options: ["They will do their homework.", "They do their homework.", "They did their homework."], answer: "They will do their homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он купит новую машину.»", options: ["He will buy a new car.", "He buys a new car.", "He bought a new car."], answer: "He will buy a new car." },
            { type: "fill-blank", question: "Переведите на английский: Она закончит отчёт завтра.", answer: "She will finish the report tomorrow." },
            { type: "fill-blank", question: "Переведите на английский: Мы уедем рано утром.", answer: "We will leave early in the morning." }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Есть ...» (для единственного числа):", options: ["There is", "There are", "There was"], answer: "There is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Есть ...» (для множественного числа):", options: ["There are", "There is", "There were"], answer: "There are" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «На столе есть книга.»", options: ["There is a book on the table.", "There was a book on the table.", "There will be a book on the table."], answer: "There is a book on the table." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть три стула.»", options: ["There are three chairs.", "There were three chairs.", "There will be three chairs."], answer: "There are three chairs." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «В саду есть кот.»", options: ["There is a cat in the garden.", "There was a cat in the garden.", "There will be a cat in the garden."], answer: "There is a cat in the garden." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть много людей.»", options: ["There are many people.", "There were many people.", "There will be many people."], answer: "There are many people." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть проблема.»", options: ["There is a problem.", "There was a problem.", "There will be a problem."], answer: "There is a problem." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть два яблока.»", options: ["There are two apples.", "There were two apples.", "There will be two apples."], answer: "There are two apples." },
            { type: "fill-blank", question: "Переведите на английский: В моей сумке есть ручка.", answer: "There is a pen in my bag." },
            { type: "fill-blank", question: "Переведите на английский: В классе много студентов.", answer: "There are many students in the classroom." }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Был ...» (единственное число):", options: ["There was", "There is", "There will be"], answer: "There was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Были ...» (множественное число):", options: ["There were", "There are", "There will be"], answer: "There were" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Вчера вечером была вечеринка.»", options: ["There was a party last night.", "There is a party last night.", "There will be a party last night."], answer: "There was a party last night." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Было много людей.»", options: ["There were many people.", "There are many people.", "There will be many people."], answer: "There were many people." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Было большое дерево.»", options: ["There was a big tree.", "There is a big tree.", "There will be a big tree."], answer: "There was a big tree." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Были три кошки.»", options: ["There were three cats.", "There are three cats.", "There will be three cats."], answer: "There were three cats." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Была проблема.»", options: ["There was a problem.", "There is a problem.", "There will be a problem."], answer: "There was a problem." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Были две книги.»", options: ["There were two books.", "There are two books.", "There will be two books."], answer: "There were two books." },
            { type: "fill-blank", question: "Переведите на английский: Вчера был хороший фильм по телевизору.", answer: "There was a good film on TV yesterday." },
            { type: "fill-blank", question: "Переведите на английский: В классе вчера было много студентов.", answer: "There were many students in the classroom yesterday." }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «в»:", options: ["in", "on", "under"], answer: "in" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «на»:", options: ["on", "in", "under"], answer: "on" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «под»:", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «за»:", options: ["behind", "in front of", "next to"], answer: "behind" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «рядом с»:", options: ["next to", "in front of", "behind"], answer: "next to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Книга на столе.»", options: ["The book is on the table.", "The book is in the table.", "The book is under the table."], answer: "The book is on the table." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Кот в коробке.»", options: ["The cat is in the box.", "The cat is on the box.", "The cat is under the box."], answer: "The cat is in the box." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мяч под кроватью.»", options: ["The ball is under the bed.", "The ball is on the bed.", "The ball is in the bed."], answer: "The ball is under the bed." },
            { type: "fill-blank", question: "Переведите на английский: Кошка спит под деревом.", answer: "The cat is sleeping under the tree." },
            { type: "fill-blank", question: "Переведите на английский: Он сидит рядом со мной.", answer: "He is sitting next to me." }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "Выберите правильный предлог для времени: «... утру»:", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "Выберите правильный предлог для дней недели: «... понедельник»:", options: ["on", "in", "at"], answer: "on" },
            { type: "multiple-choice", question: "Выберите правильный предлог для точного времени: «... 9 часов»:", options: ["at", "in", "on"], answer: "at" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я хожу на работу утром.»", options: ["I go to work in the morning.", "I go to work on the morning.", "I go to work at the morning."], answer: "I go to work in the morning." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У нас занятия в понедельник.»", options: ["We have class on Monday.", "We have class in Monday.", "We have class at Monday."], answer: "We have class on Monday." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Встреча начинается в 9 часов.»", options: ["The meeting starts at 9 o'clock.", "The meeting starts in 9 o'clock.", "The meeting starts on 9 o'clock."], answer: "The meeting starts at 9 o'clock." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мой день рождения в июле.»", options: ["My birthday is in July.", "My birthday is on July.", "My birthday is at July."], answer: "My birthday is in July." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Увидимся в пятницу.»", options: ["I'll see you on Friday.", "I'll see you in Friday.", "I'll see you at Friday."], answer: "I'll see you on Friday." },
            { type: "fill-blank", question: "Переведите на английский: Обычно я просыпаюсь в 7 утра.", answer: "I usually wake up at 7 AM." },
            { type: "fill-blank", question: "Переведите на английский: Она родилась в 1990 году.", answer: "She was born in 1990." }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я могу ...»:", options: ["can", "could", "will be able to"], answer: "can" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я мог ...»:", options: ["could", "can", "was able to"], answer: "could" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я смог ...»:", options: ["was able to", "could", "can"], answer: "was able to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я умею плавать.»", options: ["I can swim.", "I could swim.", "I will be able to swim."], answer: "I can swim." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я умел плавать, когда мне было пять.»", options: ["I could swim when I was five.", "I can swim when I was five.", "I will be able to swim when I was five."], answer: "I could swim when I was five." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты можешь помочь мне?»", options: ["Can you help me?", "Could you help me?", "Will you be able to help me?"], answer: "Can you help me?" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они смогли прийти.»", options: ["They were able to come.", "They can come.", "They could come."], answer: "They were able to come." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Можно я возьму твою ручку?»", options: ["Can I borrow your pen?", "Could I borrow your pen?", "May I borrow your pen?"], answer: "Can I borrow your pen?" },
            { type: "fill-blank", question: "Переведите на английский: Я могу говорить по-французски.", answer: "I can speak French." },
            { type: "fill-blank", question: "Переведите на английский: Он смог решить проблему.", answer: "He was able to solve the problem." }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Ты должен ...» (обязательство):", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мне нужно ...»:", options: ["have to", "must", "should"], answer: "have to" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Тебе следует ...»:", options: ["should", "must", "have to"], answer: "should" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты должен пристегнуться.»", options: ["You must wear a seatbelt.", "You have to wear a seatbelt.", "You should wear a seatbelt."], answer: "You must wear a seatbelt." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мне нужно сходить в банк.»", options: ["I have to go to the bank.", "I must go to the bank.", "I should go to the bank."], answer: "I have to go to the bank." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Тебе стоит посмотреть этот фильм.»", options: ["You should see that movie.", "You must see that movie.", "You have to see that movie."], answer: "You should see that movie." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Студенты должны делать домашнее задание.»", options: ["Students must do homework.", "Students have to do homework.", "Students should do homework."], answer: "Students must do homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы должны быть тихими.»", options: ["We must be quiet.", "We have to be quiet.", "We should be quiet."], answer: "We must be quiet." },
            { type: "fill-blank", question: "Переведите на английский: Вы должны ехать слева в Великобритании.", answer: "You must drive on the left in the UK." },
            { type: "fill-blank", question: "Переведите на английский: Нам нужно закончить этот отчёт сегодня.", answer: "We have to finish this report today." }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «раньше ...»:", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я раньше играл в футбол.»", options: ["I used to play football.", "I use to play football.", "I am used to playing football."], answer: "I used to play football." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У неё раньше были длинные волосы.»", options: ["She used to have long hair.", "She use to have long hair.", "She is used to having long hair."], answer: "She used to have long hair." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы раньше жили в Лондоне.»", options: ["We used to live in London.", "We use to live in London.", "We are used to living in London."], answer: "We used to live in London." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он раньше курил.»", options: ["He used to smoke.", "He use to smoke.", "He is used to smoking."], answer: "He used to smoke." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они раньше ходили в ту школу.»", options: ["They used to go to that school.", "They use to go to that school.", "They are used to going to that school."], answer: "They used to go to that school." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Раньше здесь был парк.»", options: ["There used to be a park here.", "There use to be a park here.", "There is used to being a park here."], answer: "There used to be a park here." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Раньше мне не нравились овощи.»", options: ["I didn't use to like vegetables.", "I didn't used to like vegetables.", "I wasn't used to liking vegetables."], answer: "I didn't use to like vegetables." },
            { type: "fill-blank", question: "Переведите на английский: Я раньше ходил в школу пешком.", answer: "I used to walk to school." },
            { type: "fill-blank", question: "Переведите на английский: Она раньше жила в Париже.", answer: "She used to live in Paris." }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «не нужно было ...»:", options: ["didn't need to", "needn't have", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «не нужно было ...» (но сделал):", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мне не нужно было покупать молоко.»", options: ["I didn't need to buy milk.", "I needn't have bought milk.", "I needn't to buy milk."], answer: "I didn't need to buy milk." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ей не нужно было идти в банк.»", options: ["She didn't need to go to the bank.", "She needn't have gone to the bank.", "She needn't to go to the bank."], answer: "She didn't need to go to the bank." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Нам не нужно было спешить.»", options: ["We didn't need to hurry.", "We needn't have hurried.", "We needn't to hurry."], answer: "We didn't need to hurry." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ему не нужно было волноваться.»", options: ["He didn't need to worry.", "He needn't have worried.", "He needn't to worry."], answer: "He didn't need to worry." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Им не нужно было готовить.»", options: ["They didn't need to cook.", "They needn't have cooked.", "They needn't to cook."], answer: "They didn't need to cook." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Тебе не нужно было брать зонт.»", options: ["You didn't need to bring an umbrella.", "You needn't have brought an umbrella.", "You needn't to bring an umbrella."], answer: "You didn't need to bring an umbrella." },
            { type: "fill-blank", question: "Переведите на английский: Ей не нужно было покупать билеты.", answer: "She didn't need to buy tickets." },
            { type: "fill-blank", question: "Переведите на английский: Нам не нужно было спешить.", answer: "We didn't need to hurry." }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «что»:", options: ["what", "who", "where"], answer: "what" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «где»:", options: ["where", "when", "why"], answer: "where" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «когда»:", options: ["when", "where", "why"], answer: "when" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «кто»:", options: ["who", "what", "which"], answer: "who" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «почему»:", options: ["why", "when", "how"], answer: "why" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «как»:", options: ["how", "what", "which"], answer: "how" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Как тебя зовут?»", options: ["What is your name?", "Who are you?", "Where are you?"], answer: "What is your name?" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Где ты живёшь?»", options: ["Where do you live?", "When do you live?", "Why do you live?"], answer: "Where do you live?" },
            { type: "fill-blank", question: "Переведите на английский: Сколько тебе лет?", answer: "How old are you?" },
            { type: "fill-blank", question: "Переведите на английский: Когда начинается фильм?", answer: "When does the film start?" }
        ]
    }
];

// Application state
const state = {
    currentPage: 'home',
    currentTest: null,
    currentTopic: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    testType: null, // 'grammar' or 'vocabulary'
    testMode: null, // 'overall' or 'topic'
    score: 0
};

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    grammarMenu: document.getElementById('grammar-menu'),
    vocabularyMenu: document.getElementById('vocabulary-menu'),
    topicSelection: document.getElementById('topic-selection'),
    testSection: document.getElementById('test-section'),
    resultsSection: document.getElementById('results-section')
};

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    pages[pageId].classList.add('active');
    state.currentPage = pageId;
    
    // Update the current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function enableKeyboardActivation(element) {
    if (!element) return;

    const tag = element.tagName ? element.tagName.toLowerCase() : '';
    const nativelyFocusable = tag === 'button' || tag === 'a' || tag === 'input' || tag === 'select' || tag === 'textarea';

    if (!nativelyFocusable && !element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
    }

    if (!element.hasAttribute('role') && (tag === 'div' || tag === 'span')) {
        element.setAttribute('role', 'button');
    }

    if (!nativelyFocusable && !element.dataset.keyboardBound) {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
        element.dataset.keyboardBound = 'true';
    }
}

function configureAccessibilityEnhancements() {
    [
        'overall-grammar-test',
        'grammar-topics',
        'overall-vocabulary-test',
        'vocabulary-topics',
        'unit-grammar',
        'unit-vocabulary',
        'unit-writing',
        'retry-btn',
        'new-test-btn',
        'home-results-btn',
        'submit-blank-btn',
        'prev-btn',
        'next-btn',
        'finish-btn'
    ].forEach(id => {
        enableKeyboardActivation(document.getElementById(id));
    });

    document.querySelectorAll('.level-card').forEach(card => {
        enableKeyboardActivation(card);
    });

    document.querySelectorAll('.test-link').forEach(link => {
        enableKeyboardActivation(link);
    });

    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.setAttribute('role', 'status');
        feedback.setAttribute('aria-live', 'polite');
    }

    const currentScore = document.getElementById('current-score');
    if (currentScore) {
        currentScore.setAttribute('aria-live', 'polite');
    }

    const finalScore = document.getElementById('final-score');
    if (finalScore) {
        finalScore.setAttribute('aria-live', 'polite');
    }
}

function setupEventListeners() {
    configureAccessibilityEnhancements();

    // Home page buttons
    document.getElementById('grammar-btn').addEventListener('click', () => {
        showPage('grammarMenu');
    });
    
    document.getElementById('vocabulary-btn').addEventListener('click', () => {
        showPage('vocabularyMenu');
    });
    
    // Grammar menu buttons
    document.getElementById('overall-grammar-test').addEventListener('click', () => {
        startOverallTest('grammar');
    });
    
    document.getElementById('grammar-topics').addEventListener('click', () => {
        showTopicSelection('grammar');
    });
    
    // Vocabulary menu buttons
    document.getElementById('overall-vocabulary-test').addEventListener('click', () => {
        startOverallTest('vocabulary');
    });
    
    document.getElementById('vocabulary-topics').addEventListener('click', () => {
        showTopicSelection('vocabulary');
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (state.currentPage === 'grammarMenu' || state.currentPage === 'vocabularyMenu') {
                showPage('home');
            } else if (state.currentPage === 'topicSelection') {
                if (state.testType === 'grammar') {
                    showPage('grammarMenu');
                } else {
                    showPage('vocabularyMenu');
                }
            } else if (state.currentPage === 'testSection') {
                if (state.testMode === 'overall') {
                    if (state.testType === 'grammar') {
                        showPage('grammarMenu');
                    } else {
                        showPage('vocabularyMenu');
                    }
                } else {
                    showPage('topicSelection');
                }
            } else if (state.currentPage === 'resultsSection') {
                showPage('home');
            }
        });
    });
    
    // Test navigation buttons
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishTest);
    document.getElementById('submit-blank-btn').addEventListener('click', submitBlankAnswer);
    
    // Results buttons
    document.getElementById('retry-btn').addEventListener('click', retryTest);
    document.getElementById('new-test-btn').addEventListener('click', () => {
        if (state.testType === 'grammar') {
            showPage('grammarMenu');
        } else {
            showPage('vocabularyMenu');
        }
    });
    document.getElementById('home-results-btn').addEventListener('click', () => {
        showPage('home');
    });
    
    // Fill in the blank input
    document.getElementById('fill-blank-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBlankAnswer();
        }
    });

    document.querySelectorAll('.test-link').forEach(link => {
        link.addEventListener('click', () => {
            window.location.href = "test.html";
        });
    });
}

// Test functions
function startOverallTest(type) {
    state.testType = type;
    state.testMode = 'overall';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    // Get 30 random questions
    let allQuestions = [];
    
    if (type === 'grammar') {
        grammarTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...q,
                topic: topic.title
            })));
        });
    } else {
        vocabularyTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...q,
                topic: topic.title
            })));
        });
    }
    
    // Shuffle and get first 30 questions
    allQuestions = shuffleArray(allQuestions).slice(0, 30);
    state.currentTest = allQuestions;
    
    // Update test UI
    document.getElementById('test-topic').textContent = `Overall ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Test`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function showTopicSelection(type) {
    state.testType = type;
    
    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = '';
    
    const topics = type === 'grammar' ? grammarTopics : vocabularyTopics;
    document.getElementById('topic-selection-title').textContent = `Select a ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Topic`;
    
    topics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-number">${topic.id}</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-info">
                <span><i class="fas fa-question-circle"></i> 10 questions</span>
                <span><i class="fas fa-clock"></i> 5-10 min</span>
            </div>
        `;

        enableKeyboardActivation(topicCard);
        topicCard.addEventListener('click', () => {
            startTopicTest(topic.id);
        });
        
        topicsContainer.appendChild(topicCard);
    });
    
    showPage('topicSelection');
}

function startTopicTest(topicId) {
    state.testMode = 'topic';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    const topics = state.testType === 'grammar' ? grammarTopics : vocabularyTopics;
    const topic = topics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    state.currentTopic = topic;
    state.currentTest = [...topic.questions]; // Create a copy
    
    // Update test UI
    document.getElementById('test-topic').textContent = `${topic.title} - ${state.testType === 'grammar' ? 'Grammar' : 'Vocabulary'}`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function renderQuestion() {
    if (!state.currentTest || state.currentTest.length === 0) return;
    
    const question = state.currentTest[state.currentQuestionIndex];
    const questionType = question.type;
    
    // Update progress
    const progressPercentage = ((state.currentQuestionIndex + 1) / state.currentTest.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    document.getElementById('current-question').textContent = state.currentQuestionIndex + 1;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-type').textContent = questionType === 'multiple-choice' ? 'Multiple Choice' : 'Fill in the Blank';
    
    // Clear previous feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback').className = 'feedback';
    
    // Show/hide appropriate containers
    if (questionType === 'multiple-choice') {
        document.getElementById('options-container').style.display = 'grid';
        document.getElementById('fill-blank-container').style.display = 'none';
        
        // Render options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.value = option;
            
            // Check if this option was previously selected
            if (state.userAnswers[state.currentQuestionIndex] && 
                state.userAnswers[state.currentQuestionIndex].selected === option) {
                optionBtn.classList.add('selected');
                
                // Show feedback if answer was checked
                if (state.userAnswers[state.currentQuestionIndex].checked) {
                    showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                }
            }
            
            optionBtn.addEventListener('click', () => {
                selectOption(option, optionBtn);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
    } else {
        document.getElementById('options-container').style.display = 'none';
        document.getElementById('fill-blank-container').style.display = 'block';
        
        // Clear the input and enable it
        const fillBlankInput = document.getElementById('fill-blank-input');
        fillBlankInput.value = '';
        fillBlankInput.disabled = false;
        fillBlankInput.focus();
        
        document.getElementById('submit-blank-btn').disabled = false;
        
        // Check if this question was previously answered
        if (state.userAnswers[state.currentQuestionIndex]) {
            fillBlankInput.value = state.userAnswers[state.currentQuestionIndex].selected || '';
            
            if (state.userAnswers[state.currentQuestionIndex].checked) {
                showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                fillBlankInput.disabled = true;
                document.getElementById('submit-blank-btn').disabled = true;
            }
        }
    }
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = state.currentQuestionIndex === 0;
    
    // Next button should be enabled only if current question is answered
    const isAnswered = state.userAnswers[state.currentQuestionIndex] && 
                      state.userAnswers[state.currentQuestionIndex].checked;
    document.getElementById('next-btn').disabled = !isAnswered && state.currentQuestionIndex < state.currentTest.length - 1;
    
    // Update score display
    updateScoreDisplay();
}

function selectOption(option, targetButton = null) {
    // Remove selected class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    const optionSelectorValue = (typeof CSS !== 'undefined' && typeof CSS.escape === 'function')
        ? CSS.escape(String(option))
        : String(option).replace(/"/g, '\\"');
    const selectedButton = targetButton || document.querySelector(`.option-btn[data-value="${optionSelectorValue}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: option,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Auto-check the answer for learning purposes
    checkAnswer();
}

function submitBlankAnswer() {
    const input = document.getElementById('fill-blank-input');
    const answer = input.value.trim();
    
    if (!answer) {
        // Show error message
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = 'Please enter an answer.';
        feedbackEl.className = 'feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
    }
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: answer,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Check the answer
    checkAnswer();
}

function checkAnswer() {
    const question = state.currentTest[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];
    
    if (!userAnswer) return;
    
    // Normalize text for robust fill-blank checks (case, spacing, trailing punctuation, apostrophes)
    const normalizeAnswerText = (value) => String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[’`]/g, "'")
        .replace(/\s+/g, ' ')
        .replace(/[.!?]+$/g, '');

    const isCorrect = question.type === 'multiple-choice'
        ? userAnswer.selected === question.answer
        : (
            Array.isArray(question.answer)
                ? question.answer.some(expected => normalizeAnswerText(userAnswer.selected) === normalizeAnswerText(expected))
                : normalizeAnswerText(userAnswer.selected) === normalizeAnswerText(question.answer)
        );
    userAnswer.isCorrect = isCorrect;
    userAnswer.checked = true;
    
    // Show feedback
    showFeedback(isCorrect, question.answer);
    
    // Update score
    if (isCorrect) {
        state.score++;
    }
    
    // Update UI based on question type
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.value === question.answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.value === userAnswer.selected && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        document.getElementById('fill-blank-input').disabled = true;
        document.getElementById('submit-blank-btn').disabled = true;
    }
    
    updateScoreDisplay();
}

function showFeedback(isCorrect, correctAnswer) {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.style.display = 'block';
    
    if (isCorrect) {
        feedbackEl.textContent = 'Correct! Well done.';
        feedbackEl.className = 'feedback correct';
    } else {
        const answerText = Array.isArray(correctAnswer) ? correctAnswer.join(' / ') : correctAnswer;
        feedbackEl.textContent = `Incorrect. The correct answer is: ${answerText}`;
        feedbackEl.className = 'feedback incorrect';
    }
}

function updateScoreDisplay() {
    const totalAnswered = state.userAnswers.filter(a => a && a.checked).length;
    const currentScore = totalAnswered > 0 ? Math.round((state.score / totalAnswered) * 100) : 0;
    document.getElementById('current-score').textContent = currentScore;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentTest.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        finishTest();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
}

function finishTest() {
    // Calculate final score
    const totalQuestions = state.currentTest.length;
    const correctAnswers = state.userAnswers.filter(a => a && a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Determine grade
    let grade = '';
    if (scorePercentage >= 90) {
        grade = 'Excellent';
    } else if (scorePercentage >= 70) {
        grade = 'Good';
    } else {
        grade = 'Try Again';
    }
    
    // Update results UI
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('total-answers').textContent = totalQuestions;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('final-score').textContent = `${scorePercentage}%`;
    document.getElementById('score-grade').textContent = grade;
    
    // Set the circular progress
    const circle = document.querySelector('.score-circle-fill');
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scorePercentage / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    
    // Update test completed message
    const testName = state.testMode === 'overall' 
        ? `Overall ${state.testType} Test` 
        : `${state.currentTopic.title} ${state.testType} Test`;
    document.getElementById('test-completed-message').textContent = `You've completed the ${testName}`;
    
    // Generate breakdown
    const breakdownContent = document.getElementById('breakdown-content');
    breakdownContent.innerHTML = '';
    
    state.currentTest.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const isCorrect = userAnswer && userAnswer.isCorrect;
        const answerText = userAnswer ? userAnswer.selected : 'Not answered';
        
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="breakdown-question">Q${index + 1}: ${question.question.substring(0, 50)}...</div>
            <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
        `;
        
        breakdownContent.appendChild(item);
    });
    
    showPage('resultsSection');
}

function retryTest() {
    if (state.testMode === 'overall') {
        startOverallTest(state.testType);
    } else {
        startTopicTest(state.currentTopic.id);
    }
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the application
function optimizeHeroVideoPlayback() {
    const video = document.getElementById('background-video');
    if (!video) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallViewport = window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;

    if (prefersReducedMotion || saveData || isSmallViewport) {
        video.pause();
        video.removeAttribute('autoplay');
        video.setAttribute('preload', 'none');
    } else {
        video.setAttribute('preload', 'metadata');
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    }
}

function init() {
    setupEventListeners();
    optimizeHeroVideoPlayback();
    showPage('home');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', optimizeHeroVideoPlayback);
window.addEventListener("scroll", function() {

    const bg = document.querySelector(".hero-bg");
    if (!bg) return;

    const scroll = window.scrollY;

    bg.style.transform =
        "translateY(" + scroll * 0.4 + "px)";

});
function openLevel(level) {

    alert("Clicked"); // test

    window.location.href = "test.html";

}
// LEVEL TEST START FUNCTION
function openLevel(level) {

    // set test title
    document.getElementById("test-topic").innerText =
        level + " English Test";


    // hide all pages
    document.querySelectorAll(".page").forEach(page => {

        page.style.display = "none";

    });


    // show test section
    document.getElementById("test-section").style.display = "block";


    // reset values
    window.currentQuestionIndex = 0;
    window.score = 0;


    // example questions (replace later)
    window.currentQuestions = [

        {
            question: "I ___ a student.",
            options: ["am", "is", "are", "be"],
            answer: "am"
        },

        {
            question: "She ___ English.",
            options: ["speak", "speaks", "speaking", "spoken"],
            answer: "speaks"
        }

    ];


    loadLevelQuestion();

}


// LOAD QUESTION
function loadLevelQuestion() {

    const q = window.currentQuestions[window.currentQuestionIndex];

    if (!q) {

        alert("Test finished. Score: " + window.score);
        return;

    }


    document.getElementById("question-text").innerText = q.question;


    const container =
        document.getElementById("options-container");

    container.innerHTML = "";


    q.options.forEach(option => {

        const btn = document.createElement("button");

        btn.className = "option-btn";

        btn.innerText = option;

        btn.onclick = function () {

            if (option === q.answer) {

                window.score++;

            }

            window.currentQuestionIndex++;

            loadLevelQuestion();

        };

        container.appendChild(btn);

    });

}


// LEVEL TEST INTEGRATION (ADDITIVE, NON-DESTRUCTIVE)
Object.defineProperties(window, {
    currentTestQuestions: {
        get() { return state.currentTest; },
        set(value) { state.currentTest = value; }
    },
    currentQuestionIndex: {
        get() { return state.currentQuestionIndex; },
        set(value) { state.currentQuestionIndex = value; }
    },
    correctAnswersCount: {
        get() { return state.score; },
        set(value) { state.score = value; }
    },
    selectedAnswers: {
        get() { return state.userAnswers; },
        set(value) { state.userAnswers = value; }
    }
});

function loadQuestion() {
    renderQuestion();
}

const levelTopicMap = {
    A1: [0, 8],
    A2: [9, 12],
    B1: [13, 16],
    B2: [17, 18],
    C1: [19, 20],
    C2: [21, 22]
};

const levelClassMap = {
    a1: 'A1',
    a2: 'A2',
    b1: 'B1',
    b2: 'B2',
    c1: 'C1',
    c2: 'C2'
};

function getLevelFromCard(card) {
    for (const className in levelClassMap) {
        if (card.classList.contains(className)) {
            return levelClassMap[className];
        }
    }
    return null;
}

function collectLevelQuestions(level) {
    const range = levelTopicMap[level];
    if (!range) return [];

    const questions = [];
    const start = range[0];
    const end = range[1];

    for (let i = start; i <= end; i++) {
        const topic = grammarTopics[i];
        if (!topic || !Array.isArray(topic.questions)) continue;

        topic.questions.forEach(question => {
            questions.push({
                ...question,
                topic: topic.title
            });
        });
    }

    return questions;
}

function startLevelTest(level) {
    const questions = collectLevelQuestions(level);
    if (questions.length === 0) return;

    currentTestQuestions = questions;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    selectedAnswers = [];

    state.testType = 'grammar';
    state.testMode = 'level';
    state.currentLevel = level;
    state.currentTopic = { id: null, title: level };

    document.getElementById("test-topic").innerText = level + " English Test";
    document.getElementById('total-questions').textContent = currentTestQuestions.length;

    showPage('test-section');

    loadQuestion();
}

function bindLevelTestLinks() {
    document.querySelectorAll('.level-card .test-link').forEach(link => {
        enableKeyboardActivation(link);
        link.addEventListener('click', (event) => {
            const card = link.closest('.level-card');
            if (!card) return;

            const level = getLevelFromCard(card);
            if (!level) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            startLevelTest(level);
        }, true);
    });
}

function openLevel(level) {
    startLevelTest(level);
}

function retryTest() {
    if (state.testMode === 'level-mixed' && state.currentLevel) {
        startLevelMixedTest(state.currentLevel);
        return;
    }

    if (state.testMode === 'level' && state.currentLevel) {
        startLevelTest(state.currentLevel);
        return;
    }

    if (state.testMode === 'overall') {
        startOverallTest(state.testType);
    } else {
        startTopicTest(state.currentTopic.id);
    }
}

document.addEventListener('DOMContentLoaded', bindLevelTestLinks);

/* ===== Unit-Based Level Flow Extension (Additive) ===== */
const unitQuestions = {};

const a1Unit1Override = {
    unit: 1,
grammar: [
    {
        type: "multiple-choice",
        question: "I have ___ book.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "She is ___ engineer.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "He has ___ car.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "It is ___ apple.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "I see ___ dog.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "She eats ___ orange every day.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "He is ___ student.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "This is ___ umbrella.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "I need ___ pen.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "She wants ___ egg.",
        options: ["a", "an", "the"],
        answer: "an"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: миллат",
            options: ["nationality", "address", "surname"],
            answer: "nationality"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: суроға",
            options: ["address", "city", "country"],
            answer: "address"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: насаб",
            options: ["surname", "email", "nationality"],
            answer: "surname"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шаҳр",
            options: ["city", "country", "address"],
            answer: "city"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кишвар",
            options: ["country", "city", "surname"],
            answer: "country"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: оиладор",
            options: ["married", "single", "nationality"],
            answer: "married"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: муҷаррад",
            options: ["single", "married", "country"],
            answer: "single"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: почтаи электронӣ",
            options: ["email", "address", "surname"],
            answer: "email"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: байналмилалӣ",
            options: ["international", "national", "local"],
            answer: "international"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: рақами телефон",
            options: ["phone number", "address", "surname"],
            answer: "phone number"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Plural of book → ______",
        answer: "books"
    },
    {
        type: "fill-blank",
        question: "Plural of city → ______",
        answer: "cities"
    },
    {
        type: "fill-blank",
        question: "Plural of bus → ______",
        answer: "buses"
    },
    {
        type: "fill-blank",
        question: "Plural of baby → ______",
        answer: "babies"
    },
    {
        type: "fill-blank",
        question: "Plural of class → ______",
        answer: "classes"
    },
    {
        type: "fill-blank",
        question: "Plural of man → ______",
        answer: "men"
    },
    {
        type: "fill-blank",
        question: "Plural of woman → ______",
        answer: "women"
    },
    {
        type: "fill-blank",
        question: "Plural of child → ______",
        answer: "children"
    },
    {
        type: "fill-blank",
        question: "Plural of person → ______",
        answer: "people"
    },
    {
        type: "fill-blank",
        question: "Plural of apple → ______",
        answer: "apples"
    }
]
};

const a1Unit2Override = {
    unit: 2,
    grammar: [
        {
            type: "multiple-choice",
            question: "She ___ my sister.",
            options: ["am", "is", "are"],
            answer: "is"
        },
        {
            type: "multiple-choice",
            question: "They ___ married.",
            options: ["am", "is", "are"],
            answer: "are"
        },
        {
            type: "multiple-choice",
            question: "___ he your brother?",
            options: ["Am", "Is", "Are"],
            answer: "Is"
        },
        {
            type: "multiple-choice",
            question: "I ___ not married.",
            options: ["am", "is", "are"],
            answer: "am"
        },
        {
            type: "multiple-choice",
            question: "We ___ from Tajikistan.",
            options: ["am", "is", "are"],
            answer: "are"
        },
        {
            type: "multiple-choice",
            question: "He ___ a doctor.",
            options: ["am", "is", "are"],
            answer: "is"
        },
        {
            type: "multiple-choice",
            question: "___ they your parents?",
            options: ["Am", "Is", "Are"],
            answer: "Are"
        },
        {
            type: "multiple-choice",
            question: "She ___ not my wife.",
            options: ["am", "is", "are"],
            answer: "is"
        },
        {
            type: "multiple-choice",
            question: "You ___ my friend.",
            options: ["am", "is", "are"],
            answer: "are"
        },
        {
            type: "multiple-choice",
            question: "___ she single?",
            options: ["Am", "Is", "Are"],
            answer: "Is"
        }
    ],
    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: оила",
            options: ["family", "company", "address"],
            answer: "family"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шавҳар",
            options: ["husband", "brother", "friend"],
            answer: "husband"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: зан",
            options: ["wife", "mother", "sister"],
            answer: "wife"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: бародар",
            options: ["brother", "father", "husband"],
            answer: "brother"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хоҳар",
            options: ["sister", "wife", "mother"],
            answer: "sister"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: падар",
            options: ["father", "brother", "friend"],
            answer: "father"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: модар",
            options: ["mother", "wife", "sister"],
            answer: "mother"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор",
            options: ["job", "family", "country"],
            answer: "job"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ширкат",
            options: ["company", "city", "address"],
            answer: "company"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: дӯст",
            options: ["friend", "father", "husband"],
            answer: "friend"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Вай хоҳари ман аст. → ______",
        answer: ["She is my sister.", "She's my sister."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Онҳо дӯстони ман ҳастанд. → ______",
        answer: ["They are my friends.", "They're my friends."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ бародари ман аст. → ______",
        answer: ["He is my brother.", "He's my brother."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Вай шавҳардор нест. → ______",
        answer: ["She is not married.", "She isn't married."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ман донишҷӯ нестам. → ______",
        answer: ["I am not a student.", "I'm not a student."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Онҳо дар хона нестанд. → ______",
        answer: ["They are not at home.", "They aren't at home."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ духтур нест. → ______",
        answer: ["He is not a doctor.", "He isn't a doctor."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё вай хоҳари ту аст? → ______",
        answer: ["Is she your sister?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё онҳо дӯстони ту ҳастанд? → ______",
        answer: ["Are they your friends?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ӯ муаллим аст? → ______",
        answer: ["Is he a teacher?"]
    }
]
};


const a1Unit3Override = {
    unit: 3,
grammar: [
    {
        type: "multiple-choice",
        question: "This is ___ book.",
        options: ["my", "me", "I"],
        answer: "my"
    },
    {
        type: "multiple-choice",
        question: "She is ___ sister.",
        options: ["my", "mine", "I"],
        answer: "my"
    },
    {
        type: "multiple-choice",
        question: "He is ___ friend.",
        options: ["my", "me", "mine"],
        answer: "my"
    },
    {
        type: "multiple-choice",
        question: "This is ___ car.",
        options: ["his", "he", "him"],
        answer: "his"
    },
    {
        type: "multiple-choice",
        question: "That is ___ bag.",
        options: ["her", "she", "hers"],
        answer: "her"
    },
    {
        type: "multiple-choice",
        question: "We love ___ teacher.",
        options: ["our", "us", "we"],
        answer: "our"
    },
    {
        type: "multiple-choice",
        question: "They live in ___ house.",
        options: ["their", "them", "they"],
        answer: "their"
    },
    {
        type: "multiple-choice",
        question: "I have a dog. ___ name is Rex.",
        options: ["Its", "It", "It's"],
        answer: "Its"
    },
    {
        type: "multiple-choice",
        question: "Is this ___ pen?",
        options: ["your", "you", "yours"],
        answer: "your"
    },
    {
        type: "multiple-choice",
        question: "This is ___ classroom.",
        options: ["our", "we", "ours"],
        answer: "our"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор",
            options: ["work", "job", "company"],
            answer: "work"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: коргар",
            options: ["worker", "teacher", "doctor"],
            answer: "worker"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: духтур",
            options: ["doctor", "teacher", "worker"],
            answer: "doctor"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: омӯзгор",
            options: ["teacher", "doctor", "worker"],
            answer: "teacher"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ширкат",
            options: ["company", "office", "school"],
            answer: "company"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: офис",
            options: ["office", "company", "job"],
            answer: "office"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: бонк",
            options: ["bank", "school", "company"],
            answer: "bank"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: мактаб",
            options: ["school", "bank", "office"],
            answer: "school"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: беморхона",
            options: ["hospital", "school", "office"],
            answer: "hospital"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор кардан",
            options: ["work", "live", "teach"],
            answer: "work"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин китоби ман аст. → ______",
        answer: ["This is my book.", "It's my book."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин мошини ӯ аст. (мард) → ______",
        answer: ["This is his car.", "It's his car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин сумкаи вай аст. (зан) → ______",
        answer: ["This is her bag.", "It's her bag."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин хонаи мо аст. → ______",
        answer: ["This is our house.", "It's our house."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин мактаби онҳо аст. → ______",
        answer: ["This is their school.", "It's their school."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин қалами ту аст. → ______",
        answer: ["This is your pen.", "It's your pen."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин телефони ман нест. → ______",
        answer: ["This is not my phone.", "This isn't my phone."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин мошини ӯ нест. (зан) → ______",
        answer: ["This is not her car.", "This isn't her car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Оё ин китоби ту аст? → ______",
        answer: ["Is this your book?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Оё ин хонаи онҳо аст? → ______",
        answer: ["Is this their house?"]
    }
]
};

const a1Unit4Override = {
    unit: 4,
grammar: [
    {
        type: "multiple-choice",
        question: "This is ___ car.",
        options: ["Muhammad's", "Muhammad", "Muhammads"],
        answer: "Muhammad's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ book.",
        options: ["the teacher's", "the teacher", "the teachers"],
        answer: "the teacher's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ ball.",
        options: ["the boys'", "the boys", "the boy"],
        answer: "the boys'"
    },
    {
        type: "multiple-choice",
        question: "That is ___ house.",
        options: ["Ali's", "Ali", "Alis"],
        answer: "Ali's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ office.",
        options: ["the manager's", "the manager", "the managers"],
        answer: "the manager's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ classroom.",
        options: ["the students'", "the student", "the students"],
        answer: "the students'"
    },
    {
        type: "multiple-choice",
        question: "That is ___ phone.",
        options: ["my friend's", "my friend", "my friends"],
        answer: "my friend's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ car.",
        options: ["my father's", "my father", "my fathers"],
        answer: "my father's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ bag.",
        options: ["the girl's", "the girls", "the girl"],
        answer: "the girl's"
    },
    {
        type: "multiple-choice",
        question: "That is ___ teacher.",
        options: ["John's", "John", "Johns"],
        answer: "John's"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: бедор шудан",
            options: ["sleep", "wake up", "work"],
            answer: "wake up"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: субҳона",
            options: ["breakfast", "dinner", "lunch"],
            answer: "breakfast"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: телевизор тамошо кардан",
            options: ["watch TV", "read", "work"],
            answer: "watch TV"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хоб рафтан",
            options: ["wake up", "sleep", "eat"],
            answer: "sleep"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор кардан",
            options: ["work", "sleep", "watch"],
            answer: "work"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хондан",
            options: ["write", "read", "eat"],
            answer: "read"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: қаҳва",
            options: ["tea", "milk", "coffee"],
            answer: "coffee"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: нисфирӯзӣ",
            options: ["morning", "afternoon", "night"],
            answer: "afternoon"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шаб",
            options: ["evening", "morning", "night"],
            answer: "night"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: корхона",
            options: ["home", "office", "school"],
            answer: "office"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин мошини афсар аст. → ______",
        answer: ["This is the officer's car.", "It's the officer's car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин кабинети командир аст. → ______",
        answer: ["This is the commander's office.", "It's the commander's office."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин ҳуҷҷати корманд аст. → ______",
        answer: ["This is the employee's document.", "It's the employee's document."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин телефони афсар нест. → ______",
        answer: ["This is not the officer's phone.", "This isn't the officer's phone."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин кабинети генерал нест. → ______",
        answer: ["This is not the general's office.", "This isn't the general's office."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин мошини командир нест. → ______",
        answer: ["This is not the commander's car.", "This isn't the commander's car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин ҳуҷҷати корманд нест. → ______",
        answer: ["This is not the employee's document.", "This isn't the employee's document."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ин мошини афсар аст? → ______",
        answer: ["Is this the officer's car?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ин кабинети командир аст? → ______",
        answer: ["Is this the commander's office?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ин ҳуҷҷати генерал аст? → ______",
        answer: ["Is this the general's document?"]
    }
]
};


const a1Unit5Override = {
   unit: 5,
grammar: [
    {
        type: "multiple-choice",
        question: "I ___ English every day.",
        options: ["study", "studies", "studying"],
        answer: "study"
    },
    {
        type: "multiple-choice",
        question: "She ___ in an office.",
        options: ["work", "works", "working"],
        answer: "works"
    },
    {
        type: "multiple-choice",
        question: "They ___ coffee in the morning.",
        options: ["drink", "drinks", "drinking"],
        answer: "drink"
    },
    {
        type: "multiple-choice",
        question: "He ___ TV in the evening.",
        options: ["watch", "watches", "watching"],
        answer: "watches"
    },
    {
        type: "multiple-choice",
        question: "We ___ in Dushanbe.",
        options: ["live", "lives", "living"],
        answer: "live"
    },
    {
        type: "multiple-choice",
        question: "The officer ___ a uniform.",
        options: ["wear", "wears", "wearing"],
        answer: "wears"
    },
    {
        type: "multiple-choice",
        question: "I ___ at 7 AM.",
        options: ["wake", "wakes", "waking"],
        answer: "wake"
    },
    {
        type: "multiple-choice",
        question: "She ___ English.",
        options: ["teach", "teaches", "teaching"],
        answer: "teaches"
    },
    {
        type: "multiple-choice",
        question: "They ___ in a police department.",
        options: ["work", "works", "working"],
        answer: "work"
    },
    {
        type: "multiple-choice",
        question: "He ___ to work every day.",
        options: ["go", "goes", "going"],
        answer: "goes"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хона",
            options: ["room", "house", "kitchen"],
            answer: "house"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳуҷра",
            options: ["room", "house", "garden"],
            answer: "room"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ошхона",
            options: ["kitchen", "bathroom", "bedroom"],
            answer: "kitchen"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хобгоҳ",
            options: ["bathroom", "bedroom", "kitchen"],
            answer: "bedroom"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳаммом",
            options: ["bedroom", "bathroom", "garden"],
            answer: "bathroom"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: меҳмонхона",
            options: ["living room", "bedroom", "kitchen"],
            answer: "living room"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: боғ",
            options: ["garden", "room", "house"],
            answer: "garden"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: тиреза",
            options: ["door", "window", "wall"],
            answer: "window"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: дар",
            options: ["window", "wall", "door"],
            answer: "door"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: девор",
            options: ["door", "wall", "window"],
            answer: "wall"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Афсар соати 6 бедор мешавад. → ______",
        answer: ["The officer wakes up at 6."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ соати 7 аз хоб мехезад. → ______",
        answer: ["He gets up at 7."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ соати 8 ба кор меравад. → ______",
        answer: ["He goes to work at 8."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ либоси махсус мепӯшад. → ______",
        answer: ["He wears a uniform."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ дар шуъбаи полис кор мекунад. → ______",
        answer: ["He works in a police department."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ ҳуҷҷатҳоро тафтиш мекунад. → ______",
        answer: ["He checks documents."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ бо одамон гап мезанад. → ______",
        answer: ["He talks to people."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ соати 6 бегоҳ ба хона меравад. → ______",
        answer: ["He goes home at 6 PM."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ шом хӯрок мехӯрад. → ______",
        answer: ["He eats dinner."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ шаб истироҳат мекунад. → ______",
        answer: ["He rests at night."]
    }
]
};


const a1Unit6Override = {
    unit: 6,
grammar: [
    {
        type: "multiple-choice",
        question: "___ you work in a police department?",
        options: ["Do", "Does", "Is"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ she work in an office?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ they live in Dushanbe?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ he wear a uniform?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ you speak English?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ the officer work at night?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ we study English every day?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ he go to work at 8?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ they drink coffee in the morning?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ she use a computer?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сухан гуфтан",
            options: ["write", "speak", "read"],
            answer: "speak"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хондан",
            options: ["read", "speak", "write"],
            answer: "read"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: навиштан",
            options: ["write", "read", "speak"],
            answer: "write"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: фаҳмидан",
            options: ["understand", "listen", "speak"],
            answer: "understand"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: гӯш кардан",
            options: ["read", "listen", "write"],
            answer: "listen"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: рондан",
            options: ["drive", "cook", "work"],
            answer: "drive"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: истифода бурдан",
            options: ["use", "drive", "listen"],
            answer: "use"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: компютер",
            options: ["phone", "computer", "email"],
            answer: "computer"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: забон",
            options: ["language", "country", "city"],
            answer: "language"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: омӯзиш",
            options: ["study", "teach", "learn"],
            answer: "learn"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Афсар дар шуъбаи полис кор мекунад. → ______",
        answer: ["The officer works in a police department."]
    },
    {
        type: "fill-blank",
        question: "Вай соати 6 бедор мешавад. → ______",
        answer: ["He wakes up at 6."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дар Душанбе зиндагӣ мекунанд. → ______",
        answer: ["They live in Dushanbe."]
    },
    {
        type: "fill-blank",
        question: "Афсар дар офис кор намекунад. → ______",
        answer: ["The officer does not work in an office.", "The officer doesn't work in an office."]
    },
    {
        type: "fill-blank",
        question: "Вай либоси махсус намепӯшад. → ______",
        answer: ["He does not wear a uniform.", "He doesn't wear a uniform."]
    },
    {
        type: "fill-blank",
        question: "Онҳо қаҳва наменӯшанд. → ______",
        answer: ["They do not drink coffee.", "They don't drink coffee."]
    },
    {
        type: "fill-blank",
        question: "Оё афсар дар шуъбаи полис кор мекунад? → ______",
        answer: ["Does the officer work in a police department?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай соати 6 бедор мешавад? → ______",
        answer: ["Does he wake up at 6?"]
    },
    {
        type: "fill-blank",
        question: "Оё онҳо дар Душанбе зиндагӣ мекунанд? → ______",
        answer: ["Do they live in Dushanbe?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай либоси махсус мепӯшад? → ______",
        answer: ["Does he wear a uniform?"]
    }
]
};


const a1Unit7Override = {
    unit: 7,
grammar: [
    {
        type: "multiple-choice",
        question: "___ do you work? — In a police department.",
        options: ["Where", "What", "Who"],
        answer: "Where"
    },
    {
        type: "multiple-choice",
        question: "___ is your name? — Muhammad.",
        options: ["What", "Where", "When"],
        answer: "What"
    },
    {
        type: "multiple-choice",
        question: "___ do you wake up? — At 6 AM.",
        options: ["When", "Where", "Why"],
        answer: "When"
    },
    {
        type: "multiple-choice",
        question: "___ do you live? — In Dushanbe.",
        options: ["Where", "What", "Who"],
        answer: "Where"
    },
    {
        type: "multiple-choice",
        question: "___ do you do? — I am a police officer.",
        options: ["What", "Where", "When"],
        answer: "What"
    },
    {
        type: "multiple-choice",
        question: "___ is your commander? — Colonel Rahim.",
        options: ["Who", "What", "Where"],
        answer: "Who"
    },
    {
        type: "multiple-choice",
        question: "___ do you study English? — Because it is important.",
        options: ["Why", "Where", "Who"],
        answer: "Why"
    },
    {
        type: "multiple-choice",
        question: "___ do you go to work? — At 8 AM.",
        options: ["When", "What", "Who"],
        answer: "When"
    },
    {
        type: "multiple-choice",
        question: "___ do you speak English with? — With my teacher.",
        options: ["Who", "Where", "Why"],
        answer: "Who"
    },
    {
        type: "multiple-choice",
        question: "___ is your office? — On Rudaki Street.",
        options: ["Where", "When", "Why"],
        answer: "Where"
    }
],

   vocabulary: [
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чӣ",
        options: ["what", "where", "when"],
        answer: "what"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: дар куҷо",
        options: ["who", "where", "why"],
        answer: "where"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кай",
        options: ["when", "what", "which"],
        answer: "when"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кӣ",
        options: ["whose", "who", "where"],
        answer: "who"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чаро",
        options: ["why", "when", "how"],
        answer: "why"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кадом",
        options: ["which", "what", "who"],
        answer: "which"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чӣ тавр",
        options: ["how", "why", "where"],
        answer: "how"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чандто",
        options: ["how many", "how much", "how"],
        answer: "how many"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чанд қадар",
        options: ["how much", "how many", "what"],
        answer: "how much"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чанд вақт (чанд маротиба)",
        options: ["how often", "how long", "when"],
        answer: "how often"
    }
],

    writing: [
    {
        type: "fill-blank",
        question: "Ту дар куҷо кор мекунӣ? → ______",
        answer: ["Where do you work?"]
    },
    {
        type: "fill-blank",
        question: "Номи ту чист? → ______",
        answer: ["What is your name?"]
    },
    {
        type: "fill-blank",
        question: "Ту кай бедор мешавӣ? → ______",
        answer: ["When do you wake up?"]
    },
    {
        type: "fill-blank",
        question: "Командири ту кист? → ______",
        answer: ["Who is your commander?"]
    },
    {
        type: "fill-blank",
        question: "Чаро ту забони англисиро меомӯзӣ? → ______",
        answer: ["Why do you study English?"]
    },
    {
        type: "fill-blank",
        question: "Ту кадом забонҳоро медонӣ? → ______",
        answer: ["Which languages do you speak?"]
    },
    {
        type: "fill-blank",
        question: "Ту чӣ тавр ба кор меравӣ? → ______",
        answer: ["How do you go to work?"]
    },
    {
        type: "fill-blank",
        question: "Чандто корманд дар шуъба кор мекунад? → ______",
        answer: ["How many employees work in the department?"]
    },
    {
        type: "fill-blank",
        question: "Ин чанд қадар вақт мегирад? → ______",
        answer: ["How much time does it take?"]
    },
    {
        type: "fill-blank",
        question: "Ту чанд вақт машқ мекунӣ? → ______",
        answer: ["How often do you train?"]
    }
]
};


const a1Unit8Override = {
    unit: 8,
grammar: [
    {
        type: "multiple-choice",
        question: "There ___ a police station in this city.",
        options: ["is", "are", "am"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "There ___ many officers in the department.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "There ___ not a hospital near here.",
        options: ["is", "are", "am"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "There ___ not many cars on the street.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "There ___ a commander in the office.",
        options: ["is", "are", "am"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "There ___ many rooms in this building.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "___ there a police station near here?",
        options: ["Is", "Are", "Am"],
        answer: "Is"
    },
    {
        type: "multiple-choice",
        question: "___ there many officers in the office?",
        options: ["Is", "Are", "Am"],
        answer: "Are"
    },
    {
        type: "multiple-choice",
        question: "___ there a document on the table?",
        options: ["Is", "Are", "Am"],
        answer: "Is"
    },
    {
        type: "multiple-choice",
        question: "___ there many people in the building?",
        options: ["Is", "Are", "Am"],
        answer: "Are"
    }
],

    vocabulary: [
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳамеша",
        options: ["always", "sometimes", "never"],
        answer: "always"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: одатан",
        options: ["usually", "never", "rarely"],
        answer: "usually"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: аксар вақт",
        options: ["often", "always", "never"],
        answer: "often"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: баъзан",
        options: ["sometimes", "usually", "always"],
        answer: "sometimes"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кам-кам",
        options: ["rarely", "often", "always"],
        answer: "rarely"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳеҷ гоҳ",
        options: ["never", "sometimes", "usually"],
        answer: "never"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳар рӯз",
        options: ["every day", "sometimes", "never"],
        answer: "every day"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳар ҳафта",
        options: ["every week", "every day", "never"],
        answer: "every week"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: баъзан",
        options: ["occasionally", "always", "never"],
        answer: "occasionally"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: қариб ҳеҷ гоҳ",
        options: ["almost never", "always", "usually"],
        answer: "almost never"
    }
],

   writing: [
    {
        type: "fill-blank",
        question: "Дар шаҳр шуъбаи полис ҳаст. → ______",
        answer: ["There is a police department in the city."]
    },
    {
        type: "fill-blank",
        question: "Дар офис як афсар ҳаст. → ______",
        answer: ["There is an officer in the office."]
    },
    {
        type: "fill-blank",
        question: "Дар бино ҳуҷраҳои зиёд ҳастанд. → ______",
        answer: ["There are many rooms in the building."]
    },
    {
        type: "fill-blank",
        question: "Дар кӯча мошин нест. → ______",
        answer: ["There is not a car on the street.", "There isn't a car on the street."]
    },
    {
        type: "fill-blank",
        question: "Дар офис афсарон нестанд. → ______",
        answer: ["There are not officers in the office.", "There aren't officers in the office."]
    },
    {
        type: "fill-blank",
        question: "Дар ин ҷо беморхона нест. → ______",
        answer: ["There is not a hospital here.", "There isn't a hospital here."]
    },
    {
        type: "fill-blank",
        question: "Оё дар шаҳр шуъбаи полис ҳаст? → ______",
        answer: ["Is there a police department in the city?"]
    },
    {
        type: "fill-blank",
        question: "Оё дар офис афсар ҳаст? → ______",
        answer: ["Is there an officer in the office?"]
    },
    {
        type: "fill-blank",
        question: "Оё дар бино ҳуҷраҳои зиёд ҳастанд? → ______",
        answer: ["Are there many rooms in the building?"]
    },
    {
        type: "fill-blank",
        question: "Оё дар кӯча мошинҳо ҳастанд? → ______",
        answer: ["Are there cars on the street?"]
    }
]
};

const a1Unit9Override = {
   unit: 9,
grammar: [
    {
        type: "multiple-choice",
        question: "I ___ at work yesterday.",
        options: ["was", "were", "am"],
        answer: "was"
    },
    {
        type: "multiple-choice",
        question: "They ___ at home last night.",
        options: ["was", "were", "is"],
        answer: "were"
    },
    {
        type: "multiple-choice",
        question: "She ___ in the office yesterday.",
        options: ["was", "were", "are"],
        answer: "was"
    },
    {
        type: "multiple-choice",
        question: "We ___ at the police station.",
        options: ["was", "were", "am"],
        answer: "were"
    },
    {
        type: "multiple-choice",
        question: "He ___ not at work yesterday.",
        options: ["was", "were", "is"],
        answer: "was"
    },
    {
        type: "multiple-choice",
        question: "They ___ not in the office.",
        options: ["was", "were", "are"],
        answer: "were"
    },
    {
        type: "multiple-choice",
        question: "___ you at home yesterday?",
        options: ["Was", "Were", "Are"],
        answer: "Were"
    },
    {
        type: "multiple-choice",
        question: "___ he at work last night?",
        options: ["Was", "Were", "Is"],
        answer: "Was"
    },
    {
        type: "multiple-choice",
        question: "___ they in the police department?",
        options: ["Was", "Were", "Are"],
        answer: "Were"
    },
    {
        type: "multiple-choice",
        question: "She ___ happy yesterday.",
        options: ["was", "were", "is"],
        answer: "was"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: нон",
            options: ["bread", "rice", "milk"],
            answer: "bread"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шир",
            options: ["milk", "water", "tea"],
            answer: "milk"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: об",
            options: ["water", "juice", "tea"],
            answer: "water"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: биринҷ",
            options: ["rice", "bread", "milk"],
            answer: "rice"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: гӯшт",
            options: ["meat", "bread", "rice"],
            answer: "meat"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: себ",
            options: ["apple", "banana", "orange"],
            answer: "apple"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: банан",
            options: ["banana", "apple", "rice"],
            answer: "banana"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: чой",
            options: ["tea", "milk", "water"],
            answer: "tea"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: қаҳва",
            options: ["coffee", "tea", "milk"],
            answer: "coffee"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: афшура",
            options: ["juice", "water", "milk"],
            answer: "juice"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Ман дирӯз дар офис будам. → ______",
        answer: ["I was in the office yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз дар шуъбаи полис буд. → ______",
        answer: ["He was in the police department yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз дар хона буданд. → ______",
        answer: ["They were at home yesterday."]
    },
    {
        type: "fill-blank",
        question: "Ман дирӯз дар кор набудам. → ______",
        answer: ["I was not at work yesterday.", "I wasn't at work yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз дар офис набуд. → ______",
        answer: ["He was not in the office yesterday.", "He wasn't in the office yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз дар шуъба набуданд. → ______",
        answer: ["They were not in the department yesterday.", "They weren't in the department yesterday."]
    },
    {
        type: "fill-blank",
        question: "Оё ту дирӯз дар кор будӣ? → ______",
        answer: ["Were you at work yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай дирӯз дар офис буд? → ______",
        answer: ["Was he in the office yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё онҳо дирӯз дар хона буданд? → ______",
        answer: ["Were they at home yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё афсар дирӯз дар шуъбаи полис буд? → ______",
        answer: ["Was the officer in the police department yesterday?"]
    }
]
};


const a1Unit10Override = {
    unit: 10,
grammar: [
    {
        type: "multiple-choice",
        question: "I ___ in the police department last year.",
        options: ["work", "worked", "working"],
        answer: "worked"
    },
    {
        type: "multiple-choice",
        question: "She ___ English yesterday.",
        options: ["study", "studied", "studying"],
        answer: "studied"
    },
    {
        type: "multiple-choice",
        question: "They ___ not work yesterday.",
        options: ["did", "did not", "does"],
        answer: "did not"
    },
    {
        type: "multiple-choice",
        question: "He ___ not visit the office last week.",
        options: ["did", "did not", "does"],
        answer: "did not"
    },
    {
        type: "multiple-choice",
        question: "We ___ TV last night.",
        options: ["watch", "watched", "watching"],
        answer: "watched"
    },
    {
        type: "multiple-choice",
        question: "She ___ her friend yesterday.",
        options: ["visit", "visited", "visiting"],
        answer: "visited"
    },
    {
        type: "multiple-choice",
        question: "___ you work yesterday?",
        options: ["Did", "Do", "Does"],
        answer: "Did"
    },
    {
        type: "multiple-choice",
        question: "___ he study English last year?",
        options: ["Did", "Does", "Do"],
        answer: "Did"
    },
    {
        type: "multiple-choice",
        question: "They ___ football last week.",
        options: ["play", "played", "playing"],
        answer: "played"
    },
    {
        type: "multiple-choice",
        question: "___ she visit the police station yesterday?",
        options: ["Did", "Do", "Does"],
        answer: "Did"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: калон",
            options: ["big", "small", "long"],
            answer: "big"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хурд",
            options: ["small", "big", "tall"],
            answer: "small"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: дароз",
            options: ["long", "short", "big"],
            answer: "long"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кӯтоҳ",
            options: ["short", "long", "tall"],
            answer: "short"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: баланд",
            options: ["tall", "short", "small"],
            answer: "tall"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: зуд",
            options: ["fast", "slow", "big"],
            answer: "fast"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: суст",
            options: ["slow", "fast", "short"],
            answer: "slow"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: нав",
            options: ["new", "old", "big"],
            answer: "new"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кӯҳна",
            options: ["old", "new", "small"],
            answer: "old"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: арзон",
            options: ["cheap", "expensive", "big"],
            answer: "cheap"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Ман дирӯз ба кор рафтам. → ______",
        answer: ["I went to work yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз хӯрок хӯрд. → ______",
        answer: ["He ate food yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз мошин ронданд. → ______",
        answer: ["They drove a car yesterday."]
    },
    {
        type: "fill-blank",
        question: "Ман дирӯз ба кор нарафтам. → ______",
        answer: ["I did not go to work yesterday.", "I didn't go to work yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз чизе нахӯрд. → ______",
        answer: ["He did not eat food yesterday.", "He didn't eat food yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз мошин наронданд. → ______",
        answer: ["They did not drive a car yesterday.", "They didn't drive a car yesterday."]
    },
    {
        type: "fill-blank",
        question: "Оё ту дирӯз ба кор рафтӣ? → ______",
        answer: ["Did you go to work yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай дирӯз хӯрок хӯрд? → ______",
        answer: ["Did he eat food yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё онҳо дирӯз мошин ронданд? → ______",
        answer: ["Did they drive a car yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Афсар дирӯз ҳуҷҷат гирифт. → ______",
        answer: ["The officer took the document yesterday."]
    }
]
};


const a1Unit11Override = {
   unit: 11,
grammar: [
    {
        type: "multiple-choice",
        question: "How many ___ are there in the office?",
        options: ["officer", "officers", "water"],
        answer: "officers"
    },
    {
        type: "multiple-choice",
        question: "How much ___ do you drink?",
        options: ["water", "apples", "cars"],
        answer: "water"
    },
    {
        type: "multiple-choice",
        question: "How many ___ do you have?",
        options: ["car", "cars", "water"],
        answer: "cars"
    },
    {
        type: "multiple-choice",
        question: "How much ___ is there?",
        options: ["milk", "books", "officers"],
        answer: "milk"
    },
    {
        type: "multiple-choice",
        question: "I ___ speak English.",
        options: ["can", "can't", "has"],
        answer: "can"
    },
    {
        type: "multiple-choice",
        question: "She ___ drive a car.",
        options: ["can", "can't", "have"],
        answer: "can"
    },
    {
        type: "multiple-choice",
        question: "He ___ enter this room.",
        options: ["can", "can't", "has"],
        answer: "can't"
    },
    {
        type: "multiple-choice",
        question: "They ___ use phones here.",
        options: ["can", "can't", "have"],
        answer: "can't"
    },
    {
        type: "multiple-choice",
        question: "How many ___ are in the building?",
        options: ["room", "rooms", "water"],
        answer: "rooms"
    },
    {
        type: "multiple-choice",
        question: "How much ___ do you need?",
        options: ["money", "cars", "officers"],
        answer: "money"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: либос",
            options: ["dress", "shirt", "coat"],
            answer: "dress"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: курта",
            options: ["shirt", "coat", "dress"],
            answer: "shirt"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: курта (гарм)",
            options: ["coat", "shirt", "dress"],
            answer: "coat"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: пойафзол",
            options: ["shoes", "coat", "hat"],
            answer: "shoes"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кулоҳ",
            options: ["hat", "shirt", "coat"],
            answer: "hat"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: айнак",
            options: ["glasses", "hat", "shoes"],
            answer: "glasses"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шим",
            options: ["jeans", "coat", "shirt"],
            answer: "jeans"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сурх",
            options: ["red", "blue", "black"],
            answer: "red"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кабуд",
            options: ["blue", "red", "white"],
            answer: "blue"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сиёҳ",
            options: ["black", "white", "blue"],
            answer: "black"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Чандто афсар дар шуъба ҳаст? → ______",
        answer: ["How many officers are there in the department?"]
    },
    {
        type: "fill-blank",
        question: "Чанд қадар об ҳаст? → ______",
        answer: ["How much water is there?"]
    },
    {
        type: "fill-blank",
        question: "Чандто мошин дар кӯча ҳаст? → ______",
        answer: ["How many cars are there on the street?"]
    },
    {
        type: "fill-blank",
        question: "Чанд қадар вақт лозим аст? → ______",
        answer: ["How much time is needed?"]
    },
    {
        type: "fill-blank",
        question: "Ман метавонам мошин ронам. → ______",
        answer: ["I can drive a car."]
    },
    {
        type: "fill-blank",
        question: "Вай метавонад забони англисиро гап занад. → ______",
        answer: ["He can speak English."]
    },
    {
        type: "fill-blank",
        question: "Ман наметавонам дароям. → ______",
        answer: ["I cannot enter.", "I can't enter."]
    },
    {
        type: "fill-blank",
        question: "Онҳо наметавонанд инро истифода баранд. → ______",
        answer: ["They cannot use this.", "They can't use this."]
    },
    {
        type: "fill-blank",
        question: "Чандто ҳуҷра дар бино ҳаст? → ______",
        answer: ["How many rooms are there in the building?"]
    },
    {
        type: "fill-blank",
        question: "Чанд қадар пул дорӣ? → ______",
        answer: ["How much money do you have?"]
    }
]
};


const a1Unit12Override = {
   unit: 12,
grammar: [
    {
        type: "multiple-choice",
        question: "I have ___ water.",
        options: ["some", "any", "a"],
        answer: "some"
    },
    {
        type: "multiple-choice",
        question: "She has ___ friends in the department.",
        options: ["some", "any", "a"],
        answer: "some"
    },
    {
        type: "multiple-choice",
        question: "There are ___ officers in the building.",
        options: ["some", "any", "a"],
        answer: "some"
    },
    {
        type: "multiple-choice",
        question: "I do not have ___ money.",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "He does not have ___ documents.",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "There is not ___ milk.",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "Do you have ___ questions?",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "Are there ___ officers here?",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "Is there ___ water?",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "We need ___ information.",
        options: ["some", "any", "a"],
        answer: "some"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сафар",
            options: ["travel", "visit", "stay"],
            answer: "travel"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: боздид кардан",
            options: ["visit", "travel", "stay"],
            answer: "visit"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: меҳмонхона",
            options: ["hotel", "airport", "city"],
            answer: "hotel"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: фурудгоҳ",
            options: ["airport", "hotel", "station"],
            answer: "airport"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кишвар",
            options: ["country", "city", "hotel"],
            answer: "country"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шаҳр",
            options: ["city", "country", "airport"],
            answer: "city"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳавопаймо",
            options: ["plane", "train", "car"],
            answer: "plane"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: рафтан",
            options: ["go", "come", "stay"],
            answer: "go"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: мондан",
            options: ["stay", "go", "visit"],
            answer: "stay"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: акс гирифтан",
            options: ["take", "see", "visit"],
            answer: "take"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Оё ту чой мехоҳӣ? → ______",
        answer: ["Would you like tea?"]
    },
    {
        type: "fill-blank",
        question: "Оё ту каме об мехоҳӣ? → ______",
        answer: ["Would you like some water?"]
    },
    {
        type: "fill-blank",
        question: "Ман қаҳва мехоҳам. → ______",
        answer: ["I would like coffee.", "I'd like coffee."]
    },
    {
        type: "fill-blank",
        question: "Ман каме чой мехоҳам. → ______",
        answer: ["I would like some tea.", "I'd like some tea."]
    },
    {
        type: "fill-blank",
        question: "Ман об намехоҳам. → ______",
        answer: ["I would not like water.", "I wouldn't like water."]
    },
    {
        type: "fill-blank",
        question: "Ман қаҳва намехоҳам. → ______",
        answer: ["I would not like coffee.", "I wouldn't like coffee."]
    },
    {
        type: "fill-blank",
        question: "Оё ту қаҳва мехоҳӣ? → ______",
        answer: ["Would you like coffee?"]
    },
    {
        type: "fill-blank",
        question: "Оё ту каме хӯрок мехоҳӣ? → ______",
        answer: ["Would you like some food?"]
    },
    {
        type: "fill-blank",
        question: "Вай об мехоҳад. → ______",
        answer: ["He would like water.", "He'd like water."]
    },
    {
        type: "fill-blank",
        question: "Онҳо чой намехоҳанд. → ______",
        answer: ["They would not like tea.", "They wouldn't like tea."]
    }
]
};

const unitFlowState = {
    level: null,
    unit: null,
    type: null
};

function buildUnitQuestions() {
    if (Object.keys(unitQuestions).length > 0) {
        return unitQuestions;
    }

    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const unitsPerLevel = 12;

    const grammarAll = grammarTopics.flatMap(topic =>
        topic.questions.map(question => ({
            ...question,
            topic: topic.title
        }))
    );

    const vocabularyAll = vocabularyTopics.flatMap(topic =>
        topic.questions.map(question => ({
            ...question,
            topic: topic.title
        }))
    );

    levels.forEach(level => {
        let grammarPool = [];
        let vocabularyPool = [];

        if (typeof levelTopicMap !== 'undefined' && levelTopicMap[level]) {
            const [start, end] = levelTopicMap[level];

            for (let i = start; i <= end; i++) {
                const grammarTopic = grammarTopics[i];
                const vocabularyTopic = vocabularyTopics[i];

                if (grammarTopic && Array.isArray(grammarTopic.questions)) {
                    grammarPool.push(
                        ...grammarTopic.questions.map(question => ({
                            ...question,
                            topic: grammarTopic.title
                        }))
                    );
                }

                if (vocabularyTopic && Array.isArray(vocabularyTopic.questions)) {
                    vocabularyPool.push(
                        ...vocabularyTopic.questions.map(question => ({
                            ...question,
                            topic: vocabularyTopic.title
                        }))
                    );
                }
            }
        }

        if (grammarPool.length === 0) grammarPool = grammarAll;
        if (vocabularyPool.length === 0) vocabularyPool = vocabularyAll;

        unitQuestions[level] = [];

        for (let unit = 1; unit <= unitsPerLevel; unit++) {
            const grammar = [];
            const vocabulary = [];
            const writing = [];

            const subjects = ['I', 'You', 'He', 'She', 'We', 'They', 'Tom', 'My brother', 'The students', 'The children'];
            const beForms = {
                'I': 'am',
                'You': 'are',
                'He': 'is',
                'She': 'is',
                'We': 'are',
                'They': 'are',
                'Tom': 'is',
                'My brother': 'is',
                'The students': 'are',
                'The children': 'are'
            };
            const verbs = [
                ['play', 'plays'],
                ['study', 'studies'],
                ['watch', 'watches'],
                ['read', 'reads'],
                ['work', 'works'],
                ['live', 'lives'],
                ['drink', 'drinks'],
                ['write', 'writes'],
                ['speak', 'speaks'],
                ['go', 'goes']
            ];
            const tails = [
                'at home.',
                'English every day.',
                'in the park.',
                'to school by bus.',
                'books in the evening.',
                'in an office.',
                'in this city.',
                'water every morning.',
                'letters to friends.',
                'very well.'
            ];

            for (let i = 0; i < 10; i++) {
                const grammarIndex = (((unit - 1) * 10) + i) % grammarPool.length;
                const vocabularyIndex = (((unit - 1) * 10) + i) % vocabularyPool.length;

                grammar.push({ ...grammarPool[grammarIndex] });
                vocabulary.push({ ...vocabularyPool[vocabularyIndex] });

                const subject = subjects[(unit + i) % subjects.length];
                const verbPair = verbs[((unit * 2) + i) % verbs.length];
                const tail = tails[((unit * 3) + i) % tails.length];
                const isThirdSingular = ['He', 'She', 'Tom', 'My brother'].includes(subject);

                if (i % 2 === 0) {
                    writing.push({
                        type: 'fill-blank',
                        question: `${subject} ___ ${tail}`,
                        answer: beForms[subject]
                    });
                } else {
                    writing.push({
                        type: 'fill-blank',
                        question: `${subject} ___ ${tail}`,
                        answer: isThirdSingular ? verbPair[1] : verbPair[0]
                    });
                }
            }

            unitQuestions[level].push({
                unit,
                grammar,
                vocabulary,
                writing
            });
        }
    });

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 0) {
        unitQuestions.A1[0] = {
            unit: a1Unit1Override.unit,
            grammar: a1Unit1Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit1Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit1Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 1) {
        unitQuestions.A1[1] = {
            unit: a1Unit2Override.unit,
            grammar: a1Unit2Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit2Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit2Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 2) {
        unitQuestions.A1[2] = {
            unit: a1Unit3Override.unit,
            grammar: a1Unit3Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit3Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit3Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 3) {
        unitQuestions.A1[3] = {
            unit: a1Unit4Override.unit,
            grammar: a1Unit4Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit4Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit4Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 4) {
        unitQuestions.A1[4] = {
            unit: a1Unit5Override.unit,
            grammar: a1Unit5Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit5Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit5Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 5) {
        unitQuestions.A1[5] = {
            unit: a1Unit6Override.unit,
            grammar: a1Unit6Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit6Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit6Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 6) {
        unitQuestions.A1[6] = {
            unit: a1Unit7Override.unit,
            grammar: a1Unit7Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit7Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit7Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 7) {
        unitQuestions.A1[7] = {
            unit: a1Unit8Override.unit,
            grammar: a1Unit8Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit8Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit8Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 8) {
        unitQuestions.A1[8] = {
            unit: a1Unit9Override.unit,
            grammar: a1Unit9Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit9Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit9Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 9) {
        unitQuestions.A1[9] = {
            unit: a1Unit10Override.unit,
            grammar: a1Unit10Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit10Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit10Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 10) {
        unitQuestions.A1[10] = {
            unit: a1Unit11Override.unit,
            grammar: a1Unit11Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit11Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit11Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 11) {
        unitQuestions.A1[11] = {
            unit: a1Unit12Override.unit,
            grammar: a1Unit12Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit12Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit12Override.writing.map(question => ({ ...question }))
        };
    }

    return unitQuestions;
}

function showLevelDetail(level) {
    buildUnitQuestions();

    const units = unitQuestions[level] || [];
    const unitsContainer = document.getElementById('units-container');
    const levelName = document.getElementById('level-name');

    if (!unitsContainer) return;

    unitFlowState.level = level;
    unitFlowState.unit = null;
    unitFlowState.type = null;

    if (levelName) {
        levelName.textContent = level;
    }

    const lastLevelTestResult = getLevelTestLastResult(level);
    const lastResultText = lastLevelTestResult
        ? `Last result: ${lastLevelTestResult.score}%`
        : 'Last result: Not taken yet';

    unitsContainer.innerHTML = '';

    const levelTestCard = document.createElement('div');
    levelTestCard.className = 'menu-card';
    levelTestCard.setAttribute('data-role', 'level-mixed-test');
    enableKeyboardActivation(levelTestCard);
    levelTestCard.innerHTML = `
        <div class="menu-icon"><i class="fas fa-layer-group"></i></div>
        <h3>${level} Level Test</h3>
        <p>60 random questions from Grammar, Vocabulary, and Writing</p>
        <p>${lastResultText}</p>
        <div class="test-info">
            <span><i class="fas fa-question-circle"></i> 60 questions</span>
            <span><i class="fas fa-random"></i> New every time</span>
        </div>
    `;
    levelTestCard.addEventListener('click', () => {
        startLevelMixedTest(level);
    });
    unitsContainer.appendChild(levelTestCard);

    units.forEach(item => {
        const unitCard = document.createElement('div');
        unitCard.className = 'topic-card';
        enableKeyboardActivation(unitCard);
        unitCard.innerHTML = `
            <div class="topic-number">${item.unit}</div>
            <h3>Unit ${item.unit}</h3>
            <p>${level} unit test set</p>
            <div class="topic-info">
                <span><i class="fas fa-question-circle"></i> 30 tasks</span>
                <span><i class="fas fa-layer-group"></i> Grammar/Vocabulary/Writing</span>
            </div>
        `;

        unitCard.addEventListener('click', () => {
            showUnitMenu(level, item.unit);
        });

        unitsContainer.appendChild(unitCard);
    });

    if (typeof pages === 'object' && !pages.levelDetailPage) {
        const pageElement = document.getElementById('level-detail-page');
        if (pageElement) pages.levelDetailPage = pageElement;
    }

    if (typeof showPage === 'function' && pages.levelDetailPage) {
        showPage('levelDetailPage');
    } else {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.getElementById('level-detail-page');
        if (target) target.classList.add('active');
        state.currentPage = 'levelDetailPage';
    }
}

function cloneQuestionForLevelMixedTest(question) {
    if (!question || typeof question !== 'object') return question;

    return {
        ...question,
        options: Array.isArray(question.options) ? question.options.slice() : question.options,
        answer: Array.isArray(question.answer) ? question.answer.slice() : question.answer
    };
}

function pickRandomQuestionsForLevelMixedTest(pool, count) {
    if (!Array.isArray(pool) || pool.length === 0 || count <= 0) return [];

    const shuffled = shuffleArray(pool.map(cloneQuestionForLevelMixedTest));
    if (shuffled.length >= count) {
        return shuffled.slice(0, count);
    }

    const result = shuffled.slice();
    while (result.length < count) {
        const randomQuestion = pool[Math.floor(Math.random() * pool.length)];
        result.push(cloneQuestionForLevelMixedTest(randomQuestion));
    }

    return result;
}

function buildLevelMixedQuestionSet(level, totalQuestions = 60) {
    buildUnitQuestions();

    const units = unitQuestions[level] || [];
    if (!Array.isArray(units) || units.length === 0) return [];

    const grammarPool = [];
    const vocabularyPool = [];
    const writingPool = [];

    units.forEach(unitItem => {
        if (unitItem && Array.isArray(unitItem.grammar)) {
            grammarPool.push(...unitItem.grammar);
        }
        if (unitItem && Array.isArray(unitItem.vocabulary)) {
            vocabularyPool.push(...unitItem.vocabulary);
        }
        if (unitItem && Array.isArray(unitItem.writing)) {
            writingPool.push(...unitItem.writing);
        }
    });

    const grammarCount = Math.floor(totalQuestions / 3);
    const vocabularyCount = Math.floor(totalQuestions / 3);
    const writingCount = totalQuestions - grammarCount - vocabularyCount;

    let mixed = []
        .concat(pickRandomQuestionsForLevelMixedTest(grammarPool, grammarCount))
        .concat(pickRandomQuestionsForLevelMixedTest(vocabularyPool, vocabularyCount))
        .concat(pickRandomQuestionsForLevelMixedTest(writingPool, writingCount));

    if (mixed.length < totalQuestions) {
        const combinedPool = grammarPool.concat(vocabularyPool, writingPool);
        mixed = mixed.concat(
            pickRandomQuestionsForLevelMixedTest(combinedPool, totalQuestions - mixed.length)
        );
    }

    return shuffleArray(mixed).slice(0, totalQuestions);
}

function getLevelTestScoreStorageKey(level) {
    return level + "_level_test_last_score";
}

function getLevelTestDateStorageKey(level) {
    return level + "_level_test_last_date";
}

function getLevelTestLastResult(level) {
    try {
        if (!level) return null;
        const rawScore = localStorage.getItem(getLevelTestScoreStorageKey(level));
        if (rawScore === null) return null;

        const score = Number(rawScore);
        if (!Number.isFinite(score)) return null;

        const date = localStorage.getItem(getLevelTestDateStorageKey(level));
        return { score, date };
    } catch (error) {
        console.error('[level-mixed-result] getLevelTestLastResult failed', error);
        return null;
    }
}

function saveLevelMixedResultSafely() {
    try {
        if (!state || state.testMode !== 'level-mixed') return;

        const level = String(state.currentLevel || (unitFlowState && unitFlowState.level) || '').trim();
        if (!level) return;

        const total = Array.isArray(state.currentTest) ? state.currentTest.length : 0;
        const correct = Array.isArray(state.userAnswers)
            ? state.userAnswers.filter(answer => answer && answer.isCorrect).length
            : 0;
        const score = total > 0 ? Math.round((correct / total) * 100) : 0;

        localStorage.setItem(getLevelTestScoreStorageKey(level), String(score));
        localStorage.setItem(getLevelTestDateStorageKey(level), new Date().toISOString());
    } catch (error) {
        console.error('[level-mixed-result] saveLevelMixedResultSafely failed', error);
    }
}

function startLevelMixedTest(level) {
    const mixedQuestions = buildLevelMixedQuestionSet(level, 60);
    if (!Array.isArray(mixedQuestions) || mixedQuestions.length === 0) return;

    unitFlowState.level = level;
    unitFlowState.unit = null;
    unitFlowState.type = null;

    state.testMode = 'level-mixed';
    state.testType = 'mixed';
    state.currentLevel = level;
    state.currentUnit = null;
    state.currentTopic = {
        id: 'level-mixed',
        title: `${level} Level Test`
    };
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    state.currentTest = mixedQuestions;

    const topicEl = document.getElementById('test-topic');
    if (topicEl) {
        topicEl.textContent = `${level} Level Test`;
    }

    const totalEl = document.getElementById('total-questions');
    if (totalEl) {
        totalEl.textContent = state.currentTest.length;
    }

    if (typeof showPage === 'function') {
        showPage('testSection');
    }

    renderQuestion();
}

function showUnitMenu(level, unit) {
    unitFlowState.level = level;
    unitFlowState.unit = unit;

    const unitName = document.getElementById('unit-name');
    if (unitName) {
        unitName.textContent = `${level} - Unit ${unit}`;
    }

    const grammarBtn = document.getElementById('unit-grammar');
    const vocabularyBtn = document.getElementById('unit-vocabulary');
    const writingBtn = document.getElementById('unit-writing');

    if (grammarBtn) grammarBtn.onclick = () => startUnitTest('grammar');
    if (vocabularyBtn) vocabularyBtn.onclick = () => startUnitTest('vocabulary');
    if (writingBtn) writingBtn.onclick = () => startUnitTest('writing');

    if (typeof pages === 'object' && !pages.unitMenuPage) {
        const pageElement = document.getElementById('unit-menu-page');
        if (pageElement) pages.unitMenuPage = pageElement;
    }

    if (typeof showPage === 'function' && pages.unitMenuPage) {
        showPage('unitMenuPage');
    } else {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.getElementById('unit-menu-page');
        if (target) target.classList.add('active');
        state.currentPage = 'unitMenuPage';
    }
}

function startUnitTest(type) {
    buildUnitQuestions();

    if (!unitFlowState.level || !unitFlowState.unit) return;

    const units = unitQuestions[unitFlowState.level] || [];
    const selectedUnit = units.find(item => item.unit === unitFlowState.unit);
    if (!selectedUnit || !selectedUnit[type]) return;

    unitFlowState.type = type;

    state.testMode = 'unit';
    state.testType = type;
    state.currentLevel = unitFlowState.level;
    state.currentUnit = unitFlowState.unit;
    state.currentTopic = {
        id: unitFlowState.unit,
        title: `${unitFlowState.level} Unit ${unitFlowState.unit}`
    };

    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    state.currentTest = selectedUnit[type].map(question => ({ ...question }));

    const typeName = type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById('test-topic').textContent = `${unitFlowState.level} Unit ${unitFlowState.unit} - ${typeName} Test`;
    document.getElementById('total-questions').textContent = state.currentTest.length;

    if (typeof showPage === 'function') {
        showPage('testSection');
    }

    renderQuestion();
}

const __originalRenderQuestion = renderQuestion;
renderQuestion = function renderQuestion() {
    __originalRenderQuestion();
};

const __originalNextQuestion = nextQuestion;
nextQuestion = function nextQuestion() {
    __originalNextQuestion();
};

const __originalPreviousQuestion = previousQuestion;
previousQuestion = function previousQuestion() {
    __originalPreviousQuestion();
};

const __originalFinishTest = finishTest;
finishTest = function finishTest() {
    if (state.testMode !== 'unit') {
        __originalFinishTest();
        return;
    }

    const totalQuestions = state.currentTest.length;
    const correctAnswers = state.userAnswers.filter(answer => answer && answer.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('total-answers').textContent = totalQuestions;
    document.getElementById('final-score').textContent = `${scorePercentage}%`;

    const grade = scorePercentage >= 90 ? 'Excellent' : scorePercentage >= 70 ? 'Good' : 'Try Again';
    const gradeEl = document.getElementById('score-grade');
    if (gradeEl) gradeEl.textContent = grade;

    const completedEl = document.getElementById('test-completed-message');
    if (completedEl) {
        const typeLabel = unitFlowState.type ? unitFlowState.type : state.testType;
        completedEl.textContent = `You've completed ${unitFlowState.level} Unit ${unitFlowState.unit} ${typeLabel} test.`;
    }

    const circle = document.querySelector('.score-circle-fill');
    if (circle) {
        const radius = 54;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (scorePercentage / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
    }

    const breakdownContent = document.getElementById('breakdown-content');
    if (breakdownContent) {
        breakdownContent.innerHTML = '';
        state.currentTest.forEach((question, index) => {
            const userAnswer = state.userAnswers[index];
            const isCorrect = userAnswer && userAnswer.isCorrect;
            const item = document.createElement('div');
            item.className = 'breakdown-item';
            item.innerHTML = `
                <div class="breakdown-question">Q${index + 1}: ${question.question.substring(0, 50)}...</div>
                <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? 'Correct' : 'Incorrect'}</div>
            `;
            breakdownContent.appendChild(item);
        });
    }

    if (typeof showPage === 'function') {
        showPage('resultsSection');
    } else {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.getElementById('results-section');
        if (target) target.classList.add('active');
        state.currentPage = 'resultsSection';
    }
};

(function () {
    buildUnitQuestions();

    document.addEventListener('click', event => {
        const retryBtn = event.target.closest('#retry-btn');
        if (retryBtn && state.testMode === 'level-mixed') {
            event.preventDefault();
            event.stopImmediatePropagation();
            startLevelMixedTest(state.currentLevel || unitFlowState.level);
            return;
        }

        if (retryBtn && state.testMode === 'unit') {
            event.preventDefault();
            event.stopImmediatePropagation();
            startUnitTest(unitFlowState.type || state.testType || 'grammar');
            return;
        }

        const newTestBtn = event.target.closest('#new-test-btn');
        if (newTestBtn && state.testMode === 'level-mixed') {
            event.preventDefault();
            event.stopImmediatePropagation();
            showLevelDetail(state.currentLevel || unitFlowState.level);
            return;
        }

        if (newTestBtn && state.testMode === 'unit') {
            event.preventDefault();
            event.stopImmediatePropagation();
            showUnitMenu(unitFlowState.level, unitFlowState.unit);
            return;
        }

        const backBtn = event.target.closest('.back-btn');
        if (backBtn) {
            const activePage = document.querySelector('.page.active');

            if (activePage && activePage.id === 'level-detail-page') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showPage('home');
                return;
            }

            if (activePage && activePage.id === 'unit-menu-page') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showLevelDetail(unitFlowState.level);
                return;
            }

            if (activePage && activePage.id === 'test-section' && state.testMode === 'unit') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showUnitMenu(unitFlowState.level, unitFlowState.unit);
                return;
            }

            if (activePage && activePage.id === 'test-section' && state.testMode === 'level-mixed') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showLevelDetail(state.currentLevel || unitFlowState.level);
                return;
            }

            if (activePage && activePage.id === 'results-section' && state.testMode === 'unit') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showUnitMenu(unitFlowState.level, unitFlowState.unit);
                return;
            }

            if (activePage && activePage.id === 'results-section' && state.testMode === 'level-mixed') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showLevelDetail(state.currentLevel || unitFlowState.level);
                return;
            }
        }

        const levelCard = event.target.closest('.level-card');
        if (!levelCard) return;

        event.preventDefault();
        event.stopImmediatePropagation();

        const level = levelCard.getAttribute('data-level') || (typeof getLevelFromCard === 'function' ? getLevelFromCard(levelCard) : null);
        if (!level) return;

        showLevelDetail(level);
    }, true);
})();
/* LOCK ALL UNITS EXCEPT FIRST */

document.addEventListener("DOMContentLoaded", function () {

    const observer = new MutationObserver(function () {

        const units = document.querySelectorAll("#units-container .topic-card");

        units.forEach((unit, index) => {

            if (index !== 0) {

                unit.classList.add("locked");

                unit.style.pointerEvents = "none";

            }

        });

    });

    const container = document.getElementById("units-container");

    if (container) {
        observer.observe(container, { childList: true });
    }

});
/* ============================= */
/* COMPLETE UNIT LOCK SYSTEM */
/* COPY THIS TO END OF script.js */
/* ============================= */


/*/* ============================= */
/* COMPLETE UNIT ONLY IF ALL 3 TESTS DONE */
/* ============================= */


/* SAVE COMPLETED TEST TYPE */

(function () {

    const originalFinishTest = window.finishTest;

    window.finishTest = function () {

        if (originalFinishTest) {
            originalFinishTest();
        }

        try {

            const total = Array.isArray(state.currentTest) ? state.currentTest.length : 0;

            const correct =
                Array.isArray(state.userAnswers)
                    ? state.userAnswers.filter(a => a && a.isCorrect).length
                    : 0;

            const score =
                total > 0 ? Math.round((correct / total) * 100) : 0;

            const level = unitFlowState && unitFlowState.level ? unitFlowState.level : null;
            const unit = unitFlowState && Number.isFinite(Number(unitFlowState.unit))
                ? Number(unitFlowState.unit)
                : null;
            const type = unitFlowState && typeof unitFlowState.type === 'string'
                ? unitFlowState.type.toLowerCase()
                : null;
            const validType = type === 'grammar' || type === 'vocabulary' || type === 'writing';

            if (state && state.testMode === 'unit' && score >= 60 && level && unit && validType) {

                localStorage.setItem(
                    level + "_unit_" + unit + "_" + type,
                    "done"
                );

            }

        } catch (e) {}

    };

})();



/* CHECK IF UNIT COMPLETED */

function isUnitCompleted(level, unit) {

    const grammar =
        localStorage.getItem(level + "_unit_" + unit + "_grammar");

    const vocabulary =
        localStorage.getItem(level + "_unit_" + unit + "_vocabulary");

    const writing =
        localStorage.getItem(level + "_unit_" + unit + "_writing");

    return grammar && vocabulary && writing;

}



/* LOCK / UNLOCK */

function applyUnitLocks() {

    const cards =
        document.querySelectorAll("#units-container .topic-card");

    const level = unitFlowState.level;

    cards.forEach((card, index) => {

        const unit = index + 1;

        if (unit === 1) {

            unlock(card);
            return;

        }

        if (isUnitCompleted(level, unit - 1)) {

            unlock(card);

        } else {

            lock(card);

        }

    });

}


function lock(card) {

    card.classList.add("locked");
    card.style.pointerEvents = "none";

}


function unlock(card) {

    card.classList.remove("locked");
    card.style.pointerEvents = "auto";

}



/* WATCH LOAD */

const observer =
    new MutationObserver(applyUnitLocks);

document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("units-container");

    if (container) {

        observer.observe(container, {

            childList: true

        });

    }

});


setInterval(applyUnitLocks, 1000);

/* ============================= */
/* STRICT UNIT PROGRESSION SAFE ADD-ON */
/* ============================= */

(function () {
    if (window.__strictUnitProgressionInstalled) return;
    window.__strictUnitProgressionInstalled = true;

    const REQUIRED_SCORE = 90;
    const TEST_TYPES = ["grammar", "vocabulary", "writing"];

    function logStrictProgressError(scope, error) {
        try {
            console.error("[strict-unit-progression] " + scope, error);
        } catch (_) {}
    }

    function getScoreStorageKey(level, unit, testType) {
        return level + "_unit_" + unit + "_" + testType + "_score";
    }

    function getCurrentLevelSafely() {
        try {
            if (typeof unitFlowState !== "undefined" && unitFlowState && unitFlowState.level) {
                return String(unitFlowState.level).trim();
            }
            if (typeof state !== "undefined" && state && state.currentLevel) {
                return String(state.currentLevel).trim();
            }
            const levelName = document.getElementById("level-name");
            if (levelName && levelName.textContent) {
                return String(levelName.textContent).trim();
            }
        } catch (error) {
            logStrictProgressError("getCurrentLevelSafely", error);
        }
        return "";
    }

    function getUnitNumberFromCardSafely(card, fallbackIndex) {
        try {
            const numberElement = card ? card.querySelector(".topic-number") : null;
            const parsed = Number(numberElement && numberElement.textContent ? numberElement.textContent.trim() : "");
            if (Number.isFinite(parsed) && parsed > 0) {
                return parsed;
            }
        } catch (error) {
            logStrictProgressError("getUnitNumberFromCardSafely", error);
        }
        return fallbackIndex + 1;
    }

    function hasPreviousUnitPassedStrictly(level, previousUnit) {
        try {
            return TEST_TYPES.every(type => {
                const rawScore = localStorage.getItem(getScoreStorageKey(level, previousUnit, type));
                if (rawScore === null) return false;
                const score = Number(rawScore);
                return Number.isFinite(score) && score >= REQUIRED_SCORE;
            });
        } catch (error) {
            logStrictProgressError("hasPreviousUnitPassedStrictly", error);
            return false;
        }
    }

    window.applyUnitLocksSafely = function applyUnitLocksSafely() {
        try {
            const cards = document.querySelectorAll("#units-container .topic-card");
            if (!cards.length) return;

            const level = getCurrentLevelSafely();
            if (!level) return;

            cards.forEach((card, index) => {
                const unitNumber = getUnitNumberFromCardSafely(card, index);
                const shouldUnlock = unitNumber === 1 || hasPreviousUnitPassedStrictly(level, unitNumber - 1);

                if (shouldUnlock) {
                    card.classList.remove("locked");
                    card.style.pointerEvents = "auto";
                } else {
                    card.classList.add("locked");
                    card.style.pointerEvents = "none";
                }
            });
        } catch (error) {
            logStrictProgressError("applyUnitLocksSafely", error);
        }
    };

    function saveCurrentUnitScoreSafely() {
        try {
            if (typeof state === "undefined" || !state) return;
            if (state.testMode && state.testMode !== "unit") return;

            const level = getCurrentLevelSafely();
            const unit =
                (typeof unitFlowState !== "undefined" && unitFlowState && unitFlowState.unit != null)
                    ? Number(unitFlowState.unit)
                    : Number(state.currentUnit);

            const typeRaw =
                (typeof unitFlowState !== "undefined" && unitFlowState && unitFlowState.type)
                    ? unitFlowState.type
                    : state.testType;

            const testType = String(typeRaw || "").trim().toLowerCase();

            if (!level || !Number.isFinite(unit) || unit < 1 || !TEST_TYPES.includes(testType)) return;

            const total = Array.isArray(state.currentTest) ? state.currentTest.length : 0;
            const answers = Array.isArray(state.userAnswers) ? state.userAnswers : [];
            if (total <= 0) return;

            const correct = answers.filter(answer => answer && answer.isCorrect).length;
            const score = Math.round((correct / total) * 100);

            localStorage.setItem(getScoreStorageKey(level, unit, testType), String(score));
        } catch (error) {
            logStrictProgressError("saveCurrentUnitScoreSafely", error);
        }
    }

    const originalFinishTest = window.finishTest;
    if (typeof originalFinishTest === "function" && !window.__strictUnitProgressionFinishWrapped) {
        window.finishTest = function () {
            const result = originalFinishTest.apply(this, arguments);
            saveCurrentUnitScoreSafely();
            if (typeof saveLevelMixedResultSafely === "function") {
                saveLevelMixedResultSafely();
            }
            window.applyUnitLocksSafely();
            return result;
        };
        window.__strictUnitProgressionFinishWrapped = true;
    } else if (typeof originalFinishTest !== "function") {
        logStrictProgressError("finishTestHook", new Error("window.finishTest is not a function"));
    }

    let strictLockObserver = null;
    let observedContainer = null;

    function bindStrictLockObserverSafely() {
        try {
            const container = document.getElementById("units-container");
            if (!container) return;

            if (strictLockObserver && observedContainer === container) return;

            if (strictLockObserver) {
                strictLockObserver.disconnect();
            }

            strictLockObserver = new MutationObserver(function () {
                window.applyUnitLocksSafely();
            });
            strictLockObserver.observe(container, { childList: true, subtree: true });
            observedContainer = container;
        } catch (error) {
            logStrictProgressError("bindStrictLockObserverSafely", error);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        bindStrictLockObserverSafely();
        window.applyUnitLocksSafely();
    });

    window.addEventListener("load", function () {
        bindStrictLockObserverSafely();
        window.applyUnitLocksSafely();
    });

    setInterval(function () {
        bindStrictLockObserverSafely();
        window.applyUnitLocksSafely();
    }, 1000);
})();

/* ============================= */
/* FORCE UNLOCK ALL UNITS (SAFE OVERRIDE) */
/* ============================= */
(function () {
    if (window.__forceUnlockAllUnitsInstalled) return;
    window.__forceUnlockAllUnitsInstalled = true;

    function unlockAllUnitsNow() {
        try {
            const cards = document.querySelectorAll("#units-container .topic-card");
            if (!cards.length) return;
            cards.forEach(function (card) {
                card.classList.remove("locked");
                card.style.pointerEvents = "auto";
            });
        } catch (_) {}
    }

    if (typeof window.lock === "function") {
        window.lock = function (card) {
            try {
                if (!card) return;
                card.classList.remove("locked");
                card.style.pointerEvents = "auto";
            } catch (_) {}
        };
    }

    if (typeof window.applyUnitLocks === "function") {
        const originalApplyUnitLocks = window.applyUnitLocks;
        window.applyUnitLocks = function () {
            const result = originalApplyUnitLocks.apply(this, arguments);
            unlockAllUnitsNow();
            return result;
        };
    }

    if (typeof window.applyUnitLocksSafely === "function") {
        const originalApplyUnitLocksSafely = window.applyUnitLocksSafely;
        window.applyUnitLocksSafely = function () {
            const result = originalApplyUnitLocksSafely.apply(this, arguments);
            unlockAllUnitsNow();
            return result;
        };
    }

    function bindUnlockObserver() {
        try {
            const container = document.getElementById("units-container");
            if (!container) return;
            const observer = new MutationObserver(function () {
                unlockAllUnitsNow();
            });
            observer.observe(container, { childList: true, subtree: true });
        } catch (_) {}
    }

    document.addEventListener("DOMContentLoaded", function () {
        bindUnlockObserver();
        unlockAllUnitsNow();
    });

    window.addEventListener("load", function () {
        bindUnlockObserver();
        unlockAllUnitsNow();
    });

    setInterval(unlockAllUnitsNow, 500);
})();
