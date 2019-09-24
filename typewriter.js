// pair programming with Aiman and Najeam
// delay printing each letter in string by 50

const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
}
