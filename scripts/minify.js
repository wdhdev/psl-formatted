const fs = require("fs");

const file = "list/public_suffix_list.dat";

fs.readFile(file, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    const requiredComments = [
        "// ===BEGIN ICANN DOMAINS===",
        "// ===END ICANN DOMAINS===",
        "// ===BEGIN PRIVATE DOMAINS===",
        "// ===END PRIVATE DOMAINS==="
    ];

    const startsWithComments = ["// VERSION:", "// COMMIT:"];

    // Minify the data
    const minifiedData = data
        .split("\n")
        .map((line) => {
            if (requiredComments.some((comment) => line.startsWith(comment))) return line;
            if (startsWithComments.some((comment) => line.startsWith(comment))) return line;
            return line.replace(/\/\/.*/, "").trim();
        })
        .filter((line) => line.length > 0)
        .join("\n");

    // Create the list directory if it doesn't exist
    if (!fs.existsSync("list")) {
        fs.mkdirSync("list");
    }

    // Write the minified data to a new file
    fs.writeFile("list/public_suffix_list.min.dat", minifiedData, "utf8", (writeErr) => {
        if (writeErr) {
            console.error("Error writing the file:", writeErr);
        } else {
            console.log(`${(((data.length - minifiedData.length) / data.length) * 100).toFixed(2)}%`);
        }
    });
});
