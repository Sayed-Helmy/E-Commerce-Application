import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import ShopProducts from "./shopProducts";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { productsActions } from "../../store/productsSlice";
import PriceFilter from "./priceFilter";

const filters = [
  {
    id: "category",
    name: "Category",
    opened: true,
    options: [],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "Beats", label: "Beats", checked: false },
      { value: "Sony", label: "Sony", checked: false },
      { value: "baseus", label: "Baseus", checked: false },
      { value: "apple", label: "Apple", checked: false },
      { value: "samsung", label: "Samsung", checked: false },
      { value: "lenovo", label: "Lenovo", checked: false },
    ],
  },
];

export default function ShopFilter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const categories = useSelector((state) => state.products.categories);
  const [categoryArray, setCatArray] = useState([]);
  const dispatch = useDispatch();
  filters[0].options = categories.map((item) => ({
    value: item._id,
    label: item.name,
    checked: false,
  }));
  let catArray = [];
  const checkedHandler = async (e, section) => {
    let url = `http://localhost:5000/api/v1/products`;
    if (e.target.checked) {
      catArray = [...catArray, e.target.value];
      setCatArray((prev) => [...prev, e.target.value]);
    } else {
      catArray = catArray.filter((i) => i !== e.target.value);
      setCatArray((prev) => prev.filter((i) => i !== e.target.value));
    }
    if (catArray.length > 0) url = `http://localhost:5000/api/v1/products?${section.id}=${catArray.join(",")}`;
    const result = await axios.get(url, {
      withCredentials: true,
    });
    dispatch(productsActions.setFiltered(result.data));
  };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full">
              <div className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button" className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md" onClick={() => setMobileFiltersOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Filters */}
                <form className="mt-4 border-t text-black/70">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="px-4 py-6 border-t border-gray-200">
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -mx-2 -my-3">
                            <Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="flex items-center ml-6">{open ? <MinusSmIcon className="w-5 h-5" aria-hidden="true" /> : <PlusSmIcon className="w-5 h-5" aria-hidden="true" />}</span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input id={`filter-mobile-${section.id}-${optionIdx}`} name={`${section.id}[]`} defaultValue={option.value} type="checkbox" defaultChecked={option.checked} className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                  <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="flex-1 min-w-0 ml-3 text-gray-500">
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200 ">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Shop</h1>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="hidden lg:block">
                {categories &&
                  filters.map((section) => (
                    <Disclosure defaultOpen={section.opened} as="div" key={section.id} className="py-6 border-b border-gray-200">
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -my-3">
                            <Disclosure.Button className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="flex items-center ml-6">{open ? <MinusSmIcon className="w-5 h-5" aria-hidden="true" /> : <PlusSmIcon className="w-5 h-5" aria-hidden="true" />}</span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    onChange={(e) => checkedHandler(e, section)}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                  />
                                  <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600 cursor-pointer">
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                <PriceFilter min={0} max={1000} categories={categoryArray} />
              </div>
              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content 
                <div className="border-4 border-gray-200 border-dashed rounded-lg h-96 lg:h-full" /> */}
                <ShopProducts />
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
