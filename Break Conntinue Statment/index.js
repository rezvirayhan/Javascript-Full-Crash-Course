/**
 * Break = breaks out of loop entirely
 * continue = skip an interation of a loop
 */

for (let i = 1; i < 20; i += 1) {
    if (i == 13) {
        // break
        continue
    }
    console.log(i);
}