
function customIterator(chars) {
   // To track index
   let n = 0;
   return {
      // next() method
      next() {
         if (n < chars.length) {
            return {
               value: chars[n++],
               done: false
            }
         }
         return {
            done: true
         }
      }
   }
}
const chars = ['A', 'C', 'E'];
const iter = customIterator(chars);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

