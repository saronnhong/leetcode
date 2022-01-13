/*

After a patient requests a new prescription, and our medical team has written a new prescription, our system must automatically determine the cheapest way to fill a given order. This routing is subject to the following set of constraints:

* We want to minimize the total cost of fulfilling an order, which is determined by the inventory.cost x orderItem.quantity
* A single Order can be fulfilled by multiple pharmacies, but a single OrderItem cannot be split across more than one pharmacy
* Assignments should contain OrderItems, not Orders, to allow an individual order to be fulfilled with a single shipment by a single pharmacy or multiple shipments by multiple pharmacies

A simplified object model in UML is provided below that shows the relationships and types of your function. Implement the assign(order) function and the estimateOrderItemCost(orderItem).

UML: https://nurx.quip.com/3cahAQIldVFm

*/

// Test Suite Setup
const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha()
mocha.suite.emit('pre-require', this, 'solution', mocha)

// Common libraries
const _ = require('lodash');

class Assignment {
  constructor(pharmacy) {
    // Order items assigned to a pharmacy
    this.orderItems = [];
    // Pharmacy that the order items are assigned to
    this.pharmacy = pharmacy || null;
  }
}

class Order {
  constructor() {
    // All items inside a single order
    this.orderItems = [];
  }
}


class OrderItem {
  constructor(drug, quantity) {
    // Name of the drug
    this.drug = drug;
    // Quantity of the drug requested
    this.quantity = quantity;
  }
}

class Router {
  constructor(pharmacies) {
    // Array of the pharmacies that can have an order assigned
    this.pharmacies = pharmacies;
  }
  
  assign(order) {
    // IMPLEMENT THIS FUNCTION
    let pharmOrder = [];
    // let bestPrices = {};
    
    for(let i=0; i<order.orderItems.length; i++){
      let bestPrice = Number.POSITIVE_INFINITY;
      let currBestPriceItem = {};
      
      for(let j=0; j<this.pharmacies.length; j++){
        for(let k=0; k<this.pharmacies[j].inventory.length; k++){
          if(this.pharmacies[j].inventory[k].drug === order.orderItems[i].drug){
            //advil, rite aid, inventory [],
            //1. find the price of that drug at that pharmacy, use estimateOrderost()
            //2. if this price is less that bestPrice
            //      - save it to bestPrice
            //      - save the info to currBestPriceItem
            //3. before we move on to the next drug, push currBestPriceItem to pharmOrder
            //    -if pharmacy exist in pharmOrder, use the existing and push to that orderItems array
            
            
            let currCost = this.pharmacies[j].estimateOrderItemCost(order.orderItems[i]);
            console.log(order.orderItems[i], this.pharmacies[j])
            
            // console.log(currCost, bestPrice, order.orderItems[i].drug, this.pharmacies[j].name, currCost < bestPrice)
            
            if(currCost < bestPrice){
              
              // console.log(currCost, bestPrice, order.orderItems[i].drug, this.pharmacies[j].name)
              bestPrice = currCost;
              let temp = {};
              temp["pharmacy"] = {
                "name" : this.pharmacies[j].name
              };
              temp["orderItems"] = [order.orderItems[i]]
              currBestPriceItem = temp;
              // console.log(currBestPriceItem, this.pharmacies[j].name);
              
            }
            
            
            
            
            
            
            
            // 1. iterate through and look for best price for "advil". keep track in a variable that keeps track of the pharmacy name and price.
            // 2. after done with that loop, push the order with the best price to pharmOrder
            // NOTE!! make sure to check if the pharmacy is in pharmOrder already, add to the orderItems array or not?? ask question about this
            // 3. move on to the next item and repeat
            // bestPrice = 10
            
          //  bestPrice = {
          //       "advil" : 110,
          //       "tylenol : 80,
          //       "sprintec" : 120
          //    }
            
          //  assigment = [{
          //     pharmacy: {
          //       name: "rite aid
          //     },
          //     orderItems: [{
          //           drug: "advil",
          //           quantity: 10
          //     },
          //      {
          //           drug: "advil",
          //           quantity: 10
          //     }]
          //   }]
            
          //   pharmacy = {
          //       name: "walgreens",
          //       inventory: [
          //         {
          //         drug: "advil",
          //         cost: 11,
          //       },{
          //         drug: "tylenol",
          //         cost: 8,
          //         }
          //       ]
          //   }
            
            
            
            // let temp = {};
            // temp["pharmacy"] = {
            //   "name" : this.pharmacies[j].name
            // };
            // temp["orderItems"] = [order.orderItems[i]]
            // pharmOrder.push(temp);
            
          }
        }
      }
  //    -if pharmacy exist in pharmOrder, use the existing and push to that orderItems array
    
    
    
      let foundIndex = pharmOrder.findIndex(obj => obj.pharmacy.name === currBestPriceItem.pharmacy.name);
      // console.log(currBestPriceItem.pharmacy.name, foundIndex)
      
      if(foundIndex === -1){ //new pharmacy not found 
        pharmOrder.push(currBestPriceItem);
      }else{
        pharmOrder[foundIndex].orderItems.push(currBestPriceItem.orderItems[0])
      }
      // console.log(pharmOrder);
    }
    // console.log(pharmOrder[0].orderItems);
    return pharmOrder;
  }
}

class Pharmacy {
  constructor(inventory, name) {
    // Array of inventory items the pharmacy has
    this.inventory = inventory;
    this.name = name;
  }
  
  estimateOrderItemCost(orderItem) {
    // IMPLEMENT THIS FUNCTION
    let cost = 0;
    
    for(let i=0; i<this.inventory.length; i++){
      if(orderItem.drug === this.inventory[i].drug){
        cost = orderItem.quantity * this.inventory[i].cost;
      }
    }
    return cost;
  }
}

class InventoryItem {
  constructor(drug, cost) {
    // Cost of the drug
    this.cost = cost;
    // Name of the drug
    this.drug = drug;
  }
}


describe('Test suite for router', function() {
  
  it('estimateOrderItemCost on the pharmacy should include quantity', function() {
     // Create Order to be routed
      const item1 = new OrderItem("Sprintec", 10);
      const order = new Order();
        
      order.orderItems.push(item1);
    
      // Create Inventory and Pharmacy
      const inv1 = new InventoryItem("Sprintec", 9);
      const l1 = [];
      l1.push(inv1);
      const p1 = new Pharmacy(l1,"Rite Aid");
    
      assert.equal(p1.estimateOrderItemCost(item1), 90);
  });
  
  it('Should be able to route a single order item to a pharmacy', function() {
      // Create Order to be routed
      const item1 = new OrderItem("Sprintec", 10);
      const order = new Order();
        
      order.orderItems.push(item1);
    
      // Create Inventory and Pharmacy
      const inv1 = new InventoryItem("Sprintec", 9);
      const l1 = [];
      l1.push(inv1);
      const p1 = new Pharmacy(l1,"Rite Aid");
        
      // Create Pharmacy List and Router
      const pharmacyList = [];
    
      pharmacyList.push(p1);
    
      const router = new Router(pharmacyList);
      const assignmentList = router.assign(order);

      
      assert.equal(assignmentList.length, 1);
        
      const riteAidAssignment = assignmentList.find(assignment => assignment.pharmacy.name === "Rite Aid");
        
      assert.equal(riteAidAssignment.orderItems.length, 1);
        
      const sprintecOrderItem = riteAidAssignment.orderItems.find(orderItem => orderItem.drug === "Sprintec");

      assert.equal(sprintecOrderItem.quantity, 10);
  });
  
  it('Should be able to route multiple order items to separate pharmacies', function() {
            // Create Order to be routed
      const item1 = new OrderItem("Advil", 10);
      const item2 = new OrderItem("Tylenol", 20);
      const item3 = new OrderItem("Sprintec", 11);
      const order = new Order();
        
      order.orderItems.push(item1);
      order.orderItems.push(item2);
      order.orderItems.push(item3);
    
      // Create First Inventory and Pharmacy
      const inv1 = new InventoryItem("Advil", 10);
      const inv2 = new InventoryItem("Tylenol", 10);
      const inv3 = new InventoryItem("Sprintec", 10);
      const l1 = [];
    
      l1.push(inv1);
      l1.push(inv2);
      l1.push(inv3);

      const p1 = new Pharmacy(l1,"Rite Aid");
    
      // Create Second Inventory and Pharmacy
      const inv4 = new InventoryItem("Advil", 11);
      const inv5 = new InventoryItem("Tylenol", 8);
      const inv6 = new InventoryItem("Sprintec", 12);
      const l2 = [];
    
      l2.push(inv4);
      l2.push(inv5);
      l2.push(inv6);
      
      const p2 = new Pharmacy(l2,"Walgreens");
        
      // Create Pharmacy List and Router
      const pharmacyList = [];
    
      pharmacyList.push(p1);
      pharmacyList.push(p2);
    
      const router = new Router(pharmacyList);
      const assignmentList = router.assign(order);
        
      assert.equal(assignmentList.length, 2);
       
      // Assertions about Rite Aid Assignments
      const riteAidAssignment = assignmentList.find(assignment => assignment.pharmacy.name === "Rite Aid");
        
      assert.equal(riteAidAssignment.orderItems.length, 2);
        
      const advilOrderItem = riteAidAssignment.orderItems.find(orderItem => orderItem.drug === "Advil");
      const sprintecOrderItem = riteAidAssignment.orderItems.find(orderItem => orderItem.drug === "Sprintec");
      
      assert.equal(advilOrderItem.quantity, 10);
      assert.equal(sprintecOrderItem.quantity, 11);
       
      // Assertions about Walgreens Assignments
      const walgreensAssignment = assignmentList.find(assignment => assignment.pharmacy.name === "Walgreens");
        
      assert.equal(walgreensAssignment.orderItems.length, 1);
        
      const tylenolOrderItem = walgreensAssignment.orderItems.find(orderItem => orderItem.drug === "Tylenol");
        
      assert.equal(tylenolOrderItem.quantity, 20);
  });
});

mocha.run()