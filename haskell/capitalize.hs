lowerChars = ['a'..'z']
upperChars = ['A'..'Z']
digits = ['0'..'9']
alphaNums =  lowerChars ++ upperChars ++ digits
alphaZip = zip lowerChars upperChars

toLowerCase :: Char -> Char
toLowerCase character
  | character `elem` upperChars = head [x | (x, y) <- alphaZip, y == character]
  | otherwise = character

toUpperCase :: Char -> Char
toUpperCase character
  | character `elem` lowerChars = head [y | (x, y) <- alphaZip, x == character]
  | otherwise = character

-- this calls for recursion or folding, ie split off a word then split the rest
split :: char -> [Char] -> [[Char]]
split character sentence =

splitSpace = split ' '

capitalize :: [Char] -> [Char]
capitalize
--titleCase "I'm a little tea pot"
