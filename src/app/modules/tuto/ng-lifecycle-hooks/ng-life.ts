import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './ng-life.html',
    styleUrls: ['./ng-life.css']
})
export class TestComponent implements OnInit {

    // block_1
    time_1!: string;
    time_2 = "Block_1. Hello..property: " + Date.now().toLocaleString()

    // block_2
    testFn() {
        return ("Block_2. Hello.. testFn..: " + Date.now().toLocaleString());
    }

    // block_3
    constructor() {
        this.time_1 = "Block_3. Hello..Constructor: " + Date.now().toLocaleString()
    };

    // block_4
    ngOnInit(): void {
        console.log("Block_4. Hello..ngOnInit: ", Date.now().toLocaleString());
        console.log(this.time_1);
        console.log(this.testFn());
        console.log(this.time_2);
    }
}

/* Execution Order
    1. Constructor (Block_3)
    2. Property Initialization (Block_1)
    3. ngOnInit (Block_4) Method Call within ngOnInit (Block_2 is executed as part of Block_4 when testFn is called)

*/
