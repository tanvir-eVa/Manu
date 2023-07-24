const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('মেনু:');
  console.log('1. আপনার নাম দেখুন');
  console.log('2. বর্গ করুন');
  console.log('3. প্রোগ্রাম থেকে বের হোন');
}

function getName() {
  rl.question('আপনার নাম কি? ', (name) => {
    console.log(`আপনার নাম হল: ${name}`);
    showMenu();
    getUserChoice();
  });
}

function calculateSquare() {
  rl.question('একটি সংখ্যা প্রদান করুন: ', (number) => {
    const square = Math.pow(number, 2);
    console.log(`বর্গের মান: ${square}`);
    showMenu();
    getUserChoice();
  });
}

function exitProgram() {
  rl.close();
}

function getUserChoice() {
  rl.question('অপশন নির্বাচন করুন: ', (option) => {
    switch (option) {
      case '1':
        getName();
        break;
      case '2':
        calculateSquare();
        break;
      case '3':
        exitProgram();
        break;
      default:
        console.log('অবৈধ অপশন, আবার চেষ্টা করুন!');
        showMenu();
        getUserChoice();
        break;
    }
  });
}

showMenu();
getUserChoice();
