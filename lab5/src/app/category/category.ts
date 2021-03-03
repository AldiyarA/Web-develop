export class Category{
  static categoryCnt = 0;
  id: number;
  name: string;
  image: string;
  hasRoutePath = false;
  constructor(name: string = '', image: string = '') {
    this.id = Category.categoryCnt++;
    this.name = name;
    this.image = image;
  }
  static categories: Category[] = [
    new Category('Anime', 'https://www.fortressofsolitude.co.za/wp-content/uploads/2019/05/The-15-Most-Powerful-Anime-Characters-Of-All-Time-scaled.jpg'),
    new Category('Movie', 'https://www.mensjournal.com/wp-content/uploads/2019/01/John-Wick-Chapter3-gallery-12.jpg?w=1200&quality=86&strip=all'),
    new Category('Games', 'https://cdn2.unrealengine.com/Diesel%2Fblog%2Fepic-games-store-update%2FEGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg'),
    new Category('Computers & Laptops', 'https://spy.com/wp-content/uploads/2020/12/CleanClipping-Recovered-10.png')
  ];
}
