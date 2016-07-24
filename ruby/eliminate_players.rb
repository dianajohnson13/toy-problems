# from Codeval
## Summary:
  # Given a list of players and a number
  # Start with the first player at 1 and circulate through the players until reaching the player at the nth spot.
    # Remove them and start counting from the beginning
    # Do this until one play is remaining and then return the name of remaining player

def find_winner(players, n)
  remaining_players = players[0..players.length - 1]

  while remaining_players.length > 1 
    looser_pos = n % remaining_players.length - 1
    remaining_players.delete(remaining_players[looser_pos])
  end

  return remaining_players[0]
end
