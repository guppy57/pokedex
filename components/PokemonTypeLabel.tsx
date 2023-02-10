const PokemonTypeLabel: React.FC<{ type: string }> = ({
  type,
}): JSX.Element => {
  const defaultStyles = "rounded-full px-2 py-1 text-xs font-medium text-white";

  switch (type) {
    case "normal":
      return <span className={`${defaultStyles} bg-[#A7A97B]`}>{type}</span>;
    case "fire":
      return <span className={`${defaultStyles} bg-[#EE853D]`}>{type}</span>;
    case "water":
      return <span className={`${defaultStyles} bg-[#6F8DED]`}>{type}</span>;
    case "grass":
      return <span className={`${defaultStyles} bg-green-500`}>{type}</span>;
    case "electric":
      return <span className={`${defaultStyles} bg-yellow-500`}>{type}</span>;
    case "ice":
      return <span className={`${defaultStyles} bg-[#A7D8D8]`}>{type}</span>;
    case "fighting":
      return <span className={`${defaultStyles} bg-[#C03028]`}>{type}</span>;
    case "poison":
      return <span className={`${defaultStyles} bg-[#A040A0]`}>{type}</span>;
    case "ground":
      return <span className={`${defaultStyles} bg-[#E0C068]`}>{type}</span>;
    case "flying":
      return <span className={`${defaultStyles} bg-[#A890F0]`}>{type}</span>;
    case "psychic":
      return <span className={`${defaultStyles} bg-[#F85888]`}>{type}</span>;
    case "bug":
      return <span className={`${defaultStyles} bg-[#A8B820]`}>{type}</span>;
    case "rock":
      return <span className={`${defaultStyles} bg-[#B8A038]`}>{type}</span>;
    case "ghost":
      return <span className={`${defaultStyles} bg-[#705898]`}>{type}</span>;
    case "dragon":
      return <span className={`${defaultStyles} bg-[#7038F8]`}>{type}</span>;
    case "dark":
      return <span className={`${defaultStyles} bg-[#705848]`}>{type}</span>;
    case "steel":
      return <span className={`${defaultStyles} bg-[#B8B8D0]`}>{type}</span>;
    case "fairy":
      return <span className={`${defaultStyles} bg-[#EE99AC]`}>{type}</span>;
    default:
      return <span className={`${defaultStyles} bg-gray-500`}>{type}</span>;
  }
};

export default PokemonTypeLabel;
