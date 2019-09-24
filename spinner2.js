const spinner = (times) => {
    let time = 0;
    const lines = ["|", "/", "-", "\\"];
    for (let i = 0; i < times * 2; i++) {
        for (let j = 0; j < lines.length; j++) {
            setTimeout(() => {
                process.stdout.write(`\r${lines[j]}   `);
            }, time);
            time += 200;
        }
    }
    setTimeout(() => {
        process.stdout.write('\r|   ');
    }, time)
    setTimeout(() => {
        process.stdout.write("\n");
    }, time)

};

spinner(1)

// setTimeout(() => {
//     process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//     process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//     process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//     process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//     process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//     process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//     process.stdout.write('\r|   ');
// }, 1700);
