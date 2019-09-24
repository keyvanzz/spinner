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