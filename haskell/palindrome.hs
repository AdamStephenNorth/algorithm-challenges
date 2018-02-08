lowerChars = ['a'..'z']
upperChars = ['A'..'Z']
alphaChars = lowerChars ++ upperChars
charPairs = zip lowerChars upperChars

toLower :: Char -> Char
toLower inputChar
  | inputChar `elem` upperChars = head [a | (a, b) <- charPairs, inputChar == b]
  | otherwise = inputChar

cleanString :: [Char] -> [Char]
cleanString "" = ""
cleanString inputString = [toLower x | x <- inputString, x `elem` alphaChars]

--reverse and check for equality
palindrome :: [Char] -> Bool
palindrome "" = False
palindrome inputString = (cleanedString == reverse cleanedString)
  where cleanedString = cleanString inputString
