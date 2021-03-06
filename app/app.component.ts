import {Component} from "@angular/core";
import {hello} from "./testClass";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public worker;
    constructor(){
        this.worker = new Worker('./worker');
        this.worker.onmessage = (msg) =>{
            console.log('data ',msg.data);
        }
    }
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
        console.log('in AppComponent ',hello());
        this.worker.postMessage('hi');

    }
}
