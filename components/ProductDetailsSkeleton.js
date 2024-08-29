const ProductDetailSkeleton = () => {
  return (
    <div className="container px-5 py-10 mx-auto animate-pulse">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:h-auto bg-gray-300 rounded h-96"></div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex items-center">
              <span className="mr-3 h-6 bg-gray-300 rounded w-12"></span>
              <div className="relative">
                <div className="rounded border border-gray-300 py-2 bg-gray-300 w-20"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="h-8 bg-gray-300 rounded w-1/4"></div>
            <div className="flex space-x-4">
              <div className="btn bg-gray-300 text-transparent rounded-lg w-24 h-10"></div>
              <div className="btn bg-gray-300 text-transparent rounded-lg w-24 h-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
