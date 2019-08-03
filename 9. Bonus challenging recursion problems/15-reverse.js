/**
 * Write a recursive function which acceps a string and returns a new string in reverse.
 * @example
 * 1 l reverse(rithmschoo) - 22 return loohcsmthir
 * 2 o reverse(rithmscho) - 21 return oohcsmhtir
 * 3 o reverse(rithmsch) - 20 return ohcsmhtir
 * 4 h reverse(rithmsc) - 19 return hcsmhtir
 * 5 c reverse(rithms) - 18 return csmhtir
 * 6 s reverse(rithm) - 17 return smhtir
 * 7 m reverse(rith) - 16 return mhtir
 * 8 h reverse(rit) - 15 return htir
 * 9 t reverse(ri) - 14 return tir
 * 10 i reverse(r) - 13 return ir
 * 11 - 12 return r
 * @param {string} string
 * @return {string}
 */
function reverse(string) {
    if (string.length === 1) return string;
    return string[string.length - 1] + reverse(string.slice(0, -1));
}

reverse('awesome'); // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'