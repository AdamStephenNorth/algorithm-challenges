dogQuant = 100 :: Int
factors x = [y | y <- [1..x], mod x y == 0]
passes x = length (factors x)
passParity x = odd (passes x)
dogsAndBones x = [passParity y | y <- [1..x]]
results = dogsAndBones dogQuant
