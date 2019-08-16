let myMobile = function (name, battery, inbox, outbox, power) {
    this.name = name;
    this.inbox = inbox;
    this.outbox = outbox;
    this.battery = battery;
    this.power = power;

    this.onOff = function () {
        let powerMobile = document.getElementById("powerBtn" + this.name);
        if (this.power == 'on'){
            this.power = 'off'
        }else {
            this.power = 'on'
        }
        if (this.power=='on'){
            powerMobile.innerHTML = 'OFF';
        }else powerMobile.innerHTML = 'ON';
    };

    let screenMobile = document.getElementById('screen' + this.name);

    this.checkStatus = function () {
        if (this.power == 'on'){
            screenMobile.value = this.name + "Hello!     " +"Pin" + this.battery + "%";
        }else {
            screenMobile.value = this.name + "OFF...";
        }
    };
    this.writeMessage = function () {
        if (this.power == 'on'){
            if (this.battery > 0){
                screenMobile.value = '';
                screenMobile.setAttribute('placeholder','texting' );
                screenMobile.removeAttribute('readonly');
                this.battery -=1;
            }else {
                alert('Battery lower!!!!');
            }
        }else {
            alert('Turn on the phone!!!!');
        }
    };
    this.back = function () {
        screenMobile.value = '';
        screenMobile.setAttribute('placeholder', 'background');
        screenMobile.setAttribute('readonly', 'true');

    };
    this.sendMessage = function () {
        if (this.power == 'on'){
            if (this.battery > 0){
                if (screenMobile.value != ''){
                    this.outbox.push(screenMobile.value);
                    screenMobile.value = '';

                    this.battery -= 1;
                }
            }else {
                alert('Battery lower!!!!');
            }
        }else {
            alert('Turn on the phone!!!!');
        }
    };
    this.checkOutBox = function () {
        if (this.power == 'on'){
            if (this.battery > 0){
                screenMobile.value = '';
                screenMobile.setAttribute('placeholder', 'Outbox');
                screenMobile.setAttribute('readonly', 'true');
                for (let i = 0; i < this.outbox.length; i++){
                    screenMobile.value += this.outbox[i] + '\n\n';
                }
                this.battery -= 1;
            }else {
                alert('Battery lower!!!!');
            }
        }else {
            alert('Turn on the phone!!!!');
        }
    };
    this.checkInBox = function () {
        if (this.power == 'on'){
            if (this.battery > 0){
                screenMobile.value = '';
                screenMobile.setAttribute('placeholder', 'Inbox');
                screenMobile.setAttribute('readonly', 'true');
                for (let i = 0; i < this.inbox.length; i++){
                    screenMobile.value += this.inbox[i] + '\n\n';
                }
                this.battery -= 1;
            }else {
                alert('Battery lower!!!!');
            }
        }else {
            alert('Turn on the phone!!!!');
        }
    }
};
let nokiaName = 'Nokia';
let batteryNokia = 100;
let inboxNokia = [];
let outboxNokia = [];
let powerNokia = 'on';
let nokia = new myMobile(nokiaName, batteryNokia, inboxNokia, outboxNokia, powerNokia);

let iphoneName = 'Iphone';
let batteryIphone = 100;
let inboxIphone = [];
let outboxIphone = [];
let powerIphone = 'on';
let iphone = new myMobile(iphoneName,batteryIphone, inboxIphone, outboxIphone, powerIphone);

function onOff(myMobile) {
    myMobile.onOff();
}

function checkStatus(myMobile) {
    myMobile.checkStatus();
}

function writeMessage(myMobile) {
    myMobile.writeMessage();
}

function back(myMobile) {
    myMobile.back();
}

function sendMessage(myMobile) {
    myMobile.sendMessage();
    switch (myMobile) {
        case nokia:
            iphone.inbox = nokia.outbox;
            break;
        case iphone:
            nokia.inbox = iphone.outbox;
            break;
    }
}

function checkOutBox(myMobile) {
    myMobile.checkOutBox();
}

function checkInBox(myMobile) {
    myMobile.checkInBox();
}