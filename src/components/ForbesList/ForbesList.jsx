import { ForbesListItem } from "components";
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from "./ForbesList.styled";
import PropTypes from "prop-types";

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.length > 0 &&
          list.map(({ avatar, name, capital, isIncrease, id }) => (
            <ForbesListItem
              key={id}
              avatar={avatar}
              name={name}
              capital={capital}
              isIncrease={isIncrease}
            />
          ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      isIncrease: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
