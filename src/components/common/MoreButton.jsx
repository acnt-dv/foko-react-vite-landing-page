// Reusable CTA button component
const MoreButton = ({ handleNavigate, iconSmall, iconLarge }) => (
  <button
    onClick={handleNavigate}
    className={
      [
        // Mobile styles (default)
        "flex justify-start items-center font-rubik text-[10px] cursor-pointer w-[59.23vw] mr-[7.69vw] my-[5.92vh]",
        // Desktop styles
        "lg:flex lg:justify-center lg:items-center lg:w-fit lg:ml-[15.63vw] lg:text-[20px] lg:my-0",
        // Hide/show for responsive
        "lg:flex",
        // Interactivity
        "focus:outline-none hover:opacity-80 transition-opacity"
      ].join(' ')
    }
    aria-label="Navigate to Studio page"
    type="button"
  >
    MORE &nbsp;&nbsp;&nbsp;
    {/* Mobile icon */}
    <img
      src={iconSmall}
      alt="Right arrow icon"
      className="block lg:hidden w-3 h-3"
    />
    {/* Desktop icon */}
    <img
      src={iconLarge}
      alt="Right arrow icon"
      className="hidden lg:block lg:w-[0.42vw] lg:h-[1.48vh]"
    />
  </button>
);

export default MoreButton;