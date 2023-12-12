import { AfterViewInit, Component, OnInit } from '@angular/core';
import { codeBlock } from "./for-html";
import { operators } from './symbols';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
    selector: 'app-test',
    templateUrl: './ng-life.html',
    styleUrls: ['./ng-life.css'],
    styles: [],
})
export class NgLifeCycleHooks implements OnInit, AfterViewInit {

    forHtml = codeBlock;

    // block_1
    time_1!: string;
    time_2 = "Block_1. Hello..property: " + Date.now().toLocaleString()

    // block_2
    testFn() {
        return ("Block_2. Hello.. testFn..: " + Date.now().toLocaleString());
    }

    // block_3
    constructor() {
        this.time_1 = "Block_3. Hello..Constructor: " + Date.now().toLocaleString();
    };

    // block_4
    ngOnInit(): void {
        console.log("Block_4. Hello..ngOnInit: ", Date.now().toLocaleString());
        console.log(this.time_1);
        console.log(this.testFn());
        console.log(this.time_2);
    }

    ngAfterViewInit() {
        Prism.highlightAll();
    }


    containsOperator(text: string): boolean {
        return operators.some((operator: any) => {
            // Escape special regex characters in the operator
            const escapedOperator = operator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Create a regex to search for the operator
            const regex = new RegExp(`\\b${escapedOperator}\\b`);
            return regex.test(text);
        });
    }



}


