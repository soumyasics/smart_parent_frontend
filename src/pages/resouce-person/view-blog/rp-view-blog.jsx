import Rpnav from "../../../Components/resource_person/navbar/Rpnav";
import Footer from "../../commonHomePage/Components/commonFooter";
import ShowBlogContent from "../../mySubscriptions/showBlogContent";
const RpViewBlog = () => {
  return (
    <div>
      <Rpnav />
      <ShowBlogContent />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};
export default RpViewBlog;
