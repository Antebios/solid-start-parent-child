import { Product } from "~/types";
import fs from 'fs';

import db from "~/data/db.json";

let COUNTER = 0;
let PRODUCTS: Product[] = [];
const DELAY = 120;

function delay<T>(fn: () => T) {
  return new Promise<T>((res) => setTimeout(() => res(fn()), DELAY));
}

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  getProducts() {
    return delay(() => PRODUCTS);
  },
  async getAllProducts() {
    return delay(async () =>  {
      //const data = fs.readFileSync('db.json', 'utf8');
      const data = JSON.stringify(db);
      //await sleep(1000);
      PRODUCTS = JSON.parse(data).products;
      //await sleep(1000);
      return PRODUCTS;
    }
    )
  },
};
