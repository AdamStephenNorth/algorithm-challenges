repeatStringNumTimes :: Int -> String -> String
repeatStringNumTimes num target
  |num < 0   = ""
  |otherwise = concat (replicate num target)
