// --- Day 1: Report Repair ---
// After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

// The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

// To save your vacation, you need to get all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

// Your puzzle answer was 605364.

// --- Part Two ---
// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

// In your expense report, what is the product of the three entries that sum to 2020?

let input = [
    1933, 1963, 1924, 1832, 1949, 1826, 1681, 1548, 1881, 1973, 1558, 1979, 1803, 1975, 1867, 1934, 1986, 1220, 1878,
    1985, 2006, 1535, 1522, 1884, 1380, 1922, 1905, 1582, 1456, 1877, 1959, 1953, 634, 1875, 366, 1968, 1887,
    1848, 1779, 1894, 1606, 1429, 1900, 1309, 2007, 1944, 1901, 1559, 1484, 1996, 1837, 1892, 1989, 1684, 1952,
    1990, 1974, 1890, 1883, 1993, 1592, 1889, 1735, 1577, 1568, 1957, 1980, 1537, 1992, 1950, 1836, 1397, 1660, 2010, 1627,
    1991, 1888, 107, 1977, 1898, 1532, 1726, 1899, 1960, 1962, 2000, 1903, 1937, 1931, 1895, 1868, 1600, 1926, 1946, 1964,
    1956, 1915, 1506, 1580, 1984, 1870, 2008, 1885, 1503, 1927, 841, 1997, 2002, 1869, 1874, 1906, 1911, 508, 1718,
    1961, 1909, 1914, 1940, 1879, 1965, 1929, 1932, 1579, 1902, 1783, 1983, 166, 1972, 2003, 2005, 1918, 1893, 1427, 1945,
    1982, 1847, 1425, 1941, 1958, 1842, 1928, 1840, 1789, 1654, 1665, 1387, 1908, 1891, 1873, 1839, 1943, 1616, 1490,
    144, 1981, 1988, 1853, 1994, 42, 1954, 1762, 1792, 1896, 1907, 1976, 1886, 1971, 1998, 1912, 1967, 1857, 1951, 1925,
    1921, 1518, 1593, 2004, 1999, 1571, 1923, 463, 1897, 1861, 1467, 1920, 1504, 2009, 1942, 1995, 1947, 1872, 1969, 1910,
    1955, 1939, 1966, 1687, 1827, 675, 1520
]
let hash = {};
let sumTotal = 2020;
let sum1, sum2, productTotal;
for (let i = 0; i < input.length; i++) {
    if (!hash[input[i]]) {
        hash[input[i]] = input[i];
    }
}
function findSum(sum) {
    for (let j = 0; j < input.length; j++) {
        if (hash[input[j]] && hash[(sum - input[j])]) {
            sum1 = hash[input[j]];
            sum2 = hash[(sum - input[j])];
            productTotal = sum1 * sum2;
            return true;
        }
    }
    return false;
}

for(let k=0; k<input.length; k++){
    let newSum = Math.abs(input[k] - sumTotal);
    if(findSum(newSum)){
        console.log(sum1, sum2, input[k]);
        let product3 = sum1*sum2*input[k];
        console.log(product3);
        return;
    }
}

