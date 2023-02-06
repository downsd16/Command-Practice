import { Injectable } from '@angular/core';
import { CosmosClient } from "@azure/cosmos";

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private client: CosmosClient = new CosmosClient({ endpoint, key });
  private db: any;
  private container: any;

  async ngOnInit(){
    this.createClient()
  }

  public async createClient(){
    this.db = await this.client.databases.createIfNotExists({ id: DATABASE_NAME });
    this.container = await this.db.containers.createIfNotExists({ id: CONTAINER_NAME });
  }

  public async getLeaderboard()
  {
    const querySpec = {
      query: "SELECT * FROM leaderboard f WHERE  f.lastName = @lastName"
    };
  
    const { resources: results } = await this.container.items.query(querySpec).fetchAll();
  
    if (results.length == 0) {
      throw "No items found matching";
    } else if (results.length > 1) {
      throw "More than 1 item found matching";
    }
  
    const person = results[0];
    console.log("The '" + person.id + "' family has lastName '" + person.lastName + "'");
    console.log("The '" + person.id + "' family has " + person.children.length + " children '");
  } 
}
