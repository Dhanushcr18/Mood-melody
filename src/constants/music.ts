/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Song {
  id: string;
  name: string;
  artist: string;
  youtubeUrl?: string;
  duration: string;
  benefit: string;
  language: string;
}

export type Emotion = 'happy' | 'sad' | 'angry' | 'neutral';

export const MUSIC_DB: Record<Emotion, Song[]> = {
  "happy": [
    {
      "id": "h1",
      "name": "Happy",
      "artist": "Pharrell Williams",
      "youtubeUrl": "https://www.youtube.com/embed/ZbZSe6N_BXs",
      "duration": "3:53",
      "benefit": "Instantly boosts serotonin and encourages positive movement.",
      "language": "English"
    },
    {
      "id": "h2",
      "name": "Levitating",
      "artist": "Dua Lipa",
      "youtubeUrl": "https://www.youtube.com/embed/TUVcZfQe-Kw",
      "duration": "3:23",
      "benefit": "Disco-pop energy elevates mood and inspires carefree dancing.",
      "language": "English"
    },
    {
      "id": "h3",
      "name": "On My Way",
      "artist": "Alan Walker",
      "youtubeUrl": "https://www.youtube.com/embed/dhYOPzcsbGM",
      "duration": "3:13",
      "benefit": "Uplifting EDM build-ups create a sense of forward momentum and hope.",
      "language": "English"
    },
    {
      "id": "h4",
      "name": "Shape of You",
      "artist": "Ed Sheeran",
      "youtubeUrl": "https://www.youtube.com/embed/JGwWNGJdvx8",
      "duration": "3:53",
      "benefit": "Infectious rhythm and melodic hooks promote body movement and joy.",
      "language": "English"
    },
    {
      "id": "h5",
      "name": "Walking on Sunshine",
      "artist": "Katrina and the Waves",
      "youtubeUrl": "https://www.youtube.com/embed/iPUmE-tne5U",
      "duration": "3:58",
      "benefit": "Classic feel-good anthem that radiates pure happiness and optimism.",
      "language": "English"
    },
    {
      "id": "h6",
      "name": "Good as Hell",
      "artist": "Lizzo",
      "youtubeUrl": "https://www.youtube.com/embed/vuq-VAiW9kw",
      "duration": "2:39",
      "benefit": "Empowering self-love anthem that boosts confidence and positive self-image.",
      "language": "English"
    },
    {
      "id": "h7",
      "name": "Believer",
      "artist": "Imagine Dragons",
      "youtubeUrl": "https://www.youtube.com/embed/7wtfhZwyrcc",
      "duration": "3:24",
      "benefit": "Transforms adversity into strength with powerful motivational energy.",
      "language": "English"
    },
    {
      "id": "h8",
      "name": "Can't Stop the Feeling!",
      "artist": "Justin Timberlake",
      "youtubeUrl": "https://www.youtube.com/embed/ru0K8uYEZWw",
      "duration": "3:56",
      "benefit": "Irresistible groove triggers spontaneous joy and full-body movement.",
      "language": "English"
    },
    {
      "id": "h9",
      "name": "Uptown Funk",
      "artist": "Mark Ronson ft. Bruno Mars",
      "youtubeUrl": "https://www.youtube.com/embed/OPf0YbXqDm0",
      "duration": "4:30",
      "benefit": "High-energy funk creates an instant party atmosphere and lifts spirits.",
      "language": "English"
    },
    {
      "id": "h10",
      "name": "Shake It Off",
      "artist": "Taylor Swift",
      "youtubeUrl": "https://www.youtube.com/embed/nfWlot6h_JM",
      "duration": "3:39",
      "benefit": "Encourages letting go of negativity and embracing carefree self-expression.",
      "language": "English"
    },
    {
      "id": "h11",
      "name": "Don't Stop Me Now",
      "artist": "Queen",
      "youtubeUrl": "https://www.youtube.com/embed/HgzGwKwLmgM",
      "duration": "3:29",
      "benefit": "Relentless driving rhythm and harmonies for peak motivational energy.",
      "language": "English"
    },
    {
      "id": "h12",
      "name": "Here Comes the Sun",
      "artist": "The Beatles",
      "youtubeUrl": "https://www.youtube.com/embed/KQetemT1sWc",
      "duration": "3:05",
      "benefit": "Warm acoustic hopefulness that clears away lingering worries.",
      "language": "English"
    },
    {
      "id": "h13",
      "name": "Ilahi",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/JAnE6GZ66Wk",
      "duration": "3:48",
      "benefit": "Uplifting wanderlust vibes for mental freedom.",
      "language": "Hindi"
    },
    {
      "id": "h14",
      "name": "Jai Ho",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/xwwAVRyN2KY",
      "duration": "5:19",
      "benefit": "Victory-inducing grand arrangement.",
      "language": "Hindi"
    },
    {
      "id": "h15",
      "name": "Malhari",
      "artist": "Vishal Dadlani",
      "youtubeUrl": "https://www.youtube.com/embed/l_MyUGq7pgs",
      "duration": "4:05",
      "benefit": "Warrior-like energy and cinematic joy.",
      "language": "Hindi"
    },
    {
      "id": "h16",
      "name": "Gallan Goodiyan",
      "artist": "Yashita Sharma",
      "youtubeUrl": "https://www.youtube.com/embed/jCEdTq3j-0U",
      "duration": "4:57",
      "benefit": "Family-party warmth and communal joy.",
      "language": "Hindi"
    },
    {
      "id": "h17",
      "name": "Tum Se Hi",
      "artist": "Mohit Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/mt9xg0mmt28",
      "duration": "4:33",
      "benefit": "Romantic warmth that spreads gentle happiness.",
      "language": "Hindi"
    },
    {
      "id": "h18",
      "name": "Badtameez Dil",
      "artist": "Benny Dayal",
      "youtubeUrl": "https://www.youtube.com/embed/II2EO3Nw4m0",
      "duration": "4:12",
      "benefit": "Infectious dance beats that release physical tension.",
      "language": "Hindi"
    },
    {
      "id": "h19",
      "name": "London Thumakda",
      "artist": "Labh Janjua",
      "youtubeUrl": "https://www.youtube.com/embed/udra3Mfw2oo",
      "duration": "3:50",
      "benefit": "High-spirit Punjabi-beat celebration that lifts mood.",
      "language": "Hindi"
    },
    {
      "id": "h20",
      "name": "Balam Pichkari",
      "artist": "Arijit Singh & Shalmali Kholgade",
      "youtubeUrl": "https://www.youtube.com/embed/0WtRNGubWGA",
      "duration": "4:49",
      "benefit": "Playful energy and colorful rhythm for pure joy.",
      "language": "Hindi"
    },
    {
      "id": "h21",
      "name": "Ghungroo",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/qFkNATtc3mc",
      "duration": "5:02",
      "benefit": "Modern breezy dance groove for lighthearted mood.",
      "language": "Hindi"
    },
    {
      "id": "h22",
      "name": "Kar Gayi Chull",
      "artist": "Badshah",
      "youtubeUrl": "https://www.youtube.com/embed/Bea019pOw5w",
      "duration": "3:07",
      "benefit": "Party anthem with high-tempo bounce.",
      "language": "Hindi"
    },
    {
      "id": "h23",
      "name": "Mauja Hi Mauja",
      "artist": "Mika Singh",
      "youtubeUrl": "https://www.youtube.com/embed/PaDaoNnOQaM",
      "duration": "4:04",
      "benefit": "Pulsating Bhangra energy for active happiness.",
      "language": "Hindi"
    },
    {
      "id": "h24",
      "name": "Subah Subah",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/ZgTKmRPWMq4",
      "duration": "4:35",
      "benefit": "Fresh morning start vibes with optimistic acoustic feel.",
      "language": "Hindi"
    },
    {
      "id": "h25",
      "name": "Belageddu",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/LvlSPl8Y13g",
      "duration": "3:45",
      "benefit": "Fresh morning energy and joyful rhythm.",
      "language": "Kannada"
    },
    {
      "id": "h26",
      "name": "Karabuu",
      "artist": "Chandan Shetty",
      "youtubeUrl": "https://www.youtube.com/embed/hnj0qgMuDsI",
      "duration": "3:40",
      "benefit": "Playful Kannada groove that encourages lightness.",
      "language": "Kannada"
    },
    {
      "id": "h27",
      "name": "Mungaru Maleye",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/y7j4pOylYY8",
      "duration": "4:35",
      "benefit": "Fresh Kannada melody that opens emotional space.",
      "language": "Kannada"
    },
    {
      "id": "h28",
      "name": "Huttidare Kannada Nadalli",
      "artist": "Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/dSqQkqqq8fM",
      "duration": "4:24",
      "benefit": "Pride and classical celebratory energy that unites spirits.",
      "language": "Kannada"
    },
    {
      "id": "h29",
      "name": "Open The Bottle",
      "artist": "Chandan Shetty",
      "youtubeUrl": "https://www.youtube.com/embed/zJSP3I1lCco",
      "duration": "3:30",
      "benefit": "Upbeat electronic party track that promotes immediate movement.",
      "language": "Kannada"
    },
    {
      "id": "h30",
      "name": "Raajakumara Title Track",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/XNZ3-X_Yi9s",
      "duration": "4:10",
      "benefit": "Inspiring tribute with warm vocals that boost hope.",
      "language": "Kannada"
    },
    {
      "id": "h31",
      "name": "Chuttu Chuttu",
      "artist": "Ravindra Soragavi",
      "youtubeUrl": "https://www.youtube.com/embed/mK9C6wViwn4",
      "duration": "4:05",
      "benefit": "Extremely catchy folk-beat fusion that sparks active fun.",
      "language": "Kannada"
    },
    {
      "id": "h32",
      "name": "Yenammi Yenammi",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/chLTOMbgLO0",
      "duration": "4:15",
      "benefit": "Sweet local romantic bounce for easy happiness.",
      "language": "Kannada"
    },
    {
      "id": "h33",
      "name": "Appu Choose the Pippee",
      "artist": "Puneeth Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/cNf12BiUQu4",
      "duration": "3:50",
      "benefit": "Playful nostalgia and high-spirited child-like joy.",
      "language": "Kannada"
    },
    {
      "id": "h34",
      "name": "Dance Raja Dance",
      "artist": "Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/ecf7DWHrOCw",
      "duration": "4:18",
      "benefit": "Vintage high-energy dance track that raises heart rate and mood.",
      "language": "Kannada"
    },
    {
      "id": "h35",
      "name": "Salaam Rocky Bhai",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/AvsR4Jd6pXw",
      "duration": "3:44",
      "benefit": "Bold action anthem for instant empowerment.",
      "language": "Kannada"
    },
    {
      "id": "h36",
      "name": "Neene Neene",
      "artist": "Kunal Ganjawala",
      "youtubeUrl": "https://www.youtube.com/embed/FCAfwX5Tw9w",
      "duration": "4:42",
      "benefit": "Beautiful romantic melody that brings peaceful satisfaction.",
      "language": "Kannada"
    },
    {
      "id": "h37",
      "name": "Enjoy Enjaami",
      "artist": "Dhee ft. Arivu",
      "youtubeUrl": "https://www.youtube.com/embed/eYq7Wuz_69M",
      "duration": "4:43",
      "benefit": "Earth-grounded rhythm and ancestral joy.",
      "language": "Tamil"
    },
    {
      "id": "h38",
      "name": "Rowdy Baby",
      "artist": "Dhanush & Dhee",
      "youtubeUrl": "https://www.youtube.com/embed/vkJbCXP8ln4",
      "duration": "4:44",
      "benefit": "High-energy dance number that releases tension.",
      "language": "Tamil"
    },
    {
      "id": "h39",
      "name": "Vaathi Coming",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/fRD_3vJagxk",
      "duration": "3:50",
      "benefit": "Infectious heavy beats that compel you to move.",
      "language": "Tamil"
    },
    {
      "id": "h40",
      "name": "Why This Kolaveri Di",
      "artist": "Dhanush",
      "youtubeUrl": "https://www.youtube.com/embed/0nnAAP58Udg",
      "duration": "4:10",
      "benefit": "Lighthearted quirky humor that eases pressure.",
      "language": "Tamil"
    },
    {
      "id": "h41",
      "name": "Sodakku",
      "artist": "Anthony Daasan",
      "youtubeUrl": "https://www.youtube.com/embed/kH779-WfP5I",
      "duration": "3:56",
      "benefit": "Clap-driven folk energy that wakes up the senses.",
      "language": "Tamil"
    },
    {
      "id": "h42",
      "name": "Aaluma Doluma",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/2ogKpj5QuSY",
      "duration": "4:20",
      "benefit": "Fast-paced street beats for cathartic physical release.",
      "language": "Tamil"
    },
    {
      "id": "h43",
      "name": "Verithanam",
      "artist": "Vijay & A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/rtd_VveAEaI",
      "duration": "4:15",
      "benefit": "Motivational crowd energy that boosts self-assurance.",
      "language": "Tamil"
    },
    {
      "id": "h44",
      "name": "Single Pasanga",
      "artist": "Hip Hop Tamizha",
      "youtubeUrl": "https://www.youtube.com/embed/ybxt5dBVg5w",
      "duration": "4:02",
      "benefit": "Fun collegiate celebratory rhythm for active joy.",
      "language": "Tamil"
    },
    {
      "id": "h45",
      "name": "Arabic Kuthu",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/KUN5Uf9mObQ",
      "duration": "4:40",
      "benefit": "Frenetic global-beat fusion for peak endorphin release.",
      "language": "Tamil"
    },
    {
      "id": "h46",
      "name": "Rakita Rakita",
      "artist": "Dhanush",
      "youtubeUrl": "https://www.youtube.com/embed/5MFY3LO7r6M",
      "duration": "4:08",
      "benefit": "Carefree philosophy and syncopated dance beat.",
      "language": "Tamil"
    },
    {
      "id": "h47",
      "name": "Jalabulajangu",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/6KzeuDstzOY",
      "duration": "3:25",
      "benefit": "Playful party vibes to shake off bad days.",
      "language": "Tamil"
    },
    {
      "id": "h48",
      "name": "Pathala Pathala",
      "artist": "Kamal Haasan & Anirudh",
      "youtubeUrl": "https://www.youtube.com/embed/1OjZnGZjOA0",
      "duration": "3:31",
      "benefit": "Local folk-style joy with witty lyrics and high tempo.",
      "language": "Tamil"
    },
    {
      "id": "h49",
      "name": "Buttabomma",
      "artist": "Armaan Malik",
      "youtubeUrl": "https://www.youtube.com/embed/2mLDyZ1AsZE",
      "duration": "3:17",
      "benefit": "Light-hearted melody and sweet acoustic feel.",
      "language": "Telugu"
    },
    {
      "id": "h50",
      "name": "Samajavaragamana",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/tflQ33g6I8I",
      "duration": "3:49",
      "benefit": "Bright romantic flow that softens heaviness.",
      "language": "Telugu"
    },
    {
      "id": "h51",
      "name": "Srivalli",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/txHO7PLGE3o",
      "duration": "3:37",
      "benefit": "Romantic Telugu energy that brightens the day.",
      "language": "Telugu"
    },
    {
      "id": "h52",
      "name": "Ramuloo Ramulaa",
      "artist": "Anurag Kulkarni",
      "youtubeUrl": "https://www.youtube.com/embed/Bg8Yb9zGYyA",
      "duration": "4:12",
      "benefit": "Addictive brass and percussion beats for active dancing.",
      "language": "Telugu"
    },
    {
      "id": "h53",
      "name": "Mind Block",
      "artist": "Blaaze & Ranina Reddy",
      "youtubeUrl": "https://www.youtube.com/embed/J7Qf8bQRPuc",
      "duration": "4:25",
      "benefit": "Heavy mass beats for high-energy mood conversion.",
      "language": "Telugu"
    },
    {
      "id": "h54",
      "name": "Seeti Maar",
      "artist": "Jaspreet Jasz",
      "youtubeUrl": "https://www.youtube.com/embed/WLD0kUKybeE",
      "duration": "4:10",
      "benefit": "High-octane commercial dance beat that elevates spirits.",
      "language": "Telugu"
    },
    {
      "id": "h55",
      "name": "Oo Antava Oo Oo Antava",
      "artist": "Indravathi Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/u_wB6byrl5k",
      "duration": "3:43",
      "benefit": "Hypnotic slow-burn dance groove.",
      "language": "Telugu"
    },
    {
      "id": "h56",
      "name": "Saami Saami",
      "artist": "Mounika Yadav",
      "youtubeUrl": "https://www.youtube.com/embed/C70GJYVoZ4Y",
      "duration": "3:44",
      "benefit": "Infectious local folk cadence that induces happy movement.",
      "language": "Telugu"
    },
    {
      "id": "h57",
      "name": "Blockbuster",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/70Ym_4SpIBg",
      "duration": "5:05",
      "benefit": "Loud brass-led celebration for physical release.",
      "language": "Telugu"
    },
    {
      "id": "h58",
      "name": "Dhimthanaka",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/2h8vP4U7OZ4",
      "duration": "4:15",
      "benefit": "Rhythmic boost that celebrates small joys.",
      "language": "Telugu"
    },
    {
      "id": "h59",
      "name": "Naatu Naatu",
      "artist": "Rahul Sipligunj & Kaala Bhairava",
      "youtubeUrl": "https://www.youtube.com/embed/4_eEgJhsBMo",
      "duration": "3:36",
      "benefit": "Unstoppable Oscar-winning joy and historic energy.",
      "language": "Telugu"
    },
    {
      "id": "h60",
      "name": "Inkem Inkem Inkem Kaavaale",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/55-_bXQ3x4c",
      "duration": "4:26",
      "benefit": "Comforting romantic melody that calms while raising spirits.",
      "language": "Telugu"
    },
    {
      "id": "h61",
      "name": "Dynamite",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/gdZLi9oWNZg",
      "duration": "3:19",
      "benefit": "Pure pop joy and infectious dance energy.",
      "language": "Korean"
    },
    {
      "id": "h62",
      "name": "Permission to Dance",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/CuklIb9d3fI",
      "duration": "3:07",
      "benefit": "Open-hearted positivity that encourages movement.",
      "language": "Korean"
    },
    {
      "id": "h63",
      "name": "Celebrity",
      "artist": "IU",
      "youtubeUrl": "https://www.youtube.com/embed/0-q1KafFCLU",
      "duration": "3:15",
      "benefit": "Warm validation and pop lift for self-worth.",
      "language": "Korean"
    },
    {
      "id": "h64",
      "name": "Butter",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/WMweEpGlu_U",
      "duration": "2:44",
      "benefit": "Smooth synth-pop groove for effortless cool mood.",
      "language": "Korean"
    },
    {
      "id": "h65",
      "name": "Gangnam Style",
      "artist": "PSY",
      "youtubeUrl": "https://www.youtube.com/embed/9bZkp7q19f0",
      "duration": "3:39",
      "benefit": "Legendary comedic high-intensity dance release.",
      "language": "Korean"
    },
    {
      "id": "h66",
      "name": "Boy With Luv",
      "artist": "BTS ft. Halsey",
      "youtubeUrl": "https://www.youtube.com/embed/XsX3ATc3FbA",
      "duration": "3:49",
      "benefit": "Sweet, bright melody that inspires lightweight happiness.",
      "language": "Korean"
    },
    {
      "id": "h67",
      "name": "Love Scenario",
      "artist": "iKON",
      "youtubeUrl": "https://www.youtube.com/embed/vecSVX1QYbQ",
      "duration": "3:29",
      "benefit": "Easy acoustic bounce that lowers stress.",
      "language": "Korean"
    },
    {
      "id": "h68",
      "name": "Red Flavor",
      "artist": "Red Velvet",
      "youtubeUrl": "https://www.youtube.com/embed/WyiIGEHQP8o",
      "duration": "3:11",
      "benefit": "Fruity summer anthem that instantly wakes up the brain.",
      "language": "Korean"
    },
    {
      "id": "h69",
      "name": "Bboom Bboom",
      "artist": "MOMOLAND",
      "youtubeUrl": "https://www.youtube.com/embed/JQGRg8XBnB4",
      "duration": "3:28",
      "benefit": "Aggressive hook-driven brass pop for active dancing.",
      "language": "Korean"
    },
    {
      "id": "h70",
      "name": "As If It's Your Last",
      "artist": "BLACKPINK",
      "youtubeUrl": "https://www.youtube.com/embed/Amq-qlqbjYA",
      "duration": "3:33",
      "benefit": "Fast-paced retro-synth pop for high spirits.",
      "language": "Korean"
    },
    {
      "id": "h71",
      "name": "Lilac",
      "artist": "IU",
      "youtubeUrl": "https://www.youtube.com/embed/v7bnOxV4jAc",
      "duration": "3:34",
      "benefit": "Warm retro disco-pop that feels like spring.",
      "language": "Korean"
    },
    {
      "id": "h72",
      "name": "Cheer Up",
      "artist": "TWICE",
      "youtubeUrl": "https://www.youtube.com/embed/c7rCyll5AeY",
      "duration": "3:28",
      "benefit": "Cute high-energy motivational pop.",
      "language": "Korean"
    },
    {
      "id": "h73",
      "name": "Blue Bird",
      "artist": "Ikimono Gakari",
      "youtubeUrl": "https://www.youtube.com/embed/u2fSIRRmpYo",
      "duration": "3:36",
      "benefit": "Fast upward melody that sparks hopeful energy.",
      "language": "Japanese"
    },
    {
      "id": "h74",
      "name": "Koi",
      "artist": "Gen Hoshino",
      "youtubeUrl": "https://www.youtube.com/embed/jhOVib6nt_o",
      "duration": "4:11",
      "benefit": "Upbeat yet focused tempo for productive flow.",
      "language": "Japanese"
    },
    {
      "id": "h75",
      "name": "Gurenge",
      "artist": "LiSA",
      "youtubeUrl": "https://www.youtube.com/embed/x1FV6IrjZCY",
      "duration": "3:56",
      "benefit": "Epic anime rock that converts worry into raw power.",
      "language": "Japanese"
    },
    {
      "id": "h76",
      "name": "Sparkle",
      "artist": "RADWIMPS",
      "youtubeUrl": "https://www.youtube.com/embed/X6w5dKdfg-4",
      "duration": "6:49",
      "benefit": "Wide Japanese atmosphere for deep satisfaction.",
      "language": "Japanese"
    },
    {
      "id": "h77",
      "name": "Uchiage Hanabi",
      "artist": "DAOKO x Kenshi Yonezu",
      "youtubeUrl": "https://www.youtube.com/embed/Q_MYHJrH9Ek",
      "duration": "4:49",
      "benefit": "Cinematic electronic ballad that elevates the soul.",
      "language": "Japanese"
    },
    {
      "id": "h78",
      "name": "Kaikai Kitan",
      "artist": "Eve",
      "youtubeUrl": "https://www.youtube.com/embed/1tk1pqwrOys",
      "duration": "3:41",
      "benefit": "Intense rhythmic drive for high-energy focus.",
      "language": "Japanese"
    },
    {
      "id": "h79",
      "name": "Racing Into The Night",
      "artist": "YOASOBI",
      "youtubeUrl": "https://www.youtube.com/embed/sSrVGAKkpo4",
      "duration": "4:21",
      "benefit": "Supremely upbeat piano-driven J-pop.",
      "language": "Japanese"
    },
    {
      "id": "h80",
      "name": "Pretender",
      "artist": "Official HIGE DANDism",
      "youtubeUrl": "https://www.youtube.com/embed/TQ8WlA2GXbk",
      "duration": "5:26",
      "benefit": "Emotive rock ballad that releases romantic pressure.",
      "language": "Japanese"
    },
    {
      "id": "h81",
      "name": "Sugar Song and Bitter Step",
      "artist": "Unison Square Garden",
      "youtubeUrl": "https://www.youtube.com/embed/ERLEeGVWYxg",
      "duration": "4:14",
      "benefit": "Frenetic, complex bassline that sparks instant movement.",
      "language": "Japanese"
    },
    {
      "id": "h82",
      "name": "Heavy Rotation",
      "artist": "AKB48",
      "youtubeUrl": "https://www.youtube.com/embed/Sc5vgR154yA",
      "duration": "4:41",
      "benefit": "Unbridled J-pop idol energy for pure happiness.",
      "language": "Japanese"
    },
    {
      "id": "h83",
      "name": "Renai Circulation",
      "artist": "Kana Hanazawa",
      "youtubeUrl": "https://www.youtube.com/embed/Lph9ubW6hw8",
      "duration": "4:12",
      "benefit": "Gentle, cute rap that lowers anxiety and induces smiles.",
      "language": "Japanese"
    },
    {
      "id": "h84",
      "name": "Peace Sign",
      "artist": "Kenshi Yonezu",
      "youtubeUrl": "https://www.youtube.com/embed/9aJVr5tTTWk",
      "duration": "3:57",
      "benefit": "Motivational rock anthem for self-belief.",
      "language": "Japanese"
    },
    {
      "id": "h85",
      "name": "Vivir Mi Vida",
      "artist": "Marc Anthony",
      "youtubeUrl": "https://www.youtube.com/embed/HP-jE_m9A5o",
      "duration": "4:12",
      "benefit": "Powerful celebration of life and resilience.",
      "language": "Spanish"
    },
    {
      "id": "h86",
      "name": "Sofia",
      "artist": "Alvaro Soler",
      "youtubeUrl": "https://www.youtube.com/embed/qaZ0oAh4evU",
      "duration": "3:30",
      "benefit": "Easy Latin bounce that brightens mood without pressure.",
      "language": "Spanish"
    },
    {
      "id": "h87",
      "name": "La Bicicleta",
      "artist": "Carlos Vives & Shakira",
      "youtubeUrl": "https://www.youtube.com/embed/-UV0QGLmYys",
      "duration": "3:49",
      "benefit": "Sunny movement and playful rhythm for joyful release.",
      "language": "Spanish"
    },
    {
      "id": "h88",
      "name": "Despacito",
      "artist": "Luis Fonsi ft. Daddy Yankee",
      "youtubeUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
      "duration": "3:48",
      "benefit": "Global reggaeton groove that induces easy swaying.",
      "language": "Spanish"
    },
    {
      "id": "h89",
      "name": "Bailando",
      "artist": "Enrique Iglesias",
      "youtubeUrl": "https://www.youtube.com/embed/NUsoVlDFqZg",
      "duration": "4:03",
      "benefit": "Warm acoustic-pop Latin rhythm that lifts spirits.",
      "language": "Spanish"
    },
    {
      "id": "h90",
      "name": "Mi Gente",
      "artist": "J Balvin",
      "youtubeUrl": "https://www.youtube.com/embed/wnJ6LuUFpMo",
      "duration": "3:05",
      "benefit": "Heavy bass and repetitive beat for active body movement.",
      "language": "Spanish"
    },
    {
      "id": "h91",
      "name": "Limbo",
      "artist": "Daddy Yankee",
      "youtubeUrl": "https://www.youtube.com/embed/6BTjG-dhf5s",
      "duration": "3:44",
      "benefit": "Fast-paced carnival-style energy to boost stamina.",
      "language": "Spanish"
    },
    {
      "id": "h92",
      "name": "Waka Waka",
      "artist": "Shakira",
      "youtubeUrl": "https://www.youtube.com/embed/pRpeEdMmmQ0",
      "duration": "3:22",
      "benefit": "Universal rhythm and celebration of achievement.",
      "language": "Spanish"
    },
    {
      "id": "h93",
      "name": "Danza Kuduro",
      "artist": "Don Omar",
      "youtubeUrl": "https://www.youtube.com/embed/7zp1TbLFPp8",
      "duration": "3:19",
      "benefit": "Unstoppable dance energy that lifts all worries.",
      "language": "Spanish"
    },
    {
      "id": "h94",
      "name": "Echame La Culpa",
      "artist": "Luis Fonsi & Demi Lovato",
      "youtubeUrl": "https://www.youtube.com/embed/TyHvyGVs42U",
      "duration": "2:53",
      "benefit": "Playful bilingual duet for fun listening.",
      "language": "Spanish"
    },
    {
      "id": "h95",
      "name": "Chantaje",
      "artist": "Shakira ft. Maluma",
      "youtubeUrl": "https://www.youtube.com/embed/6Mgqbai3fKo",
      "duration": "3:15",
      "benefit": "Seductive dance tempo that elevates confidence.",
      "language": "Spanish"
    },
    {
      "id": "h96",
      "name": "La Camisa Negra",
      "artist": "Juanes",
      "youtubeUrl": "https://www.youtube.com/embed/kRt2sRyup6A",
      "duration": "3:36",
      "benefit": "Upbeat acoustic guitar pop with a catchy bounce.",
      "language": "Spanish"
    },
    {
      "id": "h97",
      "name": "Je veux",
      "artist": "Zaz",
      "youtubeUrl": "https://www.youtube.com/embed/Tm88QAI8I5A",
      "duration": "3:39",
      "benefit": "Lively French acoustic rhythm that celebrates simple life.",
      "language": "French"
    },
    {
      "id": "h98",
      "name": "Alors on Danse",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/VHoT4N43jK8",
      "duration": "3:26",
      "benefit": "Pulsing beat that redirects frustration into dance.",
      "language": "French"
    },
    {
      "id": "h99",
      "name": "On Ira",
      "artist": "Zaz",
      "youtubeUrl": "https://www.youtube.com/embed/8IjWHBGzsu4",
      "duration": "3:37",
      "benefit": "Bouncy French acoustic optimism for daily workflow.",
      "language": "French"
    },
    {
      "id": "h100",
      "name": "Tourner Dans Le Vide",
      "artist": "Indila",
      "youtubeUrl": "https://www.youtube.com/embed/vtNJMAyeP0s",
      "duration": "4:06",
      "benefit": "Dramatic waltz-pop that elevates mental focus.",
      "language": "French"
    },
    {
      "id": "h101",
      "name": "Papaoutai",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/oiKj0Z_Xnjc",
      "duration": "3:52",
      "benefit": "Heavy synth-pop beats that release physical energy.",
      "language": "French"
    },
    {
      "id": "h102",
      "name": "Bella",
      "artist": "Gims",
      "youtubeUrl": "https://www.youtube.com/embed/rMltoD1jCGI",
      "duration": "3:44",
      "benefit": "Latin-infused French hip-hop for bright mood.",
      "language": "French"
    },
    {
      "id": "h103",
      "name": "La Vie En Rose",
      "artist": "Edith Piaf",
      "youtubeUrl": "https://www.youtube.com/embed/rzeLynj1GYM",
      "duration": "3:07",
      "benefit": "Bittersweet classical romance that warms the heart.",
      "language": "French"
    },
    {
      "id": "h104",
      "name": "Dernière Danse",
      "artist": "Indila",
      "youtubeUrl": "https://www.youtube.com/embed/K5KAc5CoCuk",
      "duration": "3:33",
      "benefit": "Elegance and motion for emotional release.",
      "language": "French"
    },
    {
      "id": "h105",
      "name": "Ego",
      "artist": "Willy William",
      "youtubeUrl": "https://www.youtube.com/embed/iOxzG3jjFkY",
      "duration": "3:27",
      "benefit": "Catchy French electronic pop that gets you moving.",
      "language": "French"
    },
    {
      "id": "h106",
      "name": "Magic In The Air",
      "artist": "Magic System",
      "youtubeUrl": "https://www.youtube.com/embed/BAkqJT_sMKQ",
      "duration": "3:53",
      "benefit": "High-spirit soccer anthem for ultimate celebration.",
      "language": "French"
    },
    {
      "id": "h107",
      "name": "Bojhena Shey Bojhena",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/J2JQQm1h6xQ",
      "duration": "3:25",
      "benefit": "Tender Bengali pop that gently raises the mood.",
      "language": "Bengali"
    },
    {
      "id": "h108",
      "name": "Gotro (Rangabati)",
      "artist": "Dev Sen",
      "youtubeUrl": "https://www.youtube.com/embed/IU340-JBKA4",
      "duration": "4:10",
      "benefit": "Tribal-infused Bengali folk dance that sparks high joy.",
      "language": "Bengali"
    },
    {
      "id": "h109",
      "name": "Ami Je Tomar",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/FGNc3BibU3o",
      "duration": "4:45",
      "benefit": "Beautiful classical Indian melody that elevates the spirit.",
      "language": "Bengali"
    },
    {
      "id": "h110",
      "name": "Tumi Jaake Bhalo Baso",
      "artist": "Iman Chakraborty",
      "youtubeUrl": "https://www.youtube.com/embed/LkUqqoKB4rM",
      "duration": "4:22",
      "benefit": "Warm vocal performance that celebrates free love.",
      "language": "Bengali"
    },
    {
      "id": "h111",
      "name": "Mon Majhi Re",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/eORVpaICbzk",
      "duration": "4:10",
      "benefit": "Sweeping orchestration for romantic elevation.",
      "language": "Bengali"
    },
    {
      "id": "h112",
      "name": "Dhitang Dhitang Bole",
      "artist": "Hemanta Mukherjee",
      "youtubeUrl": "https://www.youtube.com/embed/xaKWd3a6o74",
      "duration": "3:05",
      "benefit": "Classic vintage folk rhythm that encourages lightheartedness.",
      "language": "Bengali"
    },
    {
      "id": "h113",
      "name": "Pagla Hawar Badol Dine",
      "artist": "Rabindrasangeet",
      "youtubeUrl": "https://www.youtube.com/embed/ygiG04U-8bs",
      "duration": "4:17",
      "benefit": "Windswept natural imagery that refreshes the soul.",
      "language": "Bengali"
    },
    {
      "id": "h114",
      "name": "Abar Hashibo Shonge",
      "artist": "Lalon Geeti",
      "youtubeUrl": "https://www.youtube.com/embed/4D2Ig5VaSvk",
      "duration": "3:50",
      "benefit": "Mystic Baul philosophy that brings spiritual peace.",
      "language": "Bengali"
    },
    {
      "id": "h115",
      "name": "Shada Shada Kala Kala",
      "artist": "Arfan Mredha Shiblu",
      "youtubeUrl": "https://www.youtube.com/embed/Eq_okYibcGc",
      "duration": "3:15",
      "benefit": "Catchy modern Bengali folk hit with acoustic energy.",
      "language": "Bengali"
    },
    {
      "id": "h116",
      "name": "O Tuni",
      "artist": "Bengali Folk",
      "youtubeUrl": "https://www.youtube.com/embed/4tAptYUbzIs",
      "duration": "3:30",
      "benefit": "Upbeat rural celebration of happiness.",
      "language": "Bengali"
    },
    {
      "id": "h117",
      "name": "Zingaat",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/I0T8t7rXp7I",
      "duration": "4:01",
      "benefit": "Unstoppable high-energy dance rhythm for physical release.",
      "language": "Marathi"
    },
    {
      "id": "h118",
      "name": "Sairat Zaala Ji",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/ZL3MnrnLLpo",
      "duration": "5:51",
      "benefit": "Expansive Marathi orchestration with cinematic joy.",
      "language": "Marathi"
    },
    {
      "id": "h119",
      "name": "Mala Ved Laagale",
      "artist": "Swapnil Bandodkar",
      "youtubeUrl": "https://www.youtube.com/embed/PdR2og6V3DM",
      "duration": "4:18",
      "benefit": "Buoyant Marathi romantic pulse for easy happiness.",
      "language": "Marathi"
    },
    {
      "id": "h120",
      "name": "Apsara Aali",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/a6iA2HgamOE",
      "duration": "5:10",
      "benefit": "Cinematic folk-pop with dramatic energy and elegance.",
      "language": "Marathi"
    },
    {
      "id": "h121",
      "name": "Bring It On",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/-a78xi3ag_Q",
      "duration": "4:05",
      "benefit": "Aggressive rock-orchestra theme for immediate motivation.",
      "language": "Marathi"
    },
    {
      "id": "h122",
      "name": "Khel Mandala",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/HY8Y_uqnVzU",
      "duration": "4:39",
      "benefit": "Deep spiritual Marathi build-up that releases anxiety.",
      "language": "Marathi"
    },
    {
      "id": "h123",
      "name": "Wajle Ki Bara",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/F7oFw0sXlyk",
      "duration": "4:15",
      "benefit": "Traditional Lavani dance rhythm that compels movement.",
      "language": "Marathi"
    },
    {
      "id": "h124",
      "name": "Dhagala Lagli Kala",
      "artist": "Dada Kondke",
      "youtubeUrl": "https://www.youtube.com/embed/X91b6cbtBnw",
      "duration": "3:40",
      "benefit": "Playful rain-themed vintage comedy track.",
      "language": "Marathi"
    },
    {
      "id": "h125",
      "name": "Kombdi Palali",
      "artist": "Anand Shinde",
      "youtubeUrl": "https://www.youtube.com/embed/2KaDL9TSja0",
      "duration": "4:02",
      "benefit": "The original fast-beat lavani party track.",
      "language": "Marathi"
    },
    {
      "id": "h126",
      "name": "Mauli Mauli",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/uWi5aOuSmN4",
      "duration": "4:07",
      "benefit": "Devotional power that generates collective euphoria.",
      "language": "Marathi"
    },
    {
      "id": "h127",
      "name": "Poove Poochudamathe",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/hUCgLI0U-9I",
      "duration": "4:07",
      "benefit": "Classic Malayalam melody spreading pure childhood joy.",
      "language": "Malayalam"
    },
    {
      "id": "h128",
      "name": "Malare",
      "artist": "Vijay Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/0G2VxhV_gXM",
      "duration": "4:28",
      "benefit": "Fresh romance that makes the heart flutter.",
      "language": "Malayalam"
    },
    {
      "id": "h129",
      "name": "Jhimikki Kammal",
      "artist": "Vineeth Sreenivasan",
      "youtubeUrl": "https://www.youtube.com/embed/FXiaIH49oAU",
      "duration": "3:20",
      "benefit": "Viral acoustic bounce that gets everyone laughing.",
      "language": "Malayalam"
    },
    {
      "id": "h130",
      "name": "Lajjavathiye",
      "artist": "Jassie Gift",
      "youtubeUrl": "https://www.youtube.com/embed/Tfi3oWgZp1Y",
      "duration": "4:45",
      "benefit": "High-energy Malayalam rap/fusion that breaks limits.",
      "language": "Malayalam"
    },
    {
      "id": "h131",
      "name": "Karutha Penne",
      "artist": "Malayalam Folk",
      "youtubeUrl": "https://www.youtube.com/embed/ppQPpShemEE",
      "duration": "3:50",
      "benefit": "Traditional high-tempo rural celebration.",
      "language": "Malayalam"
    },
    {
      "id": "h132",
      "name": "Appangal Embadum",
      "artist": "Anna Katharina Valayil",
      "youtubeUrl": "https://www.youtube.com/embed/QcESg-9Vfzo",
      "duration": "3:15",
      "benefit": "Electro-folk Malayalam track that drives happiness.",
      "language": "Malayalam"
    },
    {
      "id": "h133",
      "name": "Koodamela Koodaveci",
      "artist": "Malayalam Duet",
      "youtubeUrl": "https://www.youtube.com/embed/VpJDmKKz3yg",
      "duration": "4:02",
      "benefit": "Sweet acoustic long-distance connection vibes.",
      "language": "Malayalam"
    },
    {
      "id": "h134",
      "name": "Thudakkam Mangalyam",
      "artist": "Vijay Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/8rS5cSOmDiI",
      "duration": "4:15",
      "benefit": "Celebratory wedding track filled with dancing energy.",
      "language": "Malayalam"
    },
    {
      "id": "h135",
      "name": "Pistah",
      "artist": "Shabareesh Varma",
      "youtubeUrl": "https://www.youtube.com/embed/SuuypjzzqRw",
      "duration": "2:25",
      "benefit": "Nonsensical wordplay set to fast tempo for quick laugh.",
      "language": "Malayalam"
    },
    {
      "id": "h136",
      "name": "Kudamulla Poovum",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/VI9wv05Gvd0",
      "duration": "3:55",
      "benefit": "Soft traditional joy with a beautiful classical touch.",
      "language": "Malayalam"
    },
    {
      "id": "h137",
      "name": "Laung Laachi",
      "artist": "Mannat Noor",
      "youtubeUrl": "https://www.youtube.com/embed/ZCYlZzSbxwI",
      "duration": "3:47",
      "benefit": "Gentle Punjabi rhythm that celebrates simplicity.",
      "language": "Punjabi"
    },
    {
      "id": "h138",
      "name": "Naah",
      "artist": "Harrdy Sandhu",
      "youtubeUrl": "https://www.youtube.com/embed/8qs2dZO6wcc",
      "duration": "3:10",
      "benefit": "Infectious modern Punjabi pop and dance energy.",
      "language": "Punjabi"
    },
    {
      "id": "h139",
      "name": "High Rated Gabru",
      "artist": "Guru Randhawa",
      "youtubeUrl": "https://www.youtube.com/embed/hjWf8A0YNSE",
      "duration": "3:34",
      "benefit": "Urban Punjabi beats that boost confidence and joy.",
      "language": "Punjabi"
    },
    {
      "id": "h140",
      "name": "Kya Baat Ay",
      "artist": "Harrdy Sandhu",
      "youtubeUrl": "https://www.youtube.com/embed/G0Hx6uN2AJE",
      "duration": "3:18",
      "benefit": "Sleek electronic groove for stylish happiness.",
      "language": "Punjabi"
    },
    {
      "id": "h141",
      "name": "Lahore",
      "artist": "Guru Randhawa",
      "youtubeUrl": "https://www.youtube.com/embed/dZ0fwJojhrs",
      "duration": "3:17",
      "benefit": "Smooth pop melody that inspires feeling good.",
      "language": "Punjabi"
    },
    {
      "id": "h142",
      "name": "Proper Patola",
      "artist": "Diljit Dosanjh",
      "youtubeUrl": "https://www.youtube.com/embed/1OuB8s3GsZU",
      "duration": "3:00",
      "benefit": "Bold Punjabi swag and clean urban rhythm.",
      "language": "Punjabi"
    },
    {
      "id": "h143",
      "name": "3 Peg",
      "artist": "Sharry Mann",
      "youtubeUrl": "https://www.youtube.com/embed/hzTg4zPBtDU",
      "duration": "3:58",
      "benefit": "Communal party track with heavy dhol beats.",
      "language": "Punjabi"
    },
    {
      "id": "h144",
      "name": "Daku",
      "artist": "Chani Nattan",
      "youtubeUrl": "https://www.youtube.com/embed/WOdnRhWeHoY",
      "duration": "2:12",
      "benefit": "Modern drill beats that channel confident power.",
      "language": "Punjabi"
    },
    {
      "id": "h145",
      "name": "brown munde",
      "artist": "AP Dhillon",
      "youtubeUrl": "https://www.youtube.com/embed/ab-F3lRDqsc",
      "duration": "4:27",
      "benefit": "Smooth late-night hip-hop groove that relaxes and lifts.",
      "language": "Punjabi"
    },
    {
      "id": "h146",
      "name": "Coka",
      "artist": "Sukh-E",
      "youtubeUrl": "https://www.youtube.com/embed/7lWeQs8Firo",
      "duration": "3:15",
      "benefit": "High-tempo synth-heavy Punjabi party pop.",
      "language": "Punjabi"
    },
    {
      "id": "h147",
      "name": "Pasoori",
      "artist": "Ali Sethi & Shae Gill",
      "youtubeUrl": "https://www.youtube.com/embed/5Eqb_-j3FDA",
      "duration": "3:44",
      "benefit": "Eclectic global-beat fusion for carefree happiness.",
      "language": "Urdu"
    },
    {
      "id": "h148",
      "name": "Ko Ko Korina",
      "artist": "Ahmed Rushdi",
      "youtubeUrl": "https://www.youtube.com/embed/2egK7whteUA",
      "duration": "2:40",
      "benefit": "Vintage twist-dance rhythm that sparks nostalgia.",
      "language": "Urdu"
    },
    {
      "id": "h149",
      "name": "Dil Dil Pakistan",
      "artist": "Vital Signs",
      "youtubeUrl": "https://www.youtube.com/embed/eR_CV3Edxio",
      "duration": "4:15",
      "benefit": "Patriotic stadium-pop anthem for collective energy.",
      "language": "Urdu"
    },
    {
      "id": "h150",
      "name": "Tajdar-e-Haram",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/a18py61_F_w",
      "duration": "8:40",
      "benefit": "Spiritual Sufi connection that elevates the heart.",
      "language": "Urdu"
    },
    {
      "id": "h151",
      "name": "Afreen Afreen",
      "artist": "Rahat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/kw4tT7SCmaY",
      "duration": "5:45",
      "benefit": "Beautiful melodic praise that softens mental noise.",
      "language": "Urdu"
    },
    {
      "id": "h152",
      "name": "Disco Deewane",
      "artist": "Nazia Hassan",
      "youtubeUrl": "https://www.youtube.com/embed/QljTHgNSmHQ",
      "duration": "4:02",
      "benefit": "The original Pakistani disco pop that started it all.",
      "language": "Urdu"
    },
    {
      "id": "h153",
      "name": "Hawa Hawa",
      "artist": "Hassan Jahangir",
      "youtubeUrl": "https://www.youtube.com/embed/AM9GHysFs8s",
      "duration": "4:20",
      "benefit": "Quirky retro dance-pop with an unstoppable beat.",
      "language": "Urdu"
    },
    {
      "id": "h154",
      "name": "Larsha Pekhawar",
      "artist": "Ali Zafar",
      "youtubeUrl": "https://www.youtube.com/embed/lh6Ltp5Ew9k",
      "duration": "3:12",
      "benefit": "Pashto-infused Urdu folk bounce.",
      "language": "Urdu"
    },
    {
      "id": "h155",
      "name": "Laila O Laila",
      "artist": "Ali Zafar",
      "youtubeUrl": "https://www.youtube.com/embed/yYCFYoP7-OI",
      "duration": "3:20",
      "benefit": "Balochi-Urdu folk celebration of love and life.",
      "language": "Urdu"
    },
    {
      "id": "h156",
      "name": "Billo De Ghar",
      "artist": "Abrar-ul-Haq",
      "youtubeUrl": "https://www.youtube.com/embed/3vE5jcb4voY",
      "duration": "4:30",
      "benefit": "Classic high-tempo Punjabi-Urdu wedding dance.",
      "language": "Urdu"
    }
  ],
  "sad": [
    {
      "id": "s1",
      "name": "Fix You",
      "artist": "Coldplay",
      "youtubeUrl": "https://www.youtube.com/embed/k4V3Mo61fJM",
      "duration": "4:55",
      "benefit": "Validates feelings of loss while providing a sense of hope.",
      "language": "English"
    },
    {
      "id": "s2",
      "name": "Someone Like You",
      "artist": "Adele",
      "youtubeUrl": "https://www.youtube.com/embed/hLQl3WQQoQ0",
      "duration": "4:45",
      "benefit": "Powerful piano ballad for emotional processing.",
      "language": "English"
    },
    {
      "id": "s3",
      "name": "Stay with Me",
      "artist": "Sam Smith",
      "youtubeUrl": "https://www.youtube.com/embed/pB-5XG-DbAA",
      "duration": "2:52",
      "benefit": "Gospel-tinged ballad for lonely nights.",
      "language": "English"
    },
    {
      "id": "s4",
      "name": "All I Want",
      "artist": "Kodaline",
      "youtubeUrl": "https://www.youtube.com/embed/mtf7hC17IBM",
      "duration": "5:05",
      "benefit": "Gentle escalation for safe emotional release.",
      "language": "English"
    },
    {
      "id": "s5",
      "name": "Falling",
      "artist": "Harry Styles",
      "youtubeUrl": "https://www.youtube.com/embed/olGSAVOkkTI",
      "duration": "4:00",
      "benefit": "Tender vulnerability that helps sadness flow.",
      "language": "English"
    },
    {
      "id": "s6",
      "name": "Skinny Love",
      "artist": "Bon Iver",
      "youtubeUrl": "https://www.youtube.com/embed/Dz5s5C6sAt0",
      "duration": "3:59",
      "benefit": "Intimate acoustic pain that feels deeply understood.",
      "language": "English"
    },
    {
      "id": "s7",
      "name": "The Night We Met",
      "artist": "Lord Huron",
      "youtubeUrl": "https://www.youtube.com/embed/6iDpaWn5W3o",
      "duration": "3:28",
      "benefit": "Nostalgic ache that validates missing what was.",
      "language": "English"
    },
    {
      "id": "s8",
      "name": "Let Her Go",
      "artist": "Passenger",
      "youtubeUrl": "https://www.youtube.com/embed/RBumgq5yVrA",
      "duration": "4:12",
      "benefit": "Bittersweet folk ballad about appreciating love after loss.",
      "language": "English"
    },
    {
      "id": "s9",
      "name": "Say Something",
      "artist": "A Great Big World & Christina Aguilera",
      "youtubeUrl": "https://www.youtube.com/embed/-2U0Ivkn2Ds",
      "duration": "3:49",
      "benefit": "Sparse piano duo that gives space for grief to breathe.",
      "language": "English"
    },
    {
      "id": "s10",
      "name": "Hurt",
      "artist": "Johnny Cash",
      "youtubeUrl": "https://www.youtube.com/embed/8AHCfZTRGiI",
      "duration": "3:38",
      "benefit": "Raw reflection on regret and mortality that offers catharsis.",
      "language": "English"
    },
    {
      "id": "s11",
      "name": "Tears in Heaven",
      "artist": "Eric Clapton",
      "youtubeUrl": "https://www.youtube.com/embed/JxPj3GAYYZ0",
      "duration": "4:33",
      "benefit": "Gentle guitar elegy that soothes deep parental grief.",
      "language": "English"
    },
    {
      "id": "s12",
      "name": "Mad World",
      "artist": "Gary Jules",
      "youtubeUrl": "https://www.youtube.com/embed/etSbOs3aUqI",
      "duration": "3:08",
      "benefit": "Minimalist arrangement that mirrors the quiet weight of melancholy.",
      "language": "English"
    },
    {
      "id": "s13",
      "name": "Kabira",
      "artist": "Tochi Raina",
      "youtubeUrl": "https://www.youtube.com/embed/jHNNMj5bNQw",
      "duration": "3:43",
      "benefit": "Soothing sufi-fusion for reflection and letting go.",
      "language": "Hindi"
    },
    {
      "id": "s14",
      "name": "Agar Tum Saath Ho",
      "artist": "Alka Yagnik & Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/xRb8hxwN5zc",
      "duration": "5:41",
      "benefit": "Cathartic and relatable emotional journey through broken love.",
      "language": "Hindi"
    },
    {
      "id": "s15",
      "name": "Channa Mereya",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/284Ov7ysyzA",
      "duration": "4:49",
      "benefit": "The ultimate song for unrequited love and release.",
      "language": "Hindi"
    },
    {
      "id": "s16",
      "name": "Phir Le Aya Dil",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/UlacMvx_VYk",
      "duration": "4:46",
      "benefit": "Tender nostalgia that helps process lingering ache.",
      "language": "Hindi"
    },
    {
      "id": "s17",
      "name": "Tere Bina",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/4xeyG67Osg8",
      "duration": "6:17",
      "benefit": "Romantic longing that transforms sorrow into art.",
      "language": "Hindi"
    },
    {
      "id": "s18",
      "name": "Bekhayali",
      "artist": "Sachet Tandon",
      "youtubeUrl": "https://www.youtube.com/embed/VOLKJJvfAbg",
      "duration": "6:11",
      "benefit": "Intensely emotional modern ballad for processing heartbreak.",
      "language": "Hindi"
    },
    {
      "id": "s19",
      "name": "Tujhe Bhula Diya",
      "artist": "Mohit Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/MKZlsWXBXyk",
      "duration": "5:10",
      "benefit": "Melancholic melody for moving through the pain of separation.",
      "language": "Hindi"
    },
    {
      "id": "s20",
      "name": "Tum Hi Ho",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/IJq0yyWug1k",
      "duration": "4:22",
      "benefit": "Devotional love ballad that channels emotional dependence into beauty.",
      "language": "Hindi"
    },
    {
      "id": "s21",
      "name": "Ae Dil Hai Mushkil",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/uw1FRJauvtE",
      "duration": "4:29",
      "benefit": "Sweeping orchestration that gives shape to complicated heartache.",
      "language": "Hindi"
    },
    {
      "id": "s22",
      "name": "Tujhko Jo Paaya",
      "artist": "Mohit Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/7KhG5uAZKTw",
      "duration": "4:19",
      "benefit": "Bittersweet realization that what is found can also be lost.",
      "language": "Hindi"
    },
    {
      "id": "s23",
      "name": "Hamari Adhuri Kahani",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/f3FFOBrMmdg",
      "duration": "5:18",
      "benefit": "Speaks to incomplete love stories with deep empathy.",
      "language": "Hindi"
    },
    {
      "id": "s24",
      "name": "Tum Se Hi",
      "artist": "Mohit Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/mt9xg0mmt28",
      "duration": "4:32",
      "benefit": "Wistful romantic melody that comforts through shared longing.",
      "language": "Hindi"
    },
    {
      "id": "s25",
      "name": "Sanju Mattu Geetha",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/bR_qC0T_Q8Q",
      "duration": "4:20",
      "benefit": "Deeply emotive vocals for cathartic release.",
      "language": "Kannada"
    },
    {
      "id": "s26",
      "name": "Ninnindale",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/RB0M2mD6eAo",
      "duration": "4:27",
      "benefit": "Soft Kannada melody for reflective calm.",
      "language": "Kannada"
    },
    {
      "id": "s27",
      "name": "Maleyali Jotheyali",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/IOjVYwd-EII",
      "duration": "4:30",
      "benefit": "Rainy melody that mirrors tearful emotions with gentle beauty.",
      "language": "Kannada"
    },
    {
      "id": "s28",
      "name": "Yaarivanu Naa",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/4IXwJksqQRs",
      "duration": "4:45",
      "benefit": "Existential questioning set to soothing vocals for self-reflection.",
      "language": "Kannada"
    },
    {
      "id": "s29",
      "name": "Hrudayake Hedarike",
      "artist": "Sanjith Hegde",
      "youtubeUrl": "https://www.youtube.com/embed/bmLujBmJ04E",
      "duration": "3:55",
      "benefit": "Soft modern Kannada vocals for peaceful emotional processing.",
      "language": "Kannada"
    },
    {
      "id": "s30",
      "name": "Neene Neene",
      "artist": "Kunal Ganjawala",
      "youtubeUrl": "https://www.youtube.com/embed/FCAfwX5Tw9w",
      "duration": "4:42",
      "benefit": "Soothing melody from Aakash that supports gentle mourning.",
      "language": "Kannada"
    },
    {
      "id": "s31",
      "name": "Bombe Adsonu",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/CBZsKMdZ030",
      "duration": "4:10",
      "benefit": "Lullaby-like tenderness that cradles emotional fragility.",
      "language": "Kannada"
    },
    {
      "id": "s32",
      "name": "Jothe Jotheyali",
      "artist": "Armaan Malik",
      "youtubeUrl": "https://www.youtube.com/embed/hF-kSNhXVlQ",
      "duration": "4:05",
      "benefit": "Contemporary Kannada romance that channels longing into peace.",
      "language": "Kannada"
    },
    {
      "id": "s33",
      "name": "Chellata",
      "artist": "Rajesh Krishnan",
      "youtubeUrl": "https://www.youtube.com/embed/GO-77PoxzUQ",
      "duration": "4:35",
      "benefit": "Classic Kannada melody that gently holds nostalgic sorrow.",
      "language": "Kannada"
    },
    {
      "id": "s34",
      "name": "Barisu Kannada Dindimava",
      "artist": "Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/XMdxd1XNYio",
      "duration": "4:15",
      "benefit": "Patriotic melody with a bittersweet emotional undertone.",
      "language": "Kannada"
    },
    {
      "id": "s35",
      "name": "Kanasalu Neene",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/7CS11BGmP98",
      "duration": "4:18",
      "benefit": "Dreamy Kannada ballad that lets sadness dissolve gently.",
      "language": "Kannada"
    },
    {
      "id": "s36",
      "name": "Preethsod Thappa",
      "artist": "S. P. Balasubrahmanyam",
      "youtubeUrl": "https://www.youtube.com/embed/C-srzTSMFzw",
      "duration": "4:40",
      "benefit": "Classic Kannada emotional depth for processing love and loss.",
      "language": "Kannada"
    },
    {
      "id": "s37",
      "name": "Kannazhaga",
      "artist": "Dhanush & Shruti Haasan",
      "youtubeUrl": "https://www.youtube.com/embed/0tX2ck4Rmzk",
      "duration": "3:20",
      "benefit": "Soft, haunting melody for quiet moments of reflection.",
      "language": "Tamil"
    },
    {
      "id": "s38",
      "name": "Hosanna",
      "artist": "Leon D'Souza & Suzanne D'Mello",
      "youtubeUrl": "https://www.youtube.com/embed/dfNdRsNSFx4",
      "duration": "5:30",
      "benefit": "A bittersweet swell that supports emotional reflection.",
      "language": "Tamil"
    },
    {
      "id": "s39",
      "name": "Nenjukkul Peidhidum",
      "artist": "Harris Jayaraj & Hariharan",
      "youtubeUrl": "https://www.youtube.com/embed/FzLpP8VBC6E",
      "duration": "6:09",
      "benefit": "A rain-soaked Tamil melody for gentle emotional easing.",
      "language": "Tamil"
    },
    {
      "id": "s40",
      "name": "Ennai Konjam",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/q92qnqIMkZs",
      "duration": "4:21",
      "benefit": "Tender modern Tamil vocals that embrace vulnerability.",
      "language": "Tamil"
    },
    {
      "id": "s41",
      "name": "Unna Nenachu",
      "artist": "D. Imman & Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/jFWsj_QT0G8",
      "duration": "4:15",
      "benefit": "Heart-wrenching vocal delivery that validates deep longing.",
      "language": "Tamil"
    },
    {
      "id": "s42",
      "name": "Venmathi Venmathiye",
      "artist": "Bombay Jayashri",
      "youtubeUrl": "https://www.youtube.com/embed/PnV0RQ96XU4",
      "duration": "5:10",
      "benefit": "Moonlit melody that soothes nighttime emotional heaviness.",
      "language": "Tamil"
    },
    {
      "id": "s43",
      "name": "Oru Kadhal Devathai",
      "artist": "Karthik",
      "youtubeUrl": "https://www.youtube.com/embed/CLmeeeDFcdg",
      "duration": "5:02",
      "benefit": "Gentle Tamil ballad about lost love for emotional catharsis.",
      "language": "Tamil"
    },
    {
      "id": "s44",
      "name": "Idhazhin Oram",
      "artist": "Ajesh Ashok",
      "youtubeUrl": "https://www.youtube.com/embed/lZORMUufA_Y",
      "duration": "4:38",
      "benefit": "Achingly beautiful Tamil melody for processing separation.",
      "language": "Tamil"
    },
    {
      "id": "s45",
      "name": "Po Nee Po",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/5Y4FXI01HCA",
      "duration": "4:45",
      "benefit": "Modern Tamil vocal styling that captures bittersweet romance.",
      "language": "Tamil"
    },
    {
      "id": "s46",
      "name": "Aaromale",
      "artist": "Alphons Joseph",
      "youtubeUrl": "https://www.youtube.com/embed/q7OUFE3dw6E",
      "duration": "4:55",
      "benefit": "Hauntingly beautiful melody that cradles emotional wounds.",
      "language": "Tamil"
    },
    {
      "id": "s47",
      "name": "Kadhal En Kadhal",
      "artist": "Yuvan Shankar Raja",
      "youtubeUrl": "https://www.youtube.com/embed/5lzn95_gD3w",
      "duration": "4:30",
      "benefit": "Raw emotional Tamil expression for heartbreak processing.",
      "language": "Tamil"
    },
    {
      "id": "s48",
      "name": "Nee Paartha Vizhigal",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/_IuJsaMqtqc",
      "duration": "4:10",
      "benefit": "Eye-contact intimacy set to music for deep emotional resonance.",
      "language": "Tamil"
    },
    {
      "id": "s49",
      "name": "Priyathama Priyathama",
      "artist": "Chinmayi",
      "youtubeUrl": "https://www.youtube.com/embed/PlJ5A63tFP8",
      "duration": "4:07",
      "benefit": "Comforting Telugu softness for tender moments.",
      "language": "Telugu"
    },
    {
      "id": "s50",
      "name": "Ye Maaya Chesave",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/Wbs6pPJgBnA",
      "duration": "4:35",
      "benefit": "Dreamy Telugu melody about enchanting love and its ache.",
      "language": "Telugu"
    },
    {
      "id": "s51",
      "name": "Inkem Inkem Inkem Kaavaale",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/55-_bXQ3x4c",
      "duration": "4:26",
      "benefit": "Mellow Telugu melody that holds the listener in gentle sadness.",
      "language": "Telugu"
    },
    {
      "id": "s52",
      "name": "Nee Kallalona",
      "artist": "Haricharan",
      "youtubeUrl": "https://www.youtube.com/embed/BrrWNfjgHGs",
      "duration": "4:18",
      "benefit": "Romantic Telugu ballad that processes love-related grief.",
      "language": "Telugu"
    },
    {
      "id": "s53",
      "name": "Samajavaragamana",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/tflQ33g6I8I",
      "duration": "3:49",
      "benefit": "Classical-tinged Telugu melody with bittersweet romantic depth.",
      "language": "Telugu"
    },
    {
      "id": "s54",
      "name": "Nee Jathaga",
      "artist": "Karthik",
      "youtubeUrl": "https://www.youtube.com/embed/XJelQ8FUZ0o",
      "duration": "5:12",
      "benefit": "Soul-stirring Telugu song for when memories overwhelm.",
      "language": "Telugu"
    },
    {
      "id": "s55",
      "name": "Yedetthu Mallele",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/n9I4Ut3-RUs",
      "duration": "4:30",
      "benefit": "Tenderly woven Telugu vocals for emotional reflection.",
      "language": "Telugu"
    },
    {
      "id": "s56",
      "name": "Adiga Adiga",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/hJ4OL9NNeDY",
      "duration": "4:14",
      "benefit": "Heartfelt questioning that lets sadness speak its truth.",
      "language": "Telugu"
    },
    {
      "id": "s57",
      "name": "Emai Poyave",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/Eyx0Hvi1_Ng",
      "duration": "4:05",
      "benefit": "Modern Telugu heartbreak anthem for emotional validation.",
      "language": "Telugu"
    },
    {
      "id": "s58",
      "name": "Mounam Cheppum Alaga",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/RKD2QKbJgGU",
      "duration": "4:22",
      "benefit": "Silence-themed Telugu ballad that honors unspoken pain.",
      "language": "Telugu"
    },
    {
      "id": "s59",
      "name": "Cheliya Cheliya",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/VJXrADN5FhQ",
      "duration": "4:40",
      "benefit": "Warm Telugu female vocal that embraces sorrow with grace.",
      "language": "Telugu"
    },
    {
      "id": "s60",
      "name": "Nuvvunte Naa Jathaga",
      "artist": "Anand Aravindakshan",
      "youtubeUrl": "https://www.youtube.com/embed/Zc7SeDL-0uE",
      "duration": "4:33",
      "benefit": "Poetic Telugu ballad about love-dependent existence and loss.",
      "language": "Telugu"
    },
    {
      "id": "s61",
      "name": "Spring Day",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/xEeFrLSkMm8",
      "duration": "4:34",
      "benefit": "Gentle grief-processing with warmth and longing.",
      "language": "Korean"
    },
    {
      "id": "s62",
      "name": "Through the Night",
      "artist": "IU",
      "youtubeUrl": "https://www.youtube.com/embed/BzYnNdJhZQw",
      "duration": "4:13",
      "benefit": "Lullaby-like Korean ballad that soothes late-night sadness.",
      "language": "Korean"
    },
    {
      "id": "s63",
      "name": "Breathe",
      "artist": "Lee Hi",
      "youtubeUrl": "https://www.youtube.com/embed/5iSlfF8TQ9k",
      "duration": "3:31",
      "benefit": "Compassionate reassurance for those struggling to keep going.",
      "language": "Korean"
    },
    {
      "id": "s64",
      "name": "Eyes, Nose, Lips",
      "artist": "Taeyang",
      "youtubeUrl": "https://www.youtube.com/embed/UwuAPyOImoI",
      "duration": "4:24",
      "benefit": "Minimalist R&B heartbreak that validates emotional rawness.",
      "language": "Korean"
    },
    {
      "id": "s65",
      "name": "Lonely",
      "artist": "2NE1",
      "youtubeUrl": "https://www.youtube.com/embed/5n4V3lGEyG4",
      "duration": "3:23",
      "benefit": "Pop sadness that normalizes feeling alone in a crowd.",
      "language": "Korean"
    },
    {
      "id": "s66",
      "name": "Goodbye",
      "artist": "Park Hyo Shin",
      "youtubeUrl": "https://www.youtube.com/embed/Xp8Ep1W-azw",
      "duration": "4:45",
      "benefit": "Soaring Korean vocal that transforms farewell pain into beauty.",
      "language": "Korean"
    },
    {
      "id": "s67",
      "name": "Love Poem",
      "artist": "IU",
      "youtubeUrl": "https://www.youtube.com/embed/OcVmaIlHZ1o",
      "duration": "4:02",
      "benefit": "Poetic comfort for those enduring invisible emotional storms.",
      "language": "Korean"
    },
    {
      "id": "s68",
      "name": "Haru Haru",
      "artist": "BIGBANG",
      "youtubeUrl": "https://www.youtube.com/embed/MzCbEdtNbJ0",
      "duration": "4:23",
      "benefit": "Classic K-pop heartbreak anthem for processing daily grief.",
      "language": "Korean"
    },
    {
      "id": "s69",
      "name": "If You",
      "artist": "BIGBANG",
      "youtubeUrl": "https://www.youtube.com/embed/6dXLXNMy-n4",
      "duration": "3:50",
      "benefit": "Wistful ballad about what-ifs that eases regretful sadness.",
      "language": "Korean"
    },
    {
      "id": "s70",
      "name": "Lonely Night",
      "artist": "Kim Dong Ryul",
      "youtubeUrl": "https://www.youtube.com/embed/s3kgk65YIjA",
      "duration": "4:33",
      "benefit": "Veteran Korean singer-songwriter warmth for solitary evenings.",
      "language": "Korean"
    },
    {
      "id": "s71",
      "name": "I Need Somebody",
      "artist": "Day6",
      "youtubeUrl": "https://www.youtube.com/embed/j-TcFt2OVSw",
      "duration": "3:48",
      "benefit": "Band-driven emotional plea that validates the need for connection.",
      "language": "Korean"
    },
    {
      "id": "s72",
      "name": "Untitled, 2014",
      "artist": "G-Dragon",
      "youtubeUrl": "https://www.youtube.com/embed/9kaCAbIXuyg",
      "duration": "4:18",
      "benefit": "Stripped-back ballad revealing raw vulnerability beneath bravado.",
      "language": "Korean"
    },
    {
      "id": "s73",
      "name": "First Love",
      "artist": "Hikaru Utada",
      "youtubeUrl": "https://www.youtube.com/embed/o1sUaV6n7yQ",
      "duration": "4:17",
      "benefit": "Melancholic piano and legendary vocal tone for gentle crying.",
      "language": "Japanese"
    },
    {
      "id": "s74",
      "name": "Lemon",
      "artist": "Kenshi Yonezu",
      "youtubeUrl": "https://www.youtube.com/embed/SX_ViT4Ra7k",
      "duration": "4:16",
      "benefit": "A reflective Japanese ballad for grief and emotional release.",
      "language": "Japanese"
    },
    {
      "id": "s75",
      "name": "Nandemonaiya",
      "artist": "RADWIMPS",
      "youtubeUrl": "https://www.youtube.com/embed/n89SKAymNfA",
      "duration": "5:44",
      "benefit": "Soft reflective pacing from Your Name for gentle melancholy.",
      "language": "Japanese"
    },
    {
      "id": "s76",
      "name": "Sparkle",
      "artist": "RADWIMPS",
      "youtubeUrl": "https://www.youtube.com/embed/X6w5dKdfg-4",
      "duration": "8:54",
      "benefit": "Expansive soundscape that mirrors the vastness of longing.",
      "language": "Japanese"
    },
    {
      "id": "s77",
      "name": "Sakura",
      "artist": "Ikimono Gakari",
      "youtubeUrl": "https://www.youtube.com/embed/61z-cqg28R8",
      "duration": "5:30",
      "benefit": "Cherry blossom farewell theme that honors seasonal grief.",
      "language": "Japanese"
    },
    {
      "id": "s78",
      "name": "One More Time, One More Chance",
      "artist": "Masayoshi Yamazaki",
      "youtubeUrl": "https://www.youtube.com/embed/BqFftJDXii0",
      "duration": "5:32",
      "benefit": "Yearning vocal that gives space to wish for second chances.",
      "language": "Japanese"
    },
    {
      "id": "s79",
      "name": "Hanataba wo Kimi ni",
      "artist": "Hikaru Utada",
      "youtubeUrl": "https://www.youtube.com/embed/yCZFof7Y0tQ",
      "duration": "4:43",
      "benefit": "A bouquet of emotions dedicated to a departed loved one.",
      "language": "Japanese"
    },
    {
      "id": "s80",
      "name": "Kawaranai Mono",
      "artist": "Oku Hanako",
      "youtubeUrl": "https://www.youtube.com/embed/I2GlOVUP8WM",
      "duration": "5:04",
      "benefit": "Piano-driven ballad about unchanging feelings after change.",
      "language": "Japanese"
    },
    {
      "id": "s81",
      "name": "Snow Flower",
      "artist": "Mika Nakashima",
      "youtubeUrl": "https://www.youtube.com/embed/mF5Qq2YheTg",
      "duration": "5:10",
      "benefit": "Winter imagery woven with vocal warmth for cold-weather sadness.",
      "language": "Japanese"
    },
    {
      "id": "s82",
      "name": "M",
      "artist": "Princess Princess",
      "youtubeUrl": "https://www.youtube.com/embed/rzfLx6TVCv0",
      "duration": "5:00",
      "benefit": "Classic J-rock ballad about remembering love with tender ache.",
      "language": "Japanese"
    },
    {
      "id": "s83",
      "name": "Ito",
      "artist": "Miyuki Nakajima",
      "youtubeUrl": "https://www.youtube.com/embed/VI8zQG-yMMI",
      "duration": "5:00",
      "benefit": "Timeless Japanese ballad about threads of fate and connection.",
      "language": "Japanese"
    },
    {
      "id": "s84",
      "name": "Planetarium",
      "artist": "Ai Otsuka",
      "youtubeUrl": "https://www.youtube.com/embed/t6xdg6TKbyQ",
      "duration": "5:11",
      "benefit": "Stargazing melody that comforts with cosmic perspective on loss.",
      "language": "Japanese"
    },
    {
      "id": "s85",
      "name": "Recuérdame",
      "artist": "Carlos Rivera",
      "youtubeUrl": "https://www.youtube.com/embed/cfzmjgpx-VE",
      "duration": "3:18",
      "benefit": "Tender lullaby about remembrance that eases grief with love.",
      "language": "Spanish"
    },
    {
      "id": "s86",
      "name": "Darte un Beso",
      "artist": "Prince Royce",
      "youtubeUrl": "https://www.youtube.com/embed/bdOXnTbyk0g",
      "duration": "3:40",
      "benefit": "Gentle bachata longing that softens romantic sorrow.",
      "language": "Spanish"
    },
    {
      "id": "s87",
      "name": "Te Robaré",
      "artist": "Nicky Jam",
      "youtubeUrl": "https://www.youtube.com/embed/aA_kuFTV-P8",
      "duration": "3:43",
      "benefit": "Bittersweet Spanish pop for processing love-related sadness.",
      "language": "Spanish"
    },
    {
      "id": "s88",
      "name": "Cómo Te Extraño",
      "artist": "Leo Dan",
      "youtubeUrl": "https://www.youtube.com/embed/o85DM3bwiwg",
      "duration": "2:50",
      "benefit": "Classic Latin American ballad that validates the ache of missing someone.",
      "language": "Spanish"
    },
    {
      "id": "s89",
      "name": "Si Tú No Estás Aquí",
      "artist": "Rosana",
      "youtubeUrl": "https://www.youtube.com/embed/sKoK3XnTd3g",
      "duration": "4:18",
      "benefit": "Powerful Spanish vocal expressing absence with raw honesty.",
      "language": "Spanish"
    },
    {
      "id": "s90",
      "name": "Puedo Escribir",
      "artist": "Natalia Lafourcade",
      "youtubeUrl": "https://www.youtube.com/embed/aa3O7BbCv5M",
      "duration": "3:32",
      "benefit": "Poetic Mexican folk ballad inspired by Neruda for literary grief.",
      "language": "Spanish"
    },
    {
      "id": "s91",
      "name": "Un Year",
      "artist": "Sebastián Yatra & Reik",
      "youtubeUrl": "https://www.youtube.com/embed/ghAvJMxE1qo",
      "duration": "3:36",
      "benefit": "Modern Latin pop about a year of pain after a breakup.",
      "language": "Spanish"
    },
    {
      "id": "s92",
      "name": "Inevitable",
      "artist": "Shakira",
      "youtubeUrl": "https://www.youtube.com/embed/nYbcVK2jjXc",
      "duration": "3:10",
      "benefit": "Intimate acoustic Shakira revealing vulnerability beneath stardom.",
      "language": "Spanish"
    },
    {
      "id": "s93",
      "name": "Fotografía",
      "artist": "Juanes & Nelly Furtado",
      "youtubeUrl": "https://www.youtube.com/embed/flr8vDQ9Wuc",
      "duration": "4:10",
      "benefit": "Bilingual long-distance love song that honors separation pain.",
      "language": "Spanish"
    },
    {
      "id": "s94",
      "name": "La Bilirrubina",
      "artist": "Juan Luis Guerra",
      "youtubeUrl": "https://www.youtube.com/embed/McV4pBRb-Sg",
      "duration": "4:15",
      "benefit": "Merengue-tinged lovesickness expressed with poetic Caribbean soul.",
      "language": "Spanish"
    },
    {
      "id": "s95",
      "name": "Amiga Mía",
      "artist": "Alejandro Sanz",
      "youtubeUrl": "https://www.youtube.com/embed/YwMNY_6smXQ",
      "duration": "4:38",
      "benefit": "A friend witnessing heartbreak — validates pain through empathy.",
      "language": "Spanish"
    },
    {
      "id": "s96",
      "name": "Cielito Lindo",
      "artist": "Pedro Infante",
      "youtubeUrl": "https://www.youtube.com/embed/UMuWG0JV9b0",
      "duration": "3:25",
      "benefit": "Bittersweet Mexican classic that finds beauty within sadness.",
      "language": "Spanish"
    },
    {
      "id": "s97",
      "name": "Ne Me Quitte Pas",
      "artist": "Jacques Brel",
      "youtubeUrl": "https://www.youtube.com/embed/0k63grkip5I",
      "duration": "3:49",
      "benefit": "Classic vulnerability that meets sadness with raw honesty.",
      "language": "French"
    },
    {
      "id": "s98",
      "name": "Dernière Danse",
      "artist": "Indila",
      "youtubeUrl": "https://www.youtube.com/embed/K5KAc5CoCuk",
      "duration": "3:33",
      "benefit": "Melancholy elegance that supports safe catharsis.",
      "language": "French"
    },
    {
      "id": "s99",
      "name": "Je Suis Malade",
      "artist": "Serge Lama",
      "youtubeUrl": "https://www.youtube.com/embed/HDbpZpm9j9c",
      "duration": "4:45",
      "benefit": "Dramatic French chanson about lovesickness as physical illness.",
      "language": "French"
    },
    {
      "id": "s100",
      "name": "La Vie en Rose",
      "artist": "Édith Piaf",
      "youtubeUrl": "https://www.youtube.com/embed/rzeLynj1GYM",
      "duration": "3:07",
      "benefit": "Bittersweet nostalgia for a rosy past that gently holds grief.",
      "language": "French"
    },
    {
      "id": "s101",
      "name": "Formidable",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/S_xH7noaqTA",
      "duration": "3:28",
      "benefit": "Drunk heartbreak confessional that normalizes messy sadness.",
      "language": "French"
    },
    {
      "id": "s102",
      "name": "Comme Toi",
      "artist": "Jean-Jacques Goldman",
      "youtubeUrl": "https://www.youtube.com/embed/ySZBnMukO8g",
      "duration": "3:40",
      "benefit": "Tender narrative about lost innocence that invites compassionate tears.",
      "language": "French"
    },
    {
      "id": "s103",
      "name": "L'Hymne à l'Amour",
      "artist": "Édith Piaf",
      "youtubeUrl": "https://www.youtube.com/embed/QYgVDXUIAuo",
      "duration": "3:30",
      "benefit": "Transcendent declaration of love beyond death for deep emotional release.",
      "language": "French"
    },
    {
      "id": "s104",
      "name": "Papaoutai",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/oiKj0Z_Xnjc",
      "duration": "3:52",
      "benefit": "Searching for an absent father — channels abandonment grief.",
      "language": "French"
    },
    {
      "id": "s105",
      "name": "SOS d'un Terrien en Détresse",
      "artist": "Daniel Balavoine",
      "youtubeUrl": "https://www.youtube.com/embed/9kZuDhuTkxE",
      "duration": "4:08",
      "benefit": "Existential cry for help wrapped in soaring French pop.",
      "language": "French"
    },
    {
      "id": "s106",
      "name": "Tout Doucement",
      "artist": "Bibi",
      "youtubeUrl": "https://www.youtube.com/embed/lRYZEn_o7dQ",
      "duration": "3:15",
      "benefit": "Gentle French R&B whisper for soft emotional processing.",
      "language": "French"
    },
    {
      "id": "s107",
      "name": "Tomay Hrid Majhare",
      "artist": "Animesh Roy",
      "youtubeUrl": "https://www.youtube.com/embed/YI6q66zI01Y",
      "duration": "4:00",
      "benefit": "Soulful folk melody connecting directly to the heart.",
      "language": "Bengali"
    },
    {
      "id": "s108",
      "name": "Amake Amar Moto Thakte Dao",
      "artist": "Anupam Roy",
      "youtubeUrl": "https://www.youtube.com/embed/vYsfSlEBh5Y",
      "duration": "5:20",
      "benefit": "Creates space for grief and radical self-acceptance.",
      "language": "Bengali"
    },
    {
      "id": "s109",
      "name": "Tomake Chai",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/1f18irP--O8",
      "duration": "4:16",
      "benefit": "Soft Bengali longing that helps difficult feelings move.",
      "language": "Bengali"
    },
    {
      "id": "s110",
      "name": "Pagla Hawar Badol Dine",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/yn9Pnp1m650",
      "duration": "4:17",
      "benefit": "Bengali lyricism about stormy days that mirrors inner turmoil.",
      "language": "Bengali"
    },
    {
      "id": "s111",
      "name": "Bolte Bolte Cholte Cholte",
      "artist": "Imran Mahmudul",
      "youtubeUrl": "https://www.youtube.com/embed/1xj4uxbf5qo",
      "duration": "4:30",
      "benefit": "Popular Bengali heartbreak song that validates walking away in pain.",
      "language": "Bengali"
    },
    {
      "id": "s112",
      "name": "Tumi Robe Nirobe",
      "artist": "Rabindranath Tagore (Various)",
      "youtubeUrl": "https://www.youtube.com/embed/FN5g9etOk4Y",
      "duration": "4:50",
      "benefit": "Tagore's timeless poetry about silent companionship and loss.",
      "language": "Bengali"
    },
    {
      "id": "s113",
      "name": "Bojhena Shey Bojhena",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/J2JQQm1h6xQ",
      "duration": "3:25",
      "benefit": "The pain of being misunderstood expressed through tender Bengali vocals.",
      "language": "Bengali"
    },
    {
      "id": "s114",
      "name": "Ami Je Tomar",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/FGNc3BibU3o",
      "duration": "4:45",
      "benefit": "Bengali devotional love song that transforms longing into surrender.",
      "language": "Bengali"
    },
    {
      "id": "s115",
      "name": "Mon Majhi Re",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/eORVpaICbzk",
      "duration": "4:10",
      "benefit": "A sailor metaphor for the heart adrift in sadness.",
      "language": "Bengali"
    },
    {
      "id": "s116",
      "name": "Ekhon Onek Raat",
      "artist": "Anupam Roy",
      "youtubeUrl": "https://www.youtube.com/embed/0Xo4LjJ527Q",
      "duration": "4:38",
      "benefit": "Late-night Bengali reflection that holds loneliness with care.",
      "language": "Bengali"
    },
    {
      "id": "s117",
      "name": "Jeev Rangla",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/en60_iC0u2M",
      "duration": "4:39",
      "benefit": "Deep Marathi feeling that supports heartfelt emotional release.",
      "language": "Marathi"
    },
    {
      "id": "s118",
      "name": "Mala Ved Laagale",
      "artist": "Swapnil Bandodkar",
      "youtubeUrl": "https://www.youtube.com/embed/PdR2og6V3DM",
      "duration": "4:18",
      "benefit": "Tender Marathi ballad about the madness of love and its pain.",
      "language": "Marathi"
    },
    {
      "id": "s119",
      "name": "Dev Manus",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/SslPVXT2y9I",
      "duration": "4:25",
      "benefit": "Poignant Marathi reflection on human goodness and its fragility.",
      "language": "Marathi"
    },
    {
      "id": "s120",
      "name": "Man Udhan Varyache",
      "artist": "Shankar Mahadevan",
      "youtubeUrl": "https://www.youtube.com/embed/XZogVSlBB34",
      "duration": "4:40",
      "benefit": "A breeze-like Marathi melody for processing wistful emotions.",
      "language": "Marathi"
    },
    {
      "id": "s121",
      "name": "Jiv Ha Sang Na",
      "artist": "Atul Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/E6qcW9XPThw",
      "duration": "4:50",
      "benefit": "Explores the heart's inability to express pain — deeply healing.",
      "language": "Marathi"
    },
    {
      "id": "s122",
      "name": "Tu Mala Mi Tula",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/EdoqnBLbwfM",
      "duration": "4:30",
      "benefit": "Warm Marathi duet about mutual emotional dependency and its grief.",
      "language": "Marathi"
    },
    {
      "id": "s123",
      "name": "Sairat Zaala Ji",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/ZL3MnrnLLpo",
      "duration": "5:51",
      "benefit": "Expansive Marathi melody with underlying bittersweet emotion.",
      "language": "Marathi"
    },
    {
      "id": "s124",
      "name": "Zara Zara",
      "artist": "Bombay Jayashri",
      "youtubeUrl": "https://www.youtube.com/embed/sjij_VKa2QQ",
      "duration": "5:46",
      "benefit": "Iconic ballad of gentle romantic ache and wistful beauty.",
      "language": "Marathi"
    },
    {
      "id": "s125",
      "name": "Hi Chal Turu Turu",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/L-7IgNmh25s",
      "duration": "4:05",
      "benefit": "Nostalgic Marathi melody that gently holds childhood memories.",
      "language": "Marathi"
    },
    {
      "id": "s126",
      "name": "Apsara Aali",
      "artist": "Bela Shende & Vishal Dadlani",
      "youtubeUrl": "https://www.youtube.com/embed/HGPnwOToZ6M",
      "duration": "5:10",
      "benefit": "Emotionally charged Marathi celebration with an undercurrent of longing.",
      "language": "Marathi"
    },
    {
      "id": "s127",
      "name": "Aaromale",
      "artist": "Alphons Joseph",
      "youtubeUrl": "https://www.youtube.com/embed/q7OUFE3dw6E",
      "duration": "4:55",
      "benefit": "Hauntingly beautiful melody that cradles emotional wounds.",
      "language": "Malayalam"
    },
    {
      "id": "s128",
      "name": "Malare",
      "artist": "Vijay Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/0G2VxhV_gXM",
      "duration": "4:28",
      "benefit": "Pristine Malayalam vocal purity that lets sorrow bloom like a flower.",
      "language": "Malayalam"
    },
    {
      "id": "s129",
      "name": "Kaathirunnu Kaathirunnu",
      "artist": "K. J. Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/qycMVIrlO5s",
      "duration": "4:45",
      "benefit": "Classic Malayalam waiting song that honors the patience of grief.",
      "language": "Malayalam"
    },
    {
      "id": "s130",
      "name": "Pularumo",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/bPvuA2EmILs",
      "duration": "4:10",
      "benefit": "Dawn-themed Malayalam melody questioning whether morning will come.",
      "language": "Malayalam"
    },
    {
      "id": "s131",
      "name": "Etho Varmukilin",
      "artist": "K. J. Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/ibGZ1Q2MDaI",
      "duration": "4:35",
      "benefit": "Cloud imagery in Malayalam for gentle monsoon-like emotional release.",
      "language": "Malayalam"
    },
    {
      "id": "s132",
      "name": "Ennu Ninte Moideen",
      "artist": "Haricharan",
      "youtubeUrl": "https://www.youtube.com/embed/graP-a1MxN4",
      "duration": "4:20",
      "benefit": "Tragic love story theme that honors devotion beyond separation.",
      "language": "Malayalam"
    },
    {
      "id": "s133",
      "name": "Aayiram Kannumai",
      "artist": "Vineeth Sreenivasan",
      "youtubeUrl": "https://www.youtube.com/embed/IcTHBfdXILQ",
      "duration": "4:05",
      "benefit": "Contemporary Malayalam melody about eyes that have seen too much pain.",
      "language": "Malayalam"
    },
    {
      "id": "s134",
      "name": "Hridayathin",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/is_43chIepQ",
      "duration": "4:30",
      "benefit": "Heart-centered Malayalam vocal for deep inner emotional processing.",
      "language": "Malayalam"
    },
    {
      "id": "s135",
      "name": "Munbe Vaa",
      "artist": "Shreya Ghoshal & Naresh Iyer",
      "youtubeUrl": "https://www.youtube.com/embed/rp3_FhRnIRw",
      "duration": "5:58",
      "benefit": "Tamil-Malayalam crossover melody of spacious longing.",
      "language": "Malayalam"
    },
    {
      "id": "s136",
      "name": "Snehithane",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/5WjoWKNOT08",
      "duration": "5:12",
      "benefit": "Gentle call to a beloved that wraps sadness in musical warmth.",
      "language": "Malayalam"
    },
    {
      "id": "s137",
      "name": "Ikk Kudi",
      "artist": "Shahid Mallya & Alia Bhatt",
      "youtubeUrl": "https://www.youtube.com/embed/cyKZXbxx2lc",
      "duration": "3:52",
      "benefit": "Haunting Punjabi melody about lost innocence and quiet strength.",
      "language": "Punjabi"
    },
    {
      "id": "s138",
      "name": "Laung Laachi",
      "artist": "Mannat Noor",
      "youtubeUrl": "https://www.youtube.com/embed/ZCYlZzSbxwI",
      "duration": "3:47",
      "benefit": "Folk Punjabi beauty that holds romantic sorrow with grace.",
      "language": "Punjabi"
    },
    {
      "id": "s139",
      "name": "Qismat",
      "artist": "Ammy Virk",
      "youtubeUrl": "https://www.youtube.com/embed/9xVp8m0fJSg",
      "duration": "5:00",
      "benefit": "Fate-themed Punjabi ballad about destiny and heartbreak.",
      "language": "Punjabi"
    },
    {
      "id": "s140",
      "name": "Ranjha",
      "artist": "B Praak",
      "youtubeUrl": "https://www.youtube.com/embed/V7LwfY5U5WI",
      "duration": "4:15",
      "benefit": "Legendary Punjabi love archetype channeled through modern vocals.",
      "language": "Punjabi"
    },
    {
      "id": "s141",
      "name": "Akhiyan De Kol",
      "artist": "Rahat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/kq19ZFnmze8",
      "duration": "4:30",
      "benefit": "Sufi Punjabi vocals that transform heartache into spiritual depth.",
      "language": "Punjabi"
    },
    {
      "id": "s142",
      "name": "Mann Bharrya",
      "artist": "B Praak",
      "youtubeUrl": "https://www.youtube.com/embed/YrUqw7uspKg",
      "duration": "4:09",
      "benefit": "Raw Punjabi vocal pain that validates feeling betrayed in love.",
      "language": "Punjabi"
    },
    {
      "id": "s143",
      "name": "Kali Kali Zulfon",
      "artist": "Nusrat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/QPA0HToz3oU",
      "duration": "6:30",
      "benefit": "Qawwali-Punjabi fusion for transcendent emotional surrender.",
      "language": "Punjabi"
    },
    {
      "id": "s144",
      "name": "Teri Mitti",
      "artist": "B Praak",
      "youtubeUrl": "https://www.youtube.com/embed/lIWCSQcfdmg",
      "duration": "5:27",
      "benefit": "Patriotic Punjabi ballad about sacrifice that channels selfless grief.",
      "language": "Punjabi"
    },
    {
      "id": "s145",
      "name": "Taaron Ke Shehar",
      "artist": "Jubin Nautiyal & Neha Kakkar",
      "youtubeUrl": "https://www.youtube.com/embed/VAZxSoKb65o",
      "duration": "4:30",
      "benefit": "Starry-night Punjabi melody about finding love under cosmic loneliness.",
      "language": "Punjabi"
    },
    {
      "id": "s146",
      "name": "Haye O Meri Jaan",
      "artist": "Gurdas Maan",
      "youtubeUrl": "https://www.youtube.com/embed/LqzTEbmJjZY",
      "duration": "5:15",
      "benefit": "Veteran Punjabi voice that carries generational emotional wisdom.",
      "language": "Punjabi"
    },
    {
      "id": "s147",
      "name": "Tajdar-e-Haram",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/a18py61_F_w",
      "duration": "8:40",
      "benefit": "Devotional Urdu qawwali that transforms worldly sorrow into spiritual peace.",
      "language": "Urdu"
    },
    {
      "id": "s148",
      "name": "Woh Lamhe",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/FLKxnL7KwHw",
      "duration": "5:30",
      "benefit": "Nostalgic Urdu rock ballad about cherished moments now gone.",
      "language": "Urdu"
    },
    {
      "id": "s149",
      "name": "Tere Liye",
      "artist": "Ali Zafar",
      "youtubeUrl": "https://www.youtube.com/embed/oUM-fttuDqw",
      "duration": "4:45",
      "benefit": "Gentle Urdu melody about doing everything for love and losing anyway.",
      "language": "Urdu"
    },
    {
      "id": "s150",
      "name": "Hoshwalon Ko Khabar Kya",
      "artist": "Jagjit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/ag3ENMEV89o",
      "duration": "5:50",
      "benefit": "Legendary ghazal voice that gives sophisticated form to longing.",
      "language": "Urdu"
    },
    {
      "id": "s151",
      "name": "Lag Ja Gale",
      "artist": "Lata Mangeshkar",
      "youtubeUrl": "https://www.youtube.com/embed/y2fgw1Oqz28",
      "duration": "3:45",
      "benefit": "Timeless Urdu classic about embracing before fate separates.",
      "language": "Urdu"
    },
    {
      "id": "s152",
      "name": "Kuch Na Kaho",
      "artist": "Kumar Sanu",
      "youtubeUrl": "https://www.youtube.com/embed/LLcpGkuQ32o",
      "duration": "5:28",
      "benefit": "Classic Urdu plea for silent understanding between broken hearts.",
      "language": "Urdu"
    },
    {
      "id": "s153",
      "name": "Ye Jo Des Hai Tera",
      "artist": "A.R. Rahman & Lata Mangeshkar",
      "youtubeUrl": "https://www.youtube.com/embed/4tiVPuLbbHg",
      "duration": "6:05",
      "benefit": "Urdu ode to homeland that channels displacement grief into pride.",
      "language": "Urdu"
    },
    {
      "id": "s154",
      "name": "Aaj Jaane Ki Zid Na Karo",
      "artist": "Farida Khanum",
      "youtubeUrl": "https://www.youtube.com/embed/KDJL2FyRDeA",
      "duration": "7:20",
      "benefit": "Iconic ghazal of desperate plea — validates the fear of goodbye.",
      "language": "Urdu"
    },
    {
      "id": "s155",
      "name": "Dil Diyan Gallan",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/SAcpESN_Fk4",
      "duration": "4:50",
      "benefit": "Romantic Urdu whisper about the conversations hearts have in silence.",
      "language": "Urdu"
    },
    {
      "id": "s156",
      "name": "Bol Hu",
      "artist": "Soch the Band",
      "youtubeUrl": "https://www.youtube.com/embed/KmErtNSs5ak",
      "duration": "4:35",
      "benefit": "Contemporary Urdu sufi-rock that elevates sadness into spiritual seeking.",
      "language": "Urdu"
    }
  ],
  "angry": [
    {
      "id": "a1",
      "name": "Weightless",
      "artist": "Marconi Union",
      "youtubeUrl": "https://www.youtube.com/embed/UfcAVejslrU",
      "duration": "8:08",
      "benefit": "Scientifically proven to reduce anxiety and lower heart rate.",
      "language": "English"
    },
    {
      "id": "a2",
      "name": "Eye of the Tiger",
      "artist": "Survivor",
      "youtubeUrl": "https://www.youtube.com/embed/btPJPFnesV4",
      "duration": "4:03",
      "benefit": "Converts anger into determination and drive.",
      "language": "English"
    },
    {
      "id": "a3",
      "name": "Stronger",
      "artist": "Kelly Clarkson",
      "youtubeUrl": "https://www.youtube.com/embed/Xn676-fLq7I",
      "duration": "3:42",
      "benefit": "Transforms frustration into self-assured momentum.",
      "language": "English"
    },
    {
      "id": "a4",
      "name": "Lose Yourself",
      "artist": "Eminem",
      "youtubeUrl": "https://www.youtube.com/embed/xFYQQPAOz7Y",
      "duration": "5:26",
      "benefit": "High-intensity hip-hop that channels raw power.",
      "language": "English"
    },
    {
      "id": "a5",
      "name": "Till I Collapse",
      "artist": "Eminem ft. Nate Dogg",
      "youtubeUrl": "https://www.youtube.com/embed/3m_QN8P93IA",
      "duration": "4:48",
      "benefit": "Relentless drive that converts anger into resilience.",
      "language": "English"
    },
    {
      "id": "a6",
      "name": "Boom Boom Pow",
      "artist": "The Black Eyed Peas",
      "youtubeUrl": "https://www.youtube.com/embed/4m48GqaOz90",
      "duration": "3:42",
      "benefit": "Electronic explosion that explodes frustration safely.",
      "language": "English"
    },
    {
      "id": "a7",
      "name": "Numb",
      "artist": "Linkin Park",
      "youtubeUrl": "https://www.youtube.com/embed/kXYiU_JCYtU",
      "duration": "3:07",
      "benefit": "Heavy nu-metal wall of sound to validate and release inner rage.",
      "language": "English"
    },
    {
      "id": "a8",
      "name": "In The End",
      "artist": "Linkin Park",
      "youtubeUrl": "https://www.youtube.com/embed/eVTXPUF4Oz4",
      "duration": "3:36",
      "benefit": "Symphonic rock release for venting feelings of futility.",
      "language": "English"
    },
    {
      "id": "a9",
      "name": "Remember The Name",
      "artist": "Fort Minor",
      "youtubeUrl": "https://www.youtube.com/embed/VDvr08sCPOc",
      "duration": "3:50",
      "benefit": "Calculated rhythm that channels anger into concentrated discipline.",
      "language": "English"
    },
    {
      "id": "a10",
      "name": "Hall of Fame",
      "artist": "The Script",
      "youtubeUrl": "https://www.youtube.com/embed/mk48xRzuNvA",
      "duration": "3:22",
      "benefit": "Empowering piano rock that turns frustration into motivation.",
      "language": "English"
    },
    {
      "id": "a11",
      "name": "Believer",
      "artist": "Imagine Dragons",
      "youtubeUrl": "https://www.youtube.com/embed/7wtfhZwyrcc",
      "duration": "3:24",
      "benefit": "Assertive percussion and vocal grit that transforms pain into strength.",
      "language": "English"
    },
    {
      "id": "a12",
      "name": "Radioactive",
      "artist": "Imagine Dragons",
      "youtubeUrl": "https://www.youtube.com/embed/ktvTqknDobU",
      "duration": "3:06",
      "benefit": "Dubstep-rock build-up for massive, cathartic physical release.",
      "language": "English"
    },
    {
      "id": "a13",
      "name": "Kun Faya Kun",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/T94PHkuydcw",
      "duration": "7:53",
      "benefit": "Spiritual grounding for intense emotional turmoil.",
      "language": "Hindi"
    },
    {
      "id": "a14",
      "name": "Aasman Ko Chukar",
      "artist": "Daler Mehndi",
      "youtubeUrl": "https://www.youtube.com/embed/W_lZ9V4X6bU",
      "duration": "4:23",
      "benefit": "Focuses directed energy into positive power.",
      "language": "Hindi"
    },
    {
      "id": "a15",
      "name": "Zinda",
      "artist": "Siddharth Mahadevan",
      "youtubeUrl": "https://www.youtube.com/embed/Aon0OaT4O0o",
      "duration": "3:31",
      "benefit": "Electric motivation and internal fire.",
      "language": "Hindi"
    },
    {
      "id": "a16",
      "name": "Bhaag Milkha Bhaag",
      "artist": "Siddharth Mahadevan",
      "youtubeUrl": "https://www.youtube.com/embed/hc7IJO7fD78",
      "duration": "4:36",
      "benefit": "Inspirational Hindi anthem for channeling aggression.",
      "language": "Hindi"
    },
    {
      "id": "a17",
      "name": "Nagada Sang Dhol",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/3X7x4Ye-tqo",
      "duration": "6:32",
      "benefit": "Rhythmic Hindi celebration that channels intensity.",
      "language": "Hindi"
    },
    {
      "id": "a18",
      "name": "Aarambh Hai Prachand",
      "artist": "Piyush Mishra",
      "youtubeUrl": "https://www.youtube.com/embed/x9feF5rtMAc",
      "duration": "6:02",
      "benefit": "Fiery call to arms that redirects stress into focused resolve.",
      "language": "Hindi"
    },
    {
      "id": "a19",
      "name": "Chak De India",
      "artist": "Sukhwinder Singh",
      "youtubeUrl": "https://www.youtube.com/embed/bnqLzCsffwY",
      "duration": "4:43",
      "benefit": "Stadium-sized motivational energy for team power.",
      "language": "Hindi"
    },
    {
      "id": "a20",
      "name": "Kar Har Maidaan Fateh",
      "artist": "Sukhwinder Singh",
      "youtubeUrl": "https://www.youtube.com/embed/9iIX4PBplAY",
      "duration": "5:11",
      "benefit": "Triumphant rise from ashes theme to conquer defeat.",
      "language": "Hindi"
    },
    {
      "id": "a21",
      "name": "Sultan Title Track",
      "artist": "Sukhwinder Singh",
      "youtubeUrl": "https://www.youtube.com/embed/abiL84EAWSY",
      "duration": "4:40",
      "benefit": "Aggressive traditional beats for athletic drive.",
      "language": "Hindi"
    },
    {
      "id": "a22",
      "name": "Brothers Anthem",
      "artist": "Vishal Dadlani",
      "youtubeUrl": "https://www.youtube.com/embed/IjBAgWKW12Y",
      "duration": "5:47",
      "benefit": "Cinematic rock build-up for mental fortitude.",
      "language": "Hindi"
    },
    {
      "id": "a23",
      "name": "Jee Karda",
      "artist": "Divya Kumar",
      "youtubeUrl": "https://www.youtube.com/embed/BN45QQ7R92M",
      "duration": "4:01",
      "benefit": "Raw, screaming Punjabi-rock fusion of frustration.",
      "language": "Hindi"
    },
    {
      "id": "a24",
      "name": "Khalibali",
      "artist": "Shivam Pathak",
      "youtubeUrl": "https://www.youtube.com/embed/UBLDJpOC9nw",
      "duration": "4:47",
      "benefit": "Intense middle-eastern beats for raw power expression.",
      "language": "Hindi"
    },
    {
      "id": "a25",
      "name": "Salaam Rocky Bhai",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/AvsR4Jd6pXw",
      "duration": "3:44",
      "benefit": "Turns raw intensity into focused power.",
      "language": "Kannada"
    },
    {
      "id": "a26",
      "name": "Toofan",
      "artist": "Sandesh Datta Naik",
      "youtubeUrl": "https://www.youtube.com/embed/F5ED9rwZ_Sw",
      "duration": "3:30",
      "benefit": "Aggressive cinematic storm that releases inner tension.",
      "language": "Kannada"
    },
    {
      "id": "a27",
      "name": "Sulthana",
      "artist": "K.G.F Artists",
      "youtubeUrl": "https://www.youtube.com/embed/kwa9JRcqKeE",
      "duration": "3:45",
      "benefit": "Heavy heavy rock anthem celebrating raw triumph.",
      "language": "Kannada"
    },
    {
      "id": "a28",
      "name": "Dheera Dheera",
      "artist": "Ananya Bhat",
      "youtubeUrl": "https://www.youtube.com/embed/IuS4LL_ALrU",
      "duration": "3:42",
      "benefit": "Operatic vocals mixed with rock that steady the heart.",
      "language": "Kannada"
    },
    {
      "id": "a29",
      "name": "Tagaru Banthu Tagaru",
      "artist": "Anthony Daasan",
      "youtubeUrl": "https://www.youtube.com/embed/LYOfM-0w0YA",
      "duration": "4:15",
      "benefit": "Local street folk beats that drive raw tribal energy.",
      "language": "Kannada"
    },
    {
      "id": "a30",
      "name": "Raajakumara",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/FQKOhvQpkyw",
      "duration": "4:10",
      "benefit": "Motivational energy that channels anger into goodness.",
      "language": "Kannada"
    },
    {
      "id": "a31",
      "name": "Karabuu",
      "artist": "Chandan Shetty",
      "youtubeUrl": "https://www.youtube.com/embed/hnj0qgMuDsI",
      "duration": "3:40",
      "benefit": "Local electronic mass-beat that transforms tension into movement.",
      "language": "Kannada"
    },
    {
      "id": "a32",
      "name": "Veera Kannadiga",
      "artist": "Puneeth Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/_GVY5r4SV20",
      "duration": "4:05",
      "benefit": "Patriotic pride song that lifts spirits and determination.",
      "language": "Kannada"
    },
    {
      "id": "a33",
      "name": "Power Star Anthem",
      "artist": "Chandan Shetty",
      "youtubeUrl": "https://www.youtube.com/embed/kQi3MRRJWY8",
      "duration": "3:30",
      "benefit": "High-octane commercial rap that generates confident drive.",
      "language": "Kannada"
    },
    {
      "id": "a34",
      "name": "Simha Simha",
      "artist": "Puneeth Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/aPiZ--ASZI0",
      "duration": "4:15",
      "benefit": "Aggressive lion-themed action track for raw motivation.",
      "language": "Kannada"
    },
    {
      "id": "a35",
      "name": "Singa Title Track",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/3KRps4OR5Ek",
      "duration": "3:50",
      "benefit": "Loud brass and fast drums to shake off mental blocks.",
      "language": "Kannada"
    },
    {
      "id": "a36",
      "name": "Roberrt Title Track",
      "artist": "Vyasa Raj",
      "youtubeUrl": "https://www.youtube.com/embed/cA1ku3VPTjA",
      "duration": "4:02",
      "benefit": "Intense cinematic title track with heavy beats.",
      "language": "Kannada"
    },
    {
      "id": "a37",
      "name": "Aalaporan Tamizhan",
      "artist": "Kailash Kher",
      "youtubeUrl": "https://www.youtube.com/embed/xsbLtHql4g8",
      "duration": "5:48",
      "benefit": "Turns agitation into proud collective energy.",
      "language": "Tamil"
    },
    {
      "id": "a38",
      "name": "Jai Bhim",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/UYj2BmzwCag",
      "duration": "4:01",
      "benefit": "Powerful Tamil protest song channeling just anger.",
      "language": "Tamil"
    },
    {
      "id": "a39",
      "name": "Oru Viral Puratchi",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/1tnE5_g7low",
      "duration": "5:27",
      "benefit": "Motivational message that focuses anger into civic change.",
      "language": "Tamil"
    },
    {
      "id": "a40",
      "name": "Singam Title Track",
      "artist": "Devi Sri Prasad",
      "youtubeUrl": "https://www.youtube.com/embed/Qu7SM5Rq87I",
      "duration": "3:40",
      "benefit": "Fast police action theme that generates forward drive.",
      "language": "Tamil"
    },
    {
      "id": "a41",
      "name": "Petta Paraak",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/GlJBrOzIzAM",
      "duration": "3:58",
      "benefit": "Heavy electronic-rock transition for extreme confidence.",
      "language": "Tamil"
    },
    {
      "id": "a42",
      "name": "Marana Mass",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/88iypMO9H7g",
      "duration": "3:29",
      "benefit": "High-tempo street folk beats for celebratory movement.",
      "language": "Tamil"
    },
    {
      "id": "a43",
      "name": "Vaathi Raid",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/MkUIQm--UfA",
      "duration": "3:30",
      "benefit": "Aggressive Tamil rap that channels frustrations into precision.",
      "language": "Tamil"
    },
    {
      "id": "a44",
      "name": "Karuppu Vellai",
      "artist": "Sam C.S.",
      "youtubeUrl": "https://www.youtube.com/embed/4AYAcFcFu84",
      "duration": "3:15",
      "benefit": "Dark bass-heavy track for processing internal conflict.",
      "language": "Tamil"
    },
    {
      "id": "a45",
      "name": "Neruppu Da",
      "artist": "Arunraja Kamaraj",
      "youtubeUrl": "https://www.youtube.com/embed/bwXHx8ng7_E",
      "duration": "3:18",
      "benefit": "Screaming metal-rap rock that releases maximum pressure.",
      "language": "Tamil"
    },
    {
      "id": "a46",
      "name": "Udhungada Sangu",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/RCXzH27eOIA",
      "duration": "3:48",
      "benefit": "Self-deprecating Tamil soup-song for cathartic laughter.",
      "language": "Tamil"
    },
    {
      "id": "a47",
      "name": "Pathala Pathala",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/1OjZnGZjOA0",
      "duration": "3:31",
      "benefit": "Folk beats and fast-paced lyrics for energetic release.",
      "language": "Tamil"
    },
    {
      "id": "a48",
      "name": "Naa Ready",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/3wDiqlTNlfQ",
      "duration": "4:08",
      "benefit": "Loud commercial celebration that raises body energy.",
      "language": "Tamil"
    },
    {
      "id": "a49",
      "name": "Inthandham",
      "artist": "S. P. B. Charan",
      "youtubeUrl": "https://www.youtube.com/embed/qYdp8nRdpSg",
      "duration": "3:39",
      "benefit": "Helps rough emotional edges soften into warmth.",
      "language": "Telugu"
    },
    {
      "id": "a50",
      "name": "Adiga Adiga",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/hJ4OL9NNeDY",
      "duration": "4:14",
      "benefit": "Redirects pressure into heartfelt emotional focus.",
      "language": "Telugu"
    },
    {
      "id": "a51",
      "name": "Oora",
      "artist": "Srinivas & Dhanvanthari",
      "youtubeUrl": "https://www.youtube.com/embed/tBcYM-e0B3I",
      "duration": "3:47",
      "benefit": "Bold Telugu anthem for conquering internal storms.",
      "language": "Telugu"
    },
    {
      "id": "a52",
      "name": "Amarendra Baahubali",
      "artist": "Kaala Bhairava",
      "youtubeUrl": "https://www.youtube.com/embed/F-JoqgpSsBc",
      "duration": "3:20",
      "benefit": "Heavy horn-heavy cinematic piece for legendary status.",
      "language": "Telugu"
    },
    {
      "id": "a53",
      "name": "Dosti",
      "artist": "Amit Trivedi",
      "youtubeUrl": "https://www.youtube.com/embed/_XSrkAJ_V8g",
      "duration": "5:10",
      "benefit": "Assertive drum-led anthem of extreme friendship and battle.",
      "language": "Telugu"
    },
    {
      "id": "a54",
      "name": "Raam Raam",
      "artist": "Pushpa Artists",
      "youtubeUrl": "https://www.youtube.com/embed/3LCIlq0Sozc",
      "duration": "3:50",
      "benefit": "Raw tribal Telugu energy for athletic performance.",
      "language": "Telugu"
    },
    {
      "id": "a55",
      "name": "Sye Title Track",
      "artist": "M. M. Keeravani",
      "youtubeUrl": "https://www.youtube.com/embed/Zq6yxd3iZ-A",
      "duration": "4:02",
      "benefit": "Rugby action theme that builds physical momentum.",
      "language": "Telugu"
    },
    {
      "id": "a56",
      "name": "Mirchi Title Track",
      "artist": "Devi Sri Prasad",
      "youtubeUrl": "https://www.youtube.com/embed/mwdhF5bcmUg",
      "duration": "3:45",
      "benefit": "Slick action theme for self-assured cool.",
      "language": "Telugu"
    },
    {
      "id": "a57",
      "name": "Gabbar Singh Title Track",
      "artist": "Baba Sehgal",
      "youtubeUrl": "https://www.youtube.com/embed/DW8HEEVEANs",
      "duration": "4:18",
      "benefit": "Energetic mass-rap for instant lighthearted power.",
      "language": "Telugu"
    },
    {
      "id": "a58",
      "name": "Paisa Vasool",
      "artist": "Anup Rubens",
      "youtubeUrl": "https://www.youtube.com/embed/18FUE2TULmE",
      "duration": "3:30",
      "benefit": "Quirky action theme that channels crazy energy productively.",
      "language": "Telugu"
    },
    {
      "id": "a59",
      "name": "Jai Lava Kusa",
      "artist": "Devi Sri Prasad",
      "youtubeUrl": "https://www.youtube.com/embed/zF5lNCSfCJ4",
      "duration": "4:05",
      "benefit": "Mass title track that celebrates dramatic intensity.",
      "language": "Telugu"
    },
    {
      "id": "a60",
      "name": "Naatu Naatu",
      "artist": "Rahul Sipligunj & Kaala Bhairava",
      "youtubeUrl": "https://www.youtube.com/embed/4_eEgJhsBMo",
      "duration": "3:36",
      "benefit": "Historic speed and synchronization to sweat out anger.",
      "language": "Telugu"
    },
    {
      "id": "a61",
      "name": "River Flows in You",
      "artist": "Yiruma",
      "youtubeUrl": "https://www.youtube.com/embed/7maJOI3QMu0",
      "duration": "3:32",
      "benefit": "Focuses the mind and washes away agitation.",
      "language": "Korean"
    },
    {
      "id": "a62",
      "name": "MIC Drop",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/kTlv5_Bs8aw",
      "duration": "3:58",
      "benefit": "Channels anger into swagger and controlled power.",
      "language": "Korean"
    },
    {
      "id": "a63",
      "name": "God's Menu",
      "artist": "Stray Kids",
      "youtubeUrl": "https://www.youtube.com/embed/TQTlCHxyuu8",
      "duration": "2:48",
      "benefit": "Sharp rhythmic drive that redirects intensity.",
      "language": "Korean"
    },
    {
      "id": "a64",
      "name": "Fire",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/4ujQOR2DMFM",
      "duration": "3:23",
      "benefit": "Maximum tempo dance-pop that burns off frustration.",
      "language": "Korean"
    },
    {
      "id": "a65",
      "name": "Daechwita",
      "artist": "Agust D",
      "youtubeUrl": "https://www.youtube.com/embed/qGjAWJ2zWWI",
      "duration": "3:46",
      "benefit": "Traditional military march mixed with trap for raw anger.",
      "language": "Korean"
    },
    {
      "id": "a66",
      "name": "Black Swan",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/0lapF4DQPKQ",
      "duration": "3:18",
      "benefit": "Orchestral hip-hop for artistic processing of inner shadows.",
      "language": "Korean"
    },
    {
      "id": "a67",
      "name": "Not Today",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/9DwzBICPhdM",
      "duration": "3:51",
      "benefit": "Aggressive electronic rock motivation for staying standing.",
      "language": "Korean"
    },
    {
      "id": "a68",
      "name": "DDU-DU DDU-DU",
      "artist": "BLACKPINK",
      "youtubeUrl": "https://www.youtube.com/embed/IHNzOHi8sJs",
      "duration": "3:29",
      "benefit": "Heavy trap drop that allows asserting dominance.",
      "language": "Korean"
    },
    {
      "id": "a69",
      "name": "Kill This Love",
      "artist": "BLACKPINK",
      "youtubeUrl": "https://www.youtube.com/embed/2S24-y0Ij3Y",
      "duration": "3:09",
      "benefit": "Loud brass horn intro for immediate empowerment.",
      "language": "Korean"
    },
    {
      "id": "a70",
      "name": "Monster",
      "artist": "EXO",
      "youtubeUrl": "https://www.youtube.com/embed/KSH-FVVtTf0",
      "duration": "3:41",
      "benefit": "Slick dark pop with heavy bass for intense focus.",
      "language": "Korean"
    },
    {
      "id": "a71",
      "name": "Kick It",
      "artist": "NCT 127",
      "youtubeUrl": "https://www.youtube.com/embed/2OvyA2__Eas",
      "duration": "3:53",
      "benefit": "Martial arts inspired bass trap for physical drive.",
      "language": "Korean"
    },
    {
      "id": "a72",
      "name": "Hard Carry",
      "artist": "GOT7",
      "youtubeUrl": "https://www.youtube.com/embed/O57jr1oZDIw",
      "duration": "3:13",
      "benefit": "EDM-heavy club track to release physical blocks.",
      "language": "Korean"
    },
    {
      "id": "a73",
      "name": "Gurenge",
      "artist": "LiSA",
      "youtubeUrl": "https://www.youtube.com/embed/x1FV6IrjZCY",
      "duration": "3:56",
      "benefit": "Epic rock anthem to transform hurt into power.",
      "language": "Japanese"
    },
    {
      "id": "a74",
      "name": "The Rumbling",
      "artist": "SiM",
      "youtubeUrl": "https://www.youtube.com/embed/sXjF0KRRMNY",
      "duration": "3:40",
      "benefit": "Heavy metal screamo that perfectly echoes massive fury.",
      "language": "Japanese"
    },
    {
      "id": "a75",
      "name": "Kaikai Kitan",
      "artist": "Eve",
      "youtubeUrl": "https://www.youtube.com/embed/1tk1pqwrOys",
      "duration": "3:41",
      "benefit": "Rhythmic anime theme for clean, fast mental focus.",
      "language": "Japanese"
    },
    {
      "id": "a76",
      "name": "Unravel",
      "artist": "TK from Ling Tosite Sigure",
      "youtubeUrl": "https://www.youtube.com/embed/Fve_lHIPa-I",
      "duration": "3:58",
      "benefit": "Schizophrenic rock vocals that safely express break-point pain.",
      "language": "Japanese"
    },
    {
      "id": "a77",
      "name": "Peace Sign",
      "artist": "Kenshi Yonezu",
      "youtubeUrl": "https://www.youtube.com/embed/9aJVr5tTTWk",
      "duration": "3:57",
      "benefit": "Fast motivational rock for overcoming obstacles.",
      "language": "Japanese"
    },
    {
      "id": "a78",
      "name": "Inferno",
      "artist": "Mrs. GREEN APPLE",
      "youtubeUrl": "https://www.youtube.com/embed/wfCcs0vLysk",
      "duration": "3:32",
      "benefit": "Fires up self-belief with quick pop-rock tempo.",
      "language": "Japanese"
    },
    {
      "id": "a79",
      "name": "Silhouette",
      "artist": "KANA-BOON",
      "youtubeUrl": "https://www.youtube.com/embed/dlFA0Zq1k2A",
      "duration": "4:00",
      "benefit": "Fast J-rock tempo that sweeps you forward.",
      "language": "Japanese"
    },
    {
      "id": "a80",
      "name": "Cry Baby",
      "artist": "Official HIGE DANDism",
      "youtubeUrl": "https://www.youtube.com/embed/O1bhZgkC4Gw",
      "duration": "4:01",
      "benefit": "Frequent key changes that mirror emotional turbulence.",
      "language": "Japanese"
    },
    {
      "id": "a81",
      "name": "Kick Back",
      "artist": "Kenshi Yonezu",
      "youtubeUrl": "https://www.youtube.com/embed/M2cckDmNLMI",
      "duration": "3:13",
      "benefit": "Aggressive chaotic bassline for venting manic energy.",
      "language": "Japanese"
    },
    {
      "id": "a82",
      "name": "Idol",
      "artist": "YOASOBI",
      "youtubeUrl": "https://www.youtube.com/embed/ZRtdQ81jPUQ",
      "duration": "3:33",
      "benefit": "Intense tempo pop that redirects heavy focus.",
      "language": "Japanese"
    },
    {
      "id": "a83",
      "name": "Guren no Yumiya",
      "artist": "Linked Horizon",
      "youtubeUrl": "https://www.youtube.com/embed/h_MzYQTLXbk",
      "duration": "5:16",
      "benefit": "Symphonic power metal for fighting-spirit activation.",
      "language": "Japanese"
    },
    {
      "id": "a84",
      "name": "Brave Shine",
      "artist": "Aimer",
      "youtubeUrl": "https://www.youtube.com/embed/XeI8E20ZUE4",
      "duration": "3:53",
      "benefit": "Melodic rock that brings light and hope to frustration.",
      "language": "Japanese"
    },
    {
      "id": "a85",
      "name": "Danza Kuduro",
      "artist": "Don Omar",
      "youtubeUrl": "https://www.youtube.com/embed/7zp1TbLFPp8",
      "duration": "3:19",
      "benefit": "High-speed Latin dance that physically shakes off bad moods.",
      "language": "Spanish"
    },
    {
      "id": "a86",
      "name": "Gasolina",
      "artist": "Daddy Yankee",
      "youtubeUrl": "https://www.youtube.com/embed/CCF1_jI8Prk",
      "duration": "3:12",
      "benefit": "The ultimate high-tempo reggaeton driver.",
      "language": "Spanish"
    },
    {
      "id": "a87",
      "name": "Chantaje",
      "artist": "Shakira",
      "youtubeUrl": "https://www.youtube.com/embed/6Mgqbai3fKo",
      "duration": "3:15",
      "benefit": "Medium-beat reggaeton for steady physical release.",
      "language": "Spanish"
    },
    {
      "id": "a88",
      "name": "Mi Gente",
      "artist": "J Balvin",
      "youtubeUrl": "https://www.youtube.com/embed/wnJ6LuUFpMo",
      "duration": "3:05",
      "benefit": "Aggressive repetitive house beats to ground attention.",
      "language": "Spanish"
    },
    {
      "id": "a89",
      "name": "La Camisa Negra",
      "artist": "Juanes",
      "youtubeUrl": "https://www.youtube.com/embed/kRt2sRyup6A",
      "duration": "3:36",
      "benefit": "Acoustic drive that redirects anger into song.",
      "language": "Spanish"
    },
    {
      "id": "a90",
      "name": "Me Nego",
      "artist": "Ozuna",
      "youtubeUrl": "https://www.youtube.com/embed/JyqD_zfXfi8",
      "duration": "3:00",
      "benefit": "Sleek Latin pop for active walking or working out.",
      "language": "Spanish"
    },
    {
      "id": "a91",
      "name": "Ella Quiere Beber",
      "artist": "Anuel AA",
      "youtubeUrl": "https://www.youtube.com/embed/BTtBmo5EbEk",
      "duration": "3:39",
      "benefit": "Reggaeton beat for venting relationship frustration.",
      "language": "Spanish"
    },
    {
      "id": "a92",
      "name": "Taki Taki",
      "artist": "DJ Snake",
      "youtubeUrl": "https://www.youtube.com/embed/ixkoVwKQaJg",
      "duration": "3:32",
      "benefit": "Fast electronic-reggaeton pop to release steam.",
      "language": "Spanish"
    },
    {
      "id": "a93",
      "name": "Con Calma",
      "artist": "Daddy Yankee",
      "youtubeUrl": "https://www.youtube.com/embed/DiItGE3eAyQ",
      "duration": "3:13",
      "benefit": "Uplifting dance tempo that helps shake off irritability.",
      "language": "Spanish"
    },
    {
      "id": "a94",
      "name": "Dura",
      "artist": "Daddy Yankee",
      "youtubeUrl": "https://www.youtube.com/embed/sGIm0-dQd8M",
      "duration": "3:20",
      "benefit": "Steady workout reggaeton for physical release.",
      "language": "Spanish"
    },
    {
      "id": "a95",
      "name": "Shaky Shaky",
      "artist": "Daddy Yankee",
      "youtubeUrl": "https://www.youtube.com/embed/aKuivabiOns",
      "duration": "3:50",
      "benefit": "Fast party reggaeton for high-speed distraction.",
      "language": "Spanish"
    },
    {
      "id": "a96",
      "name": "Despacito",
      "artist": "Luis Fonsi",
      "youtubeUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
      "duration": "3:48",
      "benefit": "Familiar pop that helps transition down from high anger.",
      "language": "Spanish"
    },
    {
      "id": "a97",
      "name": "Clair de Lune",
      "artist": "Debussy",
      "youtubeUrl": "https://www.youtube.com/embed/-Bxpm0EmOMU",
      "duration": "5:00",
      "benefit": "Timeless piano elegance for instant calmness.",
      "language": "French"
    },
    {
      "id": "a98",
      "name": "Papaoutai",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/oiKj0Z_Xnjc",
      "duration": "3:52",
      "benefit": "Electronic synth-pop that channels parental frustration.",
      "language": "French"
    },
    {
      "id": "a99",
      "name": "Alors on Danse",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/VHoT4N43jK8",
      "duration": "3:26",
      "benefit": "Relentless beat to dance through your troubles.",
      "language": "French"
    },
    {
      "id": "a100",
      "name": "Tourner Dans Le Vide",
      "artist": "Indila",
      "youtubeUrl": "https://www.youtube.com/embed/vtNJMAyeP0s",
      "duration": "4:06",
      "benefit": "Dramatic orchestration for intense emotional release.",
      "language": "French"
    },
    {
      "id": "a101",
      "name": "Ego",
      "artist": "Willy William",
      "youtubeUrl": "https://www.youtube.com/embed/iOxzG3jjFkY",
      "duration": "3:27",
      "benefit": "Electronic focus to direct self-confidence.",
      "language": "French"
    },
    {
      "id": "a102",
      "name": "Bella",
      "artist": "Gims",
      "youtubeUrl": "https://www.youtube.com/embed/rMltoD1jCGI",
      "duration": "3:44",
      "benefit": "Danceable French-pop to shake off negative emotions.",
      "language": "French"
    },
    {
      "id": "a103",
      "name": "Dernière Danse",
      "artist": "Indila",
      "youtubeUrl": "https://www.youtube.com/embed/K5KAc5CoCuk",
      "duration": "3:33",
      "benefit": "Melancholy drive that supports emotional venting.",
      "language": "French"
    },
    {
      "id": "a104",
      "name": "Sapés Comme Jamais",
      "artist": "Gims",
      "youtubeUrl": "https://www.youtube.com/embed/4bPGxLxogvw",
      "duration": "3:26",
      "benefit": "Upbeat French hip-hop for feeling empowered.",
      "language": "French"
    },
    {
      "id": "a105",
      "name": "Outro",
      "artist": "M83",
      "youtubeUrl": "https://www.youtube.com/embed/Eyjj8BgsBGU",
      "duration": "4:07",
      "benefit": "Massive, cinematic wall of sound for deep catharsis.",
      "language": "French"
    },
    {
      "id": "a106",
      "name": "Carmen",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/UKftOH54iNU",
      "duration": "3:09",
      "benefit": "Choir-pop warning theme that channels social frustration.",
      "language": "French"
    },
    {
      "id": "a107",
      "name": "Karar Oi Louho Kopot",
      "artist": "Kazi Nazrul Islam",
      "youtubeUrl": "https://www.youtube.com/embed/Sz0Hq8rDfxE",
      "duration": "3:10",
      "benefit": "Legendary Bengali rebel song that converts anger into justice.",
      "language": "Bengali"
    },
    {
      "id": "a108",
      "name": "Bidrohi",
      "artist": "Nazrul Geeti",
      "youtubeUrl": "https://www.youtube.com/embed/29X1GFso6y0",
      "duration": "5:45",
      "benefit": "Recited/sung poetry of rebellion to empower inner strength.",
      "language": "Bengali"
    },
    {
      "id": "a109",
      "name": "Shono Ekti Mujiborer Theke",
      "artist": "Hemanta Mukherjee",
      "youtubeUrl": "https://www.youtube.com/embed/byswmUK6lsY",
      "duration": "3:40",
      "benefit": "Historic motivational anthem that stirs resolution.",
      "language": "Bengali"
    },
    {
      "id": "a110",
      "name": "Joy Bangla Joy Banglar Joy",
      "artist": "Bengali Artists",
      "youtubeUrl": "https://www.youtube.com/embed/SwSYTM8-EIw",
      "duration": "4:02",
      "benefit": "Bold chorus that unites and drives collective energy.",
      "language": "Bengali"
    },
    {
      "id": "a111",
      "name": "Rokto Chawa Rokto Dawa",
      "artist": "Bengali Band",
      "youtubeUrl": "https://www.youtube.com/embed/OfS9x5Pnojc",
      "duration": "3:50",
      "benefit": "Heavy alternative rock to vent bottled-up anger.",
      "language": "Bengali"
    },
    {
      "id": "a112",
      "name": "Dhono Dhanye Pushpe Bhora",
      "artist": "Lata Mangeshkar",
      "youtubeUrl": "https://www.youtube.com/embed/NsZi6yV4pUw",
      "duration": "4:15",
      "benefit": "Warm pride that softens hot irritation.",
      "language": "Bengali"
    },
    {
      "id": "a113",
      "name": "Muktir Gaan",
      "artist": "Bengali Folk",
      "youtubeUrl": "https://www.youtube.com/embed/peFB6tfqPp0",
      "duration": "3:30",
      "benefit": "Inspiring rural freedom song to steady intention.",
      "language": "Bengali"
    },
    {
      "id": "a114",
      "name": "Chal Chal Chal",
      "artist": "Kazi Nazrul Islam",
      "youtubeUrl": "https://www.youtube.com/embed/TvKgjq-eW6w",
      "duration": "2:50",
      "benefit": "Bengali military march for immediate movement and focus.",
      "language": "Bengali"
    },
    {
      "id": "a115",
      "name": "Teere Bhese Ashe",
      "artist": "Bengali Folk",
      "youtubeUrl": "https://www.youtube.com/embed/0LntdMz07es",
      "duration": "4:10",
      "benefit": "Mournful but powerful boat song that calms internal storms.",
      "language": "Bengali"
    },
    {
      "id": "a116",
      "name": "Chol Mini Assam Jabo",
      "artist": "Bengali Folk",
      "youtubeUrl": "https://www.youtube.com/embed/XoE7p_USoXk",
      "duration": "3:15",
      "benefit": "Traditional tea-garden protest song channeling collective struggle.",
      "language": "Bengali"
    },
    {
      "id": "a117",
      "name": "Mauli Mauli",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/uWi5aOuSmN4",
      "duration": "4:07",
      "benefit": "Uses devotional force to ground overwhelming energy.",
      "language": "Marathi"
    },
    {
      "id": "a118",
      "name": "Zingaat",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/I0T8t7rXp7I",
      "duration": "4:01",
      "benefit": "Pure fast beats to burn off manic, angry energy.",
      "language": "Marathi"
    },
    {
      "id": "a119",
      "name": "Bring It On",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/-a78xi3ag_Q",
      "duration": "4:05",
      "benefit": "Orchestral rock that charges determination.",
      "language": "Marathi"
    },
    {
      "id": "a120",
      "name": "Shivray Anthem",
      "artist": "Marathi Artists",
      "youtubeUrl": "https://www.youtube.com/embed/AYxP_QsoHDs",
      "duration": "3:50",
      "benefit": "War-like drums and horns for instant empowerment.",
      "language": "Marathi"
    },
    {
      "id": "a121",
      "name": "Maharashtra Geet",
      "artist": "Marathi Choir",
      "youtubeUrl": "https://www.youtube.com/embed/VkdeDbbjLiU",
      "duration": "4:15",
      "benefit": "Grand state anthem that evokes stable pride and calm.",
      "language": "Marathi"
    },
    {
      "id": "a122",
      "name": "Vitthala Shanti",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/iTU4qgYtub4",
      "duration": "5:10",
      "benefit": "Devotional calm to soothe hot irritation.",
      "language": "Marathi"
    },
    {
      "id": "a123",
      "name": "Dev Manus",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/SslPVXT2y9I",
      "duration": "4:25",
      "benefit": "Symphonic theme that helps transition out of stress.",
      "language": "Marathi"
    },
    {
      "id": "a124",
      "name": "Khel Mandala",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/FBMNmQcfOFY",
      "duration": "4:39",
      "benefit": "Emotional rise that converts desperation into resilience.",
      "language": "Marathi"
    },
    {
      "id": "a125",
      "name": "Moraya Moraya",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/DPH4r-nRNE0",
      "duration": "5:20",
      "benefit": "Intense drum-based prayer that releases stress.",
      "language": "Marathi"
    },
    {
      "id": "a126",
      "name": "Jeev Rangla",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/en60_iC0u2M",
      "duration": "4:39",
      "benefit": "Soft melody to calm down after peak anger.",
      "language": "Marathi"
    },
    {
      "id": "a127",
      "name": "Pistah",
      "artist": "Shabareesh Varma",
      "youtubeUrl": "https://www.youtube.com/embed/SuuypjzzqRw",
      "duration": "2:25",
      "benefit": "Absurd fast-paced rhythm that breaks serious anger.",
      "language": "Malayalam"
    },
    {
      "id": "a128",
      "name": "Lajjavathiye",
      "artist": "Jassie Gift",
      "youtubeUrl": "https://www.youtube.com/embed/Tfi3oWgZp1Y",
      "duration": "4:45",
      "benefit": "Electric rap/rock to drive out frustration.",
      "language": "Malayalam"
    },
    {
      "id": "a129",
      "name": "Jhimikki Kammal",
      "artist": "Vineeth Sreenivasan",
      "youtubeUrl": "https://www.youtube.com/embed/FXiaIH49oAU",
      "duration": "3:20",
      "benefit": "Quirky dance beats that ease mental pressure.",
      "language": "Malayalam"
    },
    {
      "id": "a130",
      "name": "Ranam Title Track",
      "artist": "Jakes Bejoy",
      "youtubeUrl": "https://www.youtube.com/embed/imgLTADletc",
      "duration": "3:15",
      "benefit": "Aggressive street hip-hop beat for extreme confidence.",
      "language": "Malayalam"
    },
    {
      "id": "a131",
      "name": "Thekku Thekkoru",
      "artist": "Malayalam Folk",
      "youtubeUrl": "https://www.youtube.com/embed/A2U1RwKYH6g",
      "duration": "4:02",
      "benefit": "Aggressive folk chant that channels active energy.",
      "language": "Malayalam"
    },
    {
      "id": "a132",
      "name": "Ayyappanum Koshiyum Theme",
      "artist": "Jakes Bejoy",
      "youtubeUrl": "https://www.youtube.com/embed/fU0c6Jx3ALI",
      "duration": "3:45",
      "benefit": "Heavy acoustic face-off theme that matches confrontational mood.",
      "language": "Malayalam"
    },
    {
      "id": "a133",
      "name": "Kalapakkara",
      "artist": "Jakes Bejoy",
      "youtubeUrl": "https://www.youtube.com/embed/VzT2xurZrbI",
      "duration": "4:10",
      "benefit": "Fast dance track with heavy local brass.",
      "language": "Malayalam"
    },
    {
      "id": "a134",
      "name": "Lucifer Anthem",
      "artist": "Deepak Dev",
      "youtubeUrl": "https://www.youtube.com/embed/tIKE6Lfkgvc",
      "duration": "3:30",
      "benefit": "Dark orchestral theme celebrating power and strategy.",
      "language": "Malayalam"
    },
    {
      "id": "a135",
      "name": "Kurup Anthem",
      "artist": "Sushin Shyam",
      "youtubeUrl": "https://www.youtube.com/embed/-Q__mXqYo7Y",
      "duration": "3:12",
      "benefit": "Sleek retro-electronic drive for focused calm.",
      "language": "Malayalam"
    },
    {
      "id": "a136",
      "name": "Karutha Penne",
      "artist": "Malayalam Folk",
      "youtubeUrl": "https://www.youtube.com/embed/ppQPpShemEE",
      "duration": "3:50",
      "benefit": "Traditional fast rhythm to channel agitation.",
      "language": "Malayalam"
    },
    {
      "id": "a137",
      "name": "Dildhaak",
      "artist": "Sukhwinder Singh",
      "youtubeUrl": "https://www.youtube.com/embed/AhCjnsrN4eU",
      "duration": "3:33",
      "benefit": "High-octane Punjabi energy for breaking limits.",
      "language": "Punjabi"
    },
    {
      "id": "a138",
      "name": "Daku",
      "artist": "Chani Nattan",
      "youtubeUrl": "https://www.youtube.com/embed/WOdnRhWeHoY",
      "duration": "2:12",
      "benefit": "Heavy drill beats that channel raw power.",
      "language": "Punjabi"
    },
    {
      "id": "a139",
      "name": "We Rollin",
      "artist": "Shubh",
      "youtubeUrl": "https://www.youtube.com/embed/hV8EGTjzD2s",
      "duration": "3:19",
      "benefit": "Slick trap beats that cool anger into quiet swagger.",
      "language": "Punjabi"
    },
    {
      "id": "a140",
      "name": "Elevated",
      "artist": "Shubh",
      "youtubeUrl": "https://www.youtube.com/embed/KlJ5LNMYGw0",
      "duration": "3:20",
      "benefit": "Laidback trap beats for relaxed self-assurance.",
      "language": "Punjabi"
    },
    {
      "id": "a141",
      "name": "brown munde",
      "artist": "AP Dhillon",
      "youtubeUrl": "https://www.youtube.com/embed/ab-F3lRDqsc",
      "duration": "4:27",
      "benefit": "Smooth late-night hip-hop groove that relaxes and stabilizes.",
      "language": "Punjabi"
    },
    {
      "id": "a142",
      "name": "No Love",
      "artist": "Shubh",
      "youtubeUrl": "https://www.youtube.com/embed/6RrEQJNZwPQ",
      "duration": "2:50",
      "benefit": "Melancholic trap beats that process heartbreak rage.",
      "language": "Punjabi"
    },
    {
      "id": "a143",
      "name": "Legend",
      "artist": "Sidhu Moose Wala",
      "youtubeUrl": "https://www.youtube.com/embed/YZAFd9o3RYQ",
      "duration": "3:05",
      "benefit": "Aggressive rap asserting legacy over enemies.",
      "language": "Punjabi"
    },
    {
      "id": "a144",
      "name": "295",
      "artist": "Sidhu Moose Wala",
      "youtubeUrl": "https://www.youtube.com/embed/n_FCrCQ6-bA",
      "duration": "4:30",
      "benefit": "Lyrical defense against criticism with heavy beat.",
      "language": "Punjabi"
    },
    {
      "id": "a145",
      "name": "The Last Ride",
      "artist": "Sidhu Moose Wala",
      "youtubeUrl": "https://www.youtube.com/embed/6xoB4ZiKKn0",
      "duration": "4:12",
      "benefit": "Tribute track with an unyielding slow-march beat.",
      "language": "Punjabi"
    },
    {
      "id": "a146",
      "name": "So High",
      "artist": "Sidhu Moose Wala",
      "youtubeUrl": "https://www.youtube.com/embed/GgmFC8y8q3k",
      "duration": "3:56",
      "benefit": "Loud brass trap for maximum hype and power.",
      "language": "Punjabi"
    },
    {
      "id": "a147",
      "name": "Sayonee",
      "artist": "Junoon",
      "youtubeUrl": "https://www.youtube.com/embed/-8anr6et3Lw",
      "duration": "5:10",
      "benefit": "Sufi rock guitar solos that scream out frustration.",
      "language": "Urdu"
    },
    {
      "id": "a148",
      "name": "Jazba-e-Junoon",
      "artist": "Junoon",
      "youtubeUrl": "https://www.youtube.com/embed/MUrqb-FgCUI",
      "duration": "4:20",
      "benefit": "National rock anthem to focus anger into passion.",
      "language": "Urdu"
    },
    {
      "id": "a149",
      "name": "Pasoori",
      "artist": "Ali Sethi",
      "youtubeUrl": "https://www.youtube.com/embed/5Eqb_-j3FDA",
      "duration": "3:44",
      "benefit": "Bouncy pop that turns relationship spite into dance.",
      "language": "Urdu"
    },
    {
      "id": "a150",
      "name": "Tajdar-e-Haram",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/a18py61_F_w",
      "duration": "8:40",
      "benefit": "Soothing spiritual qawwali that cools down high anger.",
      "language": "Urdu"
    },
    {
      "id": "a151",
      "name": "Dam Mast Qalandar",
      "artist": "Nusrat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/v38w5djsbXM",
      "duration": "6:15",
      "benefit": "Ecstatic Sufi trance that channels energy upward.",
      "language": "Urdu"
    },
    {
      "id": "a152",
      "name": "Yeh Jo Halka Halka Suroor",
      "artist": "Nusrat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/UIPXHsUXVH0",
      "duration": "7:40",
      "benefit": "Intense harmonium and clapping for peak emotional release.",
      "language": "Urdu"
    },
    {
      "id": "a153",
      "name": "Afreen Afreen",
      "artist": "Rahat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/kw4tT7SCmaY",
      "duration": "5:45",
      "benefit": "Soft melody that cools aggressive thoughts.",
      "language": "Urdu"
    },
    {
      "id": "a154",
      "name": "Garmi-e-Hasrat-e-Nakaam",
      "artist": "Ghazal",
      "youtubeUrl": "https://www.youtube.com/embed/ON3noq9GqpM",
      "duration": "5:02",
      "benefit": "Refined classical poetry to channel sorrowful anger.",
      "language": "Urdu"
    },
    {
      "id": "a155",
      "name": "Dil Dil Pakistan",
      "artist": "Vital Signs",
      "youtubeUrl": "https://www.youtube.com/embed/eR_CV3Edxio",
      "duration": "4:15",
      "benefit": "Uplifting march that converts negative energy into unity.",
      "language": "Urdu"
    },
    {
      "id": "a156",
      "name": "Ko Ko Korina",
      "artist": "Ahmed Rushdi",
      "youtubeUrl": "https://www.youtube.com/embed/2egK7whteUA",
      "duration": "2:40",
      "benefit": "Upbeat retro swing to break serious tension.",
      "language": "Urdu"
    }
  ],
  "neutral": [
    {
      "id": "n1",
      "name": "Experience",
      "artist": "Ludovico Einaudi",
      "youtubeUrl": "https://www.youtube.com/embed/hN_q-_nGv6M",
      "duration": "5:15",
      "benefit": "Driving piano rhythm that builds gentle momentum for work.",
      "language": "English"
    },
    {
      "id": "n2",
      "name": "Lofi Girl - Chill Beats",
      "artist": "Lofi Girl",
      "youtubeUrl": "https://www.youtube.com/embed/jfKfPfyJRdk",
      "duration": "Live",
      "benefit": "Static-free concentration for long working hours.",
      "language": "English"
    },
    {
      "id": "n3",
      "name": "Bloom",
      "artist": "The Paper Kites",
      "youtubeUrl": "https://www.youtube.com/embed/8inJtTG_DuU",
      "duration": "3:30",
      "benefit": "Light acoustic steadiness for focused calm.",
      "language": "English"
    },
    {
      "id": "n4",
      "name": "Imagine",
      "artist": "John Lennon",
      "youtubeUrl": "https://www.youtube.com/embed/YkgkThdzX-8",
      "duration": "3:03",
      "benefit": "Timeless piano vision that steadies the mind.",
      "language": "English"
    },
    {
      "id": "n5",
      "name": "Breathe",
      "artist": "Pink Floyd",
      "youtubeUrl": "https://www.youtube.com/embed/EtP0fAxIbYo",
      "duration": "3:18",
      "benefit": "Cosmic soundscape for meditative work rhythm.",
      "language": "English"
    },
    {
      "id": "n6",
      "name": "Gymnopédie No. 1",
      "artist": "Erik Satie",
      "youtubeUrl": "https://www.youtube.com/embed/S-Xm7s9eGxU",
      "duration": "3:09",
      "benefit": "Gentle, sparse piano chords that remove room noise.",
      "language": "English"
    },
    {
      "id": "n7",
      "name": "Clair de Lune",
      "artist": "Claude Debussy",
      "youtubeUrl": "https://www.youtube.com/embed/vG-qmVIsNw0",
      "duration": "5:00",
      "benefit": "Fluid piano impressionism that eases executive function.",
      "language": "English"
    },
    {
      "id": "n8",
      "name": "Sunset Lover",
      "artist": "Petit Biscuit",
      "youtubeUrl": "https://www.youtube.com/embed/4fQeaM62mOY",
      "duration": "3:57",
      "benefit": "Light, repetitive electronic hooks for steady typing.",
      "language": "English"
    },
    {
      "id": "n9",
      "name": "Holocene",
      "artist": "Bon Iver",
      "youtubeUrl": "https://www.youtube.com/embed/TWcyIpul8OE",
      "duration": "5:36",
      "benefit": "Atmospheric acoustic folk that encourages quiet focus.",
      "language": "English"
    },
    {
      "id": "n10",
      "name": "First Step",
      "artist": "Hans Zimmer",
      "youtubeUrl": "https://www.youtube.com/embed/8kooIgKESYE",
      "duration": "1:47",
      "benefit": "Gradually building organ/synth piece that locks you in.",
      "language": "English"
    },
    {
      "id": "n11",
      "name": "Intro",
      "artist": "The xx",
      "youtubeUrl": "https://www.youtube.com/embed/9ehkgnqd35Y",
      "duration": "2:08",
      "benefit": "Minimalist guitar-led loop that blocks distractions.",
      "language": "English"
    },
    {
      "id": "n12",
      "name": "Time",
      "artist": "Hans Zimmer",
      "youtubeUrl": "https://www.youtube.com/embed/c56t7upa8Bk",
      "duration": "7:04",
      "benefit": "Cinematic string rise that builds intense focus.",
      "language": "English"
    },
    {
      "id": "n13",
      "name": "Aas Paas Hai Khuda",
      "artist": "Rahat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/W-w36767O80",
      "duration": "5:24",
      "benefit": "Peaceful sufi-pop for inner balance.",
      "language": "Hindi"
    },
    {
      "id": "n14",
      "name": "Khamoshiyaan",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/SOessajf_Ik",
      "duration": "5:19",
      "benefit": "Silence-filled Hindi ballad for inner clarity.",
      "language": "Hindi"
    },
    {
      "id": "n15",
      "name": "Iktara",
      "artist": "Tochi Raina & Kavita Seth",
      "youtubeUrl": "https://www.youtube.com/embed/fSS_R91Nimw",
      "duration": "4:13",
      "benefit": "Breezy Sufi-pop that calms while maintaining alert focus.",
      "language": "Hindi"
    },
    {
      "id": "n16",
      "name": "Kabira (Instrumental)",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/78r2zu15GT0",
      "duration": "4:00",
      "benefit": "Stripped-back flute version for quiet office hours.",
      "language": "Hindi"
    },
    {
      "id": "n17",
      "name": "Tum Se Hi (Instrumental)",
      "artist": "Pritam",
      "youtubeUrl": "https://www.youtube.com/embed/mt9xg0mmt28",
      "duration": "4:30",
      "benefit": "Familiar acoustic loop for stress-free focus.",
      "language": "Hindi"
    },
    {
      "id": "n18",
      "name": "Kun Faya Kun (Instrumental)",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/27CBPR7CSks",
      "duration": "6:00",
      "benefit": "Sufi meditation sans lyrics for steady work.",
      "language": "Hindi"
    },
    {
      "id": "n19",
      "name": "Kesariya",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/A05ND1C2m_c",
      "duration": "4:28",
      "benefit": "Bright romantic acoustic guitar for happy concentration.",
      "language": "Hindi"
    },
    {
      "id": "n20",
      "name": "Yeh Dooriyan",
      "artist": "Mohit Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/3EfX3kAM1Ks",
      "duration": "5:02",
      "benefit": "Gentle melancholic backing that fills background silence.",
      "language": "Hindi"
    },
    {
      "id": "n21",
      "name": "Phir Se Ud Chala",
      "artist": "Mohit Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/2mWaqsC3U7k",
      "duration": "4:33",
      "benefit": "Wandering acoustic track that frees creative thoughts.",
      "language": "Hindi"
    },
    {
      "id": "n22",
      "name": "Safarnama",
      "artist": "Lucky Ali",
      "youtubeUrl": "https://www.youtube.com/embed/7mTDBsdfw88",
      "duration": "4:11",
      "benefit": "Quiet travel-pop that keeps writing tasks moving.",
      "language": "Hindi"
    },
    {
      "id": "n23",
      "name": "O Sanam",
      "artist": "Lucky Ali",
      "youtubeUrl": "https://www.youtube.com/embed/dWqb-WqbGh8",
      "duration": "4:45",
      "benefit": "Vintage acoustic vibe that grounds attention.",
      "language": "Hindi"
    },
    {
      "id": "n24",
      "name": "Hairat",
      "artist": "Lucky Ali",
      "youtubeUrl": "https://www.youtube.com/embed/wqTQNs9sO6M",
      "duration": "4:10",
      "benefit": "Moderate rock tempo that sets a steady workspace pace.",
      "language": "Hindi"
    },
    {
      "id": "n25",
      "name": "Neene Neene",
      "artist": "Kunal Ganjawala",
      "youtubeUrl": "https://www.youtube.com/embed/FCAfwX5Tw9w",
      "duration": "4:42",
      "benefit": "Soothing melody from Aakash that supports gentle focus.",
      "language": "Kannada"
    },
    {
      "id": "n26",
      "name": "Hrudayake Hedarike",
      "artist": "Sanjith Hegde",
      "youtubeUrl": "https://www.youtube.com/embed/bmLujBmJ04E",
      "duration": "3:55",
      "benefit": "Soft Kannada vocals for peaceful concentration.",
      "language": "Kannada"
    },
    {
      "id": "n27",
      "name": "Iralaare Cheluve",
      "artist": "Kunal Ganjawala & Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/Ticza3cwbzI",
      "duration": "5:10",
      "benefit": "Gentle duet from Cheluvina Chittara for calm productivity.",
      "language": "Kannada"
    },
    {
      "id": "n28",
      "name": "Maleyali Jotheyali",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/IOjVYwd-EII",
      "duration": "4:30",
      "benefit": "Rainy melody that sets a reflective, focused mood.",
      "language": "Kannada"
    },
    {
      "id": "n29",
      "name": "Kanaso Idu",
      "artist": "Sonu Nigam & Sunidhi Chauhan",
      "youtubeUrl": "https://www.youtube.com/embed/2cp-Y26FgVw",
      "duration": "4:15",
      "benefit": "Dreamy Kannada classic for calm and creative focus.",
      "language": "Kannada"
    },
    {
      "id": "n30",
      "name": "Sanju Mattu Geetha",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/bR_qC0T_Q8Q",
      "duration": "4:20",
      "benefit": "Instrumental-like vocal warmth for steady reading.",
      "language": "Kannada"
    },
    {
      "id": "n31",
      "name": "Jothe Jotheyali",
      "artist": "Rajkumar",
      "youtubeUrl": "https://www.youtube.com/embed/hdBCzQC2Pps",
      "duration": "4:35",
      "benefit": "Nostalgic duet with a steady, relaxing tempo.",
      "language": "Kannada"
    },
    {
      "id": "n32",
      "name": "Ninnindale",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/RB0M2mD6eAo",
      "duration": "4:27",
      "benefit": "Soft melody that keeps your workspace feeling light.",
      "language": "Kannada"
    },
    {
      "id": "n33",
      "name": "Belageddu",
      "artist": "Vijay Prakash",
      "youtubeUrl": "https://www.youtube.com/embed/LvlSPl8Y13g",
      "duration": "3:45",
      "benefit": "Optimistic tempo that drives morning work focus.",
      "language": "Kannada"
    },
    {
      "id": "n34",
      "name": "Kanasalu Neene",
      "artist": "Sonu Nigam",
      "youtubeUrl": "https://www.youtube.com/embed/7CS11BGmP98",
      "duration": "4:18",
      "benefit": "Acoustic guitar backing that limits background distraction.",
      "language": "Kannada"
    },
    {
      "id": "n35",
      "name": "Bombe Adsonu",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/CBZsKMdZ030",
      "duration": "4:10",
      "benefit": "Lullaby backing for stress-free creative writing.",
      "language": "Kannada"
    },
    {
      "id": "n36",
      "name": "Preethsod Thappa",
      "artist": "S.P.B.",
      "youtubeUrl": "https://www.youtube.com/embed/C-srzTSMFzw",
      "duration": "4:40",
      "benefit": "Classic slow-beat track that anchors wandering minds.",
      "language": "Kannada"
    },
    {
      "id": "n37",
      "name": "Munbe Vaa",
      "artist": "Shreya Ghoshal & Naresh Iyer",
      "youtubeUrl": "https://www.youtube.com/embed/rp3_FhRnIRw",
      "duration": "5:58",
      "benefit": "Gentle Tamil spaciousness for quiet focus.",
      "language": "Tamil"
    },
    {
      "id": "n38",
      "name": "Kannazhaga",
      "artist": "Dhanush & Shruti",
      "youtubeUrl": "https://www.youtube.com/embed/vU29VfayVWw",
      "duration": "3:20",
      "benefit": "Hauntingly quiet melody to block out office noise.",
      "language": "Tamil"
    },
    {
      "id": "n39",
      "name": "Nenjukkul Peidhidum",
      "artist": "Hariharan",
      "youtubeUrl": "https://www.youtube.com/embed/FzLpP8VBC6E",
      "duration": "6:09",
      "benefit": "Rain-soaked acoustic guitar that triggers deep focus.",
      "language": "Tamil"
    },
    {
      "id": "n40",
      "name": "Hosanna",
      "artist": "Leon D'Souza",
      "youtubeUrl": "https://www.youtube.com/embed/80SnPnZkNTI",
      "duration": "5:30",
      "benefit": "Bittersweet pop that maintains a steady workflow.",
      "language": "Tamil"
    },
    {
      "id": "n41",
      "name": "Vaseegara",
      "artist": "Bombay Jayashri",
      "youtubeUrl": "https://www.youtube.com/embed/E9nnxE5eCc0",
      "duration": "5:02",
      "benefit": "Supremely calm female vocals that ease high stress.",
      "language": "Tamil"
    },
    {
      "id": "n42",
      "name": "Po Nee Po",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/5Y4FXI01HCA",
      "duration": "4:45",
      "benefit": "Stripped-back version for studying or coding.",
      "language": "Tamil"
    },
    {
      "id": "n43",
      "name": "Aaromale",
      "artist": "Alphons Joseph",
      "youtubeUrl": "https://www.youtube.com/embed/q7OUFE3dw6E",
      "duration": "4:55",
      "benefit": "Bluesy acoustic guitar loops for creative brainstorming.",
      "language": "Tamil"
    },
    {
      "id": "n44",
      "name": "Ennai Konjam",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/q92qnqIMkZs",
      "duration": "4:21",
      "benefit": "Light romantic pop that keeps you alert but calm.",
      "language": "Tamil"
    },
    {
      "id": "n45",
      "name": "Venmathi Venmathiye",
      "artist": "Bombay Jayashri",
      "youtubeUrl": "https://www.youtube.com/embed/PnV0RQ96XU4",
      "duration": "5:10",
      "benefit": "Nocturnal ambient classical elements for late-night work.",
      "language": "Tamil"
    },
    {
      "id": "n46",
      "name": "Nee Paartha Vizhigal",
      "artist": "Vijay Yesudas & Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/_IuJsaMqtqc",
      "duration": "4:10",
      "benefit": "Sweet melodic duet that maintains focused calm.",
      "language": "Tamil"
    },
    {
      "id": "n47",
      "name": "Unna Nenachu",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/jFWsj_QT0G8",
      "duration": "4:15",
      "benefit": "Deep vocal focus that limits workspace anxiety.",
      "language": "Tamil"
    },
    {
      "id": "n48",
      "name": "Idhazhin Oram",
      "artist": "Anirudh Ravichander",
      "youtubeUrl": "https://www.youtube.com/embed/lZORMUufA_Y",
      "duration": "4:38",
      "benefit": "Acoustic-pop backing for steady research work.",
      "language": "Tamil"
    },
    {
      "id": "n49",
      "name": "Inkem Inkem Inkem Kaavaale",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/55-_bXQ3x4c",
      "duration": "4:26",
      "benefit": "A mellow Telugu loop that supports patient attention.",
      "language": "Telugu"
    },
    {
      "id": "n50",
      "name": "Arjun Reddy Theme",
      "artist": "Sandeep Reddy Vanga",
      "youtubeUrl": "https://www.youtube.com/embed/eUaR5nK7sew",
      "duration": "5:12",
      "benefit": "Introspective Telugu instrumental for deep focus.",
      "language": "Telugu"
    },
    {
      "id": "n51",
      "name": "Priyathama Priyathama",
      "artist": "Chinmayi",
      "youtubeUrl": "https://www.youtube.com/embed/PlJ5A63tFP8",
      "duration": "4:07",
      "benefit": "Soft female vocals that reduce test-taking anxiety.",
      "language": "Telugu"
    },
    {
      "id": "n52",
      "name": "Samajavaragamana",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/tflQ33g6I8I",
      "duration": "3:49",
      "benefit": "Acoustic-heavy Telugu pop for relaxed concentration.",
      "language": "Telugu"
    },
    {
      "id": "n53",
      "name": "Srivalli",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/txHO7PLGE3o",
      "duration": "3:37",
      "benefit": "Moderate pace that helps you stay on task.",
      "language": "Telugu"
    },
    {
      "id": "n54",
      "name": "Ye Maaya Chesave",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/Wbs6pPJgBnA",
      "duration": "4:35",
      "benefit": "Dreamy synth pads that block environmental distractions.",
      "language": "Telugu"
    },
    {
      "id": "n55",
      "name": "Nee Jathaga",
      "artist": "Karthik",
      "youtubeUrl": "https://www.youtube.com/embed/XJelQ8FUZ0o",
      "duration": "5:12",
      "benefit": "Warm duet that supports focused administrative tasks.",
      "language": "Telugu"
    },
    {
      "id": "n56",
      "name": "Adiga Adiga",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/hJ4OL9NNeDY",
      "duration": "4:14",
      "benefit": "Heartfelt, slow-paced vocals that steady breathing.",
      "language": "Telugu"
    },
    {
      "id": "n57",
      "name": "Emai Poyave",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/Eyx0Hvi1_Ng",
      "duration": "4:05",
      "benefit": "Stripped modern track for steady coding sessions.",
      "language": "Telugu"
    },
    {
      "id": "n58",
      "name": "Yedetthu Mallele",
      "artist": "Sid Sriram",
      "youtubeUrl": "https://www.youtube.com/embed/n9I4Ut3-RUs",
      "duration": "4:30",
      "benefit": "Soft Telugu acoustics for background workspace texture.",
      "language": "Telugu"
    },
    {
      "id": "n59",
      "name": "Nee Kallalona",
      "artist": "Haricharan",
      "youtubeUrl": "https://www.youtube.com/embed/BrrWNfjgHGs",
      "duration": "4:18",
      "benefit": "Romantic backing that lightens heavy workloads.",
      "language": "Telugu"
    },
    {
      "id": "n60",
      "name": "Nuvvunte Naa Jathaga",
      "artist": "Anand Aravindakshan",
      "youtubeUrl": "https://www.youtube.com/embed/Zc7SeDL-0uE",
      "duration": "4:33",
      "benefit": "Cinematic rise that boosts writing momentum.",
      "language": "Telugu"
    },
    {
      "id": "n61",
      "name": "Through the Night",
      "artist": "IU",
      "youtubeUrl": "https://www.youtube.com/embed/BzYnNdJhZQw",
      "duration": "4:13",
      "benefit": "Lowers mental noise with a soothing Korean lullaby feel.",
      "language": "Korean"
    },
    {
      "id": "n62",
      "name": "Love Scenario",
      "artist": "iKON",
      "youtubeUrl": "https://www.youtube.com/embed/vecSVX1QYbQ",
      "duration": "3:29",
      "benefit": "Easy groove that supports focused low-stress flow.",
      "language": "Korean"
    },
    {
      "id": "n63",
      "name": "Spring Day",
      "artist": "BTS",
      "youtubeUrl": "https://www.youtube.com/embed/xEeFrLSkMm8",
      "duration": "4:34",
      "benefit": "Warm, mid-tempo groove that calms while maintaining pace.",
      "language": "Korean"
    },
    {
      "id": "n64",
      "name": "Breathe",
      "artist": "Lee Hi",
      "youtubeUrl": "https://www.youtube.com/embed/5iSlfF8TQ9k",
      "duration": "3:31",
      "benefit": "Compassionate pace that encourages breathing and focus.",
      "language": "Korean"
    },
    {
      "id": "n65",
      "name": "Eyes, Nose, Lips",
      "artist": "Taeyang",
      "youtubeUrl": "https://www.youtube.com/embed/UwuAPyOImoI",
      "duration": "4:24",
      "benefit": "Sparse piano chords for deep study focus.",
      "language": "Korean"
    },
    {
      "id": "n66",
      "name": "Lonely",
      "artist": "2NE1",
      "youtubeUrl": "https://www.youtube.com/embed/5n4V3lGEyG4",
      "duration": "3:23",
      "benefit": "Acoustic pop backing for simple repetitive tasks.",
      "language": "Korean"
    },
    {
      "id": "n67",
      "name": "Goodbye",
      "artist": "Park Hyo Shin",
      "youtubeUrl": "https://www.youtube.com/embed/Xp8Ep1W-azw",
      "duration": "4:45",
      "benefit": "Violin and piano backing that anchors writing tasks.",
      "language": "Korean"
    },
    {
      "id": "n68",
      "name": "Love Poem",
      "artist": "IU",
      "youtubeUrl": "https://www.youtube.com/embed/OcVmaIlHZ1o",
      "duration": "4:02",
      "benefit": "Soft strings that validate and steady the workspace.",
      "language": "Korean"
    },
    {
      "id": "n69",
      "name": "Haru Haru",
      "artist": "BIGBANG",
      "youtubeUrl": "https://www.youtube.com/embed/MzCbEdtNbJ0",
      "duration": "4:23",
      "benefit": "Acoustic piano version for moderate-focus tasks.",
      "language": "Korean"
    },
    {
      "id": "n70",
      "name": "If You",
      "artist": "BIGBANG",
      "youtubeUrl": "https://www.youtube.com/embed/6dXLXNMy-n4",
      "duration": "3:50",
      "benefit": "Acoustic guitar and gentle vocals for calm workspace.",
      "language": "Korean"
    },
    {
      "id": "n71",
      "name": "Lonely Night",
      "artist": "Kim Dong Ryul",
      "youtubeUrl": "https://www.youtube.com/embed/s3kgk65YIjA",
      "duration": "4:33",
      "benefit": "Baritone warmth that comforts late-night coding.",
      "language": "Korean"
    },
    {
      "id": "n72",
      "name": "Untitled, 2014",
      "artist": "G-Dragon",
      "youtubeUrl": "https://www.youtube.com/embed/9kaCAbIXuyg",
      "duration": "4:18",
      "benefit": "Stripped piano ballad that keeps focus centered.",
      "language": "Korean"
    },
    {
      "id": "n73",
      "name": "Koi",
      "artist": "Gen Hoshino",
      "youtubeUrl": "https://www.youtube.com/embed/jhOVib6nt_o",
      "duration": "4:11",
      "benefit": "Upbeat yet focused tempo for productive flow.",
      "language": "Japanese"
    },
    {
      "id": "n74",
      "name": "Sparkle",
      "artist": "RADWIMPS",
      "youtubeUrl": "https://www.youtube.com/embed/X6w5dKdfg-4",
      "duration": "6:49",
      "benefit": "Wide Japanese atmosphere for deep concentration.",
      "language": "Japanese"
    },
    {
      "id": "n75",
      "name": "Nandemonaiya",
      "artist": "RADWIMPS",
      "youtubeUrl": "https://www.youtube.com/embed/n89SKAymNfA",
      "duration": "5:44",
      "benefit": "Soft reflective pacing for calm, steady work.",
      "language": "Japanese"
    },
    {
      "id": "n76",
      "name": "Kaikai Kitan",
      "artist": "Eve",
      "youtubeUrl": "https://www.youtube.com/embed/1tk1pqwrOys",
      "duration": "3:41",
      "benefit": "Sharp but contained momentum for focused energy.",
      "language": "Japanese"
    },
    {
      "id": "n77",
      "name": "First Love",
      "artist": "Hikaru Utada",
      "youtubeUrl": "https://www.youtube.com/embed/o1sUaV6n7yQ",
      "duration": "4:17",
      "benefit": "Nostalgic piano elements that limit workspace stress.",
      "language": "Japanese"
    },
    {
      "id": "n78",
      "name": "Lemon",
      "artist": "Kenshi Yonezu",
      "youtubeUrl": "https://www.youtube.com/embed/SX_ViT4Ra7k",
      "duration": "4:16",
      "benefit": "Moderate pace that helps you stay on track.",
      "language": "Japanese"
    },
    {
      "id": "n79",
      "name": "Sakura",
      "artist": "Ikimono Gakari",
      "youtubeUrl": "https://www.youtube.com/embed/61z-cqg28R8",
      "duration": "5:30",
      "benefit": "Fresh acoustic guitars for morning productivity.",
      "language": "Japanese"
    },
    {
      "id": "n80",
      "name": "One More Time, One More Chance",
      "artist": "Masayoshi Yamazaki",
      "youtubeUrl": "https://www.youtube.com/embed/BqFftJDXii0",
      "duration": "5:32",
      "benefit": "Quiet acoustic backing for reading and editing.",
      "language": "Japanese"
    },
    {
      "id": "n81",
      "name": "Hanataba wo Kimi ni",
      "artist": "Hikaru Utada",
      "youtubeUrl": "https://www.youtube.com/embed/yCZFof7Y0tQ",
      "duration": "4:43",
      "benefit": "Mid-tempo pop that limits workspace fatigue.",
      "language": "Japanese"
    },
    {
      "id": "n82",
      "name": "Kawaranai Mono",
      "artist": "Oku Hanako",
      "youtubeUrl": "https://www.youtube.com/embed/I2GlOVUP8WM",
      "duration": "5:04",
      "benefit": "Simple piano backing for analytical tasks.",
      "language": "Japanese"
    },
    {
      "id": "n83",
      "name": "Snow Flower",
      "artist": "Mika Nakashima",
      "youtubeUrl": "https://www.youtube.com/embed/mF5Qq2YheTg",
      "duration": "5:10",
      "benefit": "Winter synth backing for calm workspace atmosphere.",
      "language": "Japanese"
    },
    {
      "id": "n84",
      "name": "Planetarium",
      "artist": "Ai Otsuka",
      "youtubeUrl": "https://www.youtube.com/embed/t6xdg6TKbyQ",
      "duration": "5:11",
      "benefit": "Warm traditional instruments for creative focus.",
      "language": "Japanese"
    },
    {
      "id": "n85",
      "name": "Eres",
      "artist": "Cafe Tacvba",
      "youtubeUrl": "https://www.youtube.com/embed/98Akpf1ph2o",
      "duration": "4:41",
      "benefit": "Soft Spanish steadiness for emotional reset.",
      "language": "Spanish"
    },
    {
      "id": "n86",
      "name": "Ojos Claros",
      "artist": "Zahara",
      "youtubeUrl": "https://www.youtube.com/embed/UlUDv_4DDO0",
      "duration": "3:44",
      "benefit": "Spanish flamenco restraint for focused energy.",
      "language": "Spanish"
    },
    {
      "id": "n87",
      "name": "Recuérdame",
      "artist": "Carlos Rivera",
      "youtubeUrl": "https://www.youtube.com/embed/cfzmjgpx-VE",
      "duration": "3:18",
      "benefit": "Gentle acoustic lullaby that lowers test-taking stress.",
      "language": "Spanish"
    },
    {
      "id": "n88",
      "name": "Sofia",
      "artist": "Alvaro Soler",
      "youtubeUrl": "https://www.youtube.com/embed/qaZ0oAh4evU",
      "duration": "3:30",
      "benefit": "Cheerful bounce that keeps mundane tasks light.",
      "language": "Spanish"
    },
    {
      "id": "n89",
      "name": "La Bicicleta",
      "artist": "Carlos Vives & Shakira",
      "youtubeUrl": "https://www.youtube.com/embed/-UV0QGLmYys",
      "duration": "3:49",
      "benefit": "Moderate Latin pace that helps you stay awake during work.",
      "language": "Spanish"
    },
    {
      "id": "n90",
      "name": "Despacito",
      "artist": "Luis Fonsi",
      "youtubeUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
      "duration": "3:48",
      "benefit": "Swaying acoustic rhythm that keeps background stress low.",
      "language": "Spanish"
    },
    {
      "id": "n91",
      "name": "Bailando",
      "artist": "Enrique Iglesias",
      "youtubeUrl": "https://www.youtube.com/embed/NUsoVlDFqZg",
      "duration": "4:03",
      "benefit": "Acoustic pop backing for coding or designing.",
      "language": "Spanish"
    },
    {
      "id": "n92",
      "name": "Mi Gente",
      "artist": "J Balvin",
      "youtubeUrl": "https://www.youtube.com/embed/wnJ6LuUFpMo",
      "duration": "3:05",
      "benefit": "Repetitive rhythm loop that anchors wandering thoughts.",
      "language": "Spanish"
    },
    {
      "id": "n93",
      "name": "Si Tú No Estás Aquí",
      "artist": "Rosana",
      "youtubeUrl": "https://www.youtube.com/embed/sKoK3XnTd3g",
      "duration": "4:18",
      "benefit": "Soft vocals that limit environmental noise.",
      "language": "Spanish"
    },
    {
      "id": "n94",
      "name": "Puedo Escribir",
      "artist": "Natalia Lafourcade",
      "youtubeUrl": "https://www.youtube.com/embed/aa3O7BbCv5M",
      "duration": "3:32",
      "benefit": "Folk guitar backing for reading and deep focus.",
      "language": "Spanish"
    },
    {
      "id": "n95",
      "name": "Un Año",
      "artist": "Sebastián Yatra",
      "youtubeUrl": "https://www.youtube.com/embed/ghAvJMxE1qo",
      "duration": "3:36",
      "benefit": "Light acoustic-pop for administrative tasks.",
      "language": "Spanish"
    },
    {
      "id": "n96",
      "name": "Inevitable",
      "artist": "Shakira",
      "youtubeUrl": "https://www.youtube.com/embed/nYbcVK2jjXc",
      "duration": "3:10",
      "benefit": "Acoustic Shakira track that provides workspace calm.",
      "language": "Spanish"
    },
    {
      "id": "n97",
      "name": "Je veux",
      "artist": "Zaz",
      "youtubeUrl": "https://www.youtube.com/embed/Tm88QAI8I5A",
      "duration": "3:39",
      "benefit": "Lively but balanced rhythm for daily tasks.",
      "language": "French"
    },
    {
      "id": "n98",
      "name": "Alors on Danse",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/VHoT4N43jK8",
      "duration": "3:26",
      "benefit": "A consistent French pulse that keeps the mind moving.",
      "language": "French"
    },
    {
      "id": "n99",
      "name": "On Ira",
      "artist": "Zaz",
      "youtubeUrl": "https://www.youtube.com/embed/8IjWHBGzsu4",
      "duration": "3:37",
      "benefit": "Light French optimism for balanced daily flow.",
      "language": "French"
    },
    {
      "id": "n100",
      "name": "Ne Me Quitte Pas",
      "artist": "Jacques Brel",
      "youtubeUrl": "https://www.youtube.com/embed/0k63grkip5I",
      "duration": "3:49",
      "benefit": "Slow, dramatic orchestration that keeps you seated and focused.",
      "language": "French"
    },
    {
      "id": "n101",
      "name": "Dernière Danse",
      "artist": "Indila",
      "youtubeUrl": "https://www.youtube.com/embed/K5KAc5CoCuk",
      "duration": "3:33",
      "benefit": "String-driven waltz tempo that drives focused writing.",
      "language": "French"
    },
    {
      "id": "n102",
      "name": "Je Suis Malade",
      "artist": "Serge Lama",
      "youtubeUrl": "https://www.youtube.com/embed/HDbpZpm9j9c",
      "duration": "4:45",
      "benefit": "Intense classical chanson backing for deep coding.",
      "language": "French"
    },
    {
      "id": "n103",
      "name": "La Vie en Rose",
      "artist": "Édith Piaf",
      "youtubeUrl": "https://www.youtube.com/embed/rzeLynj1GYM",
      "duration": "3:07",
      "benefit": "Warm brass backing for historic or creative research.",
      "language": "French"
    },
    {
      "id": "n104",
      "name": "Formidable",
      "artist": "Stromae",
      "youtubeUrl": "https://www.youtube.com/embed/S_xH7noaqTA",
      "duration": "3:28",
      "benefit": "Slower spoken-word style that keeps focus centered.",
      "language": "French"
    },
    {
      "id": "n105",
      "name": "Comme Toi",
      "artist": "Jean-Jacques Goldman",
      "youtubeUrl": "https://www.youtube.com/embed/ySZBnMukO8g",
      "duration": "3:40",
      "benefit": "Soft violin and vocal that lowers workspace stress.",
      "language": "French"
    },
    {
      "id": "n106",
      "name": "L'Hymne à l'Amour",
      "artist": "Édith Piaf",
      "youtubeUrl": "https://www.youtube.com/embed/QYgVDXUIAuo",
      "duration": "3:30",
      "benefit": "Symphonic rise that boosts late-stage work momentum.",
      "language": "French"
    },
    {
      "id": "n107",
      "name": "Pagla Hawar Badol Dine",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/yn9Pnp1m650",
      "duration": "4:17",
      "benefit": "Bengali lyricism that clears emotional residue.",
      "language": "Bengali"
    },
    {
      "id": "n108",
      "name": "Tomay Hrid Majhare",
      "artist": "Animesh Roy",
      "youtubeUrl": "https://www.youtube.com/embed/YI6q66zI01Y",
      "duration": "4:00",
      "benefit": "Acoustic folk instruments that ground attention.",
      "language": "Bengali"
    },
    {
      "id": "n109",
      "name": "Amake Amar Moto Thakte Dao",
      "artist": "Anupam Roy",
      "youtubeUrl": "https://www.youtube.com/embed/vYsfSlEBh5Y",
      "duration": "5:20",
      "benefit": "Quiet acoustic backing for writing or reading.",
      "language": "Bengali"
    },
    {
      "id": "n110",
      "name": "Tomake Chai",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/1f18irP--O8",
      "duration": "4:16",
      "benefit": "Soft acoustic ballad that lowers workspace tension.",
      "language": "Bengali"
    },
    {
      "id": "n111",
      "name": "Bolte Bolte Cholte Cholte",
      "artist": "Imran Mahmudul",
      "youtubeUrl": "https://www.youtube.com/embed/1xj4uxbf5qo",
      "duration": "4:30",
      "benefit": "Repetitive pop structure that supports simple tasks.",
      "language": "Bengali"
    },
    {
      "id": "n112",
      "name": "Tumi Robe Nirobe",
      "artist": "Rabindrasangeet",
      "youtubeUrl": "https://www.youtube.com/embed/FN5g9etOk4Y",
      "duration": "4:50",
      "benefit": "Tagore's silent companionship song for study focus.",
      "language": "Bengali"
    },
    {
      "id": "n113",
      "name": "Bojhena Shey Bojhena",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/J2JQQm1h6xQ",
      "duration": "3:25",
      "benefit": "Mid-tempo Bengali pop for office tasks.",
      "language": "Bengali"
    },
    {
      "id": "n114",
      "name": "Ami Je Tomar",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/FGNc3BibU3o",
      "duration": "4:45",
      "benefit": "Classical elements that increase study focus.",
      "language": "Bengali"
    },
    {
      "id": "n115",
      "name": "Mon Majhi Re",
      "artist": "Arijit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/eORVpaICbzk",
      "duration": "4:10",
      "benefit": "Spacious backdrop that helps limit environment noise.",
      "language": "Bengali"
    },
    {
      "id": "n116",
      "name": "Ekhon Onek Raat",
      "artist": "Anupam Roy",
      "youtubeUrl": "https://www.youtube.com/embed/0Xo4LjJ527Q",
      "duration": "4:38",
      "benefit": "Late-night acoustic guitar that steadies midnight work.",
      "language": "Bengali"
    },
    {
      "id": "n117",
      "name": "Man Udhan Varyache",
      "artist": "Shankar Mahadevan",
      "youtubeUrl": "https://www.youtube.com/embed/XZogVSlBB34",
      "duration": "4:40",
      "benefit": "A breezy Marathi track for balanced mental reset.",
      "language": "Marathi"
    },
    {
      "id": "n118",
      "name": "Jeev Rangla",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/en60_iC0u2M",
      "duration": "4:39",
      "benefit": "Deep acoustic strings for focused analytical thinking.",
      "language": "Marathi"
    },
    {
      "id": "n119",
      "name": "Mala Ved Laagale",
      "artist": "Swapnil Bandodkar",
      "youtubeUrl": "https://www.youtube.com/embed/PdR2og6V3DM",
      "duration": "4:18",
      "benefit": "Comforting romantic backing for stress-free tasks.",
      "language": "Marathi"
    },
    {
      "id": "n120",
      "name": "Dev Manus",
      "artist": "Ajay-Atul",
      "youtubeUrl": "https://www.youtube.com/embed/SslPVXT2y9I",
      "duration": "4:25",
      "benefit": "Quiet symphonic movements that ease mental load.",
      "language": "Marathi"
    },
    {
      "id": "n121",
      "name": "Jiv Ha Sang Na",
      "artist": "Atul Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/E6qcW9XPThw",
      "duration": "4:50",
      "benefit": "Deep, slow-paced vocals that limit office stress.",
      "language": "Marathi"
    },
    {
      "id": "n122",
      "name": "Tu Mala Mi Tula",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/EdoqnBLbwfM",
      "duration": "4:30",
      "benefit": "Balanced duet that keeps workspace calm.",
      "language": "Marathi"
    },
    {
      "id": "n123",
      "name": "Sairat Zaala Ji",
      "artist": "Ajay Gogavale",
      "youtubeUrl": "https://www.youtube.com/embed/ZL3MnrnLLpo",
      "duration": "5:51",
      "benefit": "Grand background strings that elevate concentration.",
      "language": "Marathi"
    },
    {
      "id": "n124",
      "name": "Zara Zara",
      "artist": "Bombay Jayashri",
      "youtubeUrl": "https://www.youtube.com/embed/sjij_VKa2QQ",
      "duration": "5:46",
      "benefit": "Soothing female vocals for peak workspace relaxation.",
      "language": "Marathi"
    },
    {
      "id": "n125",
      "name": "Hi Chal Turu Turu",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/L-7IgNmh25s",
      "duration": "4:05",
      "benefit": "Familiar nostalgic backing that keeps daily work light.",
      "language": "Marathi"
    },
    {
      "id": "n126",
      "name": "Apsara Aali",
      "artist": "Bela Shende",
      "youtubeUrl": "https://www.youtube.com/embed/a6iA2HgamOE",
      "duration": "5:10",
      "benefit": "Traditional rhythms kept at moderate volume for focus.",
      "language": "Marathi"
    },
    {
      "id": "n127",
      "name": "Poove Poochudamathe",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/hUCgLI0U-9I",
      "duration": "4:07",
      "benefit": "Balanced Malayalam melody for calm productivity.",
      "language": "Malayalam"
    },
    {
      "id": "n128",
      "name": "Aaromale",
      "artist": "Alphons Joseph",
      "youtubeUrl": "https://www.youtube.com/embed/q7OUFE3dw6E",
      "duration": "4:55",
      "benefit": "Haunting acoustic guitar loops for creative flow.",
      "language": "Malayalam"
    },
    {
      "id": "n129",
      "name": "Malare",
      "artist": "Vijay Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/0G2VxhV_gXM",
      "duration": "4:28",
      "benefit": "Sweet, clean acoustic track for quiet workspace.",
      "language": "Malayalam"
    },
    {
      "id": "n130",
      "name": "Kaathirunnu Kaathirunnu",
      "artist": "K. J. Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/qycMVIrlO5s",
      "duration": "4:45",
      "benefit": "Slow-paced classical backing for writing and coding.",
      "language": "Malayalam"
    },
    {
      "id": "n131",
      "name": "Pularumo",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/bPvuA2EmILs",
      "duration": "4:10",
      "benefit": "Gentle morning track that aids calm awakening.",
      "language": "Malayalam"
    },
    {
      "id": "n132",
      "name": "Etho Varmukilin",
      "artist": "K. J. Yesudas",
      "youtubeUrl": "https://www.youtube.com/embed/ibGZ1Q2MDaI",
      "duration": "4:35",
      "benefit": "Traditional flute elements that limit environment noise.",
      "language": "Malayalam"
    },
    {
      "id": "n133",
      "name": "Ennu Ninte Moideen",
      "artist": "Haricharan",
      "youtubeUrl": "https://www.youtube.com/embed/graP-a1MxN4",
      "duration": "4:20",
      "benefit": "Warm, slow build that locks you into study sessions.",
      "language": "Malayalam"
    },
    {
      "id": "n134",
      "name": "Aayiram Kannumai",
      "artist": "Vineeth Sreenivasan",
      "youtubeUrl": "https://www.youtube.com/embed/IcTHBfdXILQ",
      "duration": "4:05",
      "benefit": "Breezy acoustic backing for repetitive administrative tasks.",
      "language": "Malayalam"
    },
    {
      "id": "n135",
      "name": "Hridayathin",
      "artist": "K. S. Chithra",
      "youtubeUrl": "https://www.youtube.com/embed/is_43chIepQ",
      "duration": "4:30",
      "benefit": "Calm classical female vocal for deep concentration.",
      "language": "Malayalam"
    },
    {
      "id": "n136",
      "name": "Munbe Vaa",
      "artist": "Shreya Ghoshal",
      "youtubeUrl": "https://www.youtube.com/embed/ebUJKhC9Uk0",
      "duration": "5:58",
      "benefit": "Spacious crossover backing that boosts creative focus.",
      "language": "Malayalam"
    },
    {
      "id": "n137",
      "name": "Laung Laachi",
      "artist": "Mannat Noor",
      "youtubeUrl": "https://www.youtube.com/embed/ZCYlZzSbxwI",
      "duration": "3:47",
      "benefit": "Traditional acoustic rhythm for stress-free focus.",
      "language": "Punjabi"
    },
    {
      "id": "n138",
      "name": "Ikk Kudi",
      "artist": "Shahid Mallya",
      "youtubeUrl": "https://www.youtube.com/embed/cyKZXbxx2lc",
      "duration": "3:52",
      "benefit": "Beautiful acoustic Punjabi guitar for studying.",
      "language": "Punjabi"
    },
    {
      "id": "n139",
      "name": "Qismat",
      "artist": "Ammy Virk",
      "youtubeUrl": "https://www.youtube.com/embed/9xVp8m0fJSg",
      "duration": "5:00",
      "benefit": "Slow-paced ballad that provides quiet space.",
      "language": "Punjabi"
    },
    {
      "id": "n140",
      "name": "Ranjha",
      "artist": "B Praak",
      "youtubeUrl": "https://www.youtube.com/embed/V7LwfY5U5WI",
      "duration": "4:15",
      "benefit": "Comforting classical elements for workspace balance.",
      "language": "Punjabi"
    },
    {
      "id": "n141",
      "name": "Akhiyan De Kol",
      "artist": "Rahat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/kq19ZFnmze8",
      "duration": "4:30",
      "benefit": "Sufi vocals that help clear mental noise.",
      "language": "Punjabi"
    },
    {
      "id": "n142",
      "name": "Mann Bharrya",
      "artist": "B Praak",
      "youtubeUrl": "https://www.youtube.com/embed/YrUqw7uspKg",
      "duration": "4:09",
      "benefit": "Stripped version for coding or researching.",
      "language": "Punjabi"
    },
    {
      "id": "n143",
      "name": "Kali Kali Zulfon",
      "artist": "Nusrat Fateh Ali Khan",
      "youtubeUrl": "https://www.youtube.com/embed/QPA0HToz3oU",
      "duration": "6:30",
      "benefit": "Traditional harmonium backing for rhythmic focus.",
      "language": "Punjabi"
    },
    {
      "id": "n144",
      "name": "Teri Mitti",
      "artist": "B Praak",
      "youtubeUrl": "https://www.youtube.com/embed/lIWCSQcfdmg",
      "duration": "5:27",
      "benefit": "Slow, majestic march that keeps you centered.",
      "language": "Punjabi"
    },
    {
      "id": "n145",
      "name": "Taaron Ke Shehar",
      "artist": "Jubin Nautiyal",
      "youtubeUrl": "https://www.youtube.com/embed/VAZxSoKb65o",
      "duration": "4:30",
      "benefit": "Calming modern pop backing for creative tasks.",
      "language": "Punjabi"
    },
    {
      "id": "n146",
      "name": "Haye O Meri Jaan",
      "artist": "Gurdas Maan",
      "youtubeUrl": "https://www.youtube.com/embed/LqzTEbmJjZY",
      "duration": "5:15",
      "benefit": "Generational acoustic wisdom for slow, steady focus.",
      "language": "Punjabi"
    },
    {
      "id": "n147",
      "name": "Tajdar-e-Haram",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/a18py61_F_w",
      "duration": "8:40",
      "benefit": "Spiritual Sufi qawwali that clears workspace anxiety.",
      "language": "Urdu"
    },
    {
      "id": "n148",
      "name": "Woh Lamhe",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/FLKxnL7KwHw",
      "duration": "5:30",
      "benefit": "Mellow rock backing that maintains a steady pace.",
      "language": "Urdu"
    },
    {
      "id": "n149",
      "name": "Tere Liye",
      "artist": "Ali Zafar",
      "youtubeUrl": "https://www.youtube.com/embed/oUM-fttuDqw",
      "duration": "4:45",
      "benefit": "Soft romantic pop that limits environment noise.",
      "language": "Urdu"
    },
    {
      "id": "n150",
      "name": "Hoshwalon Ko Khabar Kya",
      "artist": "Jagjit Singh",
      "youtubeUrl": "https://www.youtube.com/embed/ag3ENMEV89o",
      "duration": "5:50",
      "benefit": "Timeless ghazal that lowers heart rate and aids focus.",
      "language": "Urdu"
    },
    {
      "id": "n151",
      "name": "Lag Ja Gale",
      "artist": "Lata Mangeshkar",
      "youtubeUrl": "https://www.youtube.com/embed/y2fgw1Oqz28",
      "duration": "3:45",
      "benefit": "Classic vintage romance that brings peace to workspace.",
      "language": "Urdu"
    },
    {
      "id": "n152",
      "name": "Kuch Na Kaho",
      "artist": "Kumar Sanu",
      "youtubeUrl": "https://www.youtube.com/embed/LLcpGkuQ32o",
      "duration": "5:28",
      "benefit": "Quiet ballad for analytical and editing tasks.",
      "language": "Urdu"
    },
    {
      "id": "n153",
      "name": "Ye Jo Des Hai Tera",
      "artist": "A.R. Rahman",
      "youtubeUrl": "https://www.youtube.com/embed/4tiVPuLbbHg",
      "duration": "6:05",
      "benefit": "Inspiring instrumental elements for writing motivation.",
      "language": "Urdu"
    },
    {
      "id": "n154",
      "name": "Aaj Jaane Ki Zid Na Karo",
      "artist": "Farida Khanum",
      "youtubeUrl": "https://www.youtube.com/embed/KDJL2FyRDeA",
      "duration": "7:20",
      "benefit": "Slow, elegant ghazal that holds concentration for hours.",
      "language": "Urdu"
    },
    {
      "id": "n155",
      "name": "Dil Diyan Gallan",
      "artist": "Atif Aslam",
      "youtubeUrl": "https://www.youtube.com/embed/SAcpESN_Fk4",
      "duration": "4:50",
      "benefit": "Whispery Urdu pop backing for steady study.",
      "language": "Urdu"
    },
    {
      "id": "n156",
      "name": "Bol Hu",
      "artist": "Soch the Band",
      "youtubeUrl": "https://www.youtube.com/embed/KmErtNSs5ak",
      "duration": "4:35",
      "benefit": "Sufi-rock transition that builds focused creative momentum.",
      "language": "Urdu"
    }
  ]
};

export const AVAILABLE_LANGUAGES = Array.from(
  new Set(
    Object.values(MUSIC_DB)
      .flat()
      .map((song) => song.language)
  )
).sort((a, b) => a.localeCompare(b));

export const EMOTION_MAP: Record<Emotion, { label: string; color: string; emoji: string }> = {
  happy: { label: 'Uplifting & Energetic', color: '#FFD700', emoji: '😊' },
  sad: { label: 'Calming & Healing', color: '#4FC3F7', emoji: '😢' },
  angry: { label: 'Soothing & Relaxing', color: '#FF6B6B', emoji: '😡' },
  neutral: { label: 'Focus & Productivity', color: '#80CBC4', emoji: '😐' }
};
