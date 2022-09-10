import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = 'fecf4feeffa64e4da682e7d268612ce5';
  urlb = "https://newsapi.org/v2/top-headlines";
  constructor(private http: HttpClient) { }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }

  getSources() {
    return this.http.get(`${this.urlb}/sources?language=en&apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: String) {
    return this.http.get(`${this.urlb}?sources=${sourceId}&apiKey=${this.apiKey}`);
  }
}