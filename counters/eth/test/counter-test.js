const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

const { ethers } = require("hardhat");
const expect = chai.expect;

chai.use(chaiAsPromised);

describe("Counter", async () => {
  let provider, accounts, counterContract, counter;

  beforeEach(async () => {
    provider = await ethers.getDefaultProvider();
    expect(provider).to.be.not.null;

    accounts = await ethers.getSigners();
    expect(accounts).to.be.not.null;

    counterContract = await ethers.getContractFactory("Counter");
    expect(counterContract).to.be.not.null;

    counter = await counterContract.deploy();
    expect(counter).to.be.not.null;

    await counter.deployed();
  });

  it("Should be able to creating a Counter contract", async () => {
    const count = await counter.getCount();
    expect(count).to.be.equal(0);
    expect(count).to.be.not.equal(1);
  });

  it("Should be able to get a Counter contract current count", async () => {
    const count = await counter.getCount();
    expect(count).to.be.equal(0);
  });

  it("Should be able to increment a Counter contract", async () => {
    const count = await counter.getCount();
    expect(count).to.be.equal(0);

    await counter.increment();
    const newCount = await counter.getCount();
    expect(newCount).to.be.equal(1);
  });

  it("Should not be able to get a Counter contract count variable directly", async () => {
    expect(counter.functions).to.be.not.null;
    expect(counter.functions).to.be.not.undefined;
    expect(counter.functions.count).to.be.undefined;
    expect(counter.count).to.be.undefined;
  });

  it("Should not be able to increment a Counter if I am not the owner", async () => {
    const [firstAccount, secondAccount] = accounts;
    const counterContract2 = await ethers.getContractFactory(
      "Counter",
      secondAccount
    );
    expect(counterContract2).to.be.not.null;

    const counter2 = await counterContract2.deploy();
    expect(counter2).to.be.not.null;

    const newCount = await counter2.getCount();
    expect(newCount).to.be.equal(0);

    expect(counter2.connect(firstAccount).increment()).to.eventually.throw();

    const newCount2 = await counter2.getCount();
    expect(newCount2).to.be.equal(0);
  });
});
