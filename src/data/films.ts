export interface Film {
  id: number;
  title: string;
  year: number;
  genre: string[];
  director: string;
  cast: string[];
  language: string;
  synopsis: string;
  rating?: string;
  status: 'released' | 'upcoming' | 'post-production';
  poster: string;
  trailer?: string;
  streamingPlatform?: string;
  budget?: string;
  boxOffice?: string;
}

export const films: Film[] = [
  {
    id: 1,
    title: "Khaidi No. 150",
    year: 2017,
    genre: ["Action", "Comedy", "Drama"],
    director: "V. V. Vinayak",
    cast: ["Chiranjeevi", "Kajal Aggarwal", "Ram Charan"],
    language: "Telugu",
    synopsis: "A taxi driver finds himself in a situation where he must fight against a powerful land grabber to protect innocent villagers. Marked Megastar Chiranjeevi's grand comeback with his 150th film.",
    rating: "5.8",
    status: "released",
    poster: "https://images.pexels.com/photos/7292783/pexels-photo-7292783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
    trailer: "https://www.youtube.com/watch?v=nXz6MXGX0Ew",
    streamingPlatform: "Amazon Prime Video",
    budget: "₹60 Crore",
    boxOffice: "₹186 Crore"
  },
  {
    id: 2,
    title: "Sye Raa Narasimha Reddy",
    year: 2019,
    genre: ["Historical", "Action", "Epic"],
    director: "Surender Reddy",
    cast: ["Chiranjeevi", "Amitabh Bachchan", "Nayanthara", "Tamannaah", "Vijay Sethupathi", "Sudeep"],
    language: "Telugu, Hindi, Tamil, Kannada, Malayalam",
    synopsis: "Based on the life of freedom fighter Uyyalawada Narasimha Reddy, who led a rebellion against the British East India Company in 1846, ten years before the first war of Indian independence.",
    rating: "7.2",
    status: "released",
    poster: "https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
    trailer: "https://www.youtube.com/watch?v=bSnSLoBx3ck",
    streamingPlatform: "Netflix",
    budget: "₹270 Crore",
    boxOffice: "₹290 Crore"
  },
  {
    id: 3,
    title: "Acharya",
    year: 2022,
    genre: ["Action", "Drama"],
    director: "Koratala Siva",
    cast: ["Chiranjeevi", "Ram Charan", "Pooja Hegde", "Sonu Sood"],
    language: "Telugu",
    synopsis: "A middle-aged Naxalite fights against the exploitation of sacred temple lands and missing donations, while a water conservation activist uncovers corruption within the temple ecosystem.",
    rating: "3.8",
    status: "released",
    poster: "https://images.pexels.com/photos/31158869/pexels-photo-31158869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
    trailer: "https://www.youtube.com/watch?v=MKxRh7NMz1E",
    streamingPlatform: "Amazon Prime Video",
    budget: "₹140 Crore"
  },
  {
    id: 4,
    title: "Godfather",
    year: 2022,
    genre: ["Political", "Action", "Thriller"],
    director: "Mohan Raja",
    cast: ["Chiranjeevi", "Salman Khan", "Nayanthara", "Satyadev"],
    language: "Telugu",
    synopsis: "An orphan who became the right-hand man of a powerful political leader, fights to protect his mentor's legacy after his death, navigating through treacherous political waters.",
    rating: "5.1",
    status: "released",
    poster: "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
    trailer: "https://www.youtube.com/watch?v=1I9yGPQaQcE",
    streamingPlatform: "Netflix",
    budget: "₹100 Crore"
  }
];

export const upcomingFilms: Film[] = [
  {
    id: 5,
    title: "Peddi",
    year: 2026,
    genre: ["Sports", "Action", "Drama"],
    director: "Buchi Babu Sana",
    cast: ["Ram Charan", "Janhvi Kapoor", "Shiva Rajkumar", "Jagapathi Babu", "Divyenndu", "Boman Irani"],
    language: "Telugu",
    synopsis: "A rustic, emotional sports drama set in rural Andhra Pradesh. Ram Charan stars in the titular role in this village sports drama with music by A.R. Rahman.",
    status: "post-production",
    poster: "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
    streamingPlatform: "Netflix",
    budget: "₹200 Crore (est.)"
  }
];

export const timeline = [
  { year: 2016, event: "Konidela Production Company founded by Ram Charan in Hyderabad" },
  { year: 2017, event: "Debut film Khaidi No. 150 — Chiranjeevi's blockbuster comeback with his 150th film" },
  { year: 2019, event: "Sye Raa Narasimha Reddy — Historical epic with Chiranjeevi & Amitabh Bachchan, ₹270 Cr budget" },
  { year: 2022, event: "Acharya & Godfather — Father-son duo Chiranjeevi & Ram Charan share the screen" },
  { year: 2022, event: "RRR wins Oscar for Best Original Song — Ram Charan's global breakthrough" },
  { year: 2025, event: "Game Changer released — Ram Charan stars in S. Shankar's political thriller" },
  { year: 2026, event: "Peddi — Ram Charan's sports drama with A.R. Rahman music, targeting theatrical release" }
];

export const teamMembers = [
  {
    name: "Ram Charan",
    role: "Founder & Producer",
    bio: "Actor, producer, and entrepreneur. Founded Konidela Production Company in 2016. Star of RRR, Rangasthalam, and Magadheera. Winner of 4 Filmfare Awards and recipient of international recognition at IFFM.",
    image: "https://images.pexels.com/photos/7991171/pexels-photo-7991171.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
  },
  {
    name: "Chiranjeevi",
    role: "Megastar & Lead Actor",
    bio: "Legendary actor with 150+ films in a career spanning 4 decades. Known as the 'Megastar' of Telugu cinema. Padma Bhushan awardee. Stars in the production house's flagship films.",
    image: "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
  },
  {
    name: "Surekha Konidela",
    role: "Presenter",
    bio: "Matriarch of the Konidela family. Films under the banner are presented by Surekha Konidela, reflecting the family-driven philosophy of the production house.",
    image: "https://images.pexels.com/photos/7991501/pexels-photo-7991501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
  }
];

export const awards = [
  { title: "Zee Telugu Cine Award", category: "Best Actor in a Leading Role", film: "Sye Raa Narasimha Reddy", recipient: "Chiranjeevi", year: 2020 },
  { title: "SIIMA Award Nomination", category: "Best Playback Singer - Female", film: "Sye Raa Narasimha Reddy", recipient: "Shreya Ghoshal & Sunidhi Chauhan", year: 2020 },
  { title: "Filmfare Best Actor - Telugu", category: "Best Actor", film: "RRR / Rangasthalam", recipient: "Ram Charan", year: 2022 },
  { title: "Academy Award (Oscar)", category: "Best Original Song — Naatu Naatu", film: "RRR (Ram Charan starrer)", recipient: "M.M. Keeravani", year: 2023 },
  { title: "Golden Globe Award", category: "Best Original Song", film: "RRR (Ram Charan starrer)", recipient: "M.M. Keeravani", year: 2023 },
  { title: "Critics Choice Super Award", category: "Best Actor in Action Movie (Nomination)", film: "RRR", recipient: "Ram Charan", year: 2023 },
  { title: "IFFM Award", category: "Best Actor", film: "RRR", recipient: "Ram Charan", year: 2024 }
];

export const newsItems = [
  {
    title: "Peddi: Ram Charan's Sports Drama Wraps Filming",
    date: "April 2026",
    excerpt: "Ram Charan's highly anticipated sports drama 'Peddi' directed by Buchi Babu Sana has completed filming. The movie features music by A.R. Rahman and streams on Netflix.",
    source: "Hindustan Times"
  },
  {
    title: "Chiranjeevi's Vishwambhara Targets Dussehra 2026 Release",
    date: "July 2026",
    excerpt: "Megastar Chiranjeevi's socio-fantasy epic 'Vishwambhara' with Oscar-winner MM Keeravani's music is targeting October 2026 release, with extensive VFX work by international artists.",
    source: "Times of India"
  },
  {
    title: "Mana Shankara Vara Prasad Garu Crosses ₹300 Crore",
    date: "January 2026",
    excerpt: "Chiranjeevi's Sankranthi release 'Mana Shankara Vara Prasad Garu' directed by Anil Ravipudi crosses ₹300 crore at the box office, featuring Venkatesh and Nayanthara.",
    source: "Industry Reports"
  },
  {
    title: "Ram Charan's RC17 with Director Sukumar Announced",
    date: "2024",
    excerpt: "Ram Charan reunites with Rangasthalam director Sukumar for RC17, with Mythri Movie Makers producing and Devi Sri Prasad composing the music.",
    source: "Variety"
  }
];
