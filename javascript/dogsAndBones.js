/* dogsAndBones

You have 100 dogs (soo many dogs!).
You have arranged all your dogs in a line.
Initially, none of your dogs have any bones.
You take 100 rounds walking around the dogs, always starting at the beginning.
Every time you stop at a dog, you put a bone in it's mouth if it doesn't have one,
and you take away a bone if it has one on (so cruel).
The first round, you stop at every dog.
The second round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.).
The third round, you only stop at every 3rd dog (#3, #6, #9, #12, etc.).
You continue this process until the 100th round (i.e. you only visit the 100th dog).

Write a program dogsAndBones() that prints which dogs have bones at the end. */
function dogsAndBones() {
  const dogQuant = 100;
  const dog = Array( dogQuant ).fill( false );

  for ( let i = 1; i < ( dogQuant + 1 ); i++ ) {
    for ( let j = ( i - 1 ); j < dogQuant; j += i ) {
      dog[j] = !dog[j];
    }
  }

  for ( let i = 0; i < dogQuant; i++ ) {
    console.log( `Dog number ${( i + 1 )} does ${dog[i] ? "" : "not"} have
    a bone in its mouth.`)
  }
}

dogsAndBones();
