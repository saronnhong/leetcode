// # Company: FB
// # When you know what language you would like to use for your interview,
// # simply choose it from the dropdown in the top bar.
// # Enjoy your interview!
// # Given a bread with strawberries on it, figure out if we can cut the#
// #bread n times and make all the pieces have exact same number of strawberries
// # Example
// # def bread_cut(n, bread):
// # Input-1: integer n #times cut the bread.
// # Input-2: bread= [true, false, true, false, true] where true represents\ that there is a strawberry, and vise versa.
// # Output: if n=2, return true. If n!=2, return false
// # [false, true, false] n = 2 # cuts, not # of pieces. return false.
// #        |    |

// # ["True", "False", True, False, True]  n = 2 returns True (3 -total of trues-  % n+1 == 0)
// #         |              |


// # ["True", "False", True, False, False, False]  n = 2 returns False
// # total number of trues, mod by (n+1) == 0 ? true : false
// # bread = ["T","F","T","T","T"] 
// # n = 2

// # ['T', 'T', 'T', 'T'] n=1, False
//           # | 

// from typing import List

// def strawberry(arr, n):
//   if n < 0: return False
  
//   total = 0
//   for i in arr:  
//     if i == "T":
//       total+=1
    
//   if total % (n+1) ==0:
//     return True
//   else:
//     return False
  
// # print(strawberry(bread,n))


// # [5,5,0,0,10,10]   30 mod 3 = 0 return True
// #         |  |
// # [20,0,0,1,0 9] return False

// # n = 2   return True
// # slice = 3
// #totalSum / n + 1  (30 % 3 == 0 ? yes) (30/3 = 10-sliceSum)

// # runningSum == sliceSum (20 >= 10)
//     # runningSum = 0
//     # slice--
// # return slice == 0
// arr = [20,5,0,0,10,10]
// n = 2
// def strawberry_number(arr, n):
//   totalSum = sum(arr)
  
//   if totalSum%(n+1) != 0:
//     return False
    
//   strawberry_per_slice = totalSum//(n+1) 
//   runningSum = 0
//   for i in arr:
//     runningSum += i
//     if runningSum == strawberry_per_slice:
//       #make slice
//       n-=1
//       runningSum = 0
      
//   if n == -1:
//     return True
//   else:
//     return False
    
// print(strawberry_number(arr, n))
    
    
//     # (30 % 3 == 0 ?
    
    
  

  


// # |      10    |   10  |   10  |


// # 10, 10, 10   30   n = 2


// # count # of t. 3  and n=2 if  #ts = n+1 return true else return false. 
// # [t,t,  t,t,f] = 1   ts= 4  =    2+1  
// # 10 I  10  LEFT = RIGHT
// # 10,  10,  10  T   30   n =2 30/N+1 = 10

// # 10, 9, 10,    Ts  29   N= 2 29 /N+1 = 9.3
// # 10,8,8  = 26/3 = 8.5

