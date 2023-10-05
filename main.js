const fs = require('node:fs');
fs.readFile("./data.json", "utf8", (err, jsonstring) => {
    if (err) {
        console.log("File read failed", err);
        return;
    }
    const jsonData = JSON.parse(jsonstring);
    const necessaryData = jsonData.map(item => {
        if (item.ku === "13" && item.value > 5) {
            return item.value;
        }
    });
    const filteredData = necessaryData.filter(item => item !== undefined);
    const finalString = filteredData.join('\n');
    fs.writeFile("output.txt", finalString, (err) => {
        if (err) {
            console.log("File write failed",err);
            return;
        }
    })
});