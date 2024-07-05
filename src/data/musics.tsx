
type MusicItem = {
  albumName: string;
  titleCopy: string;
  titleOriginal: string;
  author: string;
  youtubeUrl: string;
};

const musicList: MusicItem[] = [
  // ကန္တာရလမင်း
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ညရဲ့ဆူး",  titleOriginal: "Great White", author: "Desert Moon ", youtubeUrl: "https://www.youtube.com/watch?v=Nlb5f9Q16q0" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ဒဏ်ရာ",  titleOriginal: "Kingdom Come", author: "You're Not Only I Know ", youtubeUrl: "https://www.youtube.com/watch?v=jB2a0Z0KJVM" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ကမ္ဘာကြီးကလုံးပြီးဝိုင်းနေတော့",  titleOriginal: "Judas Priest", author: "Private Property ", youtubeUrl: "https://www.youtube.com/watch?v=nnsTYdjAfDs" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "အလင်းရောင်",  titleOriginal: "Nazareth", author: "Dream on", youtubeUrl: "https://www.youtube.com/watch?v=AWwv7PGumAA" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ရင်ဆိုင်မယ်",  titleOriginal: "Loverboy", author: "Working For The Weekend ", youtubeUrl: "https://www.youtube.com/watch?v=dsgBpsNPQ50" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "မုန်းလိုက်",  titleOriginal: "Foreigner", author: "Until I Make You Mine ", youtubeUrl: "https://www.youtube.com/watch?v=qZDE2cwUvMc" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ည",  titleOriginal: "Dokken", author: "Unchain The Night ", youtubeUrl: "https://www.youtube.com/watch?v=S7DjCQfMqqg" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "အိပ်မက်ရထား",  titleOriginal: "Queen", author: "My love is Dangerous ", youtubeUrl: "https://www.youtube.com/watch?v=JZaHdqMPly8" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "အတောင်ပံများနှင့်",  titleOriginal: "John Bon Jovi", author: "Miracle ", youtubeUrl: "https://www.youtube.com/watch?v=wnM9WEha5E0" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "ရှေ့ကကောင်းကင်",  titleOriginal: "Europe ", author: "Cherokee", youtubeUrl: "https://www.youtube.com/watch?v=wzmJrVSA3Mg" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "မျှော်လင့်ခြင်းလေး",  titleOriginal: "White Lion", author: "Till Death Do Us Part ", youtubeUrl: "https://www.youtube.com/watch?v=NU1zUBDQMz0" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "လှမ်းအဝေး",  titleOriginal: "Bon Jovi", author: "Runaway ", youtubeUrl: "https://www.youtube.com/watch?v=s86K-p089R8" },
  { albumName: "ကန္တာရလမင်း",  titleCopy: "နောက်ထပ်တို့မဝေးဘူး",  titleOriginal: "Bryan Adams", author: "Home Again ", youtubeUrl: "https://www.youtube.com/watch?v=EdByCPnMVgA" },

  // ပင်လယ်အော်သံ
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "ပါးပြင်ပေါ်ကနေ့စွဲများ",  titleOriginal: "Cinderella", author: "Shake Me ", youtubeUrl: "https://www.youtube.com/watch?v=ptPekKOigkQ" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အသဲကွဲသီချင်းသစ်",  titleOriginal: "Nazareth", author: "Every time it rains ", youtubeUrl: "https://www.youtube.com/watch?v=cVcPboNU5Ws" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "ထွက်ပေါက်",  titleOriginal: "Metallica", author: "Enter Sandman ", youtubeUrl: "https://www.youtube.com/watch?v=CD-E-LDc384" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အလွမ်းများ",  titleOriginal: "Fair Warning", author: "Long Gone ", youtubeUrl: "https://www.youtube.com/watch?v=RKS59JTb4T0" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အမြဲတမ်း",  titleOriginal: "The Outfield", author: "For You ", youtubeUrl: "https://www.youtube.com/watch?v=CX07qt_dqqY" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "စုန်းမ",  titleOriginal: "Ozzy Osbourne", author: "Fire In the Sky ", youtubeUrl: "https://www.youtube.com/watch?v=pE7v8ntUhgE" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "သေခြင်းရဲ့တံခါးများ",  titleOriginal: "Jesse Strange", author: "Coyote Morning ", youtubeUrl: "https://www.youtube.com/watch?v=4abl1IcPABI" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "မနက်ဖြန်",  titleOriginal: "Bryan Adams", author: "The Best Was Yet To Come", youtubeUrl: "https://www.youtube.com/watch?v=t4vGvh66UkQ" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "စီးဆင်းသွားတဲ့စမ်းချောင်းလေး",  titleOriginal: "House of Lords", author: "Can't Find My Way Home ", youtubeUrl: "https://www.youtube.com/watch?v=lj66pOiOUMk" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "အကောင်းဆုံး",  titleOriginal: "Van Halen", author: "I'll Wait ", youtubeUrl: "https://www.youtube.com/watch?v=VegvworoMX4" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "သင်၏နားကိုငှားပါ",  titleOriginal: "Dio", author: "Night People ", youtubeUrl: "https://www.youtube.com/watch?v=2Bxh46m6_Ho" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "Heavy Rock",  titleOriginal: "Alex_Masi", author: "Hanging On ", youtubeUrl: "https://www.youtube.com/watch?v=rSc2JjFPaWM" },
  { albumName: "ပင်လယ်အော်သံ",  titleCopy: "ဒီရေဒီလှေ",  titleOriginal: "Scorpions", author: "Tease Me Please Me ", youtubeUrl: "https://www.youtube.com/watch?v=wENdZneWDYs" },

  // ဂီတမ ဉ္ဇူရီ
  { albumName: "ဂီတမ ဉ္ဇူရီ",  titleCopy: "မ ဉ္ဇူရီ",  titleOriginal: "Richie Sambora", author: "Father Time ", youtubeUrl: "https://www.youtube.com/watch?v=aVF5YOxkPew" },
  { albumName: "ဂီတမ ဉ္ဇူရီ",  titleCopy: "ဂီတ",  titleOriginal: "W.A.S.P", author: "Love Machine ", youtubeUrl: "https://www.youtube.com/watch?v=BovrPGCrm9I" },

  // ပါဝါ 54
  { albumName: "ပါဝါ 54",  titleCopy: "အသုံးမကျတဲ့နှင်းဆီ",  titleOriginal: "Richie Sambora", author: "Rosie ", youtubeUrl: "https://www.youtube.com/watch?v=toXJUM_OQ0A" },
  { albumName: "ပါဝါ 54",  titleCopy: "တကိုယ်ရည်လွမ်းဆွတ်မှူ",  titleOriginal: "Cheap Trick", author: "The Flame ", youtubeUrl: "https://www.youtube.com/watch?v=2u6uXuT9pm4" },
  { albumName: "ပါဝါ 54",  titleCopy: "လတစ်စင်းကိုရူးသွပ်သူ",  titleOriginal: "Ratt", author: "Loving You is a dirty job ", youtubeUrl: "https://www.youtube.com/watch?v=Ezj9HBJ3eGY" },
  { albumName: "ပါဝါ 54",  titleCopy: "ဆွေးမြည့်ည",  titleOriginal: "Bonnie Tyler", author: "if i sing you a love song ", youtubeUrl: "https://www.youtube.com/watch?v=itQH3lX82_Y" },
  { albumName: "ပါဝါ 54",  titleCopy: "အတ္တပြေးလမ်း",  titleOriginal: "FAIR WARNING", author: "OUT ON THE RUN", youtubeUrl: "https://www.youtube.com/watch?v=fi1KlFJQNSc" },
  { albumName: "ပါဝါ 54",  titleCopy: "အလွမ်းရဲ့နတ်သမီး",  titleOriginal: "Ozzy Osbourne", author: "You're No Different ", youtubeUrl: "https://www.youtube.com/watch?v=t-n15jcHxLA" },
  { albumName: "ပါဝါ 54",  titleCopy: "ငါ့ရဲ့စိတ်ကူး",  titleOriginal: "Alice Cooper", author: "Die for You ", youtubeUrl: "https://www.youtube.com/watch?v=veGymYTFrAU" },
  { albumName: "ပါဝါ 54",  titleCopy: "အတောင်ပံတစ်စုံရဲ့စွမ်းအား",  titleOriginal: "Bon jovi", author: "if i was your mother ", youtubeUrl: "https://www.youtube.com/watch?v=SY5-gPbJQo0" },
  { albumName: "ပါဝါ 54",  titleCopy: "မိုက်မဲသောအချစ်",  titleOriginal: "Bad 4 Good", author: "Nothing Great about a Heartache ", youtubeUrl: "https://www.youtube.com/watch?v=TUOJqghZ5bY" },
  { albumName: "ပါဝါ 54",  titleCopy: "အငြိုးအင်အား",  titleOriginal: "Loverboy", author: "Notorious ", youtubeUrl: "https://www.youtube.com/watch?v=6AeRtYEtRX8" },
  { albumName: "ပါဝါ 54",  titleCopy: "မျက်ရည်များ၏နောက်ကွယ်",  titleOriginal: "Aerosmith", author: "Crying ", youtubeUrl: "https://www.youtube.com/watch?v=qfNmyxV2Ncw" },
  { albumName: "ပါဝါ 54",  titleCopy: "နောက်ဆုံးရထား",  titleOriginal: "Cinderella", author: "Heartbreak Station ", youtubeUrl: "https://www.youtube.com/watch?v=Uuegke22rdA" },

  // ကျိန်စာ
  { albumName: "ကျိန်စာ",  titleCopy: "ကံကြမ္မာဓားချက်များ",  titleOriginal: "Hardline", author: "Hot Cherie ", youtubeUrl: "https://www.youtube.com/watch?v=LzSv3FueuzM" },
  { albumName: "ကျိန်စာ",  titleCopy: "အချစ်ဒဏ်",  titleOriginal: "Nazareth", author: "Love Hurts ", youtubeUrl: "https://www.youtube.com/watch?v=TyCPfdu1HoA" },
  { albumName: "ကျိန်စာ",  titleCopy: "သွေးရူးသွေးတမ်းနေ့များ",  titleOriginal: "Judas Priest", author: "A Touch Of Evil ", youtubeUrl: "https://www.youtube.com/watch?v=PW-6FKFnHx8" },
  { albumName: "ကျိန်စာ",  titleCopy: "ကြယ်စင်များရဲ့လမ်း",  titleOriginal: "Great White", author: "All Right ", youtubeUrl: "https://www.youtube.com/watch?v=8qowby6XKb0" },
  { albumName: "ကျိန်စာ",  titleCopy: "ရင်ခုန်လိုက်တိုင်း",  titleOriginal: "Yngwie Malmsteen", author: "Now Is The Time ", youtubeUrl: "https://www.youtube.com/watch?v=MZo7RBWOo48" },
  { albumName: "ကျိန်စာ",  titleCopy: "နေခြည်",  titleOriginal: "Marty Friedman", author: "Hands of Time ", youtubeUrl: "https://www.youtube.com/watch?v=ql4ZiEZJdjw" },
  { albumName: "ကျိန်စာ",  titleCopy: "ကျိန်စာ",  titleOriginal: "Def Leppard", author: "All I Want It Everything ", youtubeUrl: "https://www.youtube.com/watch?v=1qF27dY5-Uk" },
  { albumName: "ကျိန်စာ",  titleCopy: "ဝေးလွန်းသော်လည်း",  titleOriginal: "Black Sabbath '95", author: "Can't Get Close Enough ", youtubeUrl: "https://www.youtube.com/watch?v=yRhQfHaFh3I" },
  { albumName: "ကျိန်စာ",  titleCopy: "အဝေးကချစ်သူ",  titleOriginal: "House Of Lords", author: "Whats Forever For ", youtubeUrl: "https://www.youtube.com/watch?v=VCC7YI6yMMQ" },
  { albumName: "ကျိန်စာ",  titleCopy: "အရိုင်းအစိုင်း",  titleOriginal: "McAuley Schenker", author: "Bad Boys ", youtubeUrl: "https://www.youtube.com/watch?v=KKCrdV1gYvc" },
  { albumName: "ကျိန်စာ",  titleCopy: "မံမီများ",  titleOriginal: "Great White", author: "Easy ", youtubeUrl: "https://www.youtube.com/watch?v=9x2OiecVrD0" },
  { albumName: "ကျိန်စာ",  titleCopy: "အတုံ့",  titleOriginal: "Vince Neil", author: "Can't Change Me ", youtubeUrl: "https://www.youtube.com/watch?v=5LynM_1SZSI" },

  // အိပ်မက်ကဗျာ
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "အတိတ်မြက်ခင်းစိမ်း",  titleOriginal: "Dream Theater", author: "Another Day ", youtubeUrl: "https://www.youtube.com/watch?v=LYtiDCXLAcQ" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "02- အိပ်မက်ကဗျာ",  titleOriginal: "Winter Rose", author: "Dianna ", youtubeUrl: "https://www.youtube.com/watch?v=SOeU7_bLLpU" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "03- မတားတော့ဘူး",  titleOriginal: "Contraband", author: "Bad for each other", youtubeUrl: "https://www.youtube.com/watch?v=vwR8j1CE6X0" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "တို့ပြန်တွေ့မဲ့အချိန်",  titleOriginal: "Ozzy Osbourne", author: "Perry Mason ", youtubeUrl: "https://www.youtube.com/watch?v=QapkGK-6G90" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "အရှူံးပြီးတော့ အရှူံး",  titleOriginal: "Y & T", author: "Don't Be Afraid Of The Dark ", youtubeUrl: "https://www.youtube.com/watch?v=MA7Bawrpb9Q" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "နှင်းဆီဝင်္ကပါ",  titleOriginal: "Seal", author: "Kiss From A Rose ", youtubeUrl: "https://www.youtube.com/watch?v=hDd2G_V1rzc" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "သံသယမြူခိုးများ",  titleOriginal: "Scorpions", author: "Soul Behind The Face ", youtubeUrl: "https://www.youtube.com/watch?v=kGDExI3AlwI" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "မင်းနဲ့ကိုယ်ရဲ့အကြောင်း",  titleOriginal: "Soul Kitchen", author: "Rosie Jones ", youtubeUrl: "https://www.youtube.com/watch?v=aFVt3m2OGnI" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "နောင်တရဲ့အသိ",  titleOriginal: "Megadeth", author: "A Tout Le Monde ", youtubeUrl: "https://www.youtube.com/watch?v=iEyOwLY3rV4" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "မမေ့နိုင်",  titleOriginal: "Journey", author: "When I Think of You ", youtubeUrl: "https://www.youtube.com/watch?v=HzgPu93W51A" },
  { albumName: "အိပ်မက်ကဗျာ",  titleCopy: "အဖြူရောင်စိတ်ကူးများ",  titleOriginal: "Fair Warning", author: "One Way Up ", youtubeUrl: "https://www.youtube.com/watch?v=gca6w1fH2Uk" },

  // ရာစုသစ် 
  { albumName: "ရာစုသစ် ",  titleCopy: "ရာစုသစ်",  titleOriginal: "Dream Theater", author: "You Not Me  ", youtubeUrl: "https://www.youtube.com/watch?v=UhEzjq1pRsk" },
  { albumName: "ရာစုသစ် ",  titleCopy: "မျက်ရည်ပြဇာတ်",  titleOriginal: "Toto", author: "If You Belong to Me ", youtubeUrl: "https://www.youtube.com/watch?v=bhcnqq95PBc" },
  { albumName: "ရာစုသစ် ",  titleCopy: "ဒီဇင်ဘာ",  titleOriginal: "Collective Soul", author: "December ", youtubeUrl: "https://www.youtube.com/watch?v=6exsatE-DUk" },
  { albumName: "ရာစုသစ် ",  titleCopy: "ငါတို့ခရီး",  titleOriginal: "Nuno Bettencourt", author: "Fine By Me", youtubeUrl: "https://www.youtube.com/watch?v=xQp88WRYwmU" },
  { albumName: "ရာစုသစ် ",  titleCopy: "အိမ်ကိုပြန်ခဲ့တော့",  titleOriginal: "Bryan Adams & Mel C", author: "when You're Gone", youtubeUrl: "https://www.youtube.com/watch?v=_W2jONIjrM0" },
  { albumName: "ရာစုသစ် ",  titleCopy: "အစိမ်းသက်သက်အစိမ်း",  titleOriginal: "Contraband", author: "Stand", youtubeUrl: "https://www.youtube.com/watch?v=OAt5vCFFjho" },
  { albumName: "ရာစုသစ် ",  titleCopy: "ဘယ်မှာနားခိုမလဲ",  titleOriginal: "Damn Yankees", author: "Where You Going Now", youtubeUrl: "https://www.youtube.com/watch?v=k0Wf1u5At4k" },
  { albumName: "ရာစုသစ် ",  titleCopy: "အလွမ်းနဲ့ရေးတဲ့သီချင်း",  titleOriginal: "Firehouse", author: "Dream", youtubeUrl: "https://www.youtube.com/watch?v=48l5b8MUisA" },

  // LMN 
  { albumName: "LMN ",  titleCopy: "လမ်း",  titleOriginal: "Train", author: "Calling All Angels ", youtubeUrl: "https://www.youtube.com/watch?v=TaG9SDxwPBg" },
  { albumName: "LMN ",  titleCopy: "အပယ်ခံ",  titleOriginal: "Soil", author: "Deny Me", youtubeUrl: "https://www.youtube.com/watch?v=_0hIZQsoEvA" },
  { albumName: "LMN ",  titleCopy: "အဝါရောင်ကိုက်ခဲမှု",  titleOriginal: "Breaking Benjamin", author: "So Cold", youtubeUrl: "https://www.youtube.com/watch?v=UkI4KejmSfY" },
  { albumName: "LMN ",  titleCopy: "မာယာ",  titleOriginal: "Tonic", author: "waltz with me", youtubeUrl: "https://www.youtube.com/watch?v=QWPeJA9a7BQ" },
];


// export musicList and MusicItem
export type { MusicItem };
export { musicList };