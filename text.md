test: 9/1/2016

1. Name and describe the two main operations of a stack (to add and remove data).
    answer: other than adding or removing data, stacks are use to organize data and make it neat
    in a straight queue. like a stack of pancakes. push, pop, peak.

2. Name and describe the two main operations of a queue (to add and remove data).
    answer: a queue is an orderly line. the perfect example of this is an orderly
    line formed by people who are waiting in line at the grocery store.

3. Draw the tree resulting from adding the following sequence of numbers to an empty tree: 30, 45, 15, 10, 50, 40, 20, 27  

--------30  
-------/--\
-----15----45  
-----/-\---/-\  
----10-20-40-50  
--------\  
--------27  

4. Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))
	answer: this tree is not balanced. Left Rotation(20) , Right Rotation(27):
---------30  
--------/--\  
------15----45  
-----/-\----/-\  
----10-(27)-40-50  
----/  
--(20)  

5. Now add 29. Is the tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))
		answer: the tree is balance. 	  
----------30  
--------/-----\  
-------15-----45  
-------/-\----/-\  
-----10--27--40--50  
------/---\  
-----20---29  


6. Consider the following tree: ------5 ---2-----8 -1---3

 Now add 0 to the tree. Which one is the first node to go out of balance?
 Answer: the left node(1)

-----------5  
----------/-\  
---------2---8  
---------/\  
--------1--3  
--------/  
------(0)  


	1. How do you fix this node? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

            answer: this node is unfixable.

	2. What are the four main steps of mergesort?

    answer: the four main steps of mergesort are to cut the array in
    half, merge sort left, mergesort right and mergesorting the 2 remaining halves.


	3. What are the four main steps of quicksort?

    answer: the first step is to choose the pivot (or median number),
            then you should separate all numbers either to the left (lower number)
            or the right (higher numbers) and separate the pivot from all of them.
            then swap quick sort left between quicksort right.

	4. What is an angular directive?
      answer: an angular directive is an html extension that is used to enhance the performance
      of javascript on a page.

5. When specifying an angular directive, you write a function which must return an object called: a. Directive Constructor b. Fidel y Chavez Object c. Directive Definition object d. Directive Object

    answer: A.) Directive Constructor

6. What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).


7. In order to send ajax requests in Angular, you need to create an angular:
	a. Module b. Service c. Controller d. $http

        answer: C. controller

8. In order to create a service, you must use the following angular function:
a. angularApp.controller b. angularApp.module c. angularApp.directive d. angularApp.factory

      answer: C. angularApp.directive

9. Go to my angular projects github repo and do one of them. Don't clone the repository, but rather add all the files to the folder which corresponds to your github repo. Add the files right at the root of your repo, not within a subfolder.
