import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";

export default async function Home() {
  const sliderData = await GlobalApi.getSliders()
  const categoryList = await GlobalApi.getCategoryList()
  
  return (
    <>
      <div className="p-5 md:p-10 px-12 md:px-16">
    <Slider sliderData={sliderData}/>
    <CategoryList categoryList={categoryList}/>
    </div>
    </>
  );
}
