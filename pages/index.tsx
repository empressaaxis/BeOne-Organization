import type { NextPage } from "next";
import Header from "src/components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header
        heading={"Pathway To Your Passion"}
        title={"Onwards and Upwards..."}
        description={
          "Tech base Career Counselling Organiation that strives to make you dream big"
        }
        button={"Take a free assesment"}
      />
    </div>
  );
};

export default Home;
