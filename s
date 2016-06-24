[1mdiff --git a/03-conditionals-and-loops/assignments/bottles.js b/03-conditionals-and-loops/assignments/bottles.js[m
[1mindex 991cbb5..3127f68 100644[m
[1m--- a/03-conditionals-and-loops/assignments/bottles.js[m
[1m+++ b/03-conditionals-and-loops/assignments/bottles.js[m
[36m@@ -20,8 +20,8 @@[m [mvar down_1 = " You take it down, pass it around, "[m
 var x = 99; [m
 //string together the sentence with the component variables[m
 //create sentence variable [m
[31m-var sentence = x+wall+x+bottles+down+x-1+wall;[m
[31m-console.log(sentence);[m
[32m+[m[32mvar sentence = x+wall+x+bottles+down+(x-1)+wall;[m
[32m+[m[32m//console.log(sentence);[m
 [m
 [m
 //Beer count-down loop [m
