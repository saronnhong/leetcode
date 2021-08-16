input('what is your name?')

def numIdenticalPairs(self, nums: List[int]) -> int:
    combo = [0]
    for number in range(1,len(nums)):
        combo.append(combo[number -1] + number)
        
    hash = {}
    count = 0
        
    for index, i in enumerate(nums):
        if i not in hash:
            hash[i] = [index]
        else:
            hash[i].append(i)
                
    for val in hash:
        temp = len(hash[val]) -1
        count += combo[temp]
            
    return count


def shuffle(self, nums: List[int], n: int) -> List[int]:
    newArr = []
    for index, number in enumerate(nums[0: math.floor(len(nums)/2)]):
        newArr.append(nums[index])
        newArr.append(nums[index + n])
    return newArr


def sortedSquares(self, nums: List[int]) -> List[int]:
        for i, number in enumerate(nums):
            nums[i] = number*number
            i +=1
        nums.sort()
        return nums