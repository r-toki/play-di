import { injectable } from "tsyringe";

import { Foo } from "./foo";

@injectable()
export class Bar {
  constructor(public foo: Foo) {}
}
