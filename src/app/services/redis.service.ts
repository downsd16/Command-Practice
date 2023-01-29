import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const redis = require('redis');

@Injectable({
  providedIn: 'root'
})
export class RedisService {
  cacheHostName:string = environment.REDISCACHEHOSTNAME
  cachePassword:string = environment.REDISCACHEKEY
  cachePort:string = environment.REDISCACHEPORT

  cacheConnection = redis.createClient({
    url: "rediss://" + this.cacheHostName + ":" + this.cachePort,
    password: this.cachePassword,
  });

  async ngOnInit() {
    await this.cacheConnection.connect()
  }

  async addScore() {
    this.cacheConnection.zadd()
  }

  async getLeaderboardDescending() {
    return await this.cacheConnection.zrevrange(0, 9, )
  }
}
