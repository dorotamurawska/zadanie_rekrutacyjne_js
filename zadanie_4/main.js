const fs = require('fs');
fs.rename('example.json', 'sample.json', (err) => {
    if (err) throw err;
    console.log('Success, rename complete!');
});