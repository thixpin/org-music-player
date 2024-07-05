
type MusicItem = {
  albumName: string;
  titleCopy: string;
  author: string;
  titleOriginal: string;
  youtubeUrl: string;
};

const musicList: MusicItem[] = [
  // ကန္တာရလမင်း
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ညရဲ့ဆူး",  author: "Great White", titleOriginal: "Desert Moon ", youtubeUrl: "https://www.youtube.com/watch?v=Nlb5f9Q16q0" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ဒဏ်ရာ",  author: "Kingdom Come", titleOriginal: "You're Not Only I Know ", youtubeUrl: "https://www.youtube.com/watch?v=jB2a0Z0KJVM" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ကမ္ဘာကြီးကလုံးပြီးဝိုင်းနေတော့",  author: "Judas Priest", titleOriginal: "Private Property ", youtubeUrl: "https://www.youtube.com/watch?v=nnsTYdjAfDs" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "အလင်းရောင်",  author: "Nazareth", titleOriginal: "Dream on", youtubeUrl: "https://www.youtube.com/watch?v=AWwv7PGumAA" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ရင်ဆိုင်မယ်",  author: "Loverboy", titleOriginal: "Working For The Weekend ", youtubeUrl: "https://www.youtube.com/watch?v=dsgBpsNPQ50" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "မုန်းလိုက်",  author: "Foreigner", titleOriginal: "Until I Make You Mine ", youtubeUrl: "https://www.youtube.com/watch?v=qZDE2cwUvMc" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ည",  author: "Dokken", titleOriginal: "Unchain The Night ", youtubeUrl: "https://www.youtube.com/watch?v=S7DjCQfMqqg" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "အိပ်မက်ရထား",  author: "Queen", titleOriginal: "My love is Dangerous ", youtubeUrl: "https://www.youtube.com/watch?v=JZaHdqMPly8" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "အတောင်ပံများနှင့်",  author: "John Bon Jovi", titleOriginal: "Miracle ", youtubeUrl: "https://www.youtube.com/watch?v=wnM9WEha5E0" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ရှေ့ကကောင်းကင်",  author: "Europe ", titleOriginal: "Cherokee", youtubeUrl: "https://www.youtube.com/watch?v=wzmJrVSA3Mg" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "မျှော်လင့်ခြင်းလေး",  author: "White Lion", titleOriginal: "Till Death Do Us Part ", youtubeUrl: "https://www.youtube.com/watch?v=NU1zUBDQMz0" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "လှမ်းအဝေး",  author: "Bon Jovi", titleOriginal: "Runaway ", youtubeUrl: "https://www.youtube.com/watch?v=s86K-p089R8" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "နောက်ထပ်တို့မဝေးဘူး",  author: "Bryan Adams", titleOriginal: "Home Again ", youtubeUrl: "https://www.youtube.com/watch?v=EdByCPnMVgA" },

  // ပင်လယ်အော်သံ
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "ပါးပြင်ပေါ်ကနေ့စွဲများ",  author: "Cinderella", titleOriginal: "Shake Me ", youtubeUrl: "https://www.youtube.com/watch?v=ptPekKOigkQ" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အသဲကွဲသီချင်းသစ်",  author: "Nazareth", titleOriginal: "Every time it rains ", youtubeUrl: "https://www.youtube.com/watch?v=cVcPboNU5Ws" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "ထွက်ပေါက်",  author: "Metallica", titleOriginal: "Enter Sandman ", youtubeUrl: "https://www.youtube.com/watch?v=CD-E-LDc384" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အလွမ်းများ",  author: "Fair Warning", titleOriginal: "Long Gone ", youtubeUrl: "https://www.youtube.com/watch?v=RKS59JTb4T0" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အမြဲတမ်း",  author: "The Outfield", titleOriginal: "For You ", youtubeUrl: "https://www.youtube.com/watch?v=CX07qt_dqqY" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "စုန်းမ",  author: "Ozzy Osbourne", titleOriginal: "Fire In the Sky ", youtubeUrl: "https://www.youtube.com/watch?v=pE7v8ntUhgE" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "သေခြင်းရဲ့တံခါးများ",  author: "Jesse Strange", titleOriginal: "Coyote Morning ", youtubeUrl: "https://www.youtube.com/watch?v=4abl1IcPABI" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "မနက်ဖြန်",  author: "Bryan Adams", titleOriginal: "The Best Was Yet To Come", youtubeUrl: "https://www.youtube.com/watch?v=t4vGvh66UkQ" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "စီးဆင်းသွားတဲ့စမ်းချောင်းလေး",  author: "House of Lords", titleOriginal: "Can't Find My Way Home ", youtubeUrl: "https://www.youtube.com/watch?v=lj66pOiOUMk" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အကောင်းဆုံး",  author: "Van Halen", titleOriginal: "I'll Wait ", youtubeUrl: "https://www.youtube.com/watch?v=VegvworoMX4" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "သင်၏နားကိုငှားပါ",  author: "Dio", titleOriginal: "Night People ", youtubeUrl: "https://www.youtube.com/watch?v=2Bxh46m6_Ho" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "Heavy Rock",  author: "Alex_Masi", titleOriginal: "Hanging On ", youtubeUrl: "https://www.youtube.com/watch?v=rSc2JjFPaWM" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "ဒီရေဒီလှေ",  author: "Scorpions", titleOriginal: "Tease Me Please Me ", youtubeUrl: "https://www.youtube.com/watch?v=wENdZneWDYs" },

  // ဂီတမ ဉ္ဇူရီ
  { albumName: "ဂီတမ ဉ္ဇူရီ",  titleCopy: "မ ဉ္ဇူရီ",  author: "Richie Sambora", titleOriginal: "Father Time ", youtubeUrl: "https://www.youtube.com/watch?v=aVF5YOxkPew" },
  { albumName: "ဂီတမ ဉ္ဇူရီ",  titleCopy: "ဂီတ",  author: "W.A.S.P", titleOriginal: "Love Machine ", youtubeUrl: "https://www.youtube.com/watch?v=BovrPGCrm9I" },

  // ပါဝါ 54
  { albumName: "ပါဝါ 54",  titleCopy: "အသုံးမကျတဲ့နှင်းဆီ",  author: "Richie Sambora", titleOriginal: "Rosie ", youtubeUrl: "https://www.youtube.com/watch?v=toXJUM_OQ0A" },
  { albumName: "ပါဝါ 54",  titleCopy: "တကိုယ်ရည်လွမ်းဆွတ်မှူ",  author: "Cheap Trick", titleOriginal: "The Flame ", youtubeUrl: "https://www.youtube.com/watch?v=2u6uXuT9pm4" },
  { albumName: "ပါဝါ 54",  titleCopy: "လတစ်စင်းကိုရူးသွပ်သူ",  author: "Ratt", titleOriginal: "Loving You is a dirty job ", youtubeUrl: "https://www.youtube.com/watch?v=Ezj9HBJ3eGY" },
  { albumName: "ပါဝါ 54",  titleCopy: "ဆွေးမြည့်ည",  author: "Bonnie Tyler", titleOriginal: "if i sing you a love song ", youtubeUrl: "https://www.youtube.com/watch?v=itQH3lX82_Y" },
  { albumName: "ပါဝါ 54",  titleCopy: "အတ္တပြေးလမ်း",  author: "FAIR WARNING", titleOriginal: "OUT ON THE RUN", youtubeUrl: "https://www.youtube.com/watch?v=fi1KlFJQNSc" },
  { albumName: "ပါဝါ 54",  titleCopy: "အလွမ်းရဲ့နတ်သမီး",  author: "Ozzy Osbourne", titleOriginal: "You're No Different ", youtubeUrl: "https://www.youtube.com/watch?v=t-n15jcHxLA" },
  { albumName: "ပါဝါ 54",  titleCopy: "ငါ့ရဲ့စိတ်ကူး",  author: "Alice Cooper", titleOriginal: "Die for You ", youtubeUrl: "https://www.youtube.com/watch?v=veGymYTFrAU" },
  { albumName: "ပါဝါ 54",  titleCopy: "အတောင်ပံတစ်စုံရဲ့စွမ်းအား",  author: "Bon jovi", titleOriginal: "if i was your mother ", youtubeUrl: "https://www.youtube.com/watch?v=SY5-gPbJQo0" },
  { albumName: "ပါဝါ 54",  titleCopy: "မိုက်မဲသောအချစ်",  author: "Bad 4 Good", titleOriginal: "Nothing Great about a Heartache ", youtubeUrl: "https://www.youtube.com/watch?v=TUOJqghZ5bY" },
  { albumName: "ပါဝါ 54",  titleCopy: "အငြိုးအင်အား",  author: "Loverboy", titleOriginal: "Notorious ", youtubeUrl: "https://www.youtube.com/watch?v=6AeRtYEtRX8" },
  { albumName: "ပါဝါ 54",  titleCopy: "မျက်ရည်များ၏နောက်ကွယ်",  author: "Aerosmith", titleOriginal: "Crying ", youtubeUrl: "https://www.youtube.com/watch?v=qfNmyxV2Ncw" },
  { albumName: "ပါဝါ 54",  titleCopy: "နောက်ဆုံးရထား",  author: "Cinderella", titleOriginal: "Heartbreak Station ", youtubeUrl: "https://www.youtube.com/watch?v=Uuegke22rdA" },

  // ကျိန်စာ
  { albumName: "ကျိန်စာ",  titleCopy: "ကံကြမ္မာဓားချက်များ",  author: "Hardline", titleOriginal: "Hot Cherie ", youtubeUrl: "https://www.youtube.com/watch?v=LzSv3FueuzM" },
  { albumName: "ကျိန်စာ",  titleCopy: "အချစ်ဒဏ်",  author: "Nazareth", titleOriginal: "Love Hurts ", youtubeUrl: "https://www.youtube.com/watch?v=TyCPfdu1HoA" },
  { albumName: "ကျိန်စာ",  titleCopy: "သွေးရူးသွေးတမ်းနေ့များ",  author: "Judas Priest", titleOriginal: "A Touch Of Evil ", youtubeUrl: "https://www.youtube.com/watch?v=PW-6FKFnHx8" },
  { albumName: "ကျိန်စာ",  titleCopy: "ကြယ်စင်များရဲ့လမ်း",  author: "Great White", titleOriginal: "All Right ", youtubeUrl: "https://www.youtube.com/watch?v=8qowby6XKb0" },
  { albumName: "ကျိန်စာ",  titleCopy: "ရင်ခုန်လိုက်တိုင်း",  author: "Yngwie Malmsteen", titleOriginal: "Now Is The Time ", youtubeUrl: "https://www.youtube.com/watch?v=MZo7RBWOo48" },
  { albumName: "ကျိန်စာ",  titleCopy: "နေခြည်",  author: "Marty Friedman", titleOriginal: "Hands of Time ", youtubeUrl: "https://www.youtube.com/watch?v=ql4ZiEZJdjw" },
  { albumName: "ကျိန်စာ",  titleCopy: "ကျိန်စာ",  author: "Def Leppard", titleOriginal: "All I Want It Everything ", youtubeUrl: "https://www.youtube.com/watch?v=1qF27dY5-Uk" },
  { albumName: "ကျိန်စာ",  titleCopy: "ဝေးလွန်းသော်လည်း",  author: "Black Sabbath '95", titleOriginal: "Can't Get Close Enough ", youtubeUrl: "https://www.youtube.com/watch?v=yRhQfHaFh3I" },
  { albumName: "ကျိန်စာ",  titleCopy: "အဝေးကချစ်သူ",  author: "House Of Lords", titleOriginal: "Whats Forever For ", youtubeUrl: "https://www.youtube.com/watch?v=VCC7YI6yMMQ" },
  { albumName: "ကျိန်စာ",  titleCopy: "အရိုင်းအစိုင်း",  author: "McAuley Schenker", titleOriginal: "Bad Boys ", youtubeUrl: "https://www.youtube.com/watch?v=KKCrdV1gYvc" },
  { albumName: "ကျိန်စာ",  titleCopy: "မံမီများ",  author: "Great White", titleOriginal: "Easy ", youtubeUrl: "https://www.youtube.com/watch?v=9x2OiecVrD0" },
  { albumName: "ကျိန်စာ",  titleCopy: "အတုံ့",  author: "Vince Neil", titleOriginal: "Can't Change Me ", youtubeUrl: "https://www.youtube.com/watch?v=5LynM_1SZSI" },

  // အိပ်မက်ကဗျာ
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "အတိတ်မြက်ခင်းစိမ်း",  author: "Dream Theater", titleOriginal: "Another Day ", youtubeUrl: "https://www.youtube.com/watch?v=LYtiDCXLAcQ" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "02- အိပ်မက်ကဗျာ",  author: "Winter Rose", titleOriginal: "Dianna ", youtubeUrl: "https://www.youtube.com/watch?v=SOeU7_bLLpU" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "03- မတားတော့ဘူး",  author: "Contraband", titleOriginal: "Bad for each other", youtubeUrl: "https://www.youtube.com/watch?v=vwR8j1CE6X0" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "တို့ပြန်တွေ့မဲ့အချိန်",  author: "Ozzy Osbourne", titleOriginal: "Perry Mason ", youtubeUrl: "https://www.youtube.com/watch?v=QapkGK-6G90" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "အရှူံးပြီးတော့ အရှူံး",  author: "Y & T", titleOriginal: "Don't Be Afraid Of The Dark ", youtubeUrl: "https://www.youtube.com/watch?v=MA7Bawrpb9Q" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "နှင်းဆီဝင်္ကပါ",  author: "Seal", titleOriginal: "Kiss From A Rose ", youtubeUrl: "https://www.youtube.com/watch?v=hDd2G_V1rzc" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "သံသယမြူခိုးများ",  author: "Scorpions", titleOriginal: "Soul Behind The Face ", youtubeUrl: "https://www.youtube.com/watch?v=kGDExI3AlwI" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "မင်းနဲ့ကိုယ်ရဲ့အကြောင်း",  author: "Soul Kitchen", titleOriginal: "Rosie Jones ", youtubeUrl: "https://www.youtube.com/watch?v=aFVt3m2OGnI" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "နောင်တရဲ့အသိ",  author: "Megadeth", titleOriginal: "A Tout Le Monde ", youtubeUrl: "https://www.youtube.com/watch?v=iEyOwLY3rV4" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "မမေ့နိုင်",  author: "Journey", titleOriginal: "When I Think of You ", youtubeUrl: "https://www.youtube.com/watch?v=HzgPu93W51A" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "အဖြူရောင်စိတ်ကူးများ",  author: "Fair Warning", titleOriginal: "One Way Up ", youtubeUrl: "https://www.youtube.com/watch?v=gca6w1fH2Uk" },

  // ရာစုသစ် 
  { albumName: "ရာစုသစ် ",  titleCopy: "ရာစုသစ်",  author: "Dream Theater", titleOriginal: "You Not Me  ", youtubeUrl: "https://www.youtube.com/watch?v=UhEzjq1pRsk" },
  { albumName: "ရာစုသစ် ",  titleCopy: "မျက်ရည်ပြဇာတ်",  author: "Toto", titleOriginal: "If You Belong to Me ", youtubeUrl: "https://www.youtube.com/watch?v=bhcnqq95PBc" },
  { albumName: "ရာစုသစ် ",  titleCopy: "ဒီဇင်ဘာ",  author: "Collective Soul", titleOriginal: "December ", youtubeUrl: "https://www.youtube.com/watch?v=6exsatE-DUk" },
  { albumName: "ရာစုသစ် ",  titleCopy: "ငါတို့ခရီး",  author: "Nuno Bettencourt", titleOriginal: "Fine By Me", youtubeUrl: "https://www.youtube.com/watch?v=xQp88WRYwmU" },
  { albumName: "ရာစုသစ် ",  titleCopy: "အိမ်ကိုပြန်ခဲ့တော့",  author: "Bryan Adams & Mel C", titleOriginal: "when You're Gone", youtubeUrl: "https://www.youtube.com/watch?v=_W2jONIjrM0" },
  { albumName: "ရာစုသစ် ",  titleCopy: "အစိမ်းသက်သက်အစိမ်း",  author: "Contraband", titleOriginal: "Stand", youtubeUrl: "https://www.youtube.com/watch?v=OAt5vCFFjho" },
  { albumName: "ရာစုသစ် ",  titleCopy: "ဘယ်မှာနားခိုမလဲ",  author: "Damn Yankees", titleOriginal: "Where You Going Now", youtubeUrl: "https://www.youtube.com/watch?v=k0Wf1u5At4k" },
  { albumName: "ရာစုသစ် ",  titleCopy: "အလွမ်းနဲ့ရေးတဲ့သီချင်း",  author: "Firehouse", titleOriginal: "Dream", youtubeUrl: "https://www.youtube.com/watch?v=48l5b8MUisA" },

  // LMN 
  { albumName: "LMN ",  titleCopy: "လမ်း",  author: "Train", titleOriginal: "Calling All Angels ", youtubeUrl: "https://www.youtube.com/watch?v=TaG9SDxwPBg" },
  { albumName: "LMN ",  titleCopy: "အပယ်ခံ",  author: "Soil", titleOriginal: "Deny Me", youtubeUrl: "https://www.youtube.com/watch?v=_0hIZQsoEvA" },
  { albumName: "LMN ",  titleCopy: "အဝါရောင်ကိုက်ခဲမှု",  author: "Breaking Benjamin", titleOriginal: "So Cold", youtubeUrl: "https://www.youtube.com/watch?v=UkI4KejmSfY" },
  { albumName: "LMN ",  titleCopy: "မာယာ",  author: "Tonic", titleOriginal: "waltz with me", youtubeUrl: "https://www.youtube.com/watch?v=QWPeJA9a7BQ" },
];


// export musicList and MusicItem
export type { MusicItem };
export { musicList };