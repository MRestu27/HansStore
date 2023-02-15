import React from "react";

const Product = () => {
  return (
    <div className="container">
      <h5 className="text-center mt-9 text-base font-semibold">Hans Store Merch</h5>
      <div className="container flex gap-3 flex-wrap my-10 justify-center gap-y-10">
        {/* product 1 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-0061.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 2 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-0067.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 3 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-0076.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 4 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-0081.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 5 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-0095 (1).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 6 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-0098.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 7 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00100.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 8 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00101.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 9 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00103.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 10 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00106 (1).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 11 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (1).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 12 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (2).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 13 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (3).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 14 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (8).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 15 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (9).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 16 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (24).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 17 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (25).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 18 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/man-rnhs-00110 (27).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 19 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/men-rnhs-0017.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 20 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/men-rnhs-0020.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 21 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/men-rnhs-0035.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 22 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/men-rnhs-0041.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 23 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/men-rnhs-0044.png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* product 24 */}
        <div class="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-500">
          <a href="#" className="">
            <img class="p-8 rounded-t-lg w-60 h-80" src="/src/images/woman-rnhs-0074 (1).png" alt="product image" />
          </a>
          <div class="px-4 pb-4">
            <a href="#">
              <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">T-Shirt Circuit Mandalika</h5>
            </a>
            <div class="flex items-center justify-between mt-2.5 mb-5">
              <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
