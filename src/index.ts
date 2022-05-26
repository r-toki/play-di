import "reflect-metadata";

import { container } from "tsyringe";

import { Bar } from "./bar";

const bar = container.resolve(Bar);

console.log(bar);
