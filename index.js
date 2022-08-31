function superbowlWin(record) {
    const win = record.find(obj => obj.result === 'W');
    console.log(win);
    if(win) {
        return win.year;
    }
};

// console.log(record.find(superbowlWin));