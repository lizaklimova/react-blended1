import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from "prop-types"

export const Statistics = ({ title, stats }) => {
  const iconsArr = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }, index) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={iconsArr[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes={
  title:PropTypes.string,
  stats:PropTypes.array.isRequired,
}