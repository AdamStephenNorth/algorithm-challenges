maxArrayElement :: Ord a => [a] -> a
maxArrayElement list = foldl max (head list) (tail list)

largestOfFour :: Ord b => [[b]] -> [b]
largestOfFour = map maxArrayElement

--largestOfFour [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
