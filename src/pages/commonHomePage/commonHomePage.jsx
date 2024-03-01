import Comp1 from "./Components/Comp1";
import Carousel1 from "./Components/Carousel1";
import Goals from "./Components/Goals";
import Freev from "./Components/Freev";
import Freeb from "./Components/Freeb";
import CommonFooter from "./Components/commonFooter";
import Topres from "./Components/Topres";
const CommonHomePage = () => {
  return (
    <div>
      <Comp1 />
      <Carousel1 />
      <Goals />
      <Freev />
      <Freeb />
      <Topres />
      <div className="mt-5">
        <CommonFooter />
      </div>
    </div>
  );
};
export default CommonHomePage;
