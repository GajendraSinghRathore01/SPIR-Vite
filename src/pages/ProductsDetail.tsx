import { customer_support } from "../assets";
import Accordian from "../common/Accordian";
import RelatedIndustriesCard from "../common/RelatedindustriesCard";

const ProductsDetail = () => {
  const relatedIndustriesCard = [
    {
      title: "French Fries",
      description:
        "French fries are amoung the highest sale able potato products. This is the most abundant processed potato.",
    },
    {
      title: "Macaroni",
      description: "Macaroni means a product made from a blend of flours.",
    },
    {
      title: "Soya Paneer(Tofu)",
      description: "Soya bean is a leguminous crop and is rich in proteins.",
    },
    {
      title: "Softy Ice Cream ",
      description: "Ice Cream is a popular food product.",
    },
    {
      title: "Ready to Eat Noodles",
      description:
        "NOODLES are a form of pasta that is becoming extremely popular in India even as Continental and Italian delicacy.",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto">
        {/* popular tags */}
        <div className="space-y-3">
          <h6 className="font-semibold text-xl">POPULAR TAG</h6>
          <div className="flex flex-wrap gap-2">
            {[
              "Industrial Documentary",
              "Expert Talk",
              "Industrial Research",
              "Project Report",
              "Supplier / Expert Connect",
              "Government Scheme",
              "Service",
            ]?.map((tags, index) => (
              <div
                key={index}
                className="px-3 py-1 border-[1px] border-[#E4E7E9] hover:border-[#FA8232] hover:text-[#FA8232] hover:bg-[#FFF3EB] cursor-pointer text-sm"
              >
                {tags}
              </div>
            ))}
          </div>
        </div>
        {/* images and videos section */}
        <div className="flex gap-5 mt-7">
          <div className="w-[70%] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9II-t7YF0uY?si=d8zMqX2xyR_4b856"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-[30%] flex flex-col gap-5">
            <div className="bg-[#D49A28] h-52 rounded-lg"></div>
            <div className="bg-[#D49A28] h-52 rounded-lg"></div>
            <div className="bg-[#D49A28] h-52 rounded-lg"></div>
          </div>
        </div>

        {/* other information */}
        <div className="flex gap-5 mt-7">
          {/* left part of page */}
          <div className="w-[70%] space-y-16">
            {/* Industry Overview */}
            <div className="space-y-5">
              <h3 className="font-bold text-3xl">Industry Overview</h3>
              <p className="text-lg">
                French fries are among the highest saleable potato products.
                This is the most abundant processed potato and can be found in
                many varieties such as lattice cut,wedges, curly, batter dipped,
                seasoned, or straight –cut including French Fries on menu is one
                of the easiest ways to increase sales and profits for the
                companies
              </p>
              <p className="text-lg">
                Indian fast food sector is growing at 25-30 % annually due to
                rapid growth of fast food chain both Indian and international.
                Presently, the core food service Indian market is 3600 crores
                and the share of quick service restaurants’ is Rs. 2500 crores.
                Out of the total snacks, potato based products like French
                fries, wedges, products using potato flakes and other Indian
                snacks have about 30 % share in fast food industry,
                approximately 75 crores in value terms.
              </p>
            </div>

            {/* Frequently asked questions */}
            <div className="space-y-5">
              <h3 className="font-bold text-3xl">Frequently Asked Questions</h3>
              <Accordian
                question="Suspendisse ultrices pharetra libero sed interdum."
                answer="anwer for above question"
              />
            </div>

            {/* Related Industries */}
            <div className="space-y-5">
              <h3 className="font-bold text-3xl">Related Industries</h3>

              <div className="space-y-3">
                {relatedIndustriesCard?.map((data, index) => (
                  <RelatedIndustriesCard
                    key={index}
                    title={data.title}
                    description={data.description}
                  />
                ))}
              </div>

              <button className="border-[1px] cursor-pointer hover:bg-[#FFF3EB] border-[#FA8232] text-[#FA8232] py-2 px-4">
                VIEW MORE INDUSTRIES
              </button>
            </div>
          </div>

          {/* right part of page */}
          <div className="w-[30%] space-y-5">
            <div className="space-y-5 border-[1px] border-[#E4E7E9] p-5 rounded-lg">
              <button className="text-xl cursor-pointer bg-[#FA8232] text-white rounded-lg py-2 w-full">
                Subscribe Now
              </button>
              <button className="text-xl cursor-pointer border-2 font-semibold rounded-lg py-2 w-full">
                Enquiry Now
              </button>
            </div>
            <div className="border-[1px] border-[#E4E7E9] p-5 rounded-lg flex flex-col justify-center items-center gap-6">
              <h4 className="font-bold text-3xl">Customer Support</h4>
              <p className="text-xl">
                We are available 24X7 for grievance redressal
              </p>
              <img src={customer_support} alt="" className="mt-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sectors */}
      <div className="my-16">
        <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
          <h3 className="font-semibold text-xl">Other Sectors</h3>
          <div className="flex justify-between items-center w-[90%] mt-5">
            <ul className="list-disc space-y-4">
              {[
                "agri food processing",
                "Cement and allied products",
                "Plastics and allied products",
                "Waste Management and Recycling Model",
                "Service Industry",
                "Coir Based Industries",
              ]?.map((data, index) => (
                <li key={index} className="hover:text-[#FA8232] cursor-pointer">
                  {data}
                </li>
              ))}
            </ul>
            <ul className="list-disc space-y-4">
              {[
                "Horticulture-Organic Farming",
                "Animal Husbandry",
                "Dairy and milk products",
                "Electronic and electrical equipment",
                "Textile and Apparel Industry",
                "Surgical & Medical Industries",
              ]?.map((data, index) => (
                <li key={index} className="hover:text-[#FA8232] cursor-pointer">
                  {data}
                </li>
              ))}
            </ul>
            <ul className="list-disc space-y-4">
              {[
                "Small Business Model",
                "Paper & Allied Products",
                "Cold Chain Business Solutions",
                "Chemical / Polymer and Mineral Based",
                "Forest Based Industry",
                "Bakery Industries",
              ]?.map((data, index) => (
                <li key={index} className="hover:text-[#FA8232] cursor-pointer">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
