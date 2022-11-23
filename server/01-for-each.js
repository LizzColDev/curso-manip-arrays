const letter = ['a', 'b', 'c'];

// sin forEach
for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log('con for', element);
}

// con forEach

letter.forEach(item => console.log('forEach', item))


