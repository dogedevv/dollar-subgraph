import { BigInt } from "@graphprotocol/graph-ts";

import { log } from "@graphprotocol/graph-ts";
import {
  DAO,
  Advanced,
  BondPurchased,
  BondRedeemed,
  Collected,
  DebtApproval,
  DebtListingCancelled,
  DebtListingCreated,
  DebtListingFilled,
  DebtOrderCancelled,
  DebtOrderCreated,
  DebtOrderFilled,
  Deposited,
  NewBonds,
  NewInterestRate,
  NewSupply,
  OwnershipTransferred,
  Paused,
  SlotTransfer,
  Unpaused,
  WithdrawClaimed,
  WithdrawRequested,
} from "../generated/DAO/DAO";
import {
  ExampleEntity,
  EpochEvent,
  NewSupplyEvent,
  NewBondsEvent,
  NewInterestRateEvent,
} from "../generated/schema";

export function handleAdvanced(event: Advanced): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let epochNum = event.params.epoch.toString();
  let epoch = EpochEvent.load(epochNum);
  let supplyEvent = NewSupplyEvent.load(epochNum);
  let newBondsEvent = NewBondsEvent.load(epochNum);
  let newInterestRateEvent = NewInterestRateEvent.load(epochNum);

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!epoch) {
    epoch = new EpochEvent(epochNum);
    epoch.newDollars = supplyEvent ? supplyEvent.amount : BigInt.zero();
    epoch.newBonds = newBondsEvent ? newBondsEvent.amount : BigInt.zero();
    if (newInterestRateEvent) {
      epoch.debtRate = newInterestRateEvent.debtRate;
      epoch.interestRateChange = newInterestRateEvent.interestRateChange;
      epoch.interestRate = newInterestRateEvent.interestRate;
    }
    // Entity fields can be set using simple assignments
    epoch.save();
  }

  // BigInt and BigDecimal math are supported

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.accountInfo(...)
  // - contract.allowanceDebts(...)
  // - contract.balanceOfDeposits(...)
  // - contract.balanceOfEarnedDollars(...)
  // - contract.balanceOfGrownShares(...)
  // - contract.balanceOfShares(...)
  // - contract.balanceOfWithdrawals(...)
  // - contract.creditInfo(...)
  // - contract.daoAssets(...)
  // - contract.daoBalances(...)
  // - contract.debtOrder(...)
  // - contract.dollar(...)
  // - contract.earnedDollar(...)
  // - contract.epochInfo(...)
  // - contract.epochTime(...)
  // - contract.oracle(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.stakeInfo(...)
}

export function handleBondPurchased(event: BondPurchased): void {}

export function handleBondRedeemed(event: BondRedeemed): void {}

export function handleCollected(event: Collected): void {}

export function handleDebtApproval(event: DebtApproval): void {}

export function handleDebtListingCancelled(event: DebtListingCancelled): void {}

export function handleDebtListingCreated(event: DebtListingCreated): void {}

export function handleDebtListingFilled(event: DebtListingFilled): void {}

export function handleDebtOrderCancelled(event: DebtOrderCancelled): void {}

export function handleDebtOrderCreated(event: DebtOrderCreated): void {}

export function handleDebtOrderFilled(event: DebtOrderFilled): void {}

export function handleDeposited(event: Deposited): void {}

export function handleNewBonds(event: NewBonds): void {
  let epoch = event.params.epoch.toString();
  let newBondsEvent = NewBondsEvent.load(epoch);

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!newBondsEvent) {
    newBondsEvent = new NewBondsEvent(epoch);
    newBondsEvent.amount = event.params.bonds;
    newBondsEvent.save();
    // Entity fields can be set using simple assignments
  }
}

export function handleNewInterestRate(event: NewInterestRate): void {
  let epoch = event.params.epoch.toString();
  let _event = NewInterestRateEvent.load(epoch);

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!_event) {
    _event = new NewInterestRateEvent(epoch);
    _event.interestRate = event.params.newInterest;
    _event.interestRateChange = event.params.newInterest.minus(
      event.params.oldInterest
    );
    _event.debtRate = event.params.debtRate;
    _event.save();
    // Entity fields can be set using simple assignments
  }
}

export function handleNewSupply(event: NewSupply): void {
  let epoch = event.params.epoch.toString();
  let supplyEvent = NewSupplyEvent.load(epoch);

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!supplyEvent) {
    supplyEvent = new NewSupplyEvent(epoch);
    supplyEvent.amount = event.params.toBonding.plus(event.params.toStaking);
    supplyEvent.save();
    // Entity fields can be set using simple assignments
  }
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleSlotTransfer(event: SlotTransfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleWithdrawClaimed(event: WithdrawClaimed): void {}

export function handleWithdrawRequested(event: WithdrawRequested): void {}
