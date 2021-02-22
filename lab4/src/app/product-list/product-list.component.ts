import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  share(product: Product): void {
    const postUrl = product.link;
    const postTitle = 'Hey everyone';

    document.getElementById(product.id + '-facebook-link').setAttribute('href', `https://www.facebook.com/sharer.php?u=${product.link}`);
    document.getElementById(product.id + '-whatsapp-link').setAttribute('href', `https://wa.me/?text=${postTitle} ${postUrl}`);
    document.getElementById(product.id + '-pinterest-link').setAttribute('href', `https://pinterest.com/pin/create/bookmarklet/?media=[]&url=${postUrl}&description=${postTitle}`);
    document.getElementById(product.id + '-linkedin-link').setAttribute('href', `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
    document.getElementById(product.id + '-telegram-link').setAttribute('href', `https://t.me/share/url?url=${postUrl}&text=${postTitle}`);
    document.getElementById(product.id + '-twitter-link').setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    const a = document.getElementById(product.id + '-share-btn');
    if (a.textContent.trim() === 'Share'){
      product.share = 'a';
      a.textContent = 'Hide';
    }
    else {
      a.textContent = 'Share';
      product.share = '';
    }
  }

  nextImage(b: number, product: Product): void{
    product.imageCnt += b;
    if (product.imageCnt < 0) { product.imageCnt += product.images.length; }
    else if (product.imageCnt >= product.images.length) {product.imageCnt -= product.images.length; }
  }
}
