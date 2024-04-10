const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');
const filteredData = whereClauses.length > 0
? data.filter(row => whereClauses.every(clause => evaluateCondition(row, clause)))
: data;
function evaluateCondition(row, clause) {
    const { field, operator, value } = clause;
    switch (operator) {
        case '=': return row[field] === value;
        case '!=': return row[field] !== value;
        case '>': return row[field] > value;
        case '<': return row[field] < value;
        case '>=': return row[field] >= value;
        case '<=': return row[field] <= value;
        default: throw new Error(`Unsupported operator: ${operator}`);
    }
}

module.exports = evaluateCondition;