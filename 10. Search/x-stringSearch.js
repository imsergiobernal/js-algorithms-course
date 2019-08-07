/**
 * Best case: O(n)
 * Normal case: O(n)
 * Worst case: O(n)
 * My own implementation for a performant stringSearch
 * @param {string} string 
 * @param {string} search 
 */
function stringSearch(string, search) {
    let matches = 0;
    let stack = '';
    let recording = false;

    for (let i = 0; i < string.length; i++) {
        if (recording === true && stack.length !== string.length) {
            stack += string[i];
        }

        if (recording === false && string[i] === search[0]) {
            recording = true;
            stack += string[i];
        }

        if (stack.length === search.length) {
            if (stack === search) matches++;
            stack = '';
            recording = false;
        }
    }

    return matches > 0 ? matches : -1;
}

module.exports = stringSearch;