import RatingSection from "./RatingSection";
import ProductsSection from "./ProductsSection";
import NewsLetter from "./NewsLetter";

function Home({ isFilterOpen, setIsFilterOpen }) {
   return (
      <>
         <RatingSection />
         <ProductsSection isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
         <NewsLetter />
      </>
   );
}

export default Home;
