/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(/* str, value */) {
  throw new Error('Not implemented');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(/* width, height */) {
  throw new Error('Not implemented');
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'a':
        newString += 'n';
        break;
      case 'b':
        newString += 'o';
        break;
      case 'c':
        newString += 'p';
        break;
      case 'd':
        newString += 'q';
        break;
      case 'e':
        newString += 'r';
        break;
      case 'f':
        newString += 's';
        break;
      case 'g':
        newString += 't';
        break;
      case 'h':
        newString += 'u';
        break;
      case 'i':
        newString += 'v';
        break;
      case 'j':
        newString += 'w';
        break;
      case 'k':
        newString += 'x';
        break;
      case 'l':
        newString += 'y';
        break;
      case 'm':
        newString += 'z';
        break;
      case 'n':
        newString += 'a';
        break;
      case 'o':
        newString += 'b';
        break;
      case 'p':
        newString += 'c';
        break;
      case 'q':
        newString += 'd';
        break;
      case 'r':
        newString += 'e';
        break;
      case 's':
        newString += 'f';
        break;
      case 't':
        newString += 'g';
        break;
      case 'u':
        newString += 'h';
        break;
      case 'v':
        newString += 'i';
        break;
      case 'w':
        newString += 'j';
        break;
      case 'x':
        newString += 'k';
        break;
      case 'y':
        newString += 'l';
        break;
      case 'z':
        newString += 'm';
        break;
      case 'A':
        newString += 'N';
        break;
      case 'B':
        newString += 'O';
        break;
      case 'C':
        newString += 'P';
        break;
      case 'D':
        newString += 'Q';
        break;
      case 'E':
        newString += 'R';
        break;
      case 'F':
        newString += 'S';
        break;
      case 'G':
        newString += 'T';
        break;
      case 'H':
        newString += 'U';
        break;
      case 'I':
        newString += 'V';
        break;
      case 'J':
        newString += 'W';
        break;
      case 'K':
        newString += 'X';
        break;
      case 'L':
        newString += 'Y';
        break;
      case 'M':
        newString += 'Z';
        break;
      case 'N':
        newString += 'A';
        break;
      case 'O':
        newString += 'B';
        break;
      case 'P':
        newString += 'C';
        break;
      case 'Q':
        newString += 'D';
        break;
      case 'R':
        newString += 'E';
        break;
      case 'S':
        newString += 'F';
        break;
      case 'T':
        newString += 'G';
        break;
      case 'U':
        newString += 'H';
        break;
      case 'V':
        newString += 'I';
        break;
      case 'W':
        newString += 'J';
        break;
      case 'X':
        newString += 'K';
        break;
      case 'Y':
        newString += 'L';
        break;
      case 'Z':
        newString += 'M';
        break;
      default:
        newString += str[i];
        break;
    }
  }

  return newString;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }
  return false;
}

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  let id = 0;
  switch (value.slice(-1)) {
    case '♣':
      id += 0;
      break;
    case '♦':
      id += 13;
      break;
    case '♥':
      id += 26;
      break;
    case '♠':
      id += 39;
      break;
    default:
      break;
  }

  switch (value.slice(0, -1)) {
    case 'A':
      id += 0;
      break;
    case '2':
      id += 1;
      break;
    case '3':
      id += 2;
      break;
    case '4':
      id += 3;
      break;
    case '5':
      id += 4;
      break;
    case '6':
      id += 5;
      break;
    case '7':
      id += 6;
      break;
    case '8':
      id += 7;
      break;
    case '9':
      id += 8;
      break;
    case '10':
      id += 9;
      break;
    case 'J':
      id += 10;
      break;
    case 'Q':
      id += 11;
      break;
    case 'K':
      id += 12;
      break;
    default:
      break;
  }

  return id;
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
