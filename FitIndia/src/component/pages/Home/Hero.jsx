import React from "react";

function Hero() {
  return (
    <>
      <div class="hero-section">
        <div class="hero-image mx-auto ">
          <img src="src/assets/hero.png" alt="Hero Image" />
        </div>
      </div>
      <section>
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-4">Popular Article</h2>
        <p class="text-gray-600 mb-8">Popular articles are selected based on the number of readers</p>
        <div class="mt-8 flex justify-end">
            <a href="#" class="text-green-500 hover:text-green-600">See More Articles →</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div class="bg-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-bold mb-2">The basis of making the correct system design and according to needs.</h3>
                <div class="w-10 h-10 rounded-full bg-gray-400 "></div>
                <p class="ml-2 text-sm text-gray-600 ">Sean Michiels <span class="font-bold">Study Power CEO</span></p>
            </div>
            <div class="bg-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-bold mb-2">Refreshing the legacy dayforce employee profile</h3>
                <p class="text-gray-600 mb-2">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                <div class="flex items-center">
                   
                </div>
            </div>
            <div class="bg-gray-200 rounded-lg p-6">
                <h3 class="text-lg  mb-2">Refreshing the legacy dayforce employee profile</h3>
            </div>
            <div class="bg-gray-200 rounded-lg p-6">
                <h3 class="text-lg  mb-2">Refreshing the legacy dayforce employee profile</h3>
            </div>
            <div class="bg-gray-200 rounded-lg p-6  ">
                <h3 class="text-lg mb-2 ">Refreshing the legacy dayforce employee profile</h3>
            </div>
        </div>
        
    </div>
      </section>
    </>
  );
}

export default Hero;
