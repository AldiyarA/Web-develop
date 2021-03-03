import {Component, Input} from '@angular/core';

export class Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  imageCnt: number;
  rating: number;
  link: string;
  share: string;
  constructor(id: number, name: string, description: string, images: string[], rating: number, link: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.imageCnt = 0;
    this.rating = rating;
    this.link = link;
    this.share = '';
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  private productLinks: string[] = [
    'https://www.amazon.com/Smart-ELITEBOOK-I7-10610U-14IN-512GB/dp/B08D3XCXX5/ref=sr_1_18?dchild=1&qid=1613898530&rnid=16225007011&s=computers-intl-ship&sr=1-18',
    'https://www.amazon.com/HP-EliteBook-840-Notebook-Plane/dp/B07VBHBRM1/ref=sr_1_6?dchild=1&qid=1613898545&rnid=13896617011&s=computers-intl-ship&sr=1-6',
    'https://www.amazon.com/WWENXINHZ-Multi-Power-Large-Capacity-Waterproof-Anti-Theft/dp/B08S3M4VNG/ref=sr_1_31_sspa?dchild=1&qid=1613898545&rnid=13896617011&s=computers-intl-ship&sr=1-31-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRTBMMVdXT0tBWUpGJmVuY3J5cHRlZElkPUEwNTk4NzkwMzJPU0ZFT00xTFBEMyZlbmNyeXB0ZWRBZElkPUEwNjMyOTgyMzFERzhGUVdVNTNBNyZ3aWRnZXROYW1lPXNwX2J0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    'https://www.amazon.com/Gloved-digitizer-Windows-panasonic-Renewed/dp/B08318VQBG/ref=sr_1_9?dchild=1&qid=1613898545&rnid=13896617011&s=computers-intl-ship&sr=1-9',
    'https://www.amazon.com/Multi-Function-Handheld-Emulator-archived-Rechargeable/dp/B087YW4S21/ref=sr_1_18?dchild=1&qid=1613898545&rnid=13896617011&s=computers-intl-ship&sr=1-18',
    'https://www.amazon.com/My-Hero-Academia-Heroes-Rising/dp/B08L9RSMXV/ref=lp_2650364011_1_1',
    'https://www.amazon.com/Fancii-Precision-Craft-Knife-Pieces/dp/B01N4BIW97/ref=sr_1_13_sspa?dchild=1&qid=1613932013&s=arts-crafts-intl-ship&sr=1-13-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTjg2RVJXSTNMU0kmZW5jcnlwdGVkSWQ9QTA4OTg4NDQzMzM1NDlNQVc4RDM1JmVuY3J5cHRlZEFkSWQ9QTA3ODc4ODExVVFOS1pZUTRCME1CJndpZGdldE5hbWU9c3BfbXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    'https://www.amazon.com/Peteme-Automatic-Dispenser-Portion-Scheduled/dp/B089KTR73W/ref=lp_21221447011_1_4?s=specialty-aps',
    'https://www.amazon.com/dp/B07X6C9RMF/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=5AZGH4TPYE82E3YAPTC3&pf_rd_t=101&pf_rd_p=a0375433-7aae-4485-bc8e-97b528fa773a&pf_rd_i=19185106011',
    'https://www.amazon.com/Xbox-X/dp/B08H75RTZ8/ref=lp_19185106011_1_6?s=specialty-aps'
  ];
  // p1 = new P(1, 'Smart Buy ELITEBOOK', 'a', [], 5, '');
  private productDescription: string[] = [
    '840 G7 I7-10610U 14IN 16GB 512GB',
    'Core i7 i7-8565U - 16 GB RAM - 512 GB SSD - Windows 10 Pro - in-Plane Switching (IPS) Technology - English Keyboard - Intel Optane Memory Ready - 17.25 Hour Bat',
    'TO-WWENXINHZ Multi-Power and Large-Capacity Backpack, Waterproof and Anti-Theft Men\'s Business Laptop Bag 413010cm (Color : Black)',
    'FZ-G1/MK3/core i5/2.3 ghz/Intel/Gloved Multi touch/10.1 inch Touch Screen LCD/digitizer Pen/Windows/panasonic Tough pad Fully Rugged (Renewed)',
    '5.1 inch Multi-Function Retro Game Console Handheld Game Console 9600 Games Support Arcade/CPS/neogeo/fc/SFC/gba/gbc/gb/sega Emulator Games can be archived with Rechargeable Lithium Battery (Black)',
    'My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia) is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, with its chapters additionally collected into 29 tankōbon volumes as of January 2021. The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a superhero himself. He is scouted by All Might, Japan\'s greatest hero, who shares his Quirk with Midoriya after recognizing his potential, and later helps to enroll him in a prestigious high school for heroes in training.',
    'Professional Razor Sharp Knives for Art, Hobby, Scrapbooking and Sculpture – Includes Stencil, Fine Point, Scoring, Chiseling Blades',
    'Smart Pet Feeder with APP Control, Food Dispenser for Cats, Dogs & Small Pets , 2.4G Wi-Fi Enabled, Portion Control, 4L',
    'Compact indoor plug-in smart security camera, 1080 HD video, night vision, motion detection, two-way audio, Works with Alexa – 1 camera',
    'Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles-all games look and play best on Xbox Series X. Experience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software. Play thousands of games from four generations of Xbox with Backward compatibility, including optimized titles at launch. Download and play over 100 high-quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, with Xbox Game Pass ultimate (membership sold separately). Xbox Smart delivery ensures you play the best available version of your game no matter which Console you\'re playing on.'
  ];
  private productImages: string[][] = [
    ['https://images-na.ssl-images-amazon.com/images/I/61ydql4SB5L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/41LmmyHjIcL._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61rggnSTwxL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/610Yhki8f2L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71bcd3QARxL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/514wgLz-XJL._AC_SL1500_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/811p1jxp2pL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/715k%2Bv%2BMAGL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/7183sMUI6JL._AC_SL1500_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/611224XSy4L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61TviA6lHSL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/713rUU4fbAL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71XYaINHGGL._AC_SL1500_.jpg ', 'https://images-na.ssl-images-amazon.com/images/I/71VCdYNkqwL._AC_SL1500_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/4114nOHTO7L._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51ro-iUUOgL._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/41vsSk4kiDL._AC_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/61Y%2BQx6PJKL._AC_SL1040_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/710H7RqQMfL._AC_SL1150_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61cUNzJRfuL._AC_SL1040_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61hwJhTEolL._AC_SL1386_.jpg'],
    ['https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F04%2Fmy-hero-academia-00.jpg?q=90&w=1400&cbr=1&fit=max', 'https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png', 'https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR16,0,182,268_AL_.jpg', 'https://www.xtrafondos.com/wallpapers/resized/my-hero-academia-boku-no-hero-academia-3395.jpg?s=large'],
    ['https://images-na.ssl-images-amazon.com/images/I/81Adv12kBIL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71s14j9GdFL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/8189LqaE3xL._AC_SL1500_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/61uMTS1kNbL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61fn36CGPIL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61WKPAXS%2BkL._AC_SL1500_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/41GZI7HASrL._SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61LrV6Id5gL._SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61NXI01420L._SL1000_.jpg'],
    ['https://images-na.ssl-images-amazon.com/images/I/51A41nLe5IL._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51WrGGznWeL._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/510uaz4Tu8L._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51HSFVoY4eL._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/518lHGigunL._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61Zv%2BoNJlTL._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51cG5jAYkeL._SL1200_.jpg']
  ];
  public products: Product[] = [
    new Product(0, 'Smart Buy ELITEBOOK', (this.productDescription[0]), (this.productImages)[0], 4.7, (this.productLinks[0])),
    new Product(1, 'HP EliteBook 840 G6 14" Notebook', (this.productDescription[1]), (this.productImages)[1], 4.7, (this.productLinks[1])),
    new Product(2, 'Backpack', (this.productDescription[2]), (this.productImages)[2], 4.7, (this.productLinks[2])),
    new Product(3, 'Tough pad', (this.productDescription[3]), (this.productImages)[3], 4.7, (this.productLinks[3])),
    new Product(4, 'Retro Game Console', (this.productDescription[4]), (this.productImages)[4], 4.7, (this.productLinks[4])),
    new Product(5, 'My Hero Academia: Heroes Rising', (this.productDescription[5]), (this.productImages)[5], 4.7, (this.productLinks[5])),
    new Product(6, 'Fancii Precision Craft Knife Set 16 Pieces', (this.productDescription[6]), (this.productImages)[6], 4.7, (this.productLinks[6])),
    new Product(7, 'Peteme Automatic Cat Feeder', (this.productDescription[7]), (this.productImages)[7], 4.7, (this.productLinks[7])),
    new Product(8, 'Blink Mini', (this.productDescription[8]), (this.productImages)[8], 4.7, (this.productLinks[8])),
    new Product(9, 'Xbox Series X', (this.productDescription[9]), (this.productImages)[9], 4.7, (this.productLinks[9])),
  ];

}
