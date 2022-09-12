// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("epoch", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get epoch(): BigInt {
    let value = this.get("epoch");
    return value!.toBigInt();
  }

  set epoch(value: BigInt) {
    this.set("epoch", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class EpochEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("newDollars", Value.fromBigInt(BigInt.zero()));
    this.set("newBonds", Value.fromBigInt(BigInt.zero()));
    this.set("interestRate", Value.fromBigInt(BigInt.zero()));
    this.set("interestRateChange", Value.fromBigInt(BigInt.zero()));
    this.set("debtRate", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EpochEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpochEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpochEvent", id.toString(), this);
    }
  }

  static load(id: string): EpochEvent | null {
    return changetype<EpochEvent | null>(store.get("EpochEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get newDollars(): BigInt {
    let value = this.get("newDollars");
    return value!.toBigInt();
  }

  set newDollars(value: BigInt) {
    this.set("newDollars", Value.fromBigInt(value));
  }

  get newBonds(): BigInt {
    let value = this.get("newBonds");
    return value!.toBigInt();
  }

  set newBonds(value: BigInt) {
    this.set("newBonds", Value.fromBigInt(value));
  }

  get interestRate(): BigInt {
    let value = this.get("interestRate");
    return value!.toBigInt();
  }

  set interestRate(value: BigInt) {
    this.set("interestRate", Value.fromBigInt(value));
  }

  get interestRateChange(): BigInt {
    let value = this.get("interestRateChange");
    return value!.toBigInt();
  }

  set interestRateChange(value: BigInt) {
    this.set("interestRateChange", Value.fromBigInt(value));
  }

  get debtRate(): BigInt {
    let value = this.get("debtRate");
    return value!.toBigInt();
  }

  set debtRate(value: BigInt) {
    this.set("debtRate", Value.fromBigInt(value));
  }
}

export class NewSupplyEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewSupplyEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewSupplyEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewSupplyEvent", id.toString(), this);
    }
  }

  static load(id: string): NewSupplyEvent | null {
    return changetype<NewSupplyEvent | null>(store.get("NewSupplyEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class NewBondsEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewBondsEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewBondsEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewBondsEvent", id.toString(), this);
    }
  }

  static load(id: string): NewBondsEvent | null {
    return changetype<NewBondsEvent | null>(store.get("NewBondsEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class NewInterestRateEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("interestRate", Value.fromBigInt(BigInt.zero()));
    this.set("interestRateChange", Value.fromBigInt(BigInt.zero()));
    this.set("debtRate", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewInterestRateEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewInterestRateEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewInterestRateEvent", id.toString(), this);
    }
  }

  static load(id: string): NewInterestRateEvent | null {
    return changetype<NewInterestRateEvent | null>(
      store.get("NewInterestRateEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get interestRate(): BigInt {
    let value = this.get("interestRate");
    return value!.toBigInt();
  }

  set interestRate(value: BigInt) {
    this.set("interestRate", Value.fromBigInt(value));
  }

  get interestRateChange(): BigInt {
    let value = this.get("interestRateChange");
    return value!.toBigInt();
  }

  set interestRateChange(value: BigInt) {
    this.set("interestRateChange", Value.fromBigInt(value));
  }

  get debtRate(): BigInt {
    let value = this.get("debtRate");
    return value!.toBigInt();
  }

  set debtRate(value: BigInt) {
    this.set("debtRate", Value.fromBigInt(value));
  }
}